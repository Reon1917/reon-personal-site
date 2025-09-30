import path from "path";
import { readFile } from "fs/promises";
import { existsSync } from "fs";

let cached;

export async function getPortfolioData() {
  if (cached) {
    return cached;
  }

  const candidates = [
    path.join(process.cwd(), "app", "data", "my_data.json"),
    path.join(process.cwd(), "data", "my_data.json"),
    path.join(process.cwd(), "..", "data", "my_data.json"),
  ];

  const filePath = candidates.find((candidate) => existsSync(candidate));

  if (!filePath) {
    throw new Error(
      "Unable to locate app/data/my_data.json. Ensure the data directory sits inside the Next.js app."
    );
  }

  const file = await readFile(filePath, "utf-8");
  cached = JSON.parse(file);

  return cached;
}
