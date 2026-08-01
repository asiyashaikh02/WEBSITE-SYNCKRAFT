import { Request, Response, NextFunction } from 'express';
import fs from 'fs/promises';
import path from 'path';
import { logger } from '../utils/logger';
import { DbService } from '../services/dbService';

const UPLOADS_DIR = path.join(process.cwd(), 'public', 'uploads');

interface MediaRecord {
  id?: string;
  filename: string;
  url: string;
  sizeBytes: number;
  mimeType: string;
  folder?: string;
  createdAt?: string;
}

export const ensureUploadsDir = async () => {
  try {
    await fs.mkdir(UPLOADS_DIR, { recursive: true });
  } catch (err) {
    logger.error('Failed to create uploads directory', err);
  }
};

export const listMedia = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    await ensureUploadsDir();
    const search = req.query.search?.toString().toLowerCase();
    const folder = req.query.folder?.toString();

    let items = await DbService.read<MediaRecord>('media');

    if (search) {
      items = items.filter((m) => m.filename.toLowerCase().includes(search));
    }
    if (folder) {
      items = items.filter((m) => m.folder === folder);
    }

    res.status(200).json({
      success: true,
      data: items,
    });
  } catch (error) {
    next(error);
  }
};

export const uploadMedia = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    await ensureUploadsDir();
    const { filename, contentType, base64Data, folder } = req.body;

    if (!filename || !base64Data) {
      res.status(400).json({
        success: false,
        message: 'Filename and base64Data are required.',
      });
      return;
    }

    // Clean filename to prevent path traversal
    const safeFilename = path.basename(filename).replace(/[^a-zA-Z0-9.\-_]/g, '_');
    const targetPath = path.join(UPLOADS_DIR, safeFilename);

    // Convert base64 data to buffer
    const buffer = Buffer.from(base64Data, 'base64');

    // Write file to disk
    await fs.writeFile(targetPath, buffer);

    const mediaRecord: MediaRecord = {
      filename: safeFilename,
      url: `/uploads/${safeFilename}`,
      sizeBytes: buffer.length,
      mimeType: contentType || 'application/octet-stream',
      folder: folder || 'general',
      createdAt: new Date().toISOString(),
    };

    const savedMedia = await DbService.insert('media', mediaRecord);
    logger.info(`Media uploaded by admin: ${safeFilename} (Size: ${buffer.length} bytes)`);

    res.status(201).json({
      success: true,
      message: 'Media uploaded successfully.',
      data: savedMedia,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteMedia = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    const items = await DbService.read<MediaRecord>('media');
    const idx = items.findIndex((m) => m.id === id);

    if (idx === -1) {
      res.status(404).json({
        success: false,
        message: 'Media file not found in database.',
      });
      return;
    }

    const record = items[idx];
    const filePath = path.join(UPLOADS_DIR, record.filename);

    // Try to delete physical file
    try {
      await fs.unlink(filePath);
    } catch (err: any) {
      logger.warn(`Failed to delete physical file: ${filePath}. It may have been already deleted.`, err);
    }

    // Remove database record
    items.splice(idx, 1);
    await DbService.write('media', items);

    logger.info(`Media deleted by admin: ${record.filename}`);

    res.status(200).json({
      success: true,
      message: 'Media deleted successfully.',
    });
  } catch (error) {
    next(error);
  }
};
