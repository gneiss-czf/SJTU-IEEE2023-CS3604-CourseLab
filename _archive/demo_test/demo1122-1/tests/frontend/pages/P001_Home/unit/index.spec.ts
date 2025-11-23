import { describe, it, expect } from "vitest";
import { initQuickEntryState, setLoggedIn as setQELoggedIn, loadRecommendationsError } from "../../../../../src/p001/quick_entry";
import { initHeaderState, handleSessionUnauthorized } from "../../../../../src/p001/header";

describe("[Feature:F001][Page:P001] 导航栏访问", () => {
  it("[@req:F001-S09] 登录态过期自动跳转", () => {
    const s0 = initHeaderState();
    const s = handleSessionUnauthorized(s0);
    expect(!s.isLoadingSession && s.redirecting && s.navigationTarget === "P003");
  });
});

describe("[Feature:F002][Page:P001] 快捷入口访问", () => {
  it("[@req:F002-S08] 未登录仅显示基础功能", () => {
    const s = initQuickEntryState();
    expect(!s.isLoggedIn && s.recommendations.length === 0);
  });
  it("[@req:F002-S09] 推荐失败降级默认入口", () => {
    const s0 = setQELoggedIn(initQuickEntryState(), true);
    const s = loadRecommendationsError(s0, "INTERNAL_ERROR");
    expect(s.hasDegraded && s.fallbackEnabled);
  });
});

export {};