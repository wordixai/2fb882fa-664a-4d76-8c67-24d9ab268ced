import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ClothingCard } from "./ClothingCard";
import { clothingCategories, getClothingByCategory } from "@/lib/clothing-data";
import { Shirt, Sparkles, Cloud, RectangleHorizontal, Crown } from "lucide-react";
import type { ClothingItem, ClothingCategory } from "@/types";

interface ClothingGalleryProps {
  selectedClothing: ClothingItem | null;
  onSelectClothing: (item: ClothingItem) => void;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shirt,
  Sparkles,
  Cloudy: Cloud,
  RectangleHorizontal,
  Crown,
};

export function ClothingGallery({ selectedClothing, onSelectClothing }: ClothingGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<ClothingCategory>('tops');
  const currentClothing = getClothingByCategory(activeCategory);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="space-y-4"
    >
      {/* 分类标签 */}
      <Tabs value={activeCategory} onValueChange={(v) => setActiveCategory(v as ClothingCategory)}>
        <ScrollArea className="w-full">
          <TabsList className="inline-flex h-12 bg-muted/50 p-1 rounded-full">
            {clothingCategories.map((category) => {
              const Icon = iconMap[category.icon];
              return (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="rounded-full px-4 py-2 data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground transition-all duration-300"
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {category.label}
                </TabsTrigger>
              );
            })}
          </TabsList>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </Tabs>

      {/* 服装网格 */}
      <motion.div
        key={activeCategory}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
      >
        {currentClothing.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <ClothingCard
              item={item}
              isSelected={selectedClothing?.id === item.id}
              onSelect={onSelectClothing}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
