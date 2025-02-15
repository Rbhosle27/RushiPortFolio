import { Link } from "wouter";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <Link href="/">
            <a className="text-xl font-bold">
              <span className="text-[#4285F4]">R</span>
              <span className="text-[#DB4437]">u</span>
              <span className="text-[#F4B400]">s</span>
              <span className="text-[#4285F4]">h</span>
              <span className="text-[#0F9D58]">i</span>
              <span className="text-[#DB4437]">k</span>
              <span className="text-[#4285F4]">e</span>
              <span className="text-[#F4B400]">s</span>
              <span className="text-[#0F9D58]">h</span>
            </a>
          </Link>
          <div className="flex items-center gap-6">
            {["About", "Education", "Skills", "Projects", "Certifications"].map((section) => (
              <a
                key={section}
                href={`#${section.toLowerCase()}`}
                className="text-sm font-medium hover:text-[#4285F4] transition"
              >
                {section}
              </a>
            ))}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}