import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="lg:pl-[240px]">
        <main className="flex-1">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Blog />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
