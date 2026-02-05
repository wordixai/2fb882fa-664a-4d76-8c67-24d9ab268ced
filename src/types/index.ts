export type ClothingCategory =
  | 'tops'      // 上衣
  | 'dresses'   // 连衣裙
  | 'outerwear' // 外套
  | 'bottoms'   // 下装
  | 'suits';    // 套装

export interface ClothingItem {
  id: string;
  name: string;
  category: ClothingCategory;
  imageUrl: string;
  color: string;
  style: string;
  isNew?: boolean;
  isTrending?: boolean;
}

export interface CategoryInfo {
  id: ClothingCategory;
  label: string;
  icon: string;
}

export type AppStep = 'upload' | 'select' | 'processing' | 'result';

export interface TryOnRequest {
  personImage: string;
  clothingImage: string;
  category: ClothingCategory;
}

export interface TryOnResponse {
  success: boolean;
  resultImage?: string;
  error?: string;
}
