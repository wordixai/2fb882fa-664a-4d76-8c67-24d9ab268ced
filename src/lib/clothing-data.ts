import type { ClothingItem, CategoryInfo, ClothingCategory } from "@/types";

export const clothingCategories: CategoryInfo[] = [
  { id: 'tops', label: '上衣', icon: 'Shirt' },
  { id: 'dresses', label: '连衣裙', icon: 'Sparkles' },
  { id: 'outerwear', label: '外套', icon: 'Cloudy' },
  { id: 'bottoms', label: '下装', icon: 'RectangleHorizontal' },
  { id: 'suits', label: '套装', icon: 'Crown' },
];

export const clothingItems: ClothingItem[] = [
  // 上衣
  {
    id: 'top-001',
    name: '简约白T恤',
    category: 'tops',
    imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop',
    color: '白色',
    style: '休闲',
    isNew: true,
  },
  {
    id: 'top-002',
    name: '条纹衬衫',
    category: 'tops',
    imageUrl: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop',
    color: '蓝白',
    style: '通勤',
  },
  {
    id: 'top-003',
    name: '针织毛衣',
    category: 'tops',
    imageUrl: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=500&fit=crop',
    color: '米色',
    style: '温暖',
    isTrending: true,
  },
  {
    id: 'top-004',
    name: '丝绸衬衫',
    category: 'tops',
    imageUrl: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400&h=500&fit=crop',
    color: '香槟',
    style: '优雅',
  },

  // 连衣裙
  {
    id: 'dress-001',
    name: '碎花连衣裙',
    category: 'dresses',
    imageUrl: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=500&fit=crop',
    color: '粉色',
    style: '甜美',
    isNew: true,
  },
  {
    id: 'dress-002',
    name: '经典小黑裙',
    category: 'dresses',
    imageUrl: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop',
    color: '黑色',
    style: '优雅',
    isTrending: true,
  },
  {
    id: 'dress-003',
    name: '吊带裙',
    category: 'dresses',
    imageUrl: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop',
    color: '红色',
    style: '性感',
  },
  {
    id: 'dress-004',
    name: '波点连衣裙',
    category: 'dresses',
    imageUrl: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&h=500&fit=crop',
    color: '黑白',
    style: '复古',
  },

  // 外套
  {
    id: 'outer-001',
    name: '牛仔夹克',
    category: 'outerwear',
    imageUrl: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop',
    color: '蓝色',
    style: '街头',
    isTrending: true,
  },
  {
    id: 'outer-002',
    name: '西装外套',
    category: 'outerwear',
    imageUrl: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop',
    color: '黑色',
    style: '职业',
  },
  {
    id: 'outer-003',
    name: '风衣',
    category: 'outerwear',
    imageUrl: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=500&fit=crop',
    color: '卡其',
    style: '经典',
    isNew: true,
  },
  {
    id: 'outer-004',
    name: '皮夹克',
    category: 'outerwear',
    imageUrl: 'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=400&h=500&fit=crop',
    color: '黑色',
    style: '酷帅',
  },

  // 下装
  {
    id: 'bottom-001',
    name: '高腰牛仔裤',
    category: 'bottoms',
    imageUrl: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=500&fit=crop',
    color: '蓝色',
    style: '百搭',
    isTrending: true,
  },
  {
    id: 'bottom-002',
    name: '百褶裙',
    category: 'bottoms',
    imageUrl: 'https://images.unsplash.com/photo-1583496661160-fb5886a0uj83?w=400&h=500&fit=crop',
    color: '粉色',
    style: '甜美',
  },
  {
    id: 'bottom-003',
    name: '阔腿裤',
    category: 'bottoms',
    imageUrl: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&h=500&fit=crop',
    color: '黑色',
    style: '时尚',
    isNew: true,
  },
  {
    id: 'bottom-004',
    name: '运动裤',
    category: 'bottoms',
    imageUrl: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=400&h=500&fit=crop',
    color: '灰色',
    style: '运动',
  },

  // 套装
  {
    id: 'suit-001',
    name: '职业套装',
    category: 'suits',
    imageUrl: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=400&h=500&fit=crop',
    color: '藏青',
    style: '正式',
    isTrending: true,
  },
  {
    id: 'suit-002',
    name: '休闲套装',
    category: 'suits',
    imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=500&fit=crop',
    color: '米色',
    style: '休闲',
    isNew: true,
  },
  {
    id: 'suit-003',
    name: '运动套装',
    category: 'suits',
    imageUrl: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=400&h=500&fit=crop',
    color: '黑色',
    style: '运动',
  },
  {
    id: 'suit-004',
    name: '针织套装',
    category: 'suits',
    imageUrl: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=500&fit=crop',
    color: '驼色',
    style: '优雅',
  },
];

export function getClothingByCategory(category: ClothingCategory): ClothingItem[] {
  return clothingItems.filter(item => item.category === category);
}

export function getTrendingClothing(): ClothingItem[] {
  return clothingItems.filter(item => item.isTrending);
}

export function getNewClothing(): ClothingItem[] {
  return clothingItems.filter(item => item.isNew);
}

export const loadingMessages = [
  "正在为您搭配时尚造型...",
  "AI 设计师正在工作中...",
  "魔法变身进行中...",
  "打造您的专属风格...",
  "即将完成，敬请期待...",
];
