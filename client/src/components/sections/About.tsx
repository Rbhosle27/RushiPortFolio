import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="pt-20 -mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Card className="overflow-hidden">
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold">Rushikesh Bhosle</h1>
                <h2 className="text-2xl text-primary font-semibold">RPA Developer</h2>
                <p className="text-muted-foreground">
                  Experienced RPA Developer with a strong foundation in automation testing
                  and web development. Passionate about creating efficient automated solutions
                  and continuously learning new technologies.
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Rbhosle27"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl hover:text-primary transition"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl hover:text-primary transition"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20">
                  <img
                    src="/assets/profile.jpeg"
                    alt="Rushikesh Bhosle"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}