import express from "express";
import type { Request, Response } from "express";
import dotenv from "dotenv";

const app = express();
const PORT = 5000;

dotenv.config();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from TypeScript backend!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
