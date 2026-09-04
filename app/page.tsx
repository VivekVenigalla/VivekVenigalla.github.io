import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProjectsFan from "@/components/ProjectsFan";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Skills from "@/components/Skills";
import Interests from "@/components/Interests";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <ProjectsFan />
        <ExperienceTimeline />
        <Skills />
        <Interests />
        <Contact />
      </main>
    </>
  );
}
