import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    name: "VTIGER CRM",
    subtitle: "Automation Testing",
    description: "VTiger CRM tracks all contacts and related opportunities, activities, and other details from a common place. Designed test scripts for Contact and Organization modules using Selenium with Java. Executed test scripts using TestNG and Jenkins.",
    technologies: ["Java", "Selenium", "TestNG", "Jenkins"],
    link: "https://github.com/Rbhosle27/AutomationTestFunctionalTest/tree/main",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="pt-20 -mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid gap-6">
          {projects.map((project) => (
            <Card key={project.name}>
              <CardHeader>
                <CardTitle>{project.name}</CardTitle>
                <p className="text-primary font-medium">{project.subtitle}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button
                  variant="outline"
                  onClick={() => window.open(project.link, "_blank")}
                >
                  <FaGithub className="mr-2" />
                  View on GitHub
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
