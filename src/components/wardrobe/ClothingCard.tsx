import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import type { ClothingItem } from "@/types";

interface ClothingCardProps {
  item: ClothingItem;
  isSelected: boolean;
  onSelect: (item: ClothingItem) => void;
}

export function ClothingCard({ item, isSelected, onSelect }: ClothingCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -4 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      layout
    >
      <Card
        className={cn(
          "relative overflow-hidden cursor-pointer transition-all duration-300",
          "rounded-2xl border-2",
          isSelected
            ? "border-primary shadow-glow"
            : "border-transparent hover:shadow-card"
        )}
        onClick={() => onSelect(item)}
      >
        <div className="aspect-[3/4] bg-muted">
          <img
            src={item.imageUrl}
            alt={item.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* 标签 */}
        <div className="absolute top-2 right-2 flex gap-1">
          {item.isNew && (
            <Badge className="bg-gradient-secondary text-primary-foreground border-0 text-xs">
              新品
            </Badge>
          )}
          {item.isTrending && (
            <Badge className="bg-gradient-accent text-primary-foreground border-0 text-xs">
              热门
            </Badge>
          )}
        </div>

        {/* 选中指示器 */}
        {isSelected && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute bottom-14 right-2 w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center"
          >
            <Check className="w-4 h-4 text-primary-foreground" />
          </motion.div>
        )}

        <div className="p-3 bg-card">
          <p className="font-medium truncate text-card-foreground">{item.name}</p>
          <p className="text-sm text-muted-foreground">{item.style} · {item.color}</p>
        </div>
      </Card>
    </motion.div>
  );
}
