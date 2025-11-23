# 测试覆盖率追踪报告

## 概览与配比
- 总子需求数: 169
- 规划用例类型配比（目标≈ Unit 60% / Component 25% / Integration 10% / E2E 5%）
- 当前规划统计（近似值）:
  - Unit: ≈62
  - Component: ≈83
  - Integration: ≈22
  - E2E: ≈4
- 说明: 基于分类映射优先保证输入校验与业务规则的单元覆盖；实现阶段将为所有 `input_processing` 增补 Sad Path，并通过合并测试套件提升 Unit 占比。

## P001 首页 (F001, F002)

### ✅ 单元测试 (Unit)
- [F001-S09] 登录态过期自动跳转 (tests/frontend/pages/P001_Home/unit/index.spec.ts)
- [F002-S08] 未登录仅显示基础功能 (tests/frontend/pages/P001_Home/unit/index.spec.ts)
- [F002-S09] 推荐失败降级默认入口 (tests/frontend/pages/P001_Home/unit/index.spec.ts)

### 🧩 组件测试 (Component)
- [F001-S01] 导航栏固定顶部 (tests/frontend/pages/P001_Home/component/index.spec.tsx)
- [F001-S02] 未登录显示登录注册 (tests/frontend/pages/P001_Home/component/index.spec.tsx)
- [F001-S03] 已登录显示用户信息 (tests/frontend/pages/P001_Home/component/index.spec.tsx)
- [F001-S04] 显示首页查询个人中心 (tests/frontend/pages/P001_Home/component/index.spec.tsx)
- [F001-S05] 点击登录跳转P003 (tests/frontend/pages/P001_Home/component/index.spec.tsx)
- [F001-S06] 点击注册跳转P004 (tests/frontend/pages/P001_Home/component/index.spec.tsx)
- [F001-S07] 用户名下拉菜单显示 (tests/frontend/pages/P001_Home/component/index.spec.tsx)
- [F001-S08] 当前页面入口高亮 (tests/frontend/pages/P001_Home/component/index.spec.tsx)
- [F002-S01] 展示常用功能卡片 (tests/frontend/pages/P001_Home/component/index.spec.tsx)
- [F002-S02] 已登录显示推荐 (tests/frontend/pages/P001_Home/component/index.spec.tsx)
- [F002-S03] 历史查询最多5条 (tests/frontend/pages/P001_Home/component/index.spec.tsx)
- [F002-S04] 点击查询跳转P002 (tests/frontend/pages/P001_Home/component/index.spec.tsx)
- [F002-S05] 点击订单查询跳转 (tests/frontend/pages/P001_Home/component/index.spec.tsx)
- [F002-S06] 点击历史填充条件 (tests/frontend/pages/P001_Home/component/index.spec.tsx)
- [F002-S07] 清除历史确认弹窗 (tests/frontend/pages/P001_Home/component/index.spec.tsx)

### 🔗 集成测试 (Integration)
- 暂无，待补齐

### 🚀 E2E 测试 (Playwright)
- 暂无，待补齐

## P002 车票查询 (F003, F004, F005, F006)

### ✅ 单元测试 (Unit)
- [F003-S01] 站点模糊搜索 (tests/frontend/pages/P002_Search/unit/index.spec.ts)
- [F003-S05] 日期选择30天内 (tests/frontend/pages/P002_Search/unit/index.spec.ts)
- [F003-S06] 快捷日期选择 (tests/frontend/pages/P002_Search/unit/index.spec.ts)
- [F003-S08] 禁用过去日期 (tests/frontend/pages/P002_Search/unit/index.spec.ts)
- [F003-S09] 车次类型筛选 (tests/frontend/pages/P002_Search/unit/index.spec.ts)
- [F003-S10] 出发时间段筛选 (tests/frontend/pages/P002_Search/unit/index.spec.ts)
- [F003-S11] 仅显示有票开关 (tests/frontend/pages/P002_Search/unit/index.spec.ts)
- [F003-S21] 出发地目的地不相同 (tests/frontend/pages/P002_Search/unit/index.spec.ts)
- [F004-S01] 类型筛选：G (tests/frontend/pages/P002_Search/unit/index.spec.ts)
- [F004-S02] 类型筛选：D/C (tests/frontend/pages/P002_Search/unit/index.spec.ts)
- [F004-S04] 时间段筛选 (tests/frontend/pages/P002_Search/unit/index.spec.ts)
- [F004-S08] 席别筛选 (tests/frontend/pages/P002_Search/unit/index.spec.ts)
- [F004-S10] 多站点筛选 (tests/frontend/pages/P002_Search/unit/index.spec.ts)
- [F004-S12] 历时范围 (tests/frontend/pages/P002_Search/unit/index.spec.ts)
- [F004-S13] 价格区间 (tests/frontend/pages/P002_Search/unit/index.spec.ts)
- [F005-S02] 检查余票数量 (tests/frontend/pages/P002_Search/unit/index.spec.ts)
- [F005-S03] 乘车人信息完整性 (tests/frontend/pages/P002_Search/unit/index.spec.ts)
- [F005-S15] 勾选协议后可提交 (tests/frontend/pages/P002_Search/unit/index.spec.ts)
- [F006-S04] 查询中转站 (tests/frontend/pages/P002_Search/unit/index.spec.ts)
- [F006-S05] 换乘时间范围 (tests/frontend/pages/P002_Search/unit/index.spec.ts)
- [F006-S06] 生成中转方案 (tests/frontend/pages/P002_Search/unit/index.spec.ts)
- [F006-S07] 排序方式 (tests/frontend/pages/P002_Search/unit/index.spec.ts)

### 🧩 组件测试 (Component)
- [F003-S13] 查询提交显示加载 (tests/frontend/pages/P002_Search/component/index.spec.tsx)
- [F003-S16] 显示车次信息 (tests/frontend/pages/P002_Search/component/index.spec.tsx)
- [F003-S17] 显示余票信息 (tests/frontend/pages/P002_Search/component/index.spec.tsx)
- [F004-S15] 实时过滤列表 (tests/frontend/pages/P002_Search/component/index.spec.tsx)
- [F004-S16] 显示结果数量 (tests/frontend/pages/P002_Search/component/index.spec.tsx)
- [F004-S18] 为空提示放宽 (tests/frontend/pages/P002_Search/component/index.spec.tsx)
- [F005-S05] 显示可用席别余票 (tests/frontend/pages/P002_Search/component/index.spec.tsx)
- [F005-S06] 选择席别与数量 (tests/frontend/pages/P002_Search/component/index.spec.tsx)
- [F005-S09] 加载常用乘车人 (tests/frontend/pages/P002_Search/component/index.spec.tsx)
- [F005-S14] 显示订单明细总价 (tests/frontend/pages/P002_Search/component/index.spec.tsx)
- [F005-S17] 余票不足提示 (tests/frontend/pages/P002_Search/component/index.spec.tsx)
- [F006-S01] 自动推荐中转 (tests/frontend/pages/P002_Search/component/index.spec.tsx)
- [F006-S02] 用户选择中转方案 (tests/frontend/pages/P002_Search/component/index.spec.tsx)
- [F006-S03] 显示节省指标 (tests/frontend/pages/P002_Search/component/index.spec.tsx)
- [F006-S16] 换乘时间不足警告 (tests/frontend/pages/P002_Search/component/index.spec.tsx)

### 🔗 集成测试 (Integration)
- [F003-S12] 必填项完整校验 (tests/frontend/pages/P002_Search/integration/index.spec.tsx)
- [F005-S01] 未登录跳转P003 (tests/frontend/pages/P002_Search/integration/index.spec.tsx)

### 🚀 E2E 测试 (Playwright)
- [F007→F003→F005→F010] 完整购票流程 (tests/e2e/complete_booking.spec.ts)
- [F005-S16] 预订锁票跳转订单页 (tests/e2e/complete_booking.spec.ts)

## P003 登录 (F007)

### ✅ 单元测试 (Unit)
- [F007-S04] 连续失败启用验证码 (tests/frontend/pages/P003_Login/unit/index.spec.ts)
- [F007-S05] 手机号格式验证 (tests/frontend/pages/P003_Login/unit/index.spec.ts)
- [F007-S07] 验证码输入6位 (tests/frontend/pages/P003_Login/unit/index.spec.ts)
- [F007-S08] 验证码有效期5分钟 (tests/frontend/pages/P003_Login/unit/index.spec.ts)
- [F007-S11] 前端表单验证 (tests/frontend/pages/P003_Login/unit/index.spec.ts)

### 🧩 组件测试 (Component)
- [F007-S01] 账号密码登录输入 (tests/frontend/pages/P003_Login/component/index.spec.tsx)
- [F007-S03] 记住密码本地加密 (tests/frontend/pages/P003_Login/component/index.spec.tsx)
- [F007-S06] 发送验证码倒计时 (tests/frontend/pages/P003_Login/component/index.spec.tsx)

### 🔗 集成测试 (Integration)
- [F007-S12] 后端凭证校验 (tests/backend/modules/F007_UserLogin/integration/index.spec.ts)
- [F007-S13] 生成会话token (tests/backend/modules/F007_UserLogin/integration/index.spec.ts)

### 🚀 E2E 测试 (Playwright)
- 暂无，待补齐

## P004 注册 (F008)

