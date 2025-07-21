import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

let db;

export async function setupDatabase() {
    db = await open({
        filename: './db/toolbox.db',
        driver: sqlite3.Database
    });

    await db.exec(`
        CREATE TABLE IF NOT EXISTS json_history (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            original_json TEXT NOT NULL,
            formatted_json TEXT NOT NULL,
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
        );
    `);
    console.log('Database setup complete.');
}

export async function addJsonHistory(original_json, formatted_json) {
    if (!db) await setupDatabase();
    return await db.run(
        'INSERT INTO json_history (original_json, formatted_json) VALUES (?, ?)',
        original_json,
        formatted_json
    );
}

export async function getJsonHistory() {
    if (!db) await setupDatabase();
    return await db.all('SELECT * FROM json_history ORDER BY timestamp DESC LIMIT 50');
}