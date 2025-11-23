import { describe, it, expect } from "vitest";
import { initHeaderState, handleSessionUnauthorized } from "../../../../../src/p001/header";

describe("[Feature:F001][Page:P001] 导航栏访问", () => {
  it("[@req:F001-S09] 登录态过期自动跳转", () => {
    const s0 = initHeaderState();
    const s = handleSessionUnauthorized(s0);
    expect(!s.isLoadingSession && s.redirecting && s.navigationTarget === "P003");
  });
});

export {};