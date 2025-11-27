import path from "path";
import { readFile } from "fs/promises";
import { existsSync } from "fs";

export async function getPortfolioData() {
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
  return JSON.parse(file);
}
