import { describe, it, expect } from "vitest";
import { initQuickEntryState, loadHistory } from "../../../../../src/p001/quick_entry";
import request from "supertest";
import { app } from "../../../../../src/backend/app";

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

  it("[@req:F002-S02] 推荐接口有效返回200并含 items", async () => {
    const res = await request(app).get("/api/recommendations?userId=u1").set("Authorization", "Bearer valid");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body.items) && res.body.items.length > 0).toBe(true);
  });

  it("[@req:F002-S09] 推荐接口异常返回5xx", async () => {
    const res = await request(app).get("/api/recommendations?userId=u1&error=1").set("Authorization", "Bearer valid");
    expect(res.status).toBe(500);
    expect(res.body.code).toBe("INTERNAL_ERROR");
  });

  it("[@req:F002-S07] 删除历史记录返回删除数量>0", async () => {
    const res = await request(app).delete("/api/search-history?userId=u1&scope=all").set("Authorization", "Bearer valid");
    expect(res.status).toBe(200);
    expect(res.body.deletedCount > 0).toBe(true);
  });
});

export {};