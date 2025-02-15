import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { SiUipath } from "react-icons/si";
import { FaCertificate, FaCode, FaCheckCircle, FaSearch } from "react-icons/fa";

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
    image: "/assets/certificates/rpa-foundation.jpg"
  },
  {
    name: "RPA Intermediate",
    organization: "UiPath",
    icon: SiUipath,
    image: "/assets/certificates/rpa-intermediate.jpg"
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
            <Dialog key={cert.name}>
              <DialogTrigger asChild>
                <Card className="cursor-pointer hover:bg-accent transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      {cert.icon && (
                        <cert.icon className="w-8 h-8 text-primary" />
                      )}
                      <CardTitle>{cert.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {cert.organization}
                      {cert.certNo && ` - Cert No: ${cert.certNo}`}
                    </p>
                    {cert.image && (
                      <div className="flex items-center text-primary">
                        <FaSearch className="mr-2" />
                        View Certificate
                      </div>
                    )}
                  </CardContent>
                </Card>
              </DialogTrigger>
              {cert.image && (
                <DialogContent className="max-w-4xl">
                  <DialogHeader>
                    <DialogTitle>{cert.name} Certificate</DialogTitle>
                  </DialogHeader>
                  <div className="relative w-full h-[80vh] overflow-hidden rounded-lg">
                    <img
                      src={cert.image}
                      alt={`${cert.name} Certificate`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </DialogContent>
              )}
            </Dialog>
          ))}
        </div>
      </motion.div>
    </section>
  );
}