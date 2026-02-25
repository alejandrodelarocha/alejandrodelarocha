import express from "express";
import cors from "cors";
import { getDb, persist } from "./db.js";

const app = express();
app.use(cors());
app.use(express.json());

// GET /api/config — get current (latest) thresholds
app.get("/api/config", async (req, res) => {
  const db = await getDb();
  const rows = db.exec(
    "SELECT * FROM resolution_config ORDER BY id DESC LIMIT 1"
  );
  if (!rows.length) return res.status(404).json({ error: "NO_CONFIG" });

  const cols = rows[0].columns;
  const vals = rows[0].values[0];
  const config = Object.fromEntries(cols.map((c, i) => [c, vals[i]]));
  res.json(config);
});

// GET /api/config/history — get all config versions (append-only log)
app.get("/api/config/history", async (req, res) => {
  const db = await getDb();
  const rows = db.exec("SELECT * FROM resolution_config ORDER BY id ASC");
  if (!rows.length) return res.json([]);

  const cols = rows[0].columns;
  const configs = rows[0].values.map((vals) =>
    Object.fromEntries(cols.map((c, i) => [c, vals[i]]))
  );
  res.json(configs);
});

// POST /api/config — create new config entry (append-only, never edits previous)
app.post("/api/config", async (req, res) => {
  const db = await getDb();
  const { admissibility_threshold, ambiguity_delta, created_by } = req.body;

  if (admissibility_threshold == null || ambiguity_delta == null) {
    return res.status(400).json({
      error: "MISSING_FIELDS",
      message: "admissibility_threshold and ambiguity_delta are required",
    });
  }

  if (admissibility_threshold < 0 || admissibility_threshold > 1) {
    return res.status(400).json({
      error: "INVALID_THRESHOLD",
      message: "admissibility_threshold must be between 0 and 1",
    });
  }

  if (ambiguity_delta < 0 || ambiguity_delta > 1) {
    return res.status(400).json({
      error: "INVALID_DELTA",
      message: "ambiguity_delta must be between 0 and 1",
    });
  }

  // Generate next threshold_version
  const last = db.exec(
    "SELECT threshold_version FROM resolution_config ORDER BY id DESC LIMIT 1"
  );
  let nextVersion = "t-001";
  if (last.length && last[0].values.length) {
    const lastV = last[0].values[0][0];
    const num = parseInt(lastV.split("-")[1], 10);
    nextVersion = `t-${String(num + 1).padStart(3, "0")}`;
  }

  db.run(
    `INSERT INTO resolution_config (threshold_version, admissibility_threshold, ambiguity_delta, created_by)
     VALUES (?, ?, ?, ?)`,
    [nextVersion, admissibility_threshold, ambiguity_delta, created_by || "api"]
  );
  persist();

  const row = db.exec(
    "SELECT * FROM resolution_config WHERE threshold_version = ?",
    [nextVersion]
  );
  const cols = row[0].columns;
  const vals = row[0].values[0];
  const config = Object.fromEntries(cols.map((c, i) => [c, vals[i]]));

  res.status(201).json(config);
});

const PORT = process.env.PORT || 3334;
app.listen(PORT, () => {
  console.log(`Sapey API running on http://localhost:${PORT}`);
});