### ✅ 单元测试 (Unit)
- [F008-S01] 手机号11位验证 (tests/frontend/pages/P004_Register/unit/index.spec.ts)
- [F008-S04] 验证码6位数字 (tests/frontend/pages/P004_Register/unit/index.spec.ts)
- [F008-S06] 密码8-20位 (tests/frontend/pages/P004_Register/unit/index.spec.ts)
- [F008-S07] 密码包含字母数字 (tests/frontend/pages/P004_Register/unit/index.spec.ts)
- [F008-S09] 确认密码二次验证 (tests/frontend/pages/P004_Register/unit/index.spec.ts)
- [F008-S05] 验证码通过后继续 (tests/frontend/pages/P004_Register/unit/index.spec.ts)

### 🧩 组件测试 (Component)
- [F008-S03] 发送验证码倒计时 (tests/frontend/pages/P004_Register/component/index.spec.tsx)
 - [F008-S08] 密码强度提示 (tests/frontend/pages/P004_Register/component/index.spec.tsx)

## 新增用例索引（本轮）
- 运行态：前端开发服务器与代理配置（vite、server.proxy）
- 运行态：后端最小 http 服务，支持以下契约接口：
  - GET `/api/search`、GET `/api/v1/tickets/trains` → [F003]
  - GET `/api/v1/stations/suggest` → [F003-S01]
  - POST `/api/v1/orders/prelock` → [F005]
  - POST `/api/v1/orders/create` → [F010]
  - POST `/api/v1/payments/initiate`、GET `/api/v1/payments/{id}/status`、POST `/api/v1/payments/callback` → [F014-S13][F014-S16]
  - POST `/api/v1/auth/logout` → [F016-S04]
- 本轮未新增测试用例，所有既有测试保持通过

### 🔗 集成测试 (Integration)
- [F008-S02] 检查手机号是否已注册 (tests/backend/modules/F008_UserRegister/integration/index.spec.ts)
- [F008-S17] 前端校验后创建账户 (tests/backend/modules/F008_UserRegister/integration/index.spec.ts)

### 🚀 E2E 测试 (Playwright)
- 暂无，待补齐

## P005 订单填写与提交 (F009, F010)

### ✅ 单元测试 (Unit)
- [F009-S04] 显示15分钟倒计时 (tests/frontend/pages/P005_OrderFill/unit/index.spec.ts)
- [F009-S05] 少于5分钟红警 (tests/frontend/pages/P005_OrderFill/unit/index.spec.ts)
- [F009-S22] 临时保存草稿 (tests/frontend/pages/P005_OrderFill/unit/index.spec.ts)
- [F010-S01] 检查必填项完整 (tests/backend/modules/F010_OrderSubmit/unit/index.spec.ts)
- [F010-S02] 证件号格式验证 (tests/backend/modules/F010_OrderSubmit/unit/index.spec.ts)
- [F010-S03] 确认订单未超时 (tests/backend/modules/F010_OrderSubmit/unit/index.spec.ts)
- [F010-S04] 检查余票充足 (tests/backend/modules/F010_OrderSubmit/unit/index.spec.ts)
- [F010-S05] 计算总价含保险 (tests/backend/modules/F010_OrderSubmit/unit/index.spec.ts)

### 🧩 组件测试 (Component)
- [F009-S01] 显示车次信息只读 (tests/frontend/pages/P005_OrderFill/component/index.spec.tsx)
- [F009-S02] 显示席别与数量 (tests/frontend/pages/P005_OrderFill/component/index.spec.tsx)
- [F009-S03] 显示票价明细 (tests/frontend/pages/P005_OrderFill/component/index.spec.tsx)
- [F009-S07] 显示已选乘车人 (tests/frontend/pages/P005_OrderFill/component/index.spec.tsx)
- [F009-S12] 票种选择 (tests/frontend/pages/P005_OrderFill/component/index.spec.tsx)
- [F009-S15] 联系人手机号默认填充 (tests/frontend/pages/P005_OrderFill/component/index.spec.tsx)
- [F010-S16] 提交后按钮防抖 (tests/frontend/pages/P005_OrderFill/component/index.spec.tsx)

### 🔗 集成测试 (Integration)
- [F009-S06] 超时自动释放座位提示 (tests/frontend/pages/P005_OrderFill/integration/index.spec.tsx)
- [F010-S06] 生成唯一订单号 (tests/backend/modules/F010_OrderSubmit/integration/index.spec.ts)
- [F010-S07] 锁定座位资源 (tests/backend/modules/F010_OrderSubmit/integration/index.spec.ts)

### 🚀 E2E 测试 (Playwright)
- [F010-S06] 订单创建成功流程 (tests/e2e/complete_booking.spec.ts)
- [F010-S07] 锁座后的订单流程 (tests/e2e/complete_booking.spec.ts)

## P006 个人中心与支付 (F011, F012, F013, F014, F015, F016)

### ✅ 单元测试 (Unit)
- [F012-S12] 身份证校验位验证 (tests/backend/modules/F012_PassengerManage/unit/index.spec.ts)
- [F012-S13] 护照通行证格式验证 (tests/backend/modules/F012_PassengerManage/unit/index.spec.ts)
- [F012-S14] 实时验证反馈 (tests/backend/modules/F012_PassengerManage/unit/index.spec.ts)
- [F012-S08] 姓名中文/英文规则 (tests/backend/modules/F012_PassengerManage/unit/index.spec.ts)
- [F012-S09] 证件类型选择规则 (tests/backend/modules/F012_PassengerManage/unit/index.spec.ts)
- [F012-S10] 证件号码与手机号 (tests/backend/modules/F012_PassengerManage/unit/index.spec.ts)
- [F013-S10] 按创建时间倒序 (tests/backend/modules/F013_OrderManage/unit/index.spec.ts)
- [F013-S01] 订单状态筛选规则 (tests/backend/modules/F013_OrderManage/unit/index.spec.ts)
- [F013-S02] 时间范围筛选规则 (tests/backend/modules/F013_OrderManage/unit/index.spec.ts)
- [F013-S03] 订单号车次号搜索规则 (tests/backend/modules/F013_OrderManage/unit/index.spec.ts)
- [F013-S13] 每页10条规则 (tests/backend/modules/F013_OrderManage/unit/index.spec.ts)
- [F015-S01] 验证订单状态资格 (tests/backend/modules/F015_ChangeTicket/unit/index.spec.ts)
- [F015-S02] 检查票类型资格 (tests/backend/modules/F015_ChangeTicket/unit/index.spec.ts)
- [F015-S03] 检查改签次数限制 (tests/backend/modules/F015_ChangeTicket/unit/index.spec.ts)
- [F015-S04] 检查开车前30分钟 (tests/backend/modules/F015_ChangeTicket/unit/index.spec.ts)
- [F015-S12] 差价计算 (tests/backend/modules/F015_ChangeTicket/unit/index.spec.ts)
- [F016-S04] 清除本地token (tests/frontend/pages/P006_Profile/unit/index.spec.ts)
- [F016-S05] 清除session与缓存 (tests/frontend/pages/P006_Profile/unit/index.spec.ts)
- [F016-S06] 记录登出日志 (tests/frontend/pages/P006_Profile/unit/index.spec.ts)

### 🧩 组件测试 (Component)
- [F011-S01] 显示用户名不可修改 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F011-S02] 显示真实姓名 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F011-S03] 身份证脱敏显示 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F011-S04] 手机号脱敏显示 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F011-S05] 邮箱脱敏显示 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F011-S06] 显示账户时间 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
 - [F011-S07] 显示账户等级积分 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
 - [F011-S08] 显示实名认证状态 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
 - [F011-S16] 修改密码输入旧密码 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
 - [F011-S17] 新密码强度验证并确认 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
 - [F012-S01] 显示所有乘车人 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
 - [F012-S02] 乘车人卡片展示 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
 - [F012-S03] 显示可选手机号 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F012-S04] 显示旅客类型 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F012-S05] 设为默认编辑删除 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F012-S06] 默认乘车人标识 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F013-S04] 卡片显示订单号 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F013-S05] 显示车次信息 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F013-S06] 显示出发时间 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F013-S07] 显示乘车人姓名数量 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F013-S08] 显示金额与状态标签 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F013-S09] 显示操作按钮 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F013-S15] 点击卡片展开详情 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F014-S09] 显示订单号 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F014-S10] 显示订单金额优惠 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F014-S12] 显示支付倒计时 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F014-S20] 显示支付成功页面 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F014-S22] 显示失败原因 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F015-S05] 显示改签规则说明 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F015-S06] 默认显示同路线车次 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F015-S07] 日期范围前后3天 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F015-S09] 显示可改签车次余票 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F016-S01] 导航栏点击退出登录 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F016-S02] 个人中心安全退出 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F016-S03] 登出确认弹窗 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F016-S07] 跳转首页更新导航 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F016-S08] 网络异常本地登出 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)

