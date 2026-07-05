import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Portfolio from "@/components/Portfolio";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Preloader />
      <Navbar />
      <Hero />
      <AboutMe />

      {/* Секция с GitHub */}
      <Portfolio />

      <Experience />

      {/* Секция связи */}
      <Contact />
    </main>
  );
}
