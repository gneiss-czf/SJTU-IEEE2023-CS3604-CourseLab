import { describe, it, expect } from "vitest";
import { initHeaderState, clickLogin, clickRegister, setActiveRoute } from "../../src/p001/header";

describe("[Feature:F001][Page:P001] 首页导航与快捷入口E2E", () => {
  it("[@req:F001-S01][@req:F001-S02][@req:F001-S05][@req:F001-S06][@req:F001-S08] 导航正常访问与跳转", () => {
    const s0 = initHeaderState();
    expect(s0.style.position === "sticky" && s0.entryLogin.isVisible && s0.entryRegister.isVisible);
    const s1 = clickLogin(s0);
    expect(s1.redirecting && s1.navigationTarget === "P003");
    const s2 = clickRegister({ ...s0, redirecting: false, navigationTarget: null });
    expect(s2.redirecting && s2.navigationTarget === "P004");
    const s3 = setActiveRoute(s0, "P001");
    const home = s3.entries.find((e) => e.id === "home");
    expect(!!home && home.isHighlighted === true);
  });
});

export {};