### 🔗 集成测试 (Integration)
- [F013-S23] 待支付立即支付跳转 (tests/backend/modules/F013_OrderManage/integration/index.spec.ts)
- [F013-S24] 待支付取消订单确认 (tests/backend/modules/F013_OrderManage/integration/index.spec.ts)
- [F014-S01] 微信扫码支付流程 (tests/backend/modules/F014_Payment/integration/index.spec.ts)
- [F014-S02] 微信APP支付流程 (tests/backend/modules/F014_Payment/integration/index.spec.ts)
- [F014-S03] 支付宝扫码支付流程 (tests/backend/modules/F014_Payment/integration/index.spec.ts)
- [F014-S04] 支付宝APP支付流程 (tests/backend/modules/F014_Payment/integration/index.spec.ts)
- [F014-S05] 银行卡快捷支付流程 (tests/backend/modules/F014_Payment/integration/index.spec.ts)
- [F014-S06] 网银支付添加新卡流程 (tests/backend/modules/F014_Payment/integration/index.spec.ts)
- [F014-S13] 创建支付订单 (tests/backend/modules/F014_Payment/integration/index.spec.ts)
- [F014-S14] 调起支付接口跳转 (tests/backend/modules/F014_Payment/integration/index.spec.ts)
- [F014-S16] 支付状态轮询 (tests/backend/modules/F014_Payment/integration/index.spec.ts)
- [F015-S15] 协议确认提交改签请求 (tests/backend/modules/F015_ChangeTicket/integration/index.spec.ts)
- [F015-S16] 改签成功更新订单 (tests/backend/modules/F015_ChangeTicket/integration/index.spec.ts)

### 🚀 E2E 测试 (Playwright)
- [F014-S17] 支付成功更新订单状态 (tests/e2e/payment_success.spec.ts)

## 新增用例索引（本轮）
- [F001-S01] 导航栏固定顶部 (tests/frontend/pages/P001_Home/component/index.spec.tsx)
- [F001-S02] 未登录显示登录注册 (tests/frontend/pages/P001_Home/component/index.spec.tsx)
- [F001-S03] 已登录显示用户信息 (tests/frontend/pages/P001_Home/component/index.spec.tsx)
- [F001-S04] 显示首页查询个人中心 (tests/frontend/pages/P001_Home/component/index.spec.tsx)
- [F001-S05] 点击登录跳转P003 (tests/frontend/pages/P001_Home/component/index.spec.tsx)
- [F001-S06] 点击注册跳转P004 (tests/frontend/pages/P001_Home/component/index.spec.tsx)
- [F001-S07] 用户名下拉菜单显示 (tests/frontend/pages/P001_Home/component/index.spec.tsx)
- [F001-S08] 当前页面入口高亮 (tests/frontend/pages/P001_Home/component/index.spec.tsx)
- [F001-S09] 登录态过期自动跳转 (tests/frontend/pages/P001_Home/unit/index.spec.ts)
- [F002-S01] 展示常用功能卡片 (tests/frontend/pages/P001_Home/component/index.spec.tsx)
- [F002-S02] 已登录显示推荐 (tests/frontend/pages/P001_Home/component/index.spec.tsx)
- [F002-S03] 历史查询最多5条 (tests/frontend/pages/P001_Home/component/index.spec.tsx)
- [F002-S04] 点击查询跳转P002 (tests/frontend/pages/P001_Home/component/index.spec.tsx)
- [F002-S05] 点击订单查询跳转 (tests/frontend/pages/P001_Home/component/index.spec.tsx)
- [F002-S06] 点击历史填充条件 (tests/frontend/pages/P001_Home/component/index.spec.tsx)
- [F002-S07] 清除历史确认弹窗 (tests/frontend/pages/P001_Home/component/index.spec.tsx)
- [F002-S08] 未登录仅显示基础功能 (tests/frontend/pages/P001_Home/unit/index.spec.ts)
- [F002-S09] 推荐失败降级默认入口 (tests/frontend/pages/P001_Home/unit/index.spec.ts)
- [F003-S01] 站点模糊搜索 (tests/frontend/pages/P002_Search/unit/index.spec.ts)
- [F003-S05] 日期选择30天内 (tests/frontend/pages/P002_Search/unit/index.spec.ts)
- [F003-S06] 快捷日期选择 (tests/frontend/pages/P002_Search/unit/index.spec.ts)
- [F003-S08] 禁用过去日期 (tests/frontend/pages/P002_Search/unit/index.spec.ts)
- [F003-S09] 车次类型筛选 (tests/frontend/pages/P002_Search/unit/index.spec.ts)
- [F003-S10] 出发时间段筛选 (tests/frontend/pages/P002_Search/unit/index.spec.ts)
- [F003-S11] 仅显示有票开关 (tests/frontend/pages/P002_Search/unit/index.spec.ts)
- [F003-S12] 必填项完整校验 (tests/frontend/pages/P002_Search/integration/index.spec.tsx)
- [F003-S13] 查询提交显示加载 (tests/frontend/pages/P002_Search/component/index.spec.tsx)
- [F003-S16] 显示车次信息 (tests/frontend/pages/P002_Search/component/index.spec.tsx)
- [F003-S17] 显示余票信息 (tests/frontend/pages/P002_Search/component/index.spec.tsx)
- [F003-S21] 出发地目的地不相同 (tests/frontend/pages/P002_Search/unit/index.spec.ts)
- [F003-S05] 日期超出30天拦截 (tests/frontend/pages/P002_Search/unit/index.spec.ts)
- [F003-S11] 仅显示有票无结果 (tests/frontend/pages/P002_Search/unit/index.spec.ts)
- [F004-S12] 历时范围负数拦截 (tests/frontend/pages/P002_Search/unit/index.spec.ts)
- [F004-S13] 价格区间下限>上限 (tests/frontend/pages/P002_Search/unit/index.spec.ts)
- [F003-S10] 无效出发时间段 (tests/frontend/pages/P002_Search/unit/index.spec.ts)
- [F010-S16] 提交后按钮防抖 (tests/frontend/pages/P005_OrderFill/component/index.spec.tsx)

- [F011-S01] 用户名不可修改 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F011-S02] 显示真实姓名 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F011-S03] 身份证脱敏显示 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F011-S04] 手机脱敏显示 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F011-S05] 邮箱脱敏显示 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F011-S06] 显示账户时间 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F011-S07] 等级积分展示 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F011-S08] 实名状态展示 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F011-S16] 旧密码输入 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F011-S17] 新密码强度确认 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)

- [F012-S01] 乘车人列表显示 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F012-S02] 乘车人卡片展示 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F012-S03] 乘车人手机号可选 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F012-S04] 乘客类型显示 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F012-S05] 默认/编辑/删除 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F012-S06] 默认乘客标识 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F012-S08] 支持身份证类型 (tests/backend/modules/F012_PassengerManage/unit/index.spec.ts)
- [F012-S09] 支持护照类型 (tests/backend/modules/F012_PassengerManage/unit/index.spec.ts)
- [F012-S10] 支持通行证类型 (tests/backend/modules/F012_PassengerManage/unit/index.spec.ts)
- [F012-S12] 身份证校验位验证 (tests/backend/modules/F012_PassengerManage/unit/index.spec.ts)
- [F012-S13] 护照通行证验证 (tests/backend/modules/F012_PassengerManage/unit/index.spec.ts)
- [F012-S14] 实时验证反馈 (tests/backend/modules/F012_PassengerManage/unit/index.spec.ts)

- [F013-S01] 订单状态筛选 (tests/backend/modules/F013_OrderManage/unit/index.spec.ts)
- [F013-S02] 时间范围筛选 (tests/backend/modules/F013_OrderManage/unit/index.spec.ts)
- [F013-S03] 订单搜索规则 (tests/backend/modules/F013_OrderManage/unit/index.spec.ts)
- [F013-S04] 卡片显示订单号 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F013-S05] 显示车次信息 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F013-S06] 显示出发时间 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F013-S07] 显示乘客数量 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F013-S08] 显示金额与状态 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F013-S09] 显示操作按钮 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F013-S13] 每页10条规则 (tests/backend/modules/F013_OrderManage/unit/index.spec.ts)
- [F013-S15] 展开详情展示 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F013-S23] 跳转支付操作 (tests/backend/modules/F013_OrderManage/integration/index.spec.ts)
- [F013-S24] 取消订单操作 (tests/backend/modules/F013_OrderManage/integration/index.spec.ts)

- [F014-S09] 显示支付订单号 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F014-S10] 显示订单金额 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F014-S12] 显示支付倒计时 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F014-S13] 创建支付订单 (tests/backend/modules/F014_Payment/integration/index.spec.ts)
- [F014-S14] 跳转支付链接 (tests/backend/modules/F014_Payment/integration/index.spec.ts)
- [F014-S20] 支付成功展示 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F014-S22] 显示失败原因 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)

- [F015-S01] 改签资格规则 (tests/backend/modules/F015_ChangeTicket/unit/index.spec.ts)
- [F015-S02] 票种校验规则 (tests/backend/modules/F015_ChangeTicket/unit/index.spec.ts)
- [F015-S03] 改签次数限制 (tests/backend/modules/F015_ChangeTicket/unit/index.spec.ts)
- [F015-S04] 改签时间窗 (tests/backend/modules/F015_ChangeTicket/unit/index.spec.ts)
- [F015-S05] 显示当前票信息 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F015-S06] 选择新日期席别 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F015-S07] 显示改签规则 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F015-S09] 选择改签乘客 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F015-S12] 改签规则存量 (tests/backend/modules/F015_ChangeTicket/unit/index.spec.ts)
- [F015-S15] 生成改签订单 (tests/backend/modules/F015_ChangeTicket/integration/index.spec.ts)
- [F015-S16] 改签后差价 (tests/backend/modules/F015_ChangeTicket/integration/index.spec.ts)
- [F015-S18] 差额显示 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)

