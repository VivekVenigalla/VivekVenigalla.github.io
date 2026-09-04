import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProjectsCarousel from "@/components/ProjectsCarousel";
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
        <ProjectsCarousel />
        <ExperienceTimeline />
        <Skills />
        <Interests />
        <Contact />
      </main>
    </>
  );
}
