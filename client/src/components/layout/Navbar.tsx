import { Link } from "wouter";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <Link href="/">
            <a className="text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Rushikesh Bhosle
            </a>
          </Link>
          <div className="flex gap-6">
            {["About", "Education", "Skills", "Projects", "Certifications"].map((section) => (
              <a
                key={section}
                href={`#${section.toLowerCase()}`}
                className="text-sm font-medium hover:text-primary transition"
              >
                {section}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
