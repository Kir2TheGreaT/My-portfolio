import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutMe />
      <Experience />
      {/* Сюда добавишь компоненты Инвентаря (Портфолио) и Контактов */}
    </main>
  );
}
