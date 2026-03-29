import MinimalSite from "./components/minimal-site";
import { getPortfolioData } from "../lib/getPortfolioData";

export default async function Home() {
  const data = await getPortfolioData();
  return (
    <main>
      <MinimalSite data={data} />
    </main>
  );
}
