import initSqlJs from "sql.js";
import { readFileSync, writeFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DB_PATH = join(__dirname, "sapey.db");

let db;

export async function getDb() {
  if (db) return db;

  const SQL = await initSqlJs();

  if (existsSync(DB_PATH)) {
    const buffer = readFileSync(DB_PATH);
    db = new SQL.Database(buffer);
  } else {
    db = new SQL.Database();
  }

  db.run(`
    CREATE TABLE IF NOT EXISTS resolution_config (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      threshold_version TEXT NOT NULL UNIQUE,
      admissibility_threshold REAL NOT NULL DEFAULT 0.85,
      ambiguity_delta REAL NOT NULL DEFAULT 0.10,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      created_by TEXT NOT NULL DEFAULT 'system'
    )
  `);

  // Seed default config if empty
  const count = db.exec("SELECT COUNT(*) FROM resolution_config")[0].values[0][0];
  if (count === 0) {
    db.run(
      `INSERT INTO resolution_config (threshold_version, admissibility_threshold, ambiguity_delta, created_by)
       VALUES ('t-001', 0.85, 0.10, 'system')`
    );
    persist();
  }

  return db;
}

export function persist() {
  if (!db) return;
  const data = db.export();
  writeFileSync(DB_PATH, Buffer.from(data));
}
