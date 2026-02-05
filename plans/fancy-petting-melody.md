# AI 换衣应用实现计划

## 产品概述

一款时尚现代风格的 AI 虚拟试衣应用，用户上传照片后可从预设服装库中选择衣服，AI 自动生成换装效果。

## 用户流程

```
首页 → 上传照片 → 选择服装 → AI换装 → 查看/下载结果
```

## 功能模块

### 1. 照片上传
- 拖拽或点击上传个人照片
- 支持 JPG/PNG 格式
- 实时预览，可重新选择

### 2. 服装选择
- 预设服装库（上衣、连衣裙、外套、下装、套装）
- 分类标签切换
- 新品/热门标识
- 选中状态视觉反馈

### 3. AI 换装处理
- 一键开始换装
- 动画进度展示
- 趣味提示文案

### 4. 结果展示
- 换装前后对比
- 下载结果图片
- 重新选择/重试

## 设计风格

**时尚现代**：渐变色、圆润、活泼

- **主渐变**：粉紫渐变 `#FF6B9D → #C44FEB → #7B61FF`
- **辅助渐变**：橙粉渐变 `#FF9A56 → #FF6B9D`
- **点缀渐变**：蓝紫渐变 `#7B61FF → #00D1FF`
- **圆角**：1rem（圆润感）
- **动画**：弹跳、淡入、脉冲效果

## 关键文件

| 文件 | 说明 |
|------|------|
| `src/index.css` | 设计系统（CSS变量、渐变、阴影） |
| `src/pages/Index.tsx` | 主页面 |
| `src/store/useAppStore.ts` | 状态管理 |
| `src/lib/clothing-data.ts` | 预设服装数据 |
| `src/lib/ai-service.ts` | AI 服务调用 |
| `src/types/index.ts` | 类型定义 |
| `src/components/upload/PhotoUploader.tsx` | 照片上传组件 |
| `src/components/wardrobe/ClothingGallery.tsx` | 服装库组件 |
| `src/components/wardrobe/ClothingCard.tsx` | 服装卡片组件 |
| `src/components/try-on/ProcessingOverlay.tsx` | 处理中覆盖层 |
| `src/components/try-on/ResultView.tsx` | 结果展示组件 |
| `src/components/common/GradientButton.tsx` | 渐变按钮组件 |

## 实现步骤

### Step 1: 设计系统
- 配置 `index.css` CSS 变量（颜色、渐变、阴影）
- 添加自定义工具类

### Step 2: 基础架构
- 创建类型定义
- 创建 Zustand 状态管理
- 创建预设服装数据

### Step 3: 核心组件
- PhotoUploader（照片上传）
- ClothingGallery + ClothingCard（服装选择）
- GradientButton（渐变按钮）

### Step 4: AI 集成
- 使用 `ai-integration` skill 集成 AI 换衣服务
- 创建 AI 服务调用函数
- 处理加载状态和错误

### Step 5: 主页面整合
- 整合所有组件到 Index.tsx
- 实现完整用户流程
- 添加动画效果

### Step 6: 结果展示
- 换装结果展示
- 下载功能
- 重试/重选功能

## 验证方式

1. **功能验证**
   - 照片上传正常工作
   - 服装分类切换正确
   - AI 换装流程完整
   - 结果下载成功

2. **视觉验证**
   - 渐变色显示正确
   - 动画效果流畅
   - 响应式布局适配

3. **运行命令**
   ```bash
   pnpm run dev
   ```

## 服装数据示例

5个分类，每类 4-6 件预设服装：
- 上衣：白T恤、条纹衬衫、针织毛衣...
- 连衣裙：碎花裙、小黑裙、吊带裙...
- 外套：牛仔夹克、西装外套、风衣...
- 下装：牛仔裤、百褶裙、阔腿裤...
- 套装：职业套装、休闲套装...

> 图片使用 Unsplash 占位图
