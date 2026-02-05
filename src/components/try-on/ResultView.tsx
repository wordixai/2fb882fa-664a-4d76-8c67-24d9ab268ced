import { motion } from "framer-motion";
import { Download, RotateCcw, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/common/GradientButton";
import type { ClothingItem } from "@/types";

interface ResultViewProps {
  originalImage: string;
  resultImage: string;
  clothing: ClothingItem;
  onTryAnother: () => void;
  onReset: () => void;
}

export function ResultView({
  originalImage,
  resultImage,
  clothing,
  onTryAnother,
  onReset,
}: ResultViewProps) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resultImage;
    link.download = `tryon-${clothing.name}-${Date.now()}.png`;
    link.click();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* 标题 */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-gradient">换装完成!</h2>
        <p className="text-muted-foreground">
          已为您试穿「{clothing.name}」
        </p>
      </div>

      {/* 对比展示 */}
      <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
        {/* 原图 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-2"
        >
          <p className="text-sm text-center text-muted-foreground">原照片</p>
          <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-card">
            <img
              src={originalImage}
              alt="原照片"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* 结果图 */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-2"
        >
          <p className="text-sm text-center text-muted-foreground">换装效果</p>
          <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-glow border-2 border-primary/30">
            <img
              src={resultImage}
              alt="换装效果"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* 操作按钮 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex flex-wrap justify-center gap-4"
      >
        <GradientButton onClick={handleDownload}>
          <Download className="w-5 h-5 mr-2" />
          下载图片
        </GradientButton>

        <Button
          variant="outline"
          size="lg"
          className="rounded-full px-6"
          onClick={onTryAnother}
        >
          <ArrowRight className="w-5 h-5 mr-2" />
          换件衣服
        </Button>

        <Button
          variant="ghost"
          size="lg"
          className="rounded-full px-6"
          onClick={onReset}
        >
          <RotateCcw className="w-5 h-5 mr-2" />
          重新开始
        </Button>
      </motion.div>
    </motion.div>
  );
}
