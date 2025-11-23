import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Header from '../../../../../src/frontend/components/Header'
import QuickEntries from '../../../../../src/frontend/components/QuickEntries'

describe('[Feature:F001][Page:P001] 导航栏', () => {
  it('[@req:F001-S01] 导航栏固定顶部', () => {
    render(<Header />)
    expect(screen.getByLabelText('nav').getAttribute('data-fixed')).toBe('true')
  })

  it('[@req:F001-S02] 显示登录入口（未登录）', () => {
    render(<Header isAuthed={false} />)
    expect(screen.getByLabelText('auth-links')).toBeDefined()
  })

  it('[@req:F001-S03] 显示用户入口（已登录）', () => {
    render(<Header isAuthed={true} />)
    expect(screen.getByLabelText('user-entry')).toBeDefined()
  })

  it('[@req:F001-S04] 导航高亮当前页', () => {
    render(<Header active="search" />)
    const links = screen.getAllByRole('link')
    expect(links[1].getAttribute('aria-current')).toBe('true')
  })

  it('[@req:F001-S05] 菜单折叠切换', () => {
    render(<Header />)
    const menu = screen.getByLabelText('menu')
    expect(menu.getAttribute('data-open')).toBe('false')
    fireEvent.click(screen.getByLabelText('menu-toggle'))
    expect(menu.getAttribute('data-open')).toBe('true')
  })

  it('[@req:F001-S06] 菜单展开后可见', () => {
    render(<Header />)
    fireEvent.click(screen.getByLabelText('menu-toggle'))
    expect(screen.getByLabelText('menu').getAttribute('data-open')).toBe('true')
  })

  it('[@req:F001-S07] 导航支持搜索框', () => {
    render(<Header />)
    expect(screen.getByLabelText('navSearch')).toBeDefined()
  })

  it('[@req:F001-S08] 展示站点 Logo', () => {
    render(<Header />)
    expect(screen.getByLabelText('logo').textContent).toBe('12306')
  })
})

describe('[Feature:F002][Page:P001] 快捷入口', () => {
  it('[@req:F002-S01] 展示快捷入口', () => {
    render(<QuickEntries />)
    expect(screen.getByLabelText('quick-entries').children.length).toBeGreaterThan(0)
  })
  it('[@req:F002-S02] 快捷项包含车票查询', () => {
    render(<QuickEntries />)
    expect(screen.getByText('车票查询')).toBeDefined()
  })
  it('[@req:F002-S03] 快捷项包含我的订单', () => {
    render(<QuickEntries />)
    expect(screen.getByText('我的订单')).toBeDefined()
  })
  it('[@req:F002-S04] 快捷项包含帮助', () => {
    render(<QuickEntries />)
    expect(screen.getByText('帮助')).toBeDefined()
  })
  it('[@req:F002-S05] 快捷入口数量', () => {
    render(<QuickEntries items={["A","B","C","D"]} />)
    expect(screen.getByLabelText('quick-entries').children.length).toBe(4)
  })
  it('[@req:F002-S06] 快捷入口可配置', () => {
    render(<QuickEntries items={["X"]} />)
    expect(screen.getByText('X')).toBeDefined()
  })
  it('[@req:F002-S07] 快捷入口顺序', () => {
    render(<QuickEntries items={["X","Y"]} />)
    const children = screen.getByLabelText('quick-entries').children
    expect(children[0].textContent).toBe('X')
    expect(children[1].textContent).toBe('Y')
  })
})