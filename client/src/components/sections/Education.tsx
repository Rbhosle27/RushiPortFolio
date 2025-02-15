import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

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

export default function Education() {
  return (
    <section id="education" className="pt-20 -mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-8">Education</h2>
        <div className="space-y-4">
          {education.map((edu, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <p className="text-muted-foreground">{edu.institution}</p>
                  </div>
                  <div className="text-primary font-medium">{edu.year}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
