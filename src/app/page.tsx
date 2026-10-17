import Hero from "@/components/Hero";
import About from "@/components/About";
import SkillsMarquee from "@/components/SkillsMarquee";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

// Everything lives on one page, stacked: hero, about, skills (with the logo marquee above), projects.
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <SkillsMarquee />
      <Skills />
      <Projects />
    </>
  );
}
