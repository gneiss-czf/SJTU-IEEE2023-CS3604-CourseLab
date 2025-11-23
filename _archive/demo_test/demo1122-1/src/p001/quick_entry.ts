export type BaseEntry = { id: string; label: string; route: string; operation?: string };
export type Recommendation = { id: string; label: string; route: string; score: number };
export type HistoryItem = { id: string; fromStation: string; toStation: string; travelDate: string; createdAt: string };
export type QuickEntryState = {
  baseEntries: BaseEntry[];
  isLoggedIn: boolean;
  isLoadingRecommendations: boolean;
  errorRecommendations: string | null;
  recommendations: Recommendation[];
  isLoadingHistory: boolean;
  errorHistory: string | null;
  historyItems: HistoryItem[];
  hasDegraded: boolean;
  fallbackEnabled: boolean;
  confirmDialog: { isVisible: boolean };
  redirecting: boolean;
  navigationTarget: string | null;
  populatedSearchForm?: { from: string; to: string; date: string };
};

export function initQuickEntryState(): QuickEntryState {
  return {
    baseEntries: [
      { id: "ticket-search", label: "车票查询", route: "P002" },
      { id: "order-search", label: "订单查询", route: "P006" },
      { id: "change-refund", label: "改签退票", route: "P006", operation: "change_or_refund" },
    ],
    isLoggedIn: false,
    isLoadingRecommendations: false,
    errorRecommendations: null,
    recommendations: [],
    isLoadingHistory: false,
    errorHistory: null,
    historyItems: [],
    hasDegraded: false,
    fallbackEnabled: false,
    confirmDialog: { isVisible: false },
    redirecting: false,
    navigationTarget: null,
  };
}

export function setLoggedIn(state: QuickEntryState, loggedIn: boolean): QuickEntryState {
  return { ...state, isLoggedIn: loggedIn };
}

export function loadRecommendationsSuccess(state: QuickEntryState, items: Recommendation[]): QuickEntryState {
  return { ...state, isLoadingRecommendations: false, recommendations: items };
}

export function loadRecommendationsError(state: QuickEntryState, message: string): QuickEntryState {
  return { ...state, errorRecommendations: message, hasDegraded: true, fallbackEnabled: true };
}

export function loadHistory(state: QuickEntryState, items: HistoryItem[]): QuickEntryState {
  const sorted = [...items].sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1)).slice(0, 5);
  return { ...state, historyItems: sorted };
}

export function clickTicketSearch(state: QuickEntryState): QuickEntryState {
  return { ...state, redirecting: true, navigationTarget: "P002" };
}

export function clickOrderSearch(state: QuickEntryState): QuickEntryState {
  return { ...state, redirecting: true, navigationTarget: "P006" };
}

export function clickHistoryItem(state: QuickEntryState, item: HistoryItem): QuickEntryState {
  return { ...state, populatedSearchForm: { from: item.fromStation, to: item.toStation, date: item.travelDate } };
}

export function clearHistory(state: QuickEntryState, confirm: boolean): QuickEntryState {
  if (!confirm) return { ...state, confirmDialog: { isVisible: true } };
  return { ...state, confirmDialog: { isVisible: false }, historyItems: [] };
}

import { getRecommendations, getSearchHistory, deleteSearchHistory } from "./api_client";
export async function fetchRecommendationsAndApply(state: QuickEntryState, userId: string, forceError?: boolean): Promise<QuickEntryState> {
  try {
    const items = await getRecommendations(userId, forceError);
    return loadRecommendationsSuccess({ ...state, isLoggedIn: true }, items);
  } catch (e: any) {
    return loadRecommendationsError({ ...state, isLoggedIn: true }, e.message || "ERROR");
  }
}

export async function fetchHistoryAndApply(state: QuickEntryState, userId: string): Promise<QuickEntryState> {
  try {
    const items = await getSearchHistory(userId, 5);
    return loadHistory({ ...state, isLoggedIn: true }, items);
  } catch (e: any) {
    return { ...state, errorHistory: e.message || "ERROR" };
  }
}

export async function deleteHistoryAndApply(state: QuickEntryState, userId: string): Promise<QuickEntryState> {
  try {
    const deleted = await deleteSearchHistory(userId, "all");
    if (deleted > 0) return { ...state, historyItems: [] };
    return state;
  } catch (e: any) {
    return { ...state, errorHistory: e.message || "ERROR" };
  }
}