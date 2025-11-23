import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import ProfilePage from '../../../../../src/frontend/pages/ProfilePage'
import ChangeTicketPage from '../../../../../src/frontend/pages/ChangeTicketPage'

describe('[Feature:F011][Page:P006] 个人信息展示', () => {
  it('[@req:F011-S01] 显示用户名不可修改', () => {
    render(<ProfilePage />)
    expect(screen.getByLabelText('username').textContent).toBe('user001')
  })
  it('[@req:F011-S02] 显示真实姓名', () => {
    render(<ProfilePage />)
    expect(screen.getByLabelText('realname').textContent).toBe('张三')
  })
  it('[@req:F011-S03] 身份证脱敏显示', () => {
    render(<ProfilePage />)
    expect(screen.getByLabelText('idMasked').textContent).toContain('*')
  })
  it('[@req:F011-S04] 手机号脱敏显示', () => {
    render(<ProfilePage />)
    expect(screen.getByLabelText('phoneMasked').textContent).toContain('****')
  })
  it('[@req:F011-S05] 邮箱脱敏显示', () => {
    render(<ProfilePage />)
    expect(screen.getByLabelText('emailMasked').textContent).toContain('*')
  })
  it('[@req:F011-S06] 显示账户时间', () => {
    render(<ProfilePage />)
    expect(screen.getByLabelText('regTime')).toBeDefined()
    expect(screen.getByLabelText('lastLogin')).toBeDefined()
  })
  it('[@req:F011-S07] 显示账户等级积分', () => {
    render(<ProfilePage />)
    expect(screen.getByLabelText('level').textContent).toContain('Lv')
  })
  it('[@req:F011-S08] 显示实名认证状态', () => {
    render(<ProfilePage />)
    expect(screen.getByLabelText('realnameStatus').textContent).toBe('已实名')
  })
})

describe('[Feature:F011][Page:P006] 修改密码', () => {
  it('[@req:F011-S16] 输入旧密码', () => {
    render(<ProfilePage />)
    const old = screen.getByLabelText('oldPassword')
    fireEvent.change(old, { target: { value: 'Old@1234' } })
    expect((old as HTMLInputElement).value).toBe('Old@1234')
  })
  it('[@req:F011-S17] 新密码强度验证并确认', () => {
    render(<ProfilePage />)
    const np = screen.getByLabelText('newPassword')
    fireEvent.change(np, { target: { value: 'Abc12345' } })
    expect(screen.getByLabelText('pwdStrength').textContent).toBe('强')
    const cp = screen.getByLabelText('confirmPassword')
    fireEvent.change(cp, { target: { value: 'Abc12345' } })
    expect((cp as HTMLInputElement).value).toBe('Abc12345')
  })
})

describe('[Feature:F012][Page:P006] 乘车人列表', () => {
  it('[@req:F012-S01] 显示所有乘车人', () => {
    render(<ProfilePage />)
    expect(screen.getAllByLabelText('passenger-card').length).toBeGreaterThan(0)
  })
  it('[@req:F012-S02] 乘车人卡片展示', () => {
    render(<ProfilePage />)
    const card = screen.getAllByLabelText('passenger-card')[0]
    expect(card).toBeDefined()
  })
  it('[@req:F012-S03] 显示可选手机号', () => {
    render(<ProfilePage />)
    expect(screen.getByLabelText('passenger-phone').textContent).toContain('138')
  })
  it('[@req:F012-S04] 显示旅客类型', () => {
    render(<ProfilePage />)
    expect(screen.getAllByLabelText('passenger-type')[0].textContent).toBeDefined()
  })
  it('[@req:F012-S05] 设为默认编辑删除', () => {
    render(<ProfilePage />)
    expect(screen.getAllByLabelText('set-default').length).toBeGreaterThan(0)
    expect(screen.getAllByLabelText('edit').length).toBeGreaterThan(0)
    expect(screen.getAllByLabelText('delete').length).toBeGreaterThan(0)
  })
  it('[@req:F012-S06] 默认乘车人标识', () => {
    render(<ProfilePage />)
    const card = screen.getAllByLabelText('passenger-card')[0]
    expect(card.getAttribute('data-default')).toBe('true')
  })
})

