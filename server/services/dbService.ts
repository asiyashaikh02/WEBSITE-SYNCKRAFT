import fs from 'fs/promises';
import path from 'path';
import { logger } from '../utils/logger';

const DB_DIR = path.join(process.cwd(), 'data-store');

// Simple in-memory queue to lock collections during writes to prevent race conditions
const writeLocks: Record<string, Promise<void>> = {};

export class DbService {
  private static async ensureDbDir() {
    try {
      await fs.mkdir(DB_DIR, { recursive: true });
    } catch (err) {
      logger.error('Failed to create data-store directory', err);
    }
  }

  private static getCollectionPath(collection: string): string {
    return path.join(DB_DIR, `${collection}.json`);
  }

  private static getTempCollectionPath(collection: string): string {
    return path.join(DB_DIR, `${collection}.tmp.json`);
  }

  /**
   * Read all items from a collection.
   */
  static async read<T>(collection: string): Promise<T[]> {
    await this.ensureDbDir();
    const filePath = this.getCollectionPath(collection);

    try {
      const data = await fs.readFile(filePath, 'utf-8');
      return JSON.parse(data) as T[];
    } catch (err: any) {
      if (err.code === 'ENOENT') {
        // Return empty array if file does not exist yet
        return [];
      }
      logger.error(`Error reading collection: ${collection}`, err);
      throw err;
    }
  }

  /**
   * Save items to a collection using atomic write.
   */
  static async write<T>(collection: string, data: T[]): Promise<void> {
    await this.ensureDbDir();
    const filePath = this.getCollectionPath(collection);
    const tempPath = this.getTempCollectionPath(collection);

    // Acquire write lock for this collection
    const currentLock = writeLocks[collection] || Promise.resolve();
    
    const nextLock = currentLock.then(async () => {
      try {
        const jsonString = JSON.stringify(data, null, 2);
        // Write to temp file first
        await fs.writeFile(tempPath, jsonString, 'utf-8');
        // Atomically rename temp file to target file
        await fs.rename(tempPath, filePath);
      } catch (err) {
        logger.error(`Atomic write failed for collection: ${collection}`, err);
        // Clean up temp file if it exists
        try {
          await fs.unlink(tempPath);
        } catch {}
        throw err;
      }
    });

    writeLocks[collection] = nextLock.catch(() => {});
    return nextLock;
  }

  /**
   * Insert a single item into a collection.
   */
  static async insert<T extends { id?: string; createdAt?: string }>(
    collection: string,
    item: T
  ): Promise<T> {
    const items = await this.read<T>(collection);
    
    const newItem = {
      id: item.id || Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
      createdAt: item.createdAt || new Date().toISOString(),
      ...item,
    };

    items.push(newItem);
    await this.write(collection, items);
    return newItem;
  }

  /**
   * Find items matching a query.
   */
  static async find<T>(
    collection: string,
    predicate: (item: T) => boolean
  ): Promise<T[]> {
    const items = await this.read<T>(collection);
    return items.filter(predicate);
  }

  /**
   * Find a single item matching a query.
   */
  static async findOne<T>(
    collection: string,
    predicate: (item: T) => boolean
  ): Promise<T | null> {
    const items = await this.read<T>(collection);
    return items.find(predicate) || null;
  }
}