- [F016-S01] 导航栏退出登录 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F016-S02] 个人中心安全退 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F016-S03] 登出确认弹窗 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F016-S04] 清除本地token (tests/frontend/pages/P006_Profile/unit/index.spec.ts)
- [F016-S05] 清除session缓存 (tests/frontend/pages/P006_Profile/unit/index.spec.ts)
 - [F016-S06] 记录登出日志 (tests/frontend/pages/P006_Profile/unit/index.spec.ts)

## 新增用例索引（本轮）
- 更新页面像素级样式复刻：P001、P002、P003、P004、P005、P006
- 将 [F005-S16] 预订锁票跳转订单页 标记为 implemented（tests/e2e/complete_booking.spec.ts）
- [F016-S07] 登出更新导航 (tests/frontend/pages/P006_Profile/integration/index.spec.tsx)
- [F016-S08] 网络异常本地退 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
 - [F007-S03] 记住密码本地加密存储 (tests/frontend/pages/P003_Login/component/index.spec.tsx)
 - [F007-S06] 发送验证码倒计时禁用 (tests/frontend/pages/P003_Login/component/index.spec.tsx)
 - [F007-S11] 前端表单验证 (tests/frontend/pages/P003_Login/unit/index.spec.ts)
 - [F007-S12] 后端凭证校验 (tests/backend/modules/F007_UserLogin/integration/index.spec.ts)
 - [F007-S13] 生成会话token (tests/backend/modules/F007_UserLogin/integration/index.spec.ts)
 - [F008-S02] 检查手机号是否已注册 (tests/backend/modules/F008_UserRegister/integration/index.spec.ts)
 - [F008-S17] 前端校验后创建账户 (tests/backend/modules/F008_UserRegister/integration/index.spec.ts)
 - [F009-S12] 票种选择包含成人儿童学生 (tests/frontend/pages/P005_OrderFill/component/index.spec.tsx)
 - [F009-S22] 临时保存草稿 (tests/frontend/pages/P005_OrderFill/unit/index.spec.ts)
- [F004-S01] 类型筛选：G (tests/frontend/pages/P002_Search/unit/index.spec.ts)
- [F004-S02] 类型筛选：D/C (tests/frontend/pages/P002_Search/unit/index.spec.ts)
- [F004-S04] 时间段筛选 (tests/frontend/pages/P002_Search/unit/index.spec.ts)
- [F004-S08] 席别筛选 (tests/frontend/pages/P002_Search/unit/index.spec.ts)
- [F004-S10] 多站点筛选 (tests/frontend/pages/P002_Search/unit/index.spec.ts)
- [F004-S12] 历时范围 (tests/frontend/pages/P002_Search/unit/index.spec.ts)
- [F004-S13] 价格区间 (tests/frontend/pages/P002_Search/unit/index.spec.ts)
- [F004-S15] 实时过滤列表 (tests/frontend/pages/P002_Search/component/index.spec.tsx)
- [F004-S16] 显示结果数量 (tests/frontend/pages/P002_Search/component/index.spec.tsx)
- [F004-S18] 为空提示放宽 (tests/frontend/pages/P002_Search/component/index.spec.tsx)
- [F005-S01] 未登录跳转P003 (tests/frontend/pages/P002_Search/integration/index.spec.tsx)
- [F005-S02] 检查余票数量 (tests/frontend/pages/P002_Search/unit/index.spec.ts)
- [F005-S03] 乘车人信息完整性 (tests/frontend/pages/P002_Search/unit/index.spec.ts)
- [F005-S05] 显示可用席别余票 (tests/frontend/pages/P002_Search/component/index.spec.tsx)
- [F005-S06] 选择席别与数量 (tests/frontend/pages/P002_Search/component/index.spec.tsx)
- [F005-S09] 加载常用乘车人 (tests/frontend/pages/P002_Search/component/index.spec.tsx)
- [F005-S14] 显示订单明细总价 (tests/frontend/pages/P002_Search/component/index.spec.tsx)
- [F005-S15] 勾选协议后可提交 (tests/frontend/pages/P002_Search/unit/index.spec.ts)
- [F005-S16] 预订锁票跳转订单页 (tests/e2e/complete_booking.spec.ts)
- [F005-S17] 余票不足提示 (tests/frontend/pages/P002_Search/component/index.spec.tsx)
- [F006-S01] 自动推荐中转 (tests/frontend/pages/P002_Search/component/index.spec.tsx)
- [F006-S02] 用户选择中转方案 (tests/frontend/pages/P002_Search/component/index.spec.tsx)
- [F006-S03] 显示节省指标 (tests/frontend/pages/P002_Search/component/index.spec.tsx)
- [F006-S04] 查询中转站 (tests/frontend/pages/P002_Search/unit/index.spec.ts)
- [F006-S05] 换乘时间范围 (tests/frontend/pages/P002_Search/unit/index.spec.ts)
- [F006-S06] 生成中转方案 (tests/frontend/pages/P002_Search/unit/index.spec.ts)
- [F006-S07] 排序方式 (tests/frontend/pages/P002_Search/unit/index.spec.ts)
- [F006-S16] 换乘时间不足警告 (tests/frontend/pages/P002_Search/component/index.spec.tsx)
- [F007-S01] 账号密码登录输入 (tests/frontend/pages/P003_Login/component/index.spec.tsx)
- [F007-S03] 记住密码本地加密 (tests/frontend/pages/P003_Login/component/index.spec.tsx)
- [F007-S04] 连续失败启用验证码 (tests/frontend/pages/P003_Login/unit/index.spec.ts)
- [F007-S05] 手机号格式验证 (tests/frontend/pages/P003_Login/unit/index.spec.ts)
- [F007-S06] 发送验证码倒计时 (tests/frontend/pages/P003_Login/component/index.spec.tsx)
- [F007-S07] 验证码输入6位 (tests/frontend/pages/P003_Login/unit/index.spec.ts)
- [F007-S08] 验证码有效期5分钟 (tests/frontend/pages/P003_Login/unit/index.spec.ts)
- [F007-S11] 前端表单验证 (tests/frontend/pages/P003_Login/unit/index.spec.ts)
- [F007-S12] 后端凭证校验 (tests/backend/modules/F007_UserLogin/integration/index.spec.ts)
- [F007-S13] 生成会话token (tests/backend/modules/F007_UserLogin/integration/index.spec.ts)
- [F008-S01] 手机号11位验证 (tests/frontend/pages/P004_Register/unit/index.spec.ts)
- [F008-S02] 检查手机号是否已注册 (tests/backend/modules/F008_UserRegister/integration/index.spec.ts)
- [F008-S03] 发送验证码倒计时 (tests/frontend/pages/P004_Register/component/index.spec.tsx)
- [F008-S04] 验证码6位数字 (tests/frontend/pages/P004_Register/unit/index.spec.ts)
- [F008-S05] 验证码通过后继续 (tests/frontend/pages/P004_Register/unit/index.spec.ts)
- [F008-S06] 密码8-20位 (tests/frontend/pages/P004_Register/unit/index.spec.ts)
- [F008-S07] 密码包含字母数字 (tests/frontend/pages/P004_Register/unit/index.spec.ts)
- [F008-S08] 密码强度提示 (tests/frontend/pages/P004_Register/component/index.spec.tsx)
- [F008-S09] 确认密码二次验证 (tests/frontend/pages/P004_Register/unit/index.spec.ts)
- [F008-S17] 前端校验后创建账户 (tests/backend/modules/F008_UserRegister/integration/index.spec.ts)
- [F009-S01] 显示车次信息只读 (tests/frontend/pages/P005_OrderFill/component/index.spec.tsx)
- [F009-S02] 显示席别与数量 (tests/frontend/pages/P005_OrderFill/component/index.spec.tsx)
- [F009-S03] 显示票价明细 (tests/frontend/pages/P005_OrderFill/component/index.spec.tsx)
- [F009-S04] 显示15分钟倒计时 (tests/frontend/pages/P005_OrderFill/unit/index.spec.ts)
- [F009-S05] 少于5分钟红警 (tests/frontend/pages/P005_OrderFill/unit/index.spec.ts)
- [F009-S06] 超时自动释放座位提示 (tests/frontend/pages/P005_OrderFill/integration/index.spec.tsx)
- [F009-S07] 显示已选乘车人 (tests/frontend/pages/P005_OrderFill/component/index.spec.tsx)
- [F009-S12] 票种选择 (tests/frontend/pages/P005_OrderFill/component/index.spec.tsx)
- [F009-S15] 联系人手机号默认填充 (tests/frontend/pages/P005_OrderFill/component/index.spec.tsx)
- [F009-S22] 临时保存草稿 (tests/frontend/pages/P005_OrderFill/unit/index.spec.ts)
- [F010-S01] 检查必填项完整 (tests/backend/modules/F010_OrderSubmit/unit/index.spec.ts)
- [F010-S02] 证件号格式验证 (tests/backend/modules/F010_OrderSubmit/unit/index.spec.ts)
- [F010-S03] 确认订单未超时 (tests/backend/modules/F010_OrderSubmit/unit/index.spec.ts)
- [F010-S04] 检查余票充足 (tests/backend/modules/F010_OrderSubmit/unit/index.spec.ts)
- [F010-S05] 计算总价含保险 (tests/backend/modules/F010_OrderSubmit/unit/index.spec.ts)
- [F010-S06] 订单创建成功流程 (tests/e2e/complete_booking.spec.ts)
- [F010-S07] 锁座后的订单流程 (tests/e2e/complete_booking.spec.ts)
- [F010-S06] 生成唯一订单号 (tests/backend/modules/F010_OrderSubmit/integration/index.spec.ts)
- [F010-S07] 锁定座位资源 (tests/backend/modules/F010_OrderSubmit/integration/index.spec.ts)
- [F010-S08] 创建订单记录关联乘车人 (tests/backend/modules/F010_OrderSubmit/integration/index.spec.ts)
- [F010-S09] 设置支付超时30分钟 (tests/backend/modules/F010_OrderSubmit/integration/index.spec.ts)
- [F010-S16] 提交后按钮防抖 (tests/frontend/pages/P005_OrderFill/component/index.spec.tsx)
- [F011-S01] 显示用户名不可修改 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F011-S02] 显示真实姓名 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F011-S03] 身份证脱敏显示 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F011-S04] 手机号脱敏显示 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F011-S05] 邮箱脱敏显示 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F011-S06] 显示账户时间 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F011-S07] 显示账户等级积分 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F011-S08] 显示实名认证状态 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F011-S16] 修改密码输入旧密码 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F011-S17] 新密码强度验证并确认 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F012-S01] 显示所有乘车人 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F012-S02] 乘车人卡片展示 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F012-S03] 显示可选手机号 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F012-S04] 显示旅客类型 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F012-S05] 设为默认编辑删除 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F012-S06] 默认乘车人标识 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F012-S08] 姓名中文/英文规则 (tests/backend/modules/F012_PassengerManage/unit/index.spec.ts)
- [F012-S09] 证件类型选择规则 (tests/backend/modules/F012_PassengerManage/unit/index.spec.ts)
- [F012-S10] 证件号码与手机号 (tests/backend/modules/F012_PassengerManage/unit/index.spec.ts)
- [F012-S12] 身份证校验位验证 (tests/backend/modules/F012_PassengerManage/unit/index.spec.ts)
- [F012-S13] 护照通行证格式验证 (tests/backend/modules/F012_PassengerManage/unit/index.spec.ts)
- [F012-S14] 实时验证反馈 (tests/backend/modules/F012_PassengerManage/unit/index.spec.ts)
- [F013-S01] 订单状态筛选规则 (tests/backend/modules/F013_OrderManage/unit/index.spec.ts)
- [F013-S02] 时间范围筛选规则 (tests/backend/modules/F013_OrderManage/unit/index.spec.ts)
- [F013-S03] 订单号车次号搜索规则 (tests/backend/modules/F013_OrderManage/unit/index.spec.ts)
- [F013-S04] 卡片显示订单号 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F013-S05] 显示车次信息 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F013-S06] 显示出发时间 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F013-S07] 显示乘车人姓名数量 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F013-S08] 显示金额与状态标签 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F013-S09] 显示操作按钮 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F013-S10] 按创建时间倒序 (tests/backend/modules/F013_OrderManage/unit/index.spec.ts)
- [F013-S13] 每页10条规则 (tests/backend/modules/F013_OrderManage/unit/index.spec.ts)
- [F013-S15] 点击卡片展开详情 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F013-S23] 待支付立即支付跳转 (tests/backend/modules/F013_OrderManage/integration/index.spec.ts)
- [F013-S24] 待支付取消订单确认 (tests/backend/modules/F013_OrderManage/integration/index.spec.ts)
- [F014-S01] 微信扫码支付流程 (tests/backend/modules/F014_Payment/integration/index.spec.ts)
- [F014-S02] 微信APP支付流程 (tests/backend/modules/F014_Payment/integration/index.spec.ts)
- [F014-S03] 支付宝扫码支付流程 (tests/backend/modules/F014_Payment/integration/index.spec.ts)
- [F014-S04] 支付宝APP支付流程 (tests/backend/modules/F014_Payment/integration/index.spec.ts)
- [F014-S05] 银行卡快捷支付流程 (tests/backend/modules/F014_Payment/integration/index.spec.ts)
- [F014-S06] 网银支付添加新卡流程 (tests/backend/modules/F014_Payment/integration/index.spec.ts)
- [F014-S09] 显示订单号 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F014-S10] 显示订单金额优惠 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F014-S12] 显示支付倒计时 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F014-S13] 创建支付订单 (tests/backend/modules/F014_Payment/integration/index.spec.ts)
- [F014-S14] 调起支付接口跳转 (tests/backend/modules/F014_Payment/integration/index.spec.ts)
- [F014-S16] 支付状态轮询 (tests/backend/modules/F014_Payment/integration/index.spec.ts)
- [F014-S17] 支付成功更新订单状态 (tests/e2e/payment_success.spec.ts)
- [F014-S20] 显示支付成功页面 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F014-S22] 显示失败原因 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F015-S01] 验证订单状态资格 (tests/backend/modules/F015_ChangeTicket/unit/index.spec.ts)
- [F015-S02] 检查票类型资格 (tests/backend/modules/F015_ChangeTicket/unit/index.spec.ts)
- [F015-S03] 检查改签次数限制 (tests/backend/modules/F015_ChangeTicket/unit/index.spec.ts)
- [F015-S04] 检查开车前30分钟 (tests/backend/modules/F015_ChangeTicket/unit/index.spec.ts)
- [F015-S05] 显示改签规则说明 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F015-S06] 默认显示同路线车次 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F015-S07] 日期范围前后3天 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F015-S09] 显示可改签车次余票 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F015-S12] 差价计算 (tests/backend/modules/F015_ChangeTicket/unit/index.spec.ts)
- [F015-S15] 协议确认提交改签请求 (tests/backend/modules/F015_ChangeTicket/integration/index.spec.ts)
- [F015-S16] 改签成功更新订单 (tests/backend/modules/F015_ChangeTicket/integration/index.spec.ts)
- [F015-S18] 余票不足提示 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F016-S01] 导航栏点击退出登录 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F016-S02] 个人中心安全退出 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F016-S03] 登出确认弹窗 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F016-S04] 清除本地token (tests/frontend/pages/P006_Profile/unit/index.spec.ts)
- [F016-S05] 清除session与缓存 (tests/frontend/pages/P006_Profile/unit/index.spec.ts)
- [F016-S06] 记录登出日志 (tests/frontend/pages/P006_Profile/unit/index.spec.ts)
- [F016-S07] 跳转首页更新导航 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)
- [F016-S08] 网络异常本地登出 (tests/frontend/pages/P006_Profile/component/index.spec.tsx)

