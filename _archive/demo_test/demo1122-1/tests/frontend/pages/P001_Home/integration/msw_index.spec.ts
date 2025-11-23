import { describe, it, expect, beforeAll, afterAll, afterEach } from "vitest";
import { setupServer } from "msw/node";
import { handlers } from "../../../../mocks/mswHandlers";
import { initHeaderState, fetchAndUpdateHeaderSession } from "../../../../../src/p001/header";
import { initQuickEntryState, fetchRecommendationsAndApply, fetchHistoryAndApply, deleteHistoryAndApply } from "../../../../../src/p001/quick_entry";

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("[Feature:F001][Page:P001] 导航栏访问 - MSW 集成", () => {
  it("[@req:F001-S03] 会话有效返回用户信息并显示", async () => {
    const s0 = initHeaderState();
    const s = await fetchAndUpdateHeaderSession(s0);
    expect(s.isLoggedIn && s.userDisplay.username === "张三" && s.userDisplay.avatarUrl !== null);
  });
});

describe("[Feature:F002][Page:P001] 快捷入口访问 - MSW 集成", () => {
  it("[@req:F002-S02] 推荐接口返回 items 并渲染推荐", async () => {
    const s0 = initQuickEntryState();
    const s = await fetchRecommendationsAndApply(s0, "u1");
    expect(s.recommendations.length > 0);
  });
  it("[@req:F002-S09] 推荐接口异常降级显示默认入口", async () => {
    const s0 = initQuickEntryState();
    const s = await fetchRecommendationsAndApply(s0, "u1", true);
    expect(s.hasDegraded && s.fallbackEnabled);
  });
  it("[@req:F002-S03] 历史记录最多显示5条且倒序", async () => {
    const s0 = initQuickEntryState();
    const s = await fetchHistoryAndApply(s0, "u1");
    expect(s.historyItems.length === 5 && s.historyItems[0].createdAt >= s.historyItems[1].createdAt);
  });
  it("[@req:F002-S07] 删除历史记录后为空", async () => {
    const s0 = initQuickEntryState();
    const s1 = await fetchHistoryAndApply(s0, "u1");
    const s = await deleteHistoryAndApply(s1, "u1");
    expect(s.historyItems.length === 0);
  });
});

export {};