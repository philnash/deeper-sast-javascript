import { stat } from "node:fs/promises";
import { createReadStream } from "node:fs";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

import { join } from "node:path";

export async function getImage(req, res) {
  const filename = String(req.query.filename);
  if (filename) {
    const file = join(__dirname, "..", "images", filename);
    try {
      const fsStat = await stat(file);
      if (fsStat.isFile()) {
        createReadStream(file).pipe(res);
      } else {
        res.status(404).json({ error: "file not found" });
      }
    } catch (error) {
      res.status(404).json({ error: "file not found" });
    }
  } else {
    res.status(400).json({ error: "filename is required" });
  }
}
