import { useState, useCallback } from 'react';
import { virtualTryOn } from '@/lib/ai-service';
import { useAppStore } from '@/store/useAppStore';
import type { TryOnResponse } from '@/types';

export function useTryOn() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<TryOnResponse | null>(null);
  const { setProgress, setResultImage, setCurrentStep } = useAppStore();

  const startTryOn = useCallback(async (personImage: string, clothingImage: string) => {
    setIsLoading(true);
    setCurrentStep('processing');
    setProgress(0);

    // 模拟进度更新
    const progressInterval = setInterval(() => {
      setProgress((prev: number) => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return 90;
        }
        return prev + Math.random() * 15;
      });
    }, 800);

    try {
      const response = await virtualTryOn(personImage, clothingImage);

      clearInterval(progressInterval);
      setProgress(100);
      setResult(response);

      if (response.success && response.resultImage) {
        setResultImage(response.resultImage);
        setCurrentStep('result');
      } else {
        setCurrentStep('select');
      }

      return response;
    } catch (error: any) {
      clearInterval(progressInterval);
      setProgress(0);
      setCurrentStep('select');

      const errorResponse: TryOnResponse = {
        success: false,
        error: error.message || '换装失败，请重试',
      };
      setResult(errorResponse);
      return errorResponse;
    } finally {
      setIsLoading(false);
    }
  }, [setProgress, setResultImage, setCurrentStep]);

  const reset = useCallback(() => {
    setResult(null);
    setProgress(0);
  }, [setProgress]);

  return {
    startTryOn,
    isLoading,
    result,
    reset,
  };
}
