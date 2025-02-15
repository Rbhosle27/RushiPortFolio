import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useEffect } from "react";

// Import data from existing components
const education = [
  {
    degree: "Masters of Computer Application",
    year: "2021 - 2023",
    institution: "Institute of Industrial and Computer Management and Research, Nigdi Pune",
  },
  {
    degree: "Bachelors of Computer Application",
    year: "2018 - 2021",
    institution: "MGM College of CS & IT Nanded",
  },
  {
    degree: "HSC",
    year: "2018",
    institution: "Maharashtra State Board",
  },
];

const skills = {
  "Programming Language": [
    { name: "Core-Java", value: 85 },
  ],
  "Web Designing": [
    { name: "HTML5", value: 90 },
    { name: "CSS3", value: 85 },
    { name: "Bootstrap", value: 80 },
  ],
  "Database": [
    { name: "SQL", value: 85 },
    { name: "DBMS", value: 80 },
  ],
  "Testing": [
    { name: "Selenium WebDriver", value: 90 },
    { name: "Manual Testing", value: 85 },
    { name: "TestNG", value: 80 },
  ],
  "Tools": [
    { name: "Eclipse", value: 85 },
    { name: "JIRA", value: 80 },
    { name: "GitHub", value: 85 },
  ],
};

const projects = [
  {
    name: "VTIGER CRM",
    subtitle: "Automation Testing",
    description: "VTiger CRM tracks all contacts and related opportunities, activities, and other details from a common place. Designed test scripts for Contact and Organization modules using Selenium with Java. Executed test scripts using TestNG and Jenkins.",
    technologies: ["Java", "Selenium", "TestNG", "Jenkins"],
  },
];

export default function Resume() {
  // Add print-specific styles when component mounts
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @media print {
        @page {
          margin: 20mm;
          size: A4;
        }
        body {
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }
        nav, .no-print {
          display: none !important;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-8 max-w-4xl">
        <div className="flex justify-end mb-8 no-print">
          <Button onClick={handlePrint} variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">Rushikesh Bhosle</h1>
          <h2 className="text-xl text-primary mt-2">RPA Developer</h2>
          <div className="mt-2 text-muted-foreground">
            <p>Email: bhoslerushikesh27@gmail.com</p>
            <p>Location: Pune</p>
          </div>
        </div>

        {/* Summary */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-4">Professional Summary</h3>
            <p className="text-muted-foreground">
              Experienced RPA Developer with a strong foundation in automation testing
              and web development. Passionate about creating efficient automated solutions
              and continuously learning new technologies.
            </p>
          </CardContent>
        </Card>

        {/* Education */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="border-b last:border-0 pb-4 last:pb-0">
                  <h4 className="font-medium">{edu.degree}</h4>
                  <p className="text-muted-foreground">{edu.institution}</p>
                  <p className="text-sm text-primary">{edu.year}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-4">Skills</h3>
            <div className="grid grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, skillsList]) => (
                <div key={category}>
                  <h4 className="font-medium mb-2">{category}</h4>
                  <ul className="list-disc list-inside text-muted-foreground">
                    {skillsList.map((skill) => (
                      <li key={skill.name}>{skill.name}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Projects */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-4">Projects</h3>
            {projects.map((project, index) => (
              <div key={index} className="mb-6 last:mb-0">
                <h4 className="font-medium">{project.name}</h4>
                <p className="text-primary text-sm">{project.subtitle}</p>
                <p className="text-muted-foreground my-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
