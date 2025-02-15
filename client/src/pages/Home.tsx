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
          <div className="bg-white rounded-lg shadow-sm p-8">
            <About />
          </div>
          <div className="bg-[#F8F9FA] rounded-lg shadow-sm p-8">
            <Education />
          </div>
          <div className="bg-white rounded-lg shadow-sm p-8">
            <Skills />
          </div>
          <div className="bg-[#F8F9FA] rounded-lg shadow-sm p-8">
            <Projects />
          </div>
          <div className="bg-white rounded-lg shadow-sm p-8">
            <Certifications />
          </div>
        </div>
      </main>
    </div>
  );
}