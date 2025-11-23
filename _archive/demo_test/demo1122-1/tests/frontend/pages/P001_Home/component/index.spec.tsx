import { describe, it, expect } from "vitest";
import { initHeaderState, setLoggedIn as setHeaderLoggedIn, setActiveRoute, clickUsername } from "../../../../../src/p001/header";
import { initQuickEntryState, setLoggedIn as setQELoggedIn, loadRecommendationsSuccess, clickHistoryItem } from "../../../../../src/p001/quick_entry";

describe("[Feature:F001][Page:P001] 导航栏访问", () => {
  it("[@req:F001-S01] 导航栏固定顶部", () => {
    const s = initHeaderState();
    expect(s.style.position === "sticky" && s.style.top === 0);
  });
  it("[@req:F001-S02] 未登录显示登录注册", () => {
    const s = initHeaderState();
    expect(!s.isLoggedIn && s.entryLogin.isVisible && s.entryRegister.isVisible && s.userDisplay.username === null);
  });
  it("[@req:F001-S03] 已登录显示用户名头像", () => {
    const s0 = initHeaderState();
    const s = setHeaderLoggedIn(s0, "张三", "avatar.png");
    expect(s.isLoggedIn && !s.entryLogin.isVisible && !s.entryRegister.isVisible && s.userDisplay.username !== null && s.userDisplay.avatarUrl !== null);
  });
  it("[@req:F001-S04] 显示首页查询个人中心", () => {
    const s = initHeaderState();
    const ids = s.entries.map((e) => e.route);
    expect(ids.includes("P001") && ids.includes("P002") && ids.includes("P006"));
  });
  it("[@req:F001-S07] 点击用户名显示菜单", () => {
    const s0 = initHeaderState();
    const s1 = setHeaderLoggedIn(s0, "张三", "avatar.png");
    const s = clickUsername(s1);
    expect(s.userMenu.isOpen && s.userMenu.items.includes("个人中心") && s.userMenu.items.includes("退出登录"));
  });
  it("[@req:F001-S08] 当前页面高亮显示", () => {
    const s0 = initHeaderState();
    const s = setActiveRoute(s0, "P001");
    const home = s.entries.find((e) => e.id === "home");
    const search = s.entries.find((e) => e.id === "search");
    const profile = s.entries.find((e) => e.id === "profile");
    expect(!!home && home.isHighlighted === true && !!search && search.isHighlighted === false && !!profile && profile.isHighlighted === false);
  });
});

describe("[Feature:F002][Page:P001] 快捷入口访问", () => {
  it("[@req:F002-S01] 显示常用功能卡片", () => {
    const s = initQuickEntryState();
    const labels = s.baseEntries.map((e) => e.label);
    expect(labels.includes("车票查询") && labels.includes("订单查询") && labels.includes("改签退票"));
  });
  it("[@req:F002-S02] 已登录显示推荐区域", () => {
    const s0 = initQuickEntryState();
    const s1 = setQELoggedIn(s0, true);
    const s = loadRecommendationsSuccess(s1, [{ id: "r1", label: "推荐1", route: "P002", score: 0.9 }]);
    expect(s.recommendations.length > 0);
  });
  it("[@req:F002-S06] 点击历史记录填充查询", () => {
    const s0 = initQuickEntryState();
    const s = clickHistoryItem(s0, { id: "h1", fromStation: "北京", toStation: "上海", travelDate: "2025-11-25", createdAt: "2025-11-22T10:00:00Z" });
    expect(!!s.populatedSearchForm && s.populatedSearchForm.from === "北京" && s.populatedSearchForm.to === "上海" && s.populatedSearchForm.date === "2025-11-25");
  });
});

export {};