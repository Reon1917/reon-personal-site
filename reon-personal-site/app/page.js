import Hero from "./components/hero";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contacts from "./components/contacts";
import Footer from "./components/footer";
import { getPortfolioData } from "../lib/getPortfolioData";

export default async function Home() {
  const data = await getPortfolioData();

  const {
    personal = {},
    education = null,
    coursework = [],
    projects = [],
    contacts = {},
    socials = {},
    skills = {},
  } = data ?? {};

  return (
    <main className="flex flex-col">
      <Hero
        personal={personal}
        education={education}
        coursework={coursework}
        contacts={contacts}
      />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Contacts contacts={contacts} socials={socials} />
      <Footer name={personal?.name} />
    </main>
  );
}