## 新增用例索引（本轮）
- [F003-S01] 站点模糊搜索 (tests/frontend/pages/P002_Search/unit/index.spec.ts)
- [F003-S05] 日期选择30天内 (tests/frontend/pages/P002_Search/unit/index.spec.ts)
- [F003-S08] 禁用过去日期 (tests/frontend/pages/P002_Search/unit/index.spec.ts)
- [F003-S21] 出发地目的地不相同 (tests/frontend/pages/P002_Search/unit/index.spec.ts)
- [F004-S01] 类型筛选：G (tests/frontend/pages/P002_Search/unit/index.spec.ts)
- [F004-S04] 时间段筛选 (tests/frontend/pages/P002_Search/unit/index.spec.ts)
- [F003-S13] 查询提交显示加载 (tests/frontend/pages/P002_Search/component/index.spec.tsx)
- [F003-S16] 显示车次信息 (tests/frontend/pages/P002_Search/component/index.spec.tsx)
- [F004-S16] 显示结果数量 (tests/frontend/pages/P002_Search/component/index.spec.tsx)
- [F003-S12] 必填项完整校验 (tests/frontend/pages/P002_Search/integration/index.spec.tsx)

## 新增用例索引（本轮）
- [F007-S01] 账号密码登录输入 (tests/frontend/pages/P003_Login/component/index.spec.tsx)
- [F007-S04] 连续失败启用验证码 (tests/frontend/pages/P003_Login/unit/index.spec.ts)
- [F007-S05] 手机号格式验证 (tests/frontend/pages/P003_Login/unit/index.spec.ts)
- [F007-S07] 验证码输入6位 (tests/frontend/pages/P003_Login/unit/index.spec.ts)
- [F007-S08] 验证码有效期5分钟 (tests/frontend/pages/P003_Login/unit/index.spec.ts)
- [F008-S01] 手机号11位验证 (tests/frontend/pages/P004_Register/unit/index.spec.ts)
- [F008-S03] 发送验证码倒计时 (tests/frontend/pages/P004_Register/component/index.spec.tsx)
- [F008-S04] 验证码6位数字 (tests/frontend/pages/P004_Register/unit/index.spec.ts)
- [F008-S06] 密码8-20位 (tests/frontend/pages/P004_Register/unit/index.spec.ts)
- [F008-S07] 密码包含字母数字 (tests/frontend/pages/P004_Register/unit/index.spec.ts)
- [F008-S09] 确认密码二次验证 (tests/frontend/pages/P004_Register/unit/index.spec.ts)
- [F009-S01] 显示车次信息只读 (tests/frontend/pages/P005_OrderFill/component/index.spec.tsx)
- [F009-S02] 显示席别与数量 (tests/frontend/pages/P005_OrderFill/component/index.spec.tsx)
- [F009-S03] 显示票价明细 (tests/frontend/pages/P005_OrderFill/component/index.spec.tsx)
- [F009-S04] 显示15分钟倒计时 (tests/frontend/pages/P005_OrderFill/unit/index.spec.ts)
- [F009-S05] 少于5分钟红警 (tests/frontend/pages/P005_OrderFill/unit/index.spec.ts)
- [F009-S15] 联系人手机号默认填充 (tests/frontend/pages/P005_OrderFill/component/index.spec.tsx)
- [F010-S01] 检查必填项完整 (tests/backend/modules/F010_OrderSubmit/unit/index.spec.ts)
- [F010-S02] 证件号格式验证 (tests/backend/modules/F010_OrderSubmit/unit/index.spec.ts)
- [F010-S03] 确认订单未超时 (tests/backend/modules/F010_OrderSubmit/unit/index.spec.ts)
- [F010-S05] 计算总价含保险 (tests/backend/modules/F010_OrderSubmit/unit/index.spec.ts)
- [F014-S03] 支付倒计时30分钟 (tests/backend/modules/F014_Payment/integration/index.spec.ts)
- [F014-S06] 创建支付订单包含金额 (tests/backend/modules/F014_Payment/integration/index.spec.ts)

