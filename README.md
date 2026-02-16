# NJXX - 南京中小学学习网站

![NJXX Logo](docs/logo-placeholder.png)

**NJXX** (Nanjing Primary and Secondary School Learning Platform) 是一个专为南京市中小学生设计的在线学习平台，提供各年级、各学科的单元知识点、动态演示、典型题型和扩展题型，支持自主学习和自测功能。

## 🎯 项目定位

- **目标用户**: 南京市小学、初中学生及教师
- **核心功能**: 
  - 各年级单元知识点系统化展示
  - 知识点配图例和动态演示
  - 典型题型与扩展思维题型
  - 在线自测与学习进度跟踪
- **技术特色**: 响应式设计、交互式学习体验、教育内容管理系统

## 📚 功能模块

### 1. 学习内容模块
- **知识点库**: 按年级、学科、单元组织的知识体系
- **动态演示**: 交互式图表、动画、模拟实验
- **图例展示**: 清晰的视觉化知识呈现

### 2. 题型练习模块
- **典型题型**: 基础巩固练习
- **扩展题型**: 思维拓展训练
- **智能推荐**: 根据学习进度推荐适合的题目

### 3. 自测评估模块
- **单元测试**: 每单元配套测试
- **错题本**: 自动记录错题并提供解析
- **学习报告**: 个人学习进度和能力分析

### 4. 用户管理模块
- **学生端**: 个性化学习路径
- **教师端**: 内容管理、作业布置、学情分析
- **家长端**: 学习监督、进度查看

## 🛠 技术栈

### 前端
- **框架**: React + TypeScript
- **UI 库**: Ant Design + Tailwind CSS
- **图表库**: D3.js, Chart.js, Mermaid
- **动画**: GSAP, Framer Motion

### 后端
- **语言**: Node.js + TypeScript
- **框架**: Express.js / NestJS
- **数据库**: PostgreSQL + Redis
- **API**: RESTful + GraphQL

### 基础设施
- **部署**: Docker + Kubernetes
- **CI/CD**: GitHub Actions
- **监控**: Prometheus + Grafana
- **CDN**: 阿里云 CDN (针对南京地区优化)

## 📁 项目结构

```
NJXX/
├── client/                 # 前端应用
│   ├── public/            # 静态资源
│   ├── src/               # 源代码
│   │   ├── components/    # 组件
│   │   ├── pages/         # 页面
│   │   ├── hooks/         # 自定义 Hook
│   │   ├── utils/         # 工具函数
│   │   └── App.tsx        # 主应用
├── server/                # 后端服务
│   ├── src/               # 源代码
│   │   ├── controllers/   # 控制器
│   │   ├── models/        # 数据模型
│   │   ├── routes/        # 路由
│   │   └── app.ts         # 主应用
├── content/               # 教育内容
│   ├── grades/            # 按年级组织
│   │   └── grade-1/       # 一年级
│   │       └── math/      # 数学学科
│   │           └── unit-1/ # 第一单元
│   └── media/             # 媒体资源
├── docs/                  # 文档
│   ├── architecture/      # 架构文档
│   ├── design/            # 设计文档
│   └── api/               # API 文档
└── scripts/               # 脚本工具
```

## 🚀 快速开始

### 开发环境搭建

```bash
# 克隆项目
git clone https://github.com/your-username/NJXX.git
cd NJXX

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 访问 http://localhost:3000
```

### 环境变量配置

创建 `.env` 文件：

```env
# 数据库配置
DB_HOST=localhost
DB_PORT=5432
DB_NAME=njxx_db
DB_USER=njxx_user
DB_PASSWORD=your_password

# API 配置
API_PORT=3001
FRONTEND_URL=http://localhost:3000

# 教育内容 CDN
CONTENT_CDN_URL=https://cdn.njxx.edu.cn
```

## 📈 内容规划

### 学科覆盖
- **小学**: 语文、数学、英语、科学、道德与法治
- **初中**: 语文、数学、英语、物理、化学、生物、历史、地理、道德与法治

### 年级覆盖
- **小学**: 1-6 年级
- **初中**: 7-9 年级

### 内容标准
- 严格遵循南京市教育局教学大纲
- 结合江苏省中考要求
- 融入南京本地文化元素

## 🤝 贡献指南

我们欢迎教育工作者、开发者和技术爱好者参与项目贡献！

1. Fork 本项目
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

本项目采用 [MIT License](LICENSE) 开源许可证。

## 📧 联系我们

- **项目维护者**: [Your Name]
- **邮箱**: contact@njxx.edu.cn
- **官方网站**: https://www.njxx.edu.cn

---

**NJXX - 让每个南京学子都能享受优质教育资源！**