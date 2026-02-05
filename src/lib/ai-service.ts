import { supabase } from '@/lib/supabase';
import type { TryOnResponse } from '@/types';

export async function virtualTryOn(
  personImage: string,
  clothingImage: string
): Promise<TryOnResponse> {
  try {
    const { data, error } = await supabase.functions.invoke('virtual-try-on', {
      body: {
        personImage,
        clothingImage,
      },
    });

    if (error) {
      console.error('Supabase function error:', error);
      return {
        success: false,
        error: error.message || '换装服务调用失败',
      };
    }

    if (data?.error) {
      return {
        success: false,
        error: data.error,
      };
    }

    return {
      success: data?.success ?? false,
      resultImage: data?.resultImage,
      error: data?.success ? undefined : '未能生成换装效果',
    };
  } catch (err: any) {
    console.error('Virtual try-on error:', err);
    return {
      success: false,
      error: err.message || '网络错误，请重试',
    };
  }
}