## 新增用例索引（本轮）
- [F003-S06] 快捷日期选择 (tests/frontend/pages/P002_Search/unit/index.spec.ts)
- [F003-S09] 车次类型筛选 (tests/frontend/pages/P002_Search/unit/index.spec.ts)
- [F003-S10] 出发时间段筛选 (tests/frontend/pages/P002_Search/unit/index.spec.ts)
- [F003-S11] 仅显示有票开关 (tests/frontend/pages/P002_Search/unit/index.spec.ts)
- [F003-S17] 显示余票信息 (tests/frontend/pages/P002_Search/component/index.spec.tsx)
- [F004-S02] 类型筛选：D/C (tests/frontend/pages/P002_Search/unit/index.spec.ts)
- [F004-S08] 席别筛选 (tests/frontend/pages/P002_Search/unit/index.spec.ts)
- [F004-S10] 多站点筛选 (tests/frontend/pages/P002_Search/unit/index.spec.ts)
- [F004-S12] 历时范围 (tests/frontend/pages/P002_Search/unit/index.spec.ts)
- [F004-S13] 价格区间 (tests/frontend/pages/P002_Search/unit/index.spec.ts)
- [F004-S15] 实时过滤列表 (tests/frontend/pages/P002_Search/component/index.spec.tsx)
- [F009-S06] 超时自动释放座位提示 (tests/frontend/pages/P005_OrderFill/integration/index.spec.tsx)
- [F010-S06] 生成唯一订单号 (tests/backend/modules/F010_OrderSubmit/integration/index.spec.ts)
- [F010-S07] 锁定座位资源 (tests/backend/modules/F010_OrderSubmit/integration/index.spec.ts)
- [F010-S08] 创建订单记录关联乘车人 (tests/backend/modules/F010_OrderSubmit/integration/index.spec.ts)
- [F010-S09] 设置支付超时30分钟 (tests/backend/modules/F010_OrderSubmit/integration/index.spec.ts)

## 全量子需求覆盖索引
排序规则：按 `feature_id` 升序、`sub_requirement_id` 升序

