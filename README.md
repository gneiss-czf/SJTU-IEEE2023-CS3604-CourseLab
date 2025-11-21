# 🚂 12306 网页复现项目 (AI Agent 协作开发版)

本项目旨在利用 AI Agent 工作流与人工协同，对 12306 购票网站的核心功能与前端界面进行高保真复刻。

---

## 📂 项目结构说明

为保持项目整洁，我们将代码进行了分层管理：

- **`core/`**: **[核心工作区]** 项目的主代码库。
  - `frontend/`: 前端 React 项目源码。
  - `backend/`: 后端服务源码。
  - `Implement/` & `Reference/`: AI Agent 的中间产物和参考资料。
- **`_archive/`**: **[归档区]** 存放历史废弃版本、测试脚本及旧的文档。
- **`scripts/`**: 项目辅助工具（如网页解构爬虫）。

---

## 🚀 如何启动项目 (Quick Start)

请按照以下步骤启动前端和后端服务。

### 1. 前端启动 (Frontend)

前端基于 React + Vite + Ant Design 构建。

```bash
# 1. 进入前端目录 (注意：是在 core 目录下)
cd core/frontend

# 2. 安装依赖 (初次运行或 package.json 变更时执行)
npm install

# 3. 启动开发服务器
npm run dev
```

启动成功后，请访问终端提示的地址（通常为 `http://localhost:5173`）。

### 2. 后端启动 (Backend)

后端基于 Node.js + TypeScript + Prisma 构建。

```bash
# 1. 新开一个终端窗口，进入后端目录
cd core/backend

# 2. 安装依赖
npm install

# 3. 初始化数据库客户端 (重要！防止报错)
npx prisma generate

# 4. 启动后端服务
npm run dev
```

---

## 🛠 开发与协作规范 (Git Workflow)

为了避免代码冲突和版本混乱，请所有成员严格遵守以下 **分支管理规范**。

### 🚫 三大红线 (Don'ts)
1. **禁止** 直接在 `main` 分支上修改代码！`main` 分支应永远保持可运行状态。
2. **禁止** 提交 `node_modules`、`.env` 等配置文件（已配置 .gitignore）。
3. **禁止** 通过复制文件夹（如 `demo_日期`）来备份代码。请使用 Git 提交来保存进度。

### ✅ 正确的开发流程 (Do's)

#### 第一步：创建独立分支
在开始任何新功能或修复 Bug 前，请从 `main` 拉取一个新分支：

```bash
# 确保在主分支并同步最新代码
git checkout main
git pull

# 创建并切换到你的分支
# 命名格式：类型/描述
# 示例：feat/login-page (新功能), fix/white-screen (修Bug)
git checkout -b feat/你的功能名
```

#### 第二步：在分支中开发与提交
在你的分支中进行开发。建议保持细粒度的提交：

```bash
git add .
git commit -m "feat: 完成了登录框样式的优化"
```

*Commit Message 格式建议：`类型: 简短描述`*

#### 第三步：合并回主分支
确认功能开发完成且测试无误后，将代码合并回主分支：

```bash
# 1. 切回主分支
git checkout main

# 2. 拉取队友可能更新的代码
git pull

# 3. 合并你的分支
git merge feat/你的功能名

# 4. 推送到远程仓库
git push
```

#### 第四步：清理
合并完成后，删除已无用的功能分支：
```bash
git branch -d feat/你的功能名
```

---

## 📝 常用命令速查

- **查看当前分支**：`git branch`
- **查看状态**（有没有没保存的文件）：`git status`
- **放弃本地修改**（慎用）：`git checkout .`