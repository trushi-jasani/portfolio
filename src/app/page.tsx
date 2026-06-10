import Hero from "@/components/ui/Hero";
import About from "@/components/ui/About";
import Projects from "@/components/ui/Projects";
import Skills from "@/components/ui/Skills";
import Hobbies from "@/components/ui/Hobbies";
import Contact from "@/components/ui/Contact";
import Certifications from "@/components/ui/Certifications";

export default function HomePage() {
  return (
    <>
      {/* ── Ambient background glow blobs ────────────────────────────── */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Top-right large rose blob */}
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-rose-400/8 blur-3xl animate-float-slow" />
        {/* Mid-left pink blob */}
        <div className="absolute top-1/3 -left-48 w-[500px] h-[500px] rounded-full bg-pink-300/6 blur-3xl animate-float-slower" />
        {/* Bottom-center subtle rose */}
        <div className="absolute -bottom-24 left-1/3 w-[400px] h-[400px] rounded-full bg-rose-300/5 blur-3xl animate-float-slow" style={{ animationDelay: "4s" }} />
        {/* Small accent blob center-right */}
        <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full bg-rose-200/8 blur-2xl animate-float-slower" style={{ animationDelay: "2s" }} />
      </div>

      {/* ── Page sections ─────────────────────────────────────────────── */}
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Certifications />
      <Hobbies />
      <Contact />
    </>
  );
}