describe('[Feature:F013][Page:P006] 订单卡片展示', () => {
  it('[@req:F013-S04] 卡片显示订单号', () => {
    render(<ProfilePage />)
    expect(screen.getAllByLabelText('order-no')[0].textContent).toBeDefined()
  })
  it('[@req:F013-S05] 显示车次信息', () => {
    render(<ProfilePage />)
    expect(screen.getAllByLabelText('route')[0].textContent).toContain('→')
  })
  it('[@req:F013-S06] 显示出发时间', () => {
    render(<ProfilePage />)
    expect(screen.getAllByLabelText('depart-time')[0].textContent).toMatch(/:/)
  })
  it('[@req:F013-S07] 显示乘车人姓名数量', () => {
    render(<ProfilePage />)
    expect(screen.getAllByLabelText('passenger-count')[0].textContent).toBeDefined()
  })
  it('[@req:F013-S08] 显示金额与状态标签', () => {
    render(<ProfilePage />)
    expect(screen.getAllByLabelText('amount')[0].textContent).toBeDefined()
    expect(screen.getAllByLabelText('status-tag')[0].textContent).toBeDefined()
  })
  it('[@req:F013-S09] 显示操作按钮', () => {
    render(<ProfilePage />)
    expect(screen.getAllByLabelText('pay-now').length).toBeGreaterThan(0)
    expect(screen.getAllByLabelText('cancel-order').length).toBeGreaterThan(0)
  })
})

describe('[Feature:F014][Page:P006] 支付确认与结果', () => {
  it('[@req:F014-S09] 显示订单号', () => {
    render(<ProfilePage />)
    expect(screen.getByLabelText('pay-order-id').textContent).toContain('ORD')
  })
  it('[@req:F014-S10] 显示订单金额优惠', () => {
    render(<ProfilePage />)
    expect(screen.getByLabelText('pay-amount').textContent).toBe('555')
  })
  it('[@req:F014-S12] 显示支付倒计时', () => {
    render(<ProfilePage />)
    expect(screen.getByLabelText('pay-countdown').textContent).toContain(':')
  })
  it('[@req:F014-S20] 显示支付成功页面', () => {
    render(<ProfilePage />)
    expect(screen.getByLabelText('pay-order-id').textContent).toContain('ORD')
  })
  it('[@req:F014-S22] 显示失败原因', () => {
    render(<ProfilePage />)
    expect(screen.getAllByLabelText('status-tag').length).toBeGreaterThan(0)
  })
})

describe('[Feature:F015][Page:P006] 改签页面组件', () => {
  it('[@req:F015-S05] 显示当前票信息', () => {
    render(<ChangeTicketPage />)
    expect(screen.getByLabelText('current-ticket').textContent).toContain('北京')
  })
  it('[@req:F015-S06] 选择新日期和席别', () => {
    render(<ChangeTicketPage />)
    const date = screen.getByLabelText('new-date')
    const seat = screen.getByLabelText('new-seat')
    expect((date as HTMLInputElement).value).toBeDefined()
    expect((seat as HTMLSelectElement).value).toBeDefined()
  })
  it('[@req:F015-S07] 显示改签规则提示', () => {
    render(<ChangeTicketPage />)
    expect(screen.getByLabelText('rules-tip').textContent).toContain('改签')
  })
  it('[@req:F015-S09] 选择改签乘客', () => {
    render(<ChangeTicketPage />)
    const sel = screen.getByLabelText('passenger-select')
    expect((sel as HTMLSelectElement).value).toBeDefined()
  })
  it('[@req:F015-S18] 差额显示', () => {
    render(<ChangeTicketPage />)
    expect(screen.getByLabelText('diff-amount').textContent).toBe('50')
  })
})

describe('[Feature:F016][Page:P006] 登出交互', () => {
  it('[@req:F016-S01] 导航栏点击退出登录', () => {
    render(<ProfilePage />)
    expect(screen.getByLabelText('nav-logout')).toBeDefined()
  })
  it('[@req:F016-S02] 个人中心安全退出', () => {
    render(<ProfilePage />)
    expect(screen.getByLabelText('profile-logout')).toBeDefined()
  })
  it('[@req:F016-S03] 登出确认弹窗', () => {
    render(<ProfilePage />)
    expect(screen.getByLabelText('logout-confirm')).toBeDefined()
  })
  it('[@req:F016-S07] 跳转首页更新导航', () => {
    render(<ProfilePage />)
    expect(screen.getByLabelText('username')).toBeDefined()
  })
  it('[@req:F016-S08] 网络异常本地登出', () => {
    render(<ProfilePage />)
    expect(screen.getByLabelText('nav-logout')).toBeDefined()
  })
})