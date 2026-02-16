# NJXX 项目架构

## 技术栈选择

### 前端
- **框架**: React + TypeScript
- **UI 库**: Ant Design (适合教育类应用)
- **状态管理**: Redux Toolkit
- **路由**: React Router v6
- **图表库**: 
  - ECharts (用于数据可视化)
  - Mermaid.js (用于知识点图例展示)
  - D3.js (用于复杂动态演示)

### 后端
- **语言**: Node.js + TypeScript
- **框架**: Express.js / NestJS
- **数据库**: 
  - PostgreSQL (主数据库，存储结构化数据)
  - Redis (缓存，提高性能)
- **文件存储**: AWS S3 / 阿里云 OSS (存储媒体文件)

### 开发工具
- **包管理**: npm / yarn
- **构建工具**: Vite (前端) + Webpack (后端)
- **测试**: Jest + React Testing Library
- **CI/CD**: GitHub Actions
- **容器化**: Docker

## 项目结构

```
NJXX/
├── client/                 # 前端应用
│   ├── public/            # 静态资源
│   ├── src/
│   │   ├── assets/        # 项目资源文件
│   │   ├── components/    # 通用组件
│   │   ├── features/      # 功能模块
│   │   │   ├── auth/      # 认证模块
│   │   │   ├── grade/     # 年级模块
│   │   │   ├── unit/      # 单元模块
│   │   │   ├── knowledge/ # 知识点模块
│   │   │   ├── demo/      # 动态演示模块
│   │   │   └── practice/  # 练习题模块
│   │   ├── hooks/         # 自定义hooks
│   │   ├── pages/         # 页面组件
│   │   ├── store/         # Redux store
│   │   ├── types/         # TypeScript类型定义
│   │   ├── utils/         # 工具函数
│   │   └── App.tsx        # 主应用组件
│   └── package.json
├── server/                # 后端服务
│   ├── src/
│   │   ├── controllers/   # 控制器
│   │   ├── models/        # 数据模型
│   │   ├── routes/        # 路由
│   │   ├── services/      # 业务逻辑
│   │   ├── middleware/    # 中间件
│   │   ├── config/        # 配置文件
│   │   └── app.ts         # 应用入口
│   └── package.json
├── docs/                  # 项目文档
│   ├── database-schema.md # 数据库设计
│   ├── api-spec.md       # API规范
│   └── deployment.md     # 部署指南
├── docker/               # Docker配置
├── .github/              # GitHub配置
│   └── workflows/        # CI/CD工作流
├── README.md             # 项目介绍
├── package.json          # 根package.json (可选)
└── docker-compose.yml    # Docker Compose配置
```

## 核心功能模块

### 1. 用户认证系统
- 学生、教师、管理员三种角色
- JWT Token 认证
- 权限控制

### 2. 内容管理系统
- 年级 → 学科 → 单元 → 知识点层级结构
- 富文本编辑器支持
- 媒体文件上传和管理

### 3. 知识点展示系统
- 图例展示（使用Mermaid.js）
- 动态演示（交互式动画）
- 多媒体内容支持

### 4. 练习题系统
- 典型题型库
- 扩展题型库
- 自动评分系统
- 错题本功能

### 5. 自测系统
- 智能组卷
- 在线考试
- 成绩分析报告

## 数据库设计要点

### 核心表结构
- `users`: 用户信息表
- `grades`: 年级表  
- `subjects`: 学科表
- `units`: 单元表
- `knowledge_points`: 知识点表
- `demos`: 动态演示表
- `questions`: 题目表
- `answers`: 答案表
- `tests`: 测试表

### 关系设计
- 一对多关系：Grade → Subject → Unit → KnowledgePoint
- 多对多关系：User ↔ Test, Question ↔ Tag

## API 设计原则

### RESTful 规范
- GET /api/grades - 获取所有年级
- GET /api/grades/{gradeId}/subjects - 获取指定年级的学科
- GET /api/subjects/{subjectId}/units - 获取指定学科的单元
- GET /api/units/{unitId}/knowledge-points - 获取单元知识点
- POST /api/practice/submit - 提交练习答案

### 响应格式
```json
{
  "success": true,
  "data": {},
  "message": "操作成功"
}
```

## 部署策略

### 开发环境
- 本地 Docker Compose
- 热重载开发服务器

### 生产环境  
- 容器化部署 (Docker + Kubernetes)
- 负载均衡
- CDN 加速静态资源
- 监控和日志系统

## 性能优化考虑

### 前端优化
- 代码分割 (Code Splitting)
- 图片懒加载
- 缓存策略
- PWA 支持

### 后端优化
- 数据库索引优化
- Redis 缓存热点数据
- 异步任务处理
- 数据库读写分离

## 安全考虑

### 数据安全
- HTTPS 加密传输
- 敏感数据加密存储
- SQL 注入防护
- XSS 防护

### 用户安全
- 密码哈希存储
- 登录失败限制
- 会话管理
- CSRF 防护