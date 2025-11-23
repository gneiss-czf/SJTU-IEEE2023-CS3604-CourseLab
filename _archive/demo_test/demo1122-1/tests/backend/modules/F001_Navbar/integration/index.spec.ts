import { describe, it, expect } from "vitest";
import request from "supertest";
import { app } from "../../../../../src/backend/app";

describe("[Feature:F001][Page:P001] 导航栏访问 - Supertest", () => {
  it("[@req:F001-S02] 无效token返回401", async () => {
    const res = await request(app).get("/api/session").set("Authorization", "Bearer invalid");
    expect(res.status).toBe(401);
    expect(res.body.code).toBe("UNAUTHORIZED");
  });
  it("[@req:F001-S03] 有效token返回200并包含用户名与头像", async () => {
    const res = await request(app).get("/api/session").set("Authorization", "Bearer valid");
    expect(res.status).toBe(200);
    expect(res.body.username).toBe("张三");
    expect(res.body.avatarUrl).toBeDefined();
  });
});

export {};