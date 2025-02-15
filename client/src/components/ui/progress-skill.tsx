import * as React from "react";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

interface ProgressSkillProps {
  name: string;
  value: number;
}

export function ProgressSkill({ name, value }: ProgressSkillProps) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(value), 500);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-sm font-medium">{name}</span>
          <span className="text-sm text-muted-foreground">{progress}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>
    </motion.div>
  );
}
