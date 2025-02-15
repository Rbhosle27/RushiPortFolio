import { Card, CardContent } from "@/components/ui/card";
import { ProgressSkill } from "@/components/ui/progress-skill";
import { motion } from "framer-motion";

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

export default function Skills() {
  return (
    <section id="skills" className="pt-20 -mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, skillsList]) => (
            <Card key={category}>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">{category}</h3>
                <div className="space-y-4">
                  {skillsList.map((skill) => (
                    <ProgressSkill
                      key={skill.name}
                      name={skill.name}
                      value={skill.value}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
