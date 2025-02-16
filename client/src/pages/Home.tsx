import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/sections/Certifications";
import Navbar from "@/components/layout/Navbar";
import { useTheme } from "@/components/theme-provider";
import FooterPage from "@/components/sections/Footer";

export default function Home() {
  const { theme } = useTheme();
  return (
    <div className="min-h-screen bg-[#000000]">
      <Navbar />
      <main
        className="container mx-auto px-4 py-20"
        style={{ backgroundColor: theme == "dark" ? "black" : "white",scrollBehavior:"smooth" }}
      >
        <div
          className="space-y-32"
          style={{ backgroundColor: theme == "dark" ? "black" : "white" }}
        >
          <div
            className="bg-white rounded-lg shadow-sm p-8"
            style={{ backgroundColor: theme == "dark" ? "black" : "white" }}
          >
            <About />
          </div>
          <div
            className="bg-[#F8F9FA] rounded-lg shadow-sm p-8"
            style={{ backgroundColor: theme == "dark" ? "black" : "white" }}
          >
            <Education />
          </div>
          
          <div
            className="bg-[#F8F9FA] rounded-lg shadow-sm p-8"
            style={{ backgroundColor: theme == "dark" ? "black" : "white" }}
          >
            <Projects />
          </div>
          <div
            className="bg-white rounded-lg shadow-sm p-8"
            style={{ backgroundColor: theme == "dark" ? "black" : "white" }}
          >
            <Certifications />
          </div>
          <div
            className="bg-white rounded-lg shadow-sm p-8"
            style={{ backgroundColor: theme == "dark" ? "black" : "white" }}
          >
            <Skills />
          </div>

        </div>

      </main>
      <FooterPage/>

    </div>
  );
}
