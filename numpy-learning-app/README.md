# NumPy 交互式学习教程

基于菜鸟教程 NumPy 教程构建的交互式网页学习平台。

## 功能特性

- **28个完整知识点** - 涵盖从入门到进阶的所有 NumPy 主题
- **交互式代码编辑器** - 使用 Monaco Editor 提供专业的代码编辑体验
- **浏览器内运行 Python** - 使用 Pyodide 在浏览器中直接执行 Python/NumPy 代码
- **实时输出显示** - 代码执行结果即时显示
- **练习题系统** - 每个知识点配备练习题，包含提示和答案
- **VS Code 风格界面** - 暗色主题，熟悉的开发环境
- **响应式设计** - 支持桌面和移动设备

## 技术栈

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Monaco Editor
- Pyodide (Python in browser)
- React Router

## 内容结构

### 基础入门
1. NumPy 简介
2. NumPy 安装
3. Ndarray 对象
4. 数据类型
5. 数组属性
6. 创建数组

### 数组创建
7. 从已有数组创建
8. 从数值范围创建

### 索引与操作
9. 切片和索引
10. 高级索引
11. 广播
12. 迭代数组
13. 数组操作
14. 位运算

### 函数应用
15. 字符串函数
16. 数学函数
17. 算术函数
18. 统计函数
19. 排序、条件筛选
20. 字节交换

### 进阶主题
21. 副本和视图
22. 矩阵库
23. 线性代数
24. IO 操作
25. Matplotlib

### 测验
26. 测验 1: 基础知识
27. 测验 2: 索引与操作
28. 测验 3: 综合应用

## 开始使用

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建生产版本
npm run build
```

## 项目结构

```
numpy-learning-app/
├── src/
│   ├── components/       # React 组件
│   │   ├── Layout/      # 布局组件
│   │   ├── Editor/      # 代码编辑器
│   │   └── Topic/       # 主题内容组件
│   ├── data/            # 教程内容数据
│   │   └── topics/      # 28个主题文件
│   ├── hooks/           # 自定义 Hooks
│   ├── types/           # TypeScript 类型
│   └── styles/          # 样式文件
├── dist/                # 构建输出
└── index.html           # 入口 HTML
```

## 部署

构建完成后，`dist` 目录可以直接部署到任何静态托管服务：

- GitHub Pages
- Vercel
- Netlify
- 任何静态文件服务器

## 许可证

MIT