统计校验：169/169 条目（通过）
- F001-S01 — 实现 — 类型: Component — Page:P001 — 路径: tests/frontend/pages/P001_Home/component/index.spec.tsx
- F001-S02 — 实现 — 类型: Component — Page:P001 — 路径: tests/frontend/pages/P001_Home/component/index.spec.tsx
- F001-S03 — 实现 — 类型: Component — Page:P001 — 路径: tests/frontend/pages/P001_Home/component/index.spec.tsx
- F001-S04 — 实现 — 类型: Component — Page:P001 — 路径: tests/frontend/pages/P001_Home/component/index.spec.tsx
- F001-S05 — 实现 — 类型: Component — Page:P001 — 路径: tests/frontend/pages/P001_Home/component/index.spec.tsx
- F001-S06 — 实现 — 类型: Component — Page:P001 — 路径: tests/frontend/pages/P001_Home/component/index.spec.tsx
- F001-S07 — 实现 — 类型: Component — Page:P001 — 路径: tests/frontend/pages/P001_Home/component/index.spec.tsx
- F001-S08 — 实现 — 类型: Component — Page:P001 — 路径: tests/frontend/pages/P001_Home/component/index.spec.tsx
- F001-S09 — 实现 — 类型: Unit — Page:P001 — 路径: tests/frontend/pages/P001_Home/unit/index.spec.ts
- F002-S01 — 实现 — 类型: Component — Page:P001 — 路径: tests/frontend/pages/P001_Home/component/index.spec.tsx
- F002-S02 — 实现 — 类型: Component — Page:P001 — 路径: tests/frontend/pages/P001_Home/component/index.spec.tsx
- F002-S03 — 实现 — 类型: Component — Page:P001 — 路径: tests/frontend/pages/P001_Home/component/index.spec.tsx
- F002-S04 — 实现 — 类型: Component — Page:P001 — 路径: tests/frontend/pages/P001_Home/component/index.spec.tsx
- F002-S05 — 实现 — 类型: Component — Page:P001 — 路径: tests/frontend/pages/P001_Home/component/index.spec.tsx
- F002-S06 — 实现 — 类型: Component — Page:P001 — 路径: tests/frontend/pages/P001_Home/component/index.spec.tsx
- F002-S07 — 实现 — 类型: Component — Page:P001 — 路径: tests/frontend/pages/P001_Home/component/index.spec.tsx
- F002-S08 — 实现 — 类型: Unit — Page:P001 — 路径: tests/frontend/pages/P001_Home/unit/index.spec.ts
- F002-S09 — 实现 — 类型: Unit — Page:P001 — 路径: tests/frontend/pages/P001_Home/unit/index.spec.ts
- F003-S01 — 实现 — 类型: Unit — Page:P002 — 路径: tests/frontend/pages/P002_Search/unit/index.spec.ts
- F003-S05 — 实现 — 类型: Unit — Page:P002 — 路径: tests/frontend/pages/P002_Search/unit/index.spec.ts
- F003-S06 — 实现 — 类型: Unit — Page:P002 — 路径: tests/frontend/pages/P002_Search/unit/index.spec.ts
- F003-S08 — 实现 — 类型: Unit — Page:P002 — 路径: tests/frontend/pages/P002_Search/unit/index.spec.ts
- F003-S09 — 实现 — 类型: Unit — Page:P002 — 路径: tests/frontend/pages/P002_Search/unit/index.spec.ts
- F003-S10 — 实现 — 类型: Unit — Page:P002 — 路径: tests/frontend/pages/P002_Search/unit/index.spec.ts
- F003-S11 — 实现 — 类型: Unit — Page:P002 — 路径: tests/frontend/pages/P002_Search/unit/index.spec.ts
- F003-S12 — 实现 — 类型: Integration — Page:P002 — 路径: tests/frontend/pages/P002_Search/integration/index.spec.tsx
- F003-S13 — 实现 — 类型: Component — Page:P002 — 路径: tests/frontend/pages/P002_Search/component/index.spec.tsx
- F003-S16 — 实现 — 类型: Component — Page:P002 — 路径: tests/frontend/pages/P002_Search/component/index.spec.tsx
- F003-S17 — 实现 — 类型: Component — Page:P002 — 路径: tests/frontend/pages/P002_Search/component/index.spec.tsx
- F003-S21 — 实现 — 类型: Unit — Page:P002 — 路径: tests/frontend/pages/P002_Search/unit/index.spec.ts
- F004-S01 — 实现 — 类型: Unit — Page:P002 — 路径: tests/frontend/pages/P002_Search/unit/index.spec.ts
- F004-S02 — 实现 — 类型: Unit — Page:P002 — 路径: tests/frontend/pages/P002_Search/unit/index.spec.ts
- F004-S04 — 实现 — 类型: Unit — Page:P002 — 路径: tests/frontend/pages/P002_Search/unit/index.spec.ts
- F004-S08 — 实现 — 类型: Unit — Page:P002 — 路径: tests/frontend/pages/P002_Search/unit/index.spec.ts
- F004-S10 — 实现 — 类型: Unit — Page:P002 — 路径: tests/frontend/pages/P002_Search/unit/index.spec.ts
- F004-S12 — 实现 — 类型: Unit — Page:P002 — 路径: tests/frontend/pages/P002_Search/unit/index.spec.ts
- F004-S13 — 实现 — 类型: Unit — Page:P002 — 路径: tests/frontend/pages/P002_Search/unit/index.spec.ts
- F004-S15 — 实现 — 类型: Component — Page:P002 — 路径: tests/frontend/pages/P002_Search/component/index.spec.tsx
- F004-S16 — 实现 — 类型: Component — Page:P002 — 路径: tests/frontend/pages/P002_Search/component/index.spec.tsx
- F004-S18 — 实现 — 类型: Component — Page:P002 — 路径: tests/frontend/pages/P002_Search/component/index.spec.tsx
- F005-S01 — 实现 — 类型: Integration — Page:P002 — 路径: tests/frontend/pages/P002_Search/integration/index.spec.tsx
- F005-S02 — 实现 — 类型: Unit — Page:P002 — 路径: tests/frontend/pages/P002_Search/unit/index.spec.ts
- F005-S03 — 实现 — 类型: Unit — Page:P002 — 路径: tests/frontend/pages/P002_Search/unit/index.spec.ts
- F005-S05 — 实现 — 类型: Component — Page:P002 — 路径: tests/frontend/pages/P002_Search/component/index.spec.tsx
- F005-S06 — 实现 — 类型: Component — Page:P002 — 路径: tests/frontend/pages/P002_Search/component/index.spec.tsx
- F005-S09 — 实现 — 类型: Component — Page:P002 — 路径: tests/frontend/pages/P002_Search/component/index.spec.tsx
- F005-S14 — 实现 — 类型: Component — Page:P002 — 路径: tests/frontend/pages/P002_Search/component/index.spec.tsx
- F005-S15 — 实现 — 类型: Unit — Page:P002 — 路径: tests/frontend/pages/P002_Search/unit/index.spec.ts
- F005-S16 — 实现 — 类型: E2E — Page:P002 — 路径: tests/e2e/complete_booking.spec.ts
- F005-S17 — 实现 — 类型: Component — Page:P002 — 路径: tests/frontend/pages/P002_Search/component/index.spec.tsx
- F006-S01 — 实现 — 类型: Component — Page:P002 — 路径: tests/frontend/pages/P002_Search/component/index.spec.tsx
- F006-S02 — 实现 — 类型: Component — Page:P002 — 路径: tests/frontend/pages/P002_Search/component/index.spec.tsx
- F006-S03 — 实现 — 类型: Component — Page:P002 — 路径: tests/frontend/pages/P002_Search/component/index.spec.tsx
- F006-S04 — 实现 — 类型: Unit — Page:P002 — 路径: tests/frontend/pages/P002_Search/unit/index.spec.ts
- F006-S05 — 实现 — 类型: Unit — Page:P002 — 路径: tests/frontend/pages/P002_Search/unit/index.spec.ts
- F006-S06 — 实现 — 类型: Unit — Page:P002 — 路径: tests/frontend/pages/P002_Search/unit/index.spec.ts
- F006-S07 — 实现 — 类型: Unit — Page:P002 — 路径: tests/frontend/pages/P002_Search/unit/index.spec.ts
- F006-S16 — 实现 — 类型: Component — Page:P002 — 路径: tests/frontend/pages/P002_Search/component/index.spec.tsx
- F007-S01 — 实现 — 类型: Component — Page:P003 — 路径: tests/frontend/pages/P003_Login/component/index.spec.tsx
- F007-S03 — 实现 — 类型: Component — Page:P003 — 路径: tests/frontend/pages/P003_Login/component/index.spec.tsx
- F007-S04 — 实现 — 类型: Unit — Page:P003 — 路径: tests/frontend/pages/P003_Login/unit/index.spec.ts
- F007-S05 — 实现 — 类型: Unit — Page:P003 — 路径: tests/frontend/pages/P003_Login/unit/index.spec.ts
- F007-S06 — 实现 — 类型: Component — Page:P003 — 路径: tests/frontend/pages/P003_Login/component/index.spec.tsx
- F007-S07 — 实现 — 类型: Unit — Page:P003 — 路径: tests/frontend/pages/P003_Login/unit/index.spec.ts
- F007-S08 — 实现 — 类型: Unit — Page:P003 — 路径: tests/frontend/pages/P003_Login/unit/index.spec.ts
- F007-S11 — 实现 — 类型: Unit — Page:P003 — 路径: tests/frontend/pages/P003_Login/unit/index.spec.ts
- F007-S12 — 实现 — 类型: Integration — Page:P003 — 路径: tests/backend/modules/F007_UserLogin/integration/index.spec.ts
- F007-S13 — 实现 — 类型: Integration — Page:P003 — 路径: tests/backend/modules/F007_UserLogin/integration/index.spec.ts
- F008-S01 — 实现 — 类型: Unit — Page:P004 — 路径: tests/frontend/pages/P004_Register/unit/index.spec.ts
- F008-S02 — 实现 — 类型: Integration — Page:P004 — 路径: tests/backend/modules/F008_UserRegister/integration/index.spec.ts
- F008-S03 — 实现 — 类型: Component — Page:P004 — 路径: tests/frontend/pages/P004_Register/component/index.spec.tsx
- F008-S04 — 实现 — 类型: Unit — Page:P004 — 路径: tests/frontend/pages/P004_Register/unit/index.spec.ts
- F008-S05 — 实现 — 类型: Unit — Page:P004 — 路径: tests/frontend/pages/P004_Register/unit/index.spec.ts
- F008-S06 — 实现 — 类型: Unit — Page:P004 — 路径: tests/frontend/pages/P004_Register/unit/index.spec.ts
- F008-S07 — 实现 — 类型: Unit — Page:P004 — 路径: tests/frontend/pages/P004_Register/unit/index.spec.ts
- F008-S08 — 实现 — 类型: Component — Page:P004 — 路径: tests/frontend/pages/P004_Register/component/index.spec.tsx
- F008-S09 — 实现 — 类型: Unit — Page:P004 — 路径: tests/frontend/pages/P004_Register/unit/index.spec.ts
- F008-S17 — 实现 — 类型: Integration — Page:P004 — 路径: tests/backend/modules/F008_UserRegister/integration/index.spec.ts
- F009-S01 — 实现 — 类型: Component — Page:P005 — 路径: tests/frontend/pages/P005_OrderFill/component/index.spec.tsx
- F009-S02 — 实现 — 类型: Component — Page:P005 — 路径: tests/frontend/pages/P005_OrderFill/component/index.spec.tsx
- F009-S03 — 实现 — 类型: Component — Page:P005 — 路径: tests/frontend/pages/P005_OrderFill/component/index.spec.tsx
- F009-S04 — 实现 — 类型: Unit — Page:P005 — 路径: tests/frontend/pages/P005_OrderFill/unit/index.spec.ts
- F009-S05 — 实现 — 类型: Unit — Page:P005 — 路径: tests/frontend/pages/P005_OrderFill/unit/index.spec.ts
- F009-S06 — 实现 — 类型: Integration — Page:P005 — 路径: tests/frontend/pages/P005_OrderFill/integration/index.spec.tsx
- F009-S07 — 实现 — 类型: Component — Page:P005 — 路径: tests/frontend/pages/P005_OrderFill/component/index.spec.tsx
- F009-S12 — 实现 — 类型: Component — Page:P005 — 路径: tests/frontend/pages/P005_OrderFill/component/index.spec.tsx
- F009-S15 — 实现 — 类型: Component — Page:P005 — 路径: tests/frontend/pages/P005_OrderFill/component/index.spec.tsx
- F009-S22 — 实现 — 类型: Unit — Page:P005 — 路径: tests/frontend/pages/P005_OrderFill/unit/index.spec.ts
- F010-S01 — 实现 — 类型: Unit — Page:P005 — 路径: tests/backend/modules/F010_OrderSubmit/unit/index.spec.ts
- F010-S02 — 实现 — 类型: Unit — Page:P005 — 路径: tests/backend/modules/F010_OrderSubmit/unit/index.spec.ts
- F010-S03 — 实现 — 类型: Unit — Page:P005 — 路径: tests/backend/modules/F010_OrderSubmit/unit/index.spec.ts
- F010-S04 — 实现 — 类型: Unit — Page:P005 — 路径: tests/backend/modules/F010_OrderSubmit/unit/index.spec.ts
- F010-S05 — 实现 — 类型: Unit — Page:P005 — 路径: tests/backend/modules/F010_OrderSubmit/unit/index.spec.ts
- F010-S06 — 实现 — 类型: Integration — Page:P005 — 路径: tests/backend/modules/F010_OrderSubmit/integration/index.spec.ts
- F010-S07 — 实现 — 类型: Integration — Page:P005 — 路径: tests/backend/modules/F010_OrderSubmit/integration/index.spec.ts
- F010-S08 — 实现 — 类型: Integration — Page:P005 — 路径: tests/backend/modules/F010_OrderSubmit/integration/index.spec.ts
- F010-S09 — 实现 — 类型: Integration — Page:P005 — 路径: tests/backend/modules/F010_OrderSubmit/integration/index.spec.ts
- F010-S16 — 实现 — 类型: Component — Page:P005 — 路径: tests/frontend/pages/P005_OrderFill/component/index.spec.tsx
- F011-S01 — 实现 — 类型: Component — Page:P006 — 路径: tests/frontend/pages/P006_Profile/component/index.spec.tsx
- F011-S02 — 实现 — 类型: Component — Page:P006 — 路径: tests/frontend/pages/P006_Profile/component/index.spec.tsx
- F011-S03 — 实现 — 类型: Component — Page:P006 — 路径: tests/frontend/pages/P006_Profile/component/index.spec.tsx
- F011-S04 — 实现 — 类型: Component — Page:P006 — 路径: tests/frontend/pages/P006_Profile/component/index.spec.tsx
- F011-S05 — 实现 — 类型: Component — Page:P006 — 路径: tests/frontend/pages/P006_Profile/component/index.spec.tsx
- F011-S06 — 实现 — 类型: Component — Page:P006 — 路径: tests/frontend/pages/P006_Profile/component/index.spec.tsx
- F011-S07 — 实现 — 类型: Component — Page:P006 — 路径: tests/frontend/pages/P006_Profile/component/index.spec.tsx
- F011-S08 — 实现 — 类型: Component — Page:P006 — 路径: tests/frontend/pages/P006_Profile/component/index.spec.tsx
- F011-S16 — 实现 — 类型: Component — Page:P006 — 路径: tests/frontend/pages/P006_Profile/component/index.spec.tsx
- F011-S17 — 实现 — 类型: Component — Page:P006 — 路径: tests/frontend/pages/P006_Profile/component/index.spec.tsx
- F012-S01 — 实现 — 类型: Component — Page:P006 — 路径: tests/frontend/pages/P006_Profile/component/index.spec.tsx
- F012-S02 — 实现 — 类型: Component — Page:P006 — 路径: tests/frontend/pages/P006_Profile/component/index.spec.tsx
- F012-S03 — 实现 — 类型: Component — Page:P006 — 路径: tests/frontend/pages/P006_Profile/component/index.spec.tsx
- F012-S04 — 实现 — 类型: Component — Page:P006 — 路径: tests/frontend/pages/P006_Profile/component/index.spec.tsx
- F012-S05 — 实现 — 类型: Component — Page:P006 — 路径: tests/frontend/pages/P006_Profile/component/index.spec.tsx
- F012-S06 — 实现 — 类型: Component — Page:P006 — 路径: tests/frontend/pages/P006_Profile/component/index.spec.tsx
- F012-S08 — 实现 — 类型: Unit — Page:P006 — 路径: tests/backend/modules/F012_PassengerManage/unit/index.spec.ts
- F012-S09 — 实现 — 类型: Unit — Page:P006 — 路径: tests/backend/modules/F012_PassengerManage/unit/index.spec.ts
- F012-S10 — 实现 — 类型: Unit — Page:P006 — 路径: tests/backend/modules/F012_PassengerManage/unit/index.spec.ts
- F012-S12 — 实现 — 类型: Unit — Page:P006 — 路径: tests/backend/modules/F012_PassengerManage/unit/index.spec.ts
- F012-S13 — 实现 — 类型: Unit — Page:P006 — 路径: tests/backend/modules/F012_PassengerManage/unit/index.spec.ts
- F012-S14 — 实现 — 类型: Unit — Page:P006 — 路径: tests/backend/modules/F012_PassengerManage/unit/index.spec.ts
- F013-S01 — 实现 — 类型: Unit — Page:P006 — 路径: tests/backend/modules/F013_OrderManage/unit/index.spec.ts
- F013-S02 — 实现 — 类型: Unit — Page:P006 — 路径: tests/backend/modules/F013_OrderManage/unit/index.spec.ts
- F013-S03 — 实现 — 类型: Unit — Page:P006 — 路径: tests/backend/modules/F013_OrderManage/unit/index.spec.ts
- F013-S04 — 实现 — 类型: Component — Page:P006 — 路径: tests/frontend/pages/P006_Profile/component/index.spec.tsx
- F013-S05 — 实现 — 类型: Component — Page:P006 — 路径: tests/frontend/pages/P006_Profile/component/index.spec.tsx
- F013-S06 — 实现 — 类型: Component — Page:P006 — 路径: tests/frontend/pages/P006_Profile/component/index.spec.tsx
- F013-S07 — 实现 — 类型: Component — Page:P006 — 路径: tests/frontend/pages/P006_Profile/component/index.spec.tsx
- F013-S08 — 实现 — 类型: Component — Page:P006 — 路径: tests/frontend/pages/P006_Profile/component/index.spec.tsx
- F013-S09 — 实现 — 类型: Component — Page:P006 — 路径: tests/frontend/pages/P006_Profile/component/index.spec.tsx
- F013-S10 — 实现 — 类型: Unit — Page:P006 — 路径: tests/backend/modules/F013_OrderManage/unit/index.spec.ts
- F013-S13 — 实现 — 类型: Unit — Page:P006 — 路径: tests/backend/modules/F013_OrderManage/unit/index.spec.ts
- F013-S15 — 实现 — 类型: Component — Page:P006 — 路径: tests/frontend/pages/P006_Profile/component/index.spec.tsx
- F013-S23 — 实现 — 类型: Integration — Page:P006 — 路径: tests/backend/modules/F013_OrderManage/integration/index.spec.ts
- F013-S24 — 实现 — 类型: Integration — Page:P006 — 路径: tests/backend/modules/F013_OrderManage/integration/index.spec.ts
- F014-S01 — 实现 — 类型: Integration — Page:P006 — 路径: tests/backend/modules/F014_Payment/integration/index.spec.ts
- F014-S02 — 实现 — 类型: Integration — Page:P006 — 路径: tests/backend/modules/F014_Payment/integration/index.spec.ts
- F014-S03 — 实现 — 类型: Integration — Page:P006 — 路径: tests/backend/modules/F014_Payment/integration/index.spec.ts
- F014-S04 — 实现 — 类型: Integration — Page:P006 — 路径: tests/backend/modules/F014_Payment/integration/index.spec.ts
- F014-S05 — 实现 — 类型: Integration — Page:P006 — 路径: tests/backend/modules/F014_Payment/integration/index.spec.ts
- F014-S06 — 实现 — 类型: Integration — Page:P006 — 路径: tests/backend/modules/F014_Payment/integration/index.spec.ts
- F014-S09 — 实现 — 类型: Component — Page:P006 — 路径: tests/frontend/pages/P006_Profile/component/index.spec.tsx
- F014-S10 — 实现 — 类型: Component — Page:P006 — 路径: tests/frontend/pages/P006_Profile/component/index.spec.tsx
- F014-S12 — 实现 — 类型: Component — Page:P006 — 路径: tests/frontend/pages/P006_Profile/component/index.spec.tsx
- F014-S13 — 实现 — 类型: Integration — Page:P006 — 路径: tests/backend/modules/F014_Payment/integration/index.spec.ts
- F014-S14 — 实现 — 类型: Integration — Page:P006 — 路径: tests/backend/modules/F014_Payment/integration/index.spec.ts
- F014-S16 — 实现 — 类型: Integration — Page:P006 — 路径: tests/backend/modules/F014_Payment/integration/index.spec.ts
- F014-S17 — 实现 — 类型: E2E — Page:P006 — 路径: tests/e2e/payment_success.spec.ts
- F014-S20 — 实现 — 类型: Component — Page:P006 — 路径: tests/frontend/pages/P006_Profile/component/index.spec.tsx
- F014-S22 — 实现 — 类型: Component — Page:P006 — 路径: tests/frontend/pages/P006_Profile/component/index.spec.tsx
- F015-S01 — 实现 — 类型: Unit — Page:P006 — 路径: tests/backend/modules/F015_ChangeTicket/unit/index.spec.ts
- F015-S02 — 实现 — 类型: Unit — Page:P006 — 路径: tests/backend/modules/F015_ChangeTicket/unit/index.spec.ts
- F015-S03 — 实现 — 类型: Unit — Page:P006 — 路径: tests/backend/modules/F015_ChangeTicket/unit/index.spec.ts
- F015-S04 — 实现 — 类型: Unit — Page:P006 — 路径: tests/backend/modules/F015_ChangeTicket/unit/index.spec.ts
- F015-S05 — 实现 — 类型: Component — Page:P006 — 路径: tests/frontend/pages/P006_Profile/component/index.spec.tsx
- F015-S06 — 实现 — 类型: Component — Page:P006 — 路径: tests/frontend/pages/P006_Profile/component/index.spec.tsx
- F015-S07 — 实现 — 类型: Component — Page:P006 — 路径: tests/frontend/pages/P006_Profile/component/index.spec.tsx
- F015-S09 — 实现 — 类型: Component — Page:P006 — 路径: tests/frontend/pages/P006_Profile/component/index.spec.tsx
- F015-S12 — 实现 — 类型: Unit — Page:P006 — 路径: tests/backend/modules/F015_ChangeTicket/unit/index.spec.ts
- F015-S15 — 实现 — 类型: Integration — Page:P006 — 路径: tests/backend/modules/F015_ChangeTicket/integration/index.spec.ts
- F015-S16 — 实现 — 类型: Integration — Page:P006 — 路径: tests/backend/modules/F015_ChangeTicket/integration/index.spec.ts
- F015-S18 — 实现 — 类型: Component — Page:P006 — 路径: tests/frontend/pages/P006_Profile/component/index.spec.tsx
- F016-S01 — 实现 — 类型: Component — Page:P006 — 路径: tests/frontend/pages/P006_Profile/component/index.spec.tsx
- F016-S02 — 实现 — 类型: Component — Page:P006 — 路径: tests/frontend/pages/P006_Profile/component/index.spec.tsx
- F016-S03 — 实现 — 类型: Component — Page:P006 — 路径: tests/frontend/pages/P006_Profile/component/index.spec.tsx
- F016-S04 — 实现 — 类型: Unit — Page:P006 — 路径: tests/frontend/pages/P006_Profile/unit/index.spec.ts
- F016-S05 — 实现 — 类型: Unit — Page:P006 — 路径: tests/frontend/pages/P006_Profile/unit/index.spec.ts
- F016-S06 — 实现 — 类型: Unit — Page:P006 — 路径: tests/frontend/pages/P006_Profile/unit/index.spec.ts
- F016-S07 — 实现 — 类型: Component — Page:P006 — 路径: tests/frontend/pages/P006_Profile/component/index.spec.tsx
- F016-S08 — 实现 — 类型: Component — Page:P006 — 路径: tests/frontend/pages/P006_Profile/component/index.spec.tsx