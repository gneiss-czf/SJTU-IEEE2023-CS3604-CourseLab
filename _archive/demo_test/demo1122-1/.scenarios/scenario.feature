# ==============================================================================
# MODULE: P001 - 首页
# ==============================================================================

Feature: F001 导航栏访问

  # --- Group: Happy Path ---

  @req:F001-S01 @prio:Medium @type:Happy
  Scenario: 导航栏固定顶部
    Given 用户位于 P001 首页顶部
    When 向页面下滚动 500 像素
    Then 导航栏仍固定在顶部

  @req:F001-S02 @prio:High @type:Happy
  Scenario: 未登录显示登录/注册入口
    Given 用户未登录状态
    When 访问 P001 首页
    Then 导航栏显示 "登录" 与 "注册" 入口

  @req:F001-S03 @prio:Medium @type:Happy
  Scenario: 已登录显示用户名与头像
    Given 用户已登录，用户名 "张三"，头像已配置
    When 访问 P001 首页
    Then 导航栏显示用户名 "张三" 与头像

  @req:F001-S04 @prio:Medium @type:Happy
  Scenario: 显示主要功能入口
    Given 用户在 P001 首页
    Then 导航栏显示 "首页"、"查询"、"个人中心"

  @req:F001-S05 @prio:High @type:Happy
  Scenario: 点击登录按钮跳转 P003
    Given 用户未登录状态
    When 点击导航栏 "登录"
    Then 跳转至 P003 登录页

  @req:F001-S06 @prio:High @type:Happy
  Scenario: 点击注册按钮跳转 P004
    Given 用户未登录状态
    When 点击导航栏 "注册"
    Then 跳转至 P004 注册页

  @req:F001-S07 @prio:Medium @type:Happy
  Scenario: 点击用户名显示下拉菜单
    Given 用户已登录状态
    When 点击导航栏用户名
    Then 显示下拉菜单，包含 "个人中心" 与 "退出登录"

  @req:F001-S08 @prio:Medium @type:Happy
  Scenario: 当前页面高亮显示
    Given 用户位于 P001 首页
    When 导航栏渲染完成
    Then "首页" 入口高亮显示

  @req:F001-S01 @req:F001-S02 @req:F001-S05 @req:F001-S06 @req:F001-S08 @prio:High @type:Happy
  Scenario: 导航栏正常访问与导航（E2E）
    Given 用户未登录状态
    And 访问 P001 首页
    Then 导航栏固定顶部且显示登录/注册入口
    When 点击 "登录" 后返回并点击 "注册"
    Then 分别跳转至 P003 与 P004 且 "首页" 高亮显示

  # --- Group: Sad Path (规则反转) ---

  @req:F001-S09 @prio:High @type:Sad
  Scenario: 登录态过期应自动跳转登录页
    Given 用户已登录但会话已过期
    When 在任意页面触发导航操作
    Then 系统自动跳转至 P003 登录页

  # --- Group: Edge Case ---

  @req:F001-Auto @prio:Low @type:Edge
  Scenario: 断网时导航可用性降级
    Given 用户未登录状态且网络断开
    When 点击 "登录"
    Then 显示 "网络不可用" 提示
    And 登录按钮恢复可点击状态

  @req:F001-Auto @prio:Low @type:Edge
  Scenario: 刷新后导航高亮状态保持
    Given 用户从 P002 返回至 P001
    When 刷新页面
    Then 导航栏仍高亮 "首页"

  @req:F001-Auto @prio:Low @type:Edge
  Scenario: 用户信息加载失败的降级显示
    Given 用户已登录但用户信息接口返回错误
    When 渲染导航栏
    Then 显示占位头像与用户名缩写


Feature: F002 快捷入口访问

  # --- Group: Happy Path ---

  @req:F002-S01 @prio:High @type:Happy
  Scenario: 显示常用功能卡片
    Given 用户位于 P001 首页
    Then 显示 "车票查询"、"订单查询"、"改签退票" 功能卡片

  @req:F002-S02 @prio:Medium @type:Happy
  Scenario: 已登录显示个性化推荐
    Given 用户已登录状态
    When 渲染首页
    Then 显示个性化推荐区域

  @req:F002-S03 @prio:Medium @type:Happy
  Scenario: 历史查询记录最多显示 5 条
    Given 用户已登录且存在 6 条历史记录
    When 渲染历史记录区域
    Then 仅显示最近 5 条记录

  @req:F002-S04 @prio:High @type:Happy
  Scenario: 点击车票查询跳转 P002
    Given 用户位于 P001 首页
    When 点击 "车票查询"
    Then 跳转至 P002 查询页

  @req:F002-S05 @prio:High @type:Happy
  Scenario: 点击订单查询跳转 P006
    Given 用户位于 P001 首页
    When 点击 "订单查询"
    Then 跳转至 P006 订单管理

  @req:F002-S06 @prio:Medium @type:Happy
  Scenario: 点击历史记录自动填充查询条件
    Given 历史记录包含 "北京 → 上海" 日期 "2025-11-25"
    When 点击该历史记录
    Then 查询条件自动填充为 "北京 → 上海" 且日期 "2025-11-25"

  @req:F002-S07 @prio:Medium @type:Happy
  Scenario: 清除历史记录需确认弹窗
    Given 用户已登录状态
    When 点击 "清除历史记录"
    Then 弹出确认弹窗
    When 点击 "确认"
    Then 历史记录清空

  @req:F002-S08 @prio:High @type:Happy
  Scenario: 未登录仅显示基础功能
    Given 用户未登录状态
    When 访问 P001 首页
    Then 仅显示基础功能卡片
    And 不显示个性化推荐与历史记录

  # --- Group: Sad Path (规则反转) ---

  @req:F002-S08 @prio:High @type:Sad
  Scenario: 未登录尝试访问个性化推荐被拦截
    Given 用户未登录状态
    When 通过直链或接口尝试访问个性化推荐
    Then 系统提示需登录
    And 不展示任何个性化内容

  @req:F002-S09 @prio:High @type:Sad
  Scenario: 推荐加载失败降级显示默认入口
    Given 用户已登录状态
    And 推荐接口返回错误代码 "500"
    When 渲染推荐区域
    Then 降级显示默认入口卡片

  # --- Group: Edge Case ---

  @req:F002-Auto @prio:Low @type:Edge
  Scenario: 网络断开时推荐与历史记录的降级
    Given 用户已登录且网络断开
    When 加载推荐与历史记录
    Then 推荐区域降级为默认入口
    And 历史记录显示离线占位或本地缓存

  @req:F002-Auto @prio:Low @type:Edge
  Scenario: 快速连续点击入口仅跳转一次
    Given 用户位于 P001 首页
    When 快速连续点击 "车票查询" 两次
    Then 仅发生一次跳转
    And 按钮在短时间内禁用以防重复提交

  @req:F002-Auto @prio:Low @type:Edge
  Scenario: 历史记录为空显示占位
    Given 用户已登录但无历史记录
    When 渲染历史记录区域
    Then 显示占位提示 "暂无历史记录"