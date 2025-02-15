import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/sections/Certifications";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFBFC]">
      <Navbar />
      <main className="container mx-auto px-4 py-20">
        <div className="space-y-32">
          <div className="bg-white/50 backdrop-blur-sm rounded-lg shadow-sm p-8 hover:bg-white/80 transition-colors">
            <About />
          </div>
          <div className="bg-[#F8F9FA]/50 backdrop-blur-sm rounded-lg shadow-sm p-8 hover:bg-[#F8F9FA]/80 transition-colors">
            <Education />
          </div>
          <div className="bg-white/50 backdrop-blur-sm rounded-lg shadow-sm p-8 hover:bg-white/80 transition-colors">
            <Skills />
          </div>
          <div className="bg-[#F8F9FA]/50 backdrop-blur-sm rounded-lg shadow-sm p-8 hover:bg-[#F8F9FA]/80 transition-colors">
            <Projects />
          </div>
          <div className="bg-white/50 backdrop-blur-sm rounded-lg shadow-sm p-8 hover:bg-white/80 transition-colors">
            <Certifications />
          </div>
        </div>
      </main>
    </div>
  );
}