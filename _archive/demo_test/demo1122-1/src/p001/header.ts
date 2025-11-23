export type HeaderEntry = { id: string; label: string; route: string; isVisible: boolean; isHighlighted?: boolean };
export type HeaderState = {
  style: { position: string; top: number };
  isLoadingSession: boolean;
  errorSession: string | null;
  isLoggedIn: boolean;
  entries: HeaderEntry[];
  entryLogin: { id: string; label: string; route: string; isVisible: boolean };
  entryRegister: { id: string; label: string; route: string; isVisible: boolean };
  activeRoute: string;
  redirecting: boolean;
  navigationTarget: string | null;
  userDisplay: { username: string | null; avatarUrl: string | null };
  userMenu: { isOpen: boolean; items: string[] };
};

export function initHeaderState(): HeaderState {
  return {
    style: { position: "sticky", top: 0 },
    isLoadingSession: true,
    errorSession: null,
    isLoggedIn: false,
    entries: [
      { id: "home", label: "首页", route: "P001", isVisible: true },
      { id: "search", label: "查询", route: "P002", isVisible: true },
      { id: "profile", label: "个人中心", route: "P006", isVisible: true },
    ],
    entryLogin: { id: "login", label: "登录", route: "P003", isVisible: true },
    entryRegister: { id: "register", label: "注册", route: "P004", isVisible: true },
    activeRoute: "P001",
    redirecting: false,
    navigationTarget: null,
    userDisplay: { username: null, avatarUrl: null },
    userMenu: { isOpen: false, items: ["个人中心", "退出登录"] },
  };
}

export function setLoggedIn(state: HeaderState, username: string, avatarUrl: string): HeaderState {
  return {
    ...state,
    isLoggedIn: true,
    entryLogin: { ...state.entryLogin, isVisible: false },
    entryRegister: { ...state.entryRegister, isVisible: false },
    userDisplay: { username, avatarUrl },
  };
}

export function clickLogin(state: HeaderState): HeaderState {
  return { ...state, redirecting: true, navigationTarget: "P003" };
}

export function clickRegister(state: HeaderState): HeaderState {
  return { ...state, redirecting: true, navigationTarget: "P004" };
}

export function setActiveRoute(state: HeaderState, route: string): HeaderState {
  const entries = state.entries.map((e) => ({ ...e, isHighlighted: e.route === route }));
  return { ...state, activeRoute: route, entries };
}

export function clickUsername(state: HeaderState): HeaderState {
  return { ...state, userMenu: { ...state.userMenu, isOpen: true } };
}

export function handleSessionUnauthorized(state: HeaderState): HeaderState {
  return { ...state, isLoadingSession: false, redirecting: true, navigationTarget: "P003" };
}

import { getSession } from "./api_client";
export async function fetchAndUpdateHeaderSession(state: HeaderState): Promise<HeaderState> {
  try {
    const data = await getSession();
    const s1 = { ...state, isLoadingSession: false };
    return setLoggedIn(s1, data.username, data.avatarUrl);
  } catch (e: any) {
    if (e.status === 401) return handleSessionUnauthorized(state);
    return { ...state, isLoadingSession: false, errorSession: e.message || "ERROR" };
  }
}