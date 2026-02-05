import { useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { useAppStore } from "@/store/useAppStore";
import { useTryOn } from "@/hooks/useTryOn";
import { PhotoUploader } from "@/components/upload/PhotoUploader";
import { ClothingGallery } from "@/components/wardrobe/ClothingGallery";
import { ProcessingOverlay } from "@/components/try-on/ProcessingOverlay";
import { ResultView } from "@/components/try-on/ResultView";
import { GradientButton } from "@/components/common/GradientButton";
import { toast } from "sonner";

const Index = () => {
  const {
    userPhoto,
    setUserPhoto,
    selectedClothing,
    setSelectedClothing,
    resultImage,
    currentStep,
    setCurrentStep,
    progress,
    reset,
  } = useAppStore();

  const { startTryOn, isLoading } = useTryOn();

  const handlePhotoUpload = useCallback((preview: string) => {
    setUserPhoto(preview);
    setCurrentStep('select');
    toast.success('照片上传成功');
  }, [setUserPhoto, setCurrentStep]);

  const handleClearPhoto = useCallback(() => {
    setUserPhoto(null);
    setSelectedClothing(null);
    setCurrentStep('upload');
  }, [setUserPhoto, setSelectedClothing, setCurrentStep]);

  const handleStartTryOn = useCallback(async () => {
    if (!userPhoto || !selectedClothing) {
      toast.error('请先上传照片并选择服装');
      return;
    }

    const result = await startTryOn(userPhoto, selectedClothing.imageUrl);

    if (!result.success) {
      toast.error(result.error || '换装失败，请重试');
    }
  }, [userPhoto, selectedClothing, startTryOn]);

  const handleTryAnother = useCallback(() => {
    setSelectedClothing(null);
    setCurrentStep('select');
  }, [setSelectedClothing, setCurrentStep]);

  const handleReset = useCallback(() => {
    reset();
  }, [reset]);

  return (
    <div className="min-h-screen bg-gradient-soft">
      {/* Header */}
      <header className="sticky top-0 z-40 glass border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-gradient">AI 换衣间</span>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          {/* 结果页面 */}
          {currentStep === 'result' && resultImage && selectedClothing && userPhoto && (
            <motion.div
              key="result"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ResultView
                originalImage={userPhoto}
                resultImage={resultImage}
                clothing={selectedClothing}
                onTryAnother={handleTryAnother}
                onReset={handleReset}
              />
            </motion.div>
          )}

          {/* 上传和选择页面 */}
          {(currentStep === 'upload' || currentStep === 'select') && (
            <motion.div
              key="main"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-8"
            >
              {/* Hero Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center space-y-4 py-4"
              >
                <h1 className="text-4xl md:text-5xl font-bold text-gradient">
                  AI 虚拟试衣
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  上传您的照片，从精选服装库中选择心仪的衣服，AI 即刻为您呈现穿搭效果
                </p>
              </motion.div>

              {/* 两栏布局 */}
              <div className="grid lg:grid-cols-[350px_1fr] gap-8">
                {/* 左侧：照片上传 */}
                <div className="space-y-4">
                  <h2 className="text-lg font-semibold flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-gradient-primary text-primary-foreground text-sm flex items-center justify-center">
                      1
                    </span>
                    上传您的照片
                  </h2>
                  <PhotoUploader
                    onUpload={handlePhotoUpload}
                    currentImage={userPhoto}
                    onClear={handleClearPhoto}
                  />
                </div>

                {/* 右侧：服装选择 */}
                <div className="space-y-4">
                  <h2 className="text-lg font-semibold flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-gradient-primary text-primary-foreground text-sm flex items-center justify-center">
                      2
                    </span>
                    选择心仪的服装
                  </h2>

                  <ClothingGallery
                    selectedClothing={selectedClothing}
                    onSelectClothing={setSelectedClothing}
                  />
                </div>
              </div>

              {/* 开始换装按钮 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex justify-center pt-4"
              >
                <GradientButton
                  onClick={handleStartTryOn}
                  disabled={!userPhoto || !selectedClothing || isLoading}
                  className="min-w-[200px]"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  开始换装
                  <ArrowRight className="w-5 h-5 ml-2" />
                </GradientButton>
              </motion.div>

              {/* 提示 */}
              {(!userPhoto || !selectedClothing) && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-sm text-muted-foreground"
                >
                  {!userPhoto && !selectedClothing && "请上传照片并选择服装"}
                  {userPhoto && !selectedClothing && "请选择一件服装"}
                  {!userPhoto && selectedClothing && "请上传您的照片"}
                </motion.p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Processing Overlay */}
      <AnimatePresence>
        {currentStep === 'processing' && (
          <ProcessingOverlay progress={progress} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
