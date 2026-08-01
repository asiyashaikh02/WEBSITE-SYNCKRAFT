import { Request, Response, NextFunction } from 'express';
import { DbService } from '../services/dbService';
import { hashPassword, verifyPassword, signJwt } from '../utils/crypto';
import { logger } from '../utils/logger';
import { AuthenticatedRequest } from '../middleware/auth';

interface UserRecord {
  id?: string;
  name: string;
  email: string;
  passwordHash: string;
  role: 'Super Admin' | 'Admin' | 'Sales' | 'HR' | 'Content Manager' | 'Marketing';
  loginAttempts?: number;
  lockUntil?: number;
  resetToken?: string;
  resetTokenExpiry?: number;
  createdAt?: string;
}

const MAX_LOGIN_ATTEMPTS = 5;
const LOCK_TIME = 15 * 60 * 1000; // 15 minutes lock

export const handleLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { email, password, rememberMe } = req.body;

    if (!email || !password) {
      res.status(400).json({
        success: false,
        message: 'Email and password are required.',
      });
      return;
    }

    const cleanEmail = email.trim().toLowerCase();
    const user = await DbService.findOne<UserRecord>('users', (u) => u.email === cleanEmail);

    if (!user) {
      res.status(401).json({
        success: false,
        message: 'Invalid credentials.',
      });
      return;
    }

    // Check account lockout
    const currentTime = Date.now();
    if (user.lockUntil && user.lockUntil > currentTime) {
      const waitTime = Math.ceil((user.lockUntil - currentTime) / 60000);
      res.status(423).json({
        success: false,
        message: `Account is temporarily locked. Try again in ${waitTime} minutes.`,
      });
      return;
    }

    // Verify Password
    const isMatch = verifyPassword(password, user.passwordHash);

    const users = await DbService.read<UserRecord>('users');
    const userIdx = users.findIndex((u) => u.id === user.id);

    if (!isMatch) {
      // Increment login attempts
      const attempts = (user.loginAttempts || 0) + 1;
      let lockUntil = user.lockUntil;

      if (attempts >= MAX_LOGIN_ATTEMPTS) {
        lockUntil = currentTime + LOCK_TIME;
        logger.warn(`Account locked due to consecutive failures: ${cleanEmail}`);
      }

      users[userIdx] = {
        ...user,
        loginAttempts: attempts,
        lockUntil,
      };
      await DbService.write('users', users);

      res.status(401).json({
        success: false,
        message: 'Invalid credentials.',
      });
      return;
    }

    // Reset login attempts on success
    users[userIdx] = {
      ...user,
      loginAttempts: 0,
      lockUntil: undefined,
    };
    await DbService.write('users', users);

    // Generate JWT Token
    // Default expiration: 10 hours, if rememberMe: 30 days
    const expiresIn = rememberMe ? 30 * 24 * 3600 : 10 * 3600;
    const token = signJwt(
      {
        id: user.id,
        email: user.email,
        role: user.role,
        name: user.name,
      },
      expiresIn
    );

    logger.info(`User logged in: ${cleanEmail} (${user.role})`);

    res.status(200).json({
      success: true,
      message: 'Login successful.',
      data: {
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

export const handleLogout = async (
  req: Request,
  res: Response
): Promise<void> => {
  // Since JWT is stateless, logout on API side is typically a client-side clearance,
  // but we can log the action and return standard confirmation.
  res.status(200).json({
    success: true,
    message: 'Logout successful.',
  });
};

export const handleForgotPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { email } = req.body;
    if (!email) {
      res.status(400).json({ success: false, message: 'Email is required.' });
      return;
    }

    const cleanEmail = email.trim().toLowerCase();
    const user = await DbService.findOne<UserRecord>('users', (u) => u.email === cleanEmail);

    if (!user) {
      // Return 200 for security reasons (prevent user enumeration)
      res.status(200).json({
        success: true,
        message: 'If the email exists, a password reset link has been generated.',
      });
      return;
    }

    // Generate a reset token
    const resetToken = crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
    const resetTokenExpiry = Date.now() + 3600000; // 1 hour validity

    const users = await DbService.read<UserRecord>('users');
    const userIdx = users.findIndex((u) => u.id === user.id);
    users[userIdx] = {
      ...user,
      resetToken,
      resetTokenExpiry,
    };
    await DbService.write('users', users);

    logger.info(`Password reset token generated for user: ${cleanEmail}`);
    
    // In a real email server, we would send this link:
    // https://synckraft.in/#admin?resetToken=${resetToken}
    // We will log it and return it in response for simulation/demo validation.
    res.status(200).json({
      success: true,
      message: 'Password reset token generated.',
      data: {
        resetToken,
        resetLink: `http://localhost:3000/#admin?resetToken=${resetToken}`,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const handleResetPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { token, newPassword } = req.body;

    if (!token || !newPassword || newPassword.length < 8) {
      res.status(400).json({
        success: false,
        message: 'Valid token and new password (min 8 chars) are required.',
      });
      return;
    }

    const user = await DbService.findOne<UserRecord>(
      'users',
      (u) => u.resetToken === token && !!u.resetTokenExpiry && u.resetTokenExpiry > Date.now()
    );

    if (!user) {
      res.status(400).json({
        success: false,
        message: 'Invalid or expired reset token.',
      });
      return;
    }

    const users = await DbService.read<UserRecord>('users');
    const userIdx = users.findIndex((u) => u.id === user.id);
    
    users[userIdx] = {
      ...user,
      passwordHash: hashPassword(newPassword),
      resetToken: undefined,
      resetTokenExpiry: undefined,
      loginAttempts: 0,
      lockUntil: undefined,
    };
    await DbService.write('users', users);

    logger.info(`Password successfully reset for: ${user.email}`);

    res.status(200).json({
      success: true,
      message: 'Password reset successful. You can now login with your new password.',
    });
  } catch (error) {
    next(error);
  }
};

export const handleChangePassword = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { currentPassword, newPassword } = req.body;
    if (!currentPassword || !newPassword || newPassword.length < 8) {
      res.status(400).json({
        success: false,
        message: 'Current password and new password (min 8 chars) are required.',
      });
      return;
    }

    const user = await DbService.findOne<UserRecord>('users', (u) => u.id === req.user?.id);
    if (!user) {
      res.status(404).json({ success: false, message: 'User not found.' });
      return;
    }

    if (!verifyPassword(currentPassword, user.passwordHash)) {
      res.status(400).json({ success: false, message: 'Incorrect current password.' });
      return;
    }

    const users = await DbService.read<UserRecord>('users');
    const userIdx = users.findIndex((u) => u.id === user.id);
    
    users[userIdx] = {
      ...user,
      passwordHash: hashPassword(newPassword),
    };
    await DbService.write('users', users);

    logger.info(`Password changed by user: ${user.email}`);

    res.status(200).json({
      success: true,
      message: 'Password changed successfully.',
    });
  } catch (error) {
    next(error);
  }
};

export const checkSession = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  res.status(200).json({
    success: true,
    message: 'Session is active.',
    data: {
      user: req.user,
    },
  });
};

/**
 * Seed a default Super Admin user if the collection is empty.
 */
export const seedDefaultAdmin = async (): Promise<void> => {
  const users = await DbService.read<UserRecord>('users');
  if (users.length === 0) {
    const defaultAdmin: UserRecord = {
      name: 'Synckraft Super Admin',
      email: 'admin@synckraft.in',
      passwordHash: hashPassword('SynckraftPassword2026!'),
      role: 'Super Admin',
      createdAt: new Date().toISOString(),
    };
    await DbService.insert('users', defaultAdmin);
    logger.info('DATABASE SEED: Default Super Admin user created (admin@synckraft.in / SynckraftPassword2026!)');
  }
};
