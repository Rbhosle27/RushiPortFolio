import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Footer } from "react-day-picker";
import FooterPage from "./Footer";

export default function About() {
  const [showSparks, setShowSparks] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowSparks(true), 500);
  }, []);

  const sparks = [...Array(10)].map((_, i) => ({
    x: Math.random() * 100 - 50, // Random horizontal movement
    y: Math.random() * 100 - 50, // Random vertical movement
    delay: Math.random() * 0.5, // Random delay for staggered effect
  }));

  return (
    <section id="about" className="pt-20 -mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Card className="overflow-hidden">
          <CardContent className="pt-6 relative">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4 relative">
                {/* Firecracker Spark Effect */}
                {showSparks &&
                  sparks.map((spark, i) => (
                    <motion.span
                      key={i}
                      className="absolute bg-yellow-400 rounded-full w-2 h-2"
                      initial={{ opacity: 1, scale: 1 }}
                      animate={{
                        x: spark.x,
                        y: spark.y,
                        opacity: 0,
                        scale: 1.5,
                      }}
                      transition={{
                        duration: 0.8,
                        delay: spark.delay,
                        ease: "easeOut",
                      }}
                    />
                  ))}

                {/* Floating Name Effect */}
                <motion.h1
                  className="text-4xl font-bold relative"
                  animate={{ y: [0, -5, 0, 5, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Rushikesh Bhosle
                </motion.h1>

                <h2 className="text-2xl text-primary font-semibold">RPA Developer</h2>
                <p className="text-muted-foreground">
                  I am an RPA Developer with a strong foundation in manual testing, automation testing, and web development. I have hands-on experience in Selenium WebDriver, TestNG, and Java, focusing on creating efficient automated test scripts. Additionally, I have a solid understanding of SQL and database management. While I have worked with RPA tools, my primary expertise lies in software testing and quality assurance. I am eager to enhance my skills in test automation and process optimization while staying updated with industry trends.
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
                    href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3Bf4zGxBOlRvi%2BexDAgxngKw%3D%3D"
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
