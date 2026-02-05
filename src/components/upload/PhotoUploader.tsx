import { useCallback, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, X, ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface PhotoUploaderProps {
  onUpload: (preview: string) => void;
  currentImage?: string | null;
  onClear?: () => void;
}

export function PhotoUploader({ onUpload, currentImage, onClear }: PhotoUploaderProps) {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback((file: File) => {
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        onUpload(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  }, [onUpload]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleFile(file);
  }, [handleFile]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFile(file);
    }
  }, [handleFile]);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <motion.div
      className={cn(
        "relative w-full aspect-[3/4] max-w-sm mx-auto rounded-3xl overflow-hidden",
        "border-2 border-dashed transition-all duration-300",
        isDragging ? "border-primary bg-gradient-soft" : "border-muted-foreground/30",
        "flex flex-col items-center justify-center gap-4",
        !currentImage && "cursor-pointer hover:border-primary/50 hover:bg-muted/50"
      )}
      onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
      onClick={!currentImage ? handleClick : undefined}
      whileHover={!currentImage ? { scale: 1.01 } : undefined}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="hidden"
      />

      <AnimatePresence mode="wait">
        {currentImage ? (
          <motion.div
            key="preview"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative w-full h-full"
          >
            <img
              src={currentImage}
              alt="上传的照片"
              className="w-full h-full object-cover"
            />
            {onClear && (
              <Button
                size="icon"
                variant="secondary"
                className="absolute top-3 right-3 rounded-full shadow-lg bg-background/80 backdrop-blur-sm hover:bg-background"
                onClick={(e) => {
                  e.stopPropagation();
                  onClear();
                }}
              >
                <X className="w-4 h-4" />
              </Button>
            )}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/60 to-transparent">
              <p className="text-primary-foreground text-sm text-center">点击右上角可重新选择</p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="upload"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center gap-4 p-8"
          >
            <motion.div
              className="w-20 h-20 rounded-full bg-gradient-soft flex items-center justify-center"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Upload className="w-10 h-10 text-primary" />
            </motion.div>
            <div className="text-center space-y-2">
              <p className="text-lg font-semibold text-gradient">点击或拖拽上传照片</p>
              <p className="text-sm text-muted-foreground">支持 JPG、PNG 格式</p>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <ImageIcon className="w-4 h-4" />
              <span>建议使用正面全身照效果更佳</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
