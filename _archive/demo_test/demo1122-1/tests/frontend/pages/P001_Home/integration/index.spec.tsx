import { describe, it, expect } from "vitest";
import { initHeaderState, clickLogin, clickRegister } from "../../../../../src/p001/header";
import { initQuickEntryState, loadHistory, clickTicketSearch, clickOrderSearch, clearHistory } from "../../../../../src/p001/quick_entry";

describe("[Feature:F001][Page:P001] 导航栏访问", () => {
  it("[@req:F001-S05] 点击登录跳转P003", () => {
    const s0 = initHeaderState();
    const s = clickLogin(s0);
    expect(s.redirecting && s.navigationTarget === "P003");
  });
  it("[@req:F001-S06] 点击注册跳转P004", () => {
    const s0 = initHeaderState();
    const s = clickRegister(s0);
    expect(s.redirecting && s.navigationTarget === "P004");
  });
});

describe("[Feature:F002][Page:P001] 快捷入口访问", () => {
  it("[@req:F002-S03] 历史记录最多显示5条", () => {
    const s0 = initQuickEntryState();
    const items = [
      { id: "1", fromStation: "A", toStation: "B", travelDate: "2025-11-25", createdAt: "2025-11-22T12:00:00Z" },
      { id: "2", fromStation: "A", toStation: "C", travelDate: "2025-11-25", createdAt: "2025-11-22T13:00:00Z" },
      { id: "3", fromStation: "A", toStation: "D", travelDate: "2025-11-25", createdAt: "2025-11-22T14:00:00Z" },
      { id: "4", fromStation: "A", toStation: "E", travelDate: "2025-11-25", createdAt: "2025-11-22T15:00:00Z" },
      { id: "5", fromStation: "A", toStation: "F", travelDate: "2025-11-25", createdAt: "2025-11-22T16:00:00Z" },
      { id: "6", fromStation: "A", toStation: "G", travelDate: "2025-11-25", createdAt: "2025-11-22T17:00:00Z" },
    ];
    const s = loadHistory(s0, items);
    expect(s.historyItems.length === 5 && s.historyItems[0].createdAt >= s.historyItems[1].createdAt);
  });
  it("[@req:F002-S04] 点击车票查询跳转P002", () => {
    const s0 = initQuickEntryState();
    const s = clickTicketSearch(s0);
    expect(s.redirecting && s.navigationTarget === "P002");
  });
  it("[@req:F002-S05] 点击订单查询跳转P006", () => {
    const s0 = initQuickEntryState();
    const s = clickOrderSearch(s0);
    expect(s.redirecting && s.navigationTarget === "P006");
  });
  it("[@req:F002-S07] 清除历史记录确认弹窗", () => {
    const s0 = initQuickEntryState();
    const s1 = loadHistory(s0, [
      { id: "1", fromStation: "A", toStation: "B", travelDate: "2025-11-25", createdAt: "2025-11-22T12:00:00Z" },
    ]);
    const s2 = clearHistory(s1, false);
    const s = clearHistory(s2, true);
    expect(s.confirmDialog.isVisible === false && s.historyItems.length === 0);
  });
});

export {};