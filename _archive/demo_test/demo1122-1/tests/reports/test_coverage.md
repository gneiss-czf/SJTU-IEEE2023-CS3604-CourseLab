# 测试覆盖率追踪报告

- 页面范围：P001 首页
- 用例总数：19（Unit: 3，Component: 9，Integration: 6，E2E: 1）
- 金字塔配比（约）：Unit≈16%，Component≈47%，Integration≈32%，E2E≈5%

## P001 首页 (F001, F002)

### ✅ 单元测试 (Unit)
- [F001-S09] 登录态过期自动跳转 (tests/backend/modules/F001_Navbar/unit/index.spec.ts)
- [F002-S08] 未登录仅显示基础功能 (tests/frontend/pages/P001_Home/unit/index.spec.ts)
- [F002-S09] 推荐失败降级默认入口 (tests/frontend/pages/P001_Home/unit/index.spec.ts)

### 🧩 组件测试 (Component)
- [F001-S01] 导航栏固定顶部 (tests/frontend/pages/P001_Home/component/index.spec.tsx)
- [F001-S02] 未登录显示登录注册 (tests/frontend/pages/P001_Home/component/index.spec.tsx)
- [F001-S03] 已登录显示用户名头像 (tests/frontend/pages/P001_Home/component/index.spec.tsx)
- [F001-S04] 显示首页查询个人中心 (tests/frontend/pages/P001_Home/component/index.spec.tsx)
- [F001-S07] 点击用户名显示菜单 (tests/frontend/pages/P001_Home/component/index.spec.tsx)
- [F001-S08] 当前页面高亮显示 (tests/frontend/pages/P001_Home/component/index.spec.tsx)
- [F002-S01] 显示常用功能卡片 (tests/frontend/pages/P001_Home/component/index.spec.tsx)
- [F002-S02] 已登录显示推荐区域 (tests/frontend/pages/P001_Home/component/index.spec.tsx)
- [F002-S06] 点击历史记录填充查询 (tests/frontend/pages/P001_Home/component/index.spec.tsx)

### 🔗 集成测试 (Integration)
- [F001-S05] 点击登录跳转P003 (tests/frontend/pages/P001_Home/integration/index.spec.tsx)
- [F001-S06] 点击注册跳转P004 (tests/frontend/pages/P001_Home/integration/index.spec.tsx)
- [F002-S03] 历史记录最多显示5条 (tests/backend/modules/F002_QuickEntry/integration/index.spec.ts)
- [F002-S04] 点击车票查询跳转P002 (tests/frontend/pages/P001_Home/integration/index.spec.tsx)
- [F002-S05] 点击订单查询跳转P006 (tests/frontend/pages/P001_Home/integration/index.spec.tsx)
- [F002-S07] 清除历史记录确认弹窗 (tests/frontend/pages/P001_Home/integration/index.spec.tsx)
 - [F001-S03] MSW 会话成功显示用户 (tests/frontend/pages/P001_Home/integration/msw_index.spec.ts)
 - [F002-S02] MSW 推荐接口成功渲染 (tests/frontend/pages/P001_Home/integration/msw_index.spec.ts)
 - [F002-S09] MSW 推荐异常降级 (tests/frontend/pages/P001_Home/integration/msw_index.spec.ts)
 - [F002-S03] MSW 历史记录返回并倒序 (tests/frontend/pages/P001_Home/integration/msw_index.spec.ts)
 - [F002-S07] MSW 删除历史后为空 (tests/frontend/pages/P001_Home/integration/msw_index.spec.ts)

### 🚀 E2E 测试 (Playwright)
- [F001→F002] 首页导航与快捷入口E2E (tests/e2e/p001_navigation.spec.ts)

## 新增用例索引（本轮）
- [F001-S01] 导航栏固定顶部 (tests/frontend/pages/P001_Home/component/index.spec.tsx)
- [F001-S02] 未登录显示登录注册 (tests/frontend/pages/P001_Home/component/index.spec.tsx)
- [F001-S03] 已登录显示用户名头像 (tests/frontend/pages/P001_Home/component/index.spec.tsx)
- [F001-S04] 显示首页查询个人中心 (tests/frontend/pages/P001_Home/component/index.spec.tsx)
- [F001-S05] 点击登录跳转P003 (tests/frontend/pages/P001_Home/integration/index.spec.tsx)
- [F001-S06] 点击注册跳转P004 (tests/frontend/pages/P001_Home/integration/index.spec.tsx)
- [F001-S07] 点击用户名显示菜单 (tests/frontend/pages/P001_Home/component/index.spec.tsx)
- [F001-S08] 当前页面高亮显示 (tests/frontend/pages/P001_Home/component/index.spec.tsx)
- [F001-S09] 登录态过期自动跳转 (tests/backend/modules/F001_Navbar/unit/index.spec.ts)
- [F002-S01] 显示常用功能卡片 (tests/frontend/pages/P001_Home/component/index.spec.tsx)
- [F002-S02] 已登录显示推荐区域 (tests/frontend/pages/P001_Home/component/index.spec.tsx)
- [F002-S03] 历史记录最多显示5条 (tests/backend/modules/F002_QuickEntry/integration/index.spec.ts)
- [F002-S04] 点击车票查询跳转P002 (tests/frontend/pages/P001_Home/integration/index.spec.tsx)
- [F002-S05] 点击订单查询跳转P006 (tests/frontend/pages/P001_Home/integration/index.spec.tsx)
- [F002-S06] 点击历史记录填充查询 (tests/frontend/pages/P001_Home/component/index.spec.tsx)
- [F002-S07] 清除历史记录确认弹窗 (tests/frontend/pages/P001_Home/integration/index.spec.tsx)
- [F002-S08] 未登录仅显示基础功能 (tests/frontend/pages/P001_Home/unit/index.spec.ts)
- [F002-S09] 推荐失败降级默认入口 (tests/frontend/pages/P001_Home/unit/index.spec.ts)
 - [F001-S03] MSW 会话成功显示用户 (tests/frontend/pages/P001_Home/integration/msw_index.spec.ts)
 - [F002-S02] MSW 推荐接口成功渲染 (tests/frontend/pages/P001_Home/integration/msw_index.spec.ts)
 - [F002-S09] MSW 推荐异常降级 (tests/frontend/pages/P001_Home/integration/msw_index.spec.ts)
 - [F002-S03] MSW 历史记录返回并倒序 (tests/frontend/pages/P001_Home/integration/msw_index.spec.ts)
 - [F002-S07] MSW 删除历史后为空 (tests/frontend/pages/P001_Home/integration/msw_index.spec.ts)
 - [F001-S02] Supertest 会话401 (tests/backend/modules/F001_Navbar/integration/index.spec.ts)
 - [F001-S03] Supertest 会话200含用户名头像 (tests/backend/modules/F001_Navbar/integration/index.spec.ts)
 - [F002-S02] Supertest 推荐200含items (tests/backend/modules/F002_QuickEntry/integration/index.spec.ts)
 - [F002-S09] Supertest 推荐5xx (tests/backend/modules/F002_QuickEntry/integration/index.spec.ts)
 - [F002-S07] Supertest 删除历史返回>0 (tests/backend/modules/F002_QuickEntry/integration/index.spec.ts)

## 全量子需求覆盖索引
统计校验：18/18 条目（通过）
- F001-S01 — 实现 — 类型: Component — Page:P001 — 路径: tests/frontend/pages/P001_Home/component/index.spec.tsx
- F001-S02 — 实现 — 类型: Component — Page:P001 — 路径: tests/frontend/pages/P001_Home/component/index.spec.tsx
- F001-S03 — 实现 — 类型: Component — Page:P001 — 路径: tests/frontend/pages/P001_Home/component/index.spec.tsx
- F001-S04 — 实现 — 类型: Component — Page:P001 — 路径: tests/frontend/pages/P001_Home/component/index.spec.tsx
- F001-S05 — 实现 — 类型: Integration — Page:P001 — 路径: tests/frontend/pages/P001_Home/integration/index.spec.tsx
- F001-S06 — 实现 — 类型: Integration — Page:P001 — 路径: tests/frontend/pages/P001_Home/integration/index.spec.tsx
- F001-S07 — 实现 — 类型: Component — Page:P001 — 路径: tests/frontend/pages/P001_Home/component/index.spec.tsx
- F001-S08 — 实现 — 类型: Component — Page:P001 — 路径: tests/frontend/pages/P001_Home/component/index.spec.tsx
- F001-S09 — 实现 — 类型: Unit — Page:P001 — 路径: tests/backend/modules/F001_Navbar/unit/index.spec.ts
- F002-S01 — 实现 — 类型: Component — Page:P001 — 路径: tests/frontend/pages/P001_Home/component/index.spec.tsx
- F002-S02 — 实现 — 类型: Component — Page:P001 — 路径: tests/frontend/pages/P001_Home/component/index.spec.tsx
- F002-S03 — 实现 — 类型: Integration — Page:P001 — 路径: tests/backend/modules/F002_QuickEntry/integration/index.spec.ts
- F002-S04 — 实现 — 类型: Integration — Page:P001 — 路径: tests/frontend/pages/P001_Home/integration/index.spec.tsx
- F002-S05 — 实现 — 类型: Integration — Page:P001 — 路径: tests/frontend/pages/P001_Home/integration/index.spec.tsx
- F002-S06 — 实现 — 类型: Component — Page:P001 — 路径: tests/frontend/pages/P001_Home/component/index.spec.tsx
- F002-S07 — 实现 — 类型: Integration — Page:P001 — 路径: tests/frontend/pages/P001_Home/integration/index.spec.tsx
- F002-S08 — 实现 — 类型: Unit — Page:P001 — 路径: tests/frontend/pages/P001_Home/unit/index.spec.ts
- F002-S09 — 实现 — 类型: Unit — Page:P001 — 路径: tests/frontend/pages/P001_Home/unit/index.spec.ts