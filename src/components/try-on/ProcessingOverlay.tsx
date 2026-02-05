import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { loadingMessages } from "@/lib/clothing-data";
import { useEffect, useState } from "react";

interface ProcessingOverlayProps {
  progress: number;
}

export function ProcessingOverlay({ progress }: ProcessingOverlayProps) {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % loadingMessages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-md"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="flex flex-col items-center gap-8 p-8 max-w-md text-center"
      >
        {/* 动画图标 */}
        <motion.div
          className="relative w-32 h-32"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 blur-xl" />
          <div className="absolute inset-4 rounded-full bg-gradient-soft" />
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Sparkles className="w-12 h-12 text-primary" />
          </motion.div>
        </motion.div>

        {/* 提示文字 */}
        <motion.p
          key={messageIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="text-xl font-medium text-gradient"
        >
          {loadingMessages[messageIndex]}
        </motion.p>

        {/* 进度条 */}
        <div className="w-full max-w-xs space-y-2">
          <Progress value={progress} className="h-2" />
          <p className="text-sm text-muted-foreground">{Math.round(progress)}%</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
