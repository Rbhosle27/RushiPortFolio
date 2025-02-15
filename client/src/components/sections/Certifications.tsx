import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { SiUipath } from "react-icons/si";
import { FaCertificate, FaCode, FaCheckCircle } from "react-icons/fa";

const certifications = [
  {
    name: "Web-Designing",
    organization: "Seed InfoTech",
    certNo: "182014",
    icon: FaCode,
  },
  {
    name: "Software Testing",
    organization: "Quantum Academy",
    icon: FaCheckCircle,
  },
  {
    name: "RPA Foundation",
    organization: "UiPath",
    icon: SiUipath,
  },
  {
    name: "RPA Intermediate",
    organization: "UiPath",
    icon: SiUipath,
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="pt-20 -mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-8">Certifications</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <Card key={cert.name}>
              <CardHeader>
                <div className="flex items-center gap-4">
                  {cert.icon && (
                    <cert.icon className="w-8 h-8 text-primary" />
                  )}
                  <CardTitle>{cert.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {cert.organization}
                  {cert.certNo && ` - Cert No: ${cert.certNo}`}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
}