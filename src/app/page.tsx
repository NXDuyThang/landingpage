import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-zinc-950 flex flex-col overflow-hidden selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Dynamic ambient lights spanning the background */}
      <div 
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-cyan-500/5 to-transparent rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-gradient-to-b from-emerald-500/5 to-transparent rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Structured Components */}
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
