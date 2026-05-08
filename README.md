<div align="center">
  <img width="1200" height="475" alt="Radiant Intellect Banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

<h1 align="center">Radiant Intellect</h1>

<p align="center">
  An AI-powered frontend for turning math problems into visual explanation videos.
</p>

<p align="center">
  一个面向“数学题讲解视频生成”的 AI 前端原型。
</p>

<p align="center">
  <img alt="React" src="https://img.shields.io/badge/React-19-blue?logo=react" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript" />
  <img alt="Vite" src="https://img.shields.io/badge/Vite-6.x-646CFF?logo=vite" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/TailwindCSS-4.x-06B6D4?logo=tailwindcss" />
  <img alt="Status" src="https://img.shields.io/badge/status-frontend%20prototype-orange" />
</p>

---

## English

### Overview

Radiant Intellect is a frontend prototype for a math explanation video platform.

Instead of behaving like a generic chatbot, it is designed as a structured learning workspace where users can:

- upload or input math problems
- search similar historical questions
- organize saved problems into collections
- review previously generated lessons
- customize explanation depth and learning preferences

The long-term product direction is:

```text
math problem
-> AI explanation planning
-> visual teaching structure
-> video generation
-> reusable lesson history
This repository currently focuses on the frontend experience for that workflow.

Why This Project
Most AI math tools stop at giving an answer.

Radiant Intellect is built around a different goal:

explain the reasoning step by step
make the explanation visual
support repetition and review
make the result feel like a mini lesson rather than a one-shot reply
The frontend is designed to support a future backend capable of generating:

explanation scripts
structured teaching steps
formula breakdowns
visual layouts
final math explanation videos
Features
Problem-to-Lesson Entry
Users can start a new explanation flow by:

uploading a file
taking a photo
dragging and dropping an image or document
entering a structured query
Historical Question Search
The dashboard includes filters for:

educational level
question type
searchable academic topics
This makes the interface suitable for revision, practice discovery, and exam preparation workflows.

Video Generation Task Tracking
The UI includes an active task area for:

in-progress lesson generation
rendering progress
queued or partial generation states
This is especially useful for future AI + rendering pipelines where lesson/video generation takes time.

Collections and Question Bank
Users can save and organize problems into a reusable personal repository with:

category labels
difficulty tags
progress indicators
recommendation cards
Study History
The study history page is designed for reviewing previous outputs, including:

in-progress lessons
completed learning items
replay/review actions
topic-based browsing
Personalized Learning Settings
Users can configure:

learner identity
grade level
exam region
learning mode
explanation depth
These settings are intended to shape future AI-generated explanation style and difficulty.

Example Use Cases
1. Algebra Lesson Generation
A student uploads a quadratic equation problem and the system is intended to provide:

a step-by-step factorization explanation
a structured visual breakdown
a saved lesson for later review
2. Calculus Revision Workflow
A learner searches for derivative or integral questions, then:

compares similar problems
generates explanation flows
stores lessons in a reviewable history
3. Handwritten Homework Support
A user photographs handwritten notes or exercises and uses the interface as the starting point for:

AI interpretation
solution planning
future lesson video generation
4. Personalized Learning Paths
A beginner can choose a slower, more detailed explanation mode, while an advanced learner can switch to concise review mode.

Current Pages
Dashboard

new inquiry flow
upload actions
search
active generation tasks
recommended math content
Collections

personal math problem library
topic and difficulty filters
reusable saved content
Study History

generated lessons
progress tracking
replay/review actions
Settings

learner profile
academic level selection
explanation style
reasoning depth preferences
Screenshots
Add screenshots or GIF demos here if available.

Example:

![Dashboard Screenshot](./docs/screenshots/dashboard.png)
![Collections Screenshot](./docs/screenshots/collections.png)
Tech Stack
React 19
TypeScript
Vite
React Router
Tailwind CSS
Lucide React
Motion
Gemini SDK (@google/genai)
Project Status
Implemented
polished multi-page frontend
dashboard for new math inquiries
collection management UI
study history UI
learner settings UI
task/video-oriented product structure
Planned
OCR for handwritten math input
AI problem parsing
explanation planning
step-by-step teaching structure generation
math visualization rendering
lesson video generation
persistent user data and saved lessons
This repository is currently best understood as a frontend prototype for a math explanation video product.

Getting Started
Prerequisites
Node.js
npm
Install dependencies
npm install
Configure environment variables
Create a .env.local file:

GEMINI_API_KEY=your_gemini_api_key
APP_URL=http://localhost:3000
See .env.example for reference.

Run locally
npm run dev
The app will run at:

http://localhost:3000
Build for production
npm run build
Preview production build
npm run preview
Available Scripts
npm run dev
Start the local development server

npm run build
Build the app for production

npm run preview
Preview the production build locally

npm run clean
Remove build output

npm run lint
Run TypeScript type checking

Project Structure
src/
  components/
    Layout.tsx
  pages/
    Dashboard.tsx
    Collections.tsx
    StudyHistory.tsx
    Settings.tsx
  App.tsx
  main.tsx
  index.css
Roadmap
Potential next steps:

connect image upload to OCR
add math-problem parsing
generate structured explanation plans
render explanation steps as math visuals
connect to a video-generation backend
save generated lessons to history
add teacher/student collaboration workflows
Contributing
Contributions are welcome.

If you want to improve the project, you can contribute in areas such as:

UI refinement
accessibility improvements
better mobile responsiveness
backend integration
math workflow design
lesson/video generation pipeline integration
Recommended contribution flow:

Fork the repository
Create a feature branch
Make your changes
Open a pull request
License
Add your preferred license here.

Acknowledgements
Originally scaffolded from an AI Studio app template and expanded into a math-focused learning and video-generation frontend concept.

中文
项目简介
Radiant Intellect 是一个面向“数学题讲解视频平台”的前端原型。

它不是一个普通聊天机器人页面，而是一个更偏结构化学习工作台的产品形态。用户可以在这里：

上传或输入数学题
搜索相似历史题目
将题目整理到收藏集
回看已经生成过的讲解内容
配置讲解深度和学习偏好
这个产品的长期目标是：

数学题输入
-> AI 讲解规划
-> 可视化教学结构
-> 视频生成
-> 讲解历史复用
目前这个仓库主要聚焦于这条链路的前端体验。

为什么做这个项目
很多 AI 数学工具只停留在“给答案”。

Radiant Intellect 想解决的是另一类问题：

按步骤讲清楚推理过程
用更可视化的方式呈现讲解
支持回看和复习
让最终结果更像一节迷你课程，而不只是一次回答
这个前端是为未来的后端能力预留入口的，未来可以接入：

讲解脚本生成
步骤化教学结构生成
公式拆解
视觉布局生成
数学讲解视频生成
核心功能
数学题输入入口
用户可以通过以下方式发起新的讲解任务：

上传文件
拍照上传
拖拽图片或文档
输入结构化查询
适用于手写题、截图、试卷扫描件或教材题目。

历史题目搜索
Dashboard 提供了筛选和搜索能力，包括：

学段
题型
学术主题搜索
适合考试复习、相似题检索和专题训练。

视频生成任务追踪
界面中预留了任务进度区，用于展示：

正在生成的讲解任务
渲染进度
排队中或处理中状态
这对未来接入“数学讲解视频生成后端”非常重要。

题目收藏与题库
用户可以把题目保存到自己的题库中，支持：

分类标签
难度标签
进度状态
推荐内容卡片
这让产品更适合长期学习，而不是一次性使用。

学习历史
Study History 页面用于回顾过去生成的内容，包括：

进行中的讲解
已完成的课程
视频回看
按主题筛选
个性化讲解设置
Settings 页面支持用户调整：

学习者身份
年级/阶段
考试区域
学习模式
讲解深度
这些设置未来可以直接影响 AI 输出的风格、语气和难度层级。

使用场景
1. 代数题讲解
学生上传一道一元二次方程题，系统未来可以生成：

因式分解的逐步讲解
每一步的可视化展示
可回看的课程记录
2. 微积分复习
用户搜索导数或积分相关题目，然后：

比较相似题型
生成讲解流程
将结果保存到学习历史中
3. 手写作业辅助
用户拍摄手写题目或笔记后，可以把它作为：

AI 识别入口
解题规划入口
未来视频讲解生成入口
4. 个性化学习模式
初学者可以选择更慢、更详细的讲解方式，而进阶用户可以选择更紧凑的复习模式。

当前页面结构
Dashboard

新建讲解入口
上传区域
搜索区
活跃任务区
推荐内容区
Collections

个人数学题库
题目筛选
推荐题目浏览
Study History

已生成讲解内容
学习进度
视频回看操作
Settings

用户学习档案
学习层级设置
讲解风格与深度设置
截图展示
如果你后续有截图或 GIF，可以放在这里。

示例：

![Dashboard 截图](./docs/screenshots/dashboard.png)
![Collections 截图](./docs/screenshots/collections.png)
技术栈
React 19
TypeScript
Vite
React Router
Tailwind CSS
Lucide React
Motion
Gemini SDK (@google/genai)
当前状态
已实现
多页面前端界面
新建数学题讲解入口
收藏与题库管理界面
学习历史界面
个性化设置界面
面向视频生成任务的产品结构
计划接入
手写数学 OCR
数学题解析
讲解规划
步骤化讲解结构生成
数学可视化渲染
视频生成能力
用户数据持久化
因此，这个仓库目前更准确的定位是：

一个面向“数学题讲解视频产品”的前端原型。

本地运行
前置要求
Node.js
npm
安装依赖
npm install
配置环境变量
创建 .env.local 文件：

GEMINI_API_KEY=your_gemini_api_key
APP_URL=http://localhost:3000
参考 .env.example。

启动开发环境
npm run dev
默认访问地址：

http://localhost:3000
生产构建
npm run build
本地预览构建结果
npm run preview
可用脚本
npm run dev
启动本地开发服务器

npm run build
生成生产构建

npm run preview
本地预览构建结果

npm run clean
清理构建目录

npm run lint
执行 TypeScript 类型检查

项目结构
src/
  components/
    Layout.tsx
  pages/
    Dashboard.tsx
    Collections.tsx
    StudyHistory.tsx
    Settings.tsx
  App.tsx
  main.tsx
  index.css
路线图
下一步可以继续推进：

接入图片上传 OCR
增加数学题解析模块
生成结构化讲解计划
把讲解步骤转成数学可视化
接入视频生成后端
将生成结果写入学习历史
增加教师/学生协作场景
贡献方式
欢迎贡献。

如果你想参与这个项目，可以从这些方向入手：

UI 优化
可访问性改进
移动端适配
后端接入
数学讲解工作流设计
讲解视频生成链路集成
推荐流程：

Fork 仓库
新建功能分支
提交修改
发起 Pull Request
License
请在这里补充你希望使用的开源协议。

致谢
该项目最初基于 AI Studio 模板搭建，随后扩展为一个面向数学学习与讲解视频生成方向的前端概念验证项目。
