import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Preloader />
      <Navbar />
      <Hero />
      <AboutMe />
      <Experience />
    </main>
  );
}
