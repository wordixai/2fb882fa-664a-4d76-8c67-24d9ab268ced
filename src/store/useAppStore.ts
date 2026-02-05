import { create } from "zustand";
import type { ClothingItem, AppStep } from "@/types";

interface AppState {
  // 用户照片
  userPhoto: string | null;
  setUserPhoto: (photo: string | null) => void;

  // 选中的服装
  selectedClothing: ClothingItem | null;
  setSelectedClothing: (clothing: ClothingItem | null) => void;

  // 处理结果
  resultImage: string | null;
  setResultImage: (image: string | null) => void;

  // 当前步骤
  currentStep: AppStep;
  setCurrentStep: (step: AppStep) => void;

  // 处理进度
  progress: number;
  setProgress: (progress: number) => void;

  // 重置所有状态
  reset: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  userPhoto: null,
  setUserPhoto: (photo) => set({ userPhoto: photo }),

  selectedClothing: null,
  setSelectedClothing: (clothing) => set({ selectedClothing: clothing }),

  resultImage: null,
  setResultImage: (image) => set({ resultImage: image }),

  currentStep: 'upload',
  setCurrentStep: (step) => set({ currentStep: step }),

  progress: 0,
  setProgress: (progress) => set({ progress }),

  reset: () => set({
    userPhoto: null,
    selectedClothing: null,
    resultImage: null,
    currentStep: 'upload',
    progress: 0,
  }),
}));
