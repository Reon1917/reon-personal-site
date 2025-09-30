import path from "path";
import { readFile } from "fs/promises";

let cached;

export async function getPortfolioData() {
  if (cached) {
    return cached;
  }

  const filePath = path.join(process.cwd(), "..", "data", "my_data.json");
  const file = await readFile(filePath, "utf-8");
  cached = JSON.parse(file);

  return cached;
}
