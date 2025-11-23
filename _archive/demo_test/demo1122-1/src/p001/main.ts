import {
  initHeaderState,
  fetchAndUpdateHeaderSession,
  clickLogin,
  clickRegister,
  setActiveRoute,
  clickUsername,
  HeaderState,
} from "./header";
import {
  initQuickEntryState,
  fetchRecommendationsAndApply,
  fetchHistoryAndApply,
  clickTicketSearch,
  clickOrderSearch,
  clickHistoryItem,
  clearHistory,
  deleteHistoryAndApply,
  QuickEntryState,
} from "./quick_entry";

function el(id: string): HTMLElement {
  const node = document.getElementById(id);
  if (!node) throw new Error(`Element not found: ${id}`);
  return node;
}

function renderHeader(state: HeaderState) {
  const root = el("header-root");
  root.innerHTML = "";
  const nav = document.createElement("div");
  nav.className = "header-bar";
  const left = document.createElement("div");
  left.className = "logo";
  left.textContent = "中国铁路12306";
  const right = document.createElement("div");
  right.className = "nav-items";

  state.entries.forEach((e) => {
    const a = document.createElement("a");
    a.textContent = e.label;
    a.href = "#";
    if (e.isHighlighted) a.classList.add("active");
    right.appendChild(a);
  });

  if (!state.isLoggedIn) {
    const login = document.createElement("button");
    login.textContent = "登录";
    login.onclick = () => {
      const s1 = clickLogin(state);
      renderHeader(s1);
    };
    const reg = document.createElement("button");
    reg.textContent = "注册";
    reg.onclick = () => {
      const s1 = clickRegister(state);
      renderHeader(s1);
    };
    right.appendChild(login);
    right.appendChild(reg);
  } else {
    const user = document.createElement("div");
    user.className = "user-display";
    user.textContent = state.userDisplay.username || "用户";
    user.onclick = () => {
      const s1 = clickUsername(state);
      renderHeader(s1);
    };
    right.appendChild(user);
  }

  nav.appendChild(left);
  nav.appendChild(right);
  root.appendChild(nav);
}

function renderQuick(state: QuickEntryState) {
  const root = el("quick-root");
  root.innerHTML = "";

  const grid = document.createElement("div");
  grid.className = "quick-grid";

  state.baseEntries.forEach((b) => {
    const card = document.createElement("div");
    card.className = "quick-card";
    card.textContent = b.label;
    card.onclick = () => {
      const s1 = b.id === "ticket-search" ? clickTicketSearch(state) : clickOrderSearch(state);
      renderQuick(s1);
    };
    grid.appendChild(card);
  });

  if (state.isLoggedIn && state.recommendations.length > 0) {
    const rec = document.createElement("div");
    rec.className = "rec-section";
    const title = document.createElement("h3");
    title.textContent = "个性化推荐";
    rec.appendChild(title);
    state.recommendations.forEach((r) => {
      const item = document.createElement("div");
      item.className = "rec-item";
      item.textContent = r.label;
      rec.appendChild(item);
    });
    root.appendChild(rec);
  }

  const hist = document.createElement("div");
  hist.className = "hist-section";
  const htitle = document.createElement("h3");
  htitle.textContent = "历史查询";
  hist.appendChild(htitle);
  const list = document.createElement("ul");
  state.historyItems.forEach((h) => {
    const li = document.createElement("li");
    li.textContent = `${h.fromStation}  ${h.toStation} ${h.travelDate}`;
    li.onclick = () => {
      const s1 = clickHistoryItem(state, h);
      renderQuick(s1);
    };
    list.appendChild(li);
  });
  hist.appendChild(list);

  const clearBtn = document.createElement("button");
  clearBtn.textContent = "清除历史记录";
  clearBtn.onclick = async () => {
    const s1 = clearHistory(state, false);
    renderQuick(s1);
    const s2 = clearHistory(s1, true);
    const s3 = await deleteHistoryAndApply(s2, "u1");
    renderQuick(s3);
  };
  hist.appendChild(clearBtn);

  root.appendChild(grid);
  root.appendChild(hist);
}

async function bootstrap() {
  let header = initHeaderState();
  header = setActiveRoute(header, "P001");
  renderHeader(header);
  try {
    header = await fetchAndUpdateHeaderSession(header);
  } catch {}
  renderHeader(header);

  let quick = initQuickEntryState();
  if (header.isLoggedIn) {
    quick = await fetchRecommendationsAndApply(quick, "u1");
    quick = await fetchHistoryAndApply(quick, "u1");
  }
  renderQuick(quick);
}

document.addEventListener("DOMContentLoaded", bootstrap);
