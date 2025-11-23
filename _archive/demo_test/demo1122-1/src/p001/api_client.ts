export type SessionOk = { userId: string; username: string; avatarUrl: string };
export type ErrBody = { code: string; message: string };

export async function getSession(): Promise<SessionOk> {
  const res = await fetch("/api/session", { headers: { Authorization: "Bearer valid" } });
  if (res.status === 200) return (await res.json()) as SessionOk;
  const err = (await res.json()) as ErrBody;
  throw Object.assign(new Error(err.message), { status: res.status, code: err.code });
}

export type RecommendationItem = { id: string; label: string; route: string; score: number };
export async function getRecommendations(userId: string, forceError?: boolean): Promise<RecommendationItem[]> {
  const url = forceError ? `/api/recommendations?userId=${userId}&error=1` : `/api/recommendations?userId=${userId}`;
  const res = await fetch(url, { headers: { Authorization: "Bearer valid" } });
  if (res.status === 200) {
    const body = await res.json();
    return body.items as RecommendationItem[];
  }
  const err = (await res.json()) as ErrBody;
  throw Object.assign(new Error(err.message), { status: res.status, code: err.code });
}

export type HistoryItem = { id: string; fromStation: string; toStation: string; travelDate: string; createdAt: string };
export async function getSearchHistory(userId: string, limit = 5): Promise<HistoryItem[]> {
  const res = await fetch(`/api/search-history?userId=${userId}&limit=${limit}`, { headers: { Authorization: "Bearer valid" } });
  if (res.status === 200) {
    const body = await res.json();
    return body.items as HistoryItem[];
  }
  const err = (await res.json()) as ErrBody;
  throw Object.assign(new Error(err.message), { status: res.status, code: err.code });
}

export async function deleteSearchHistory(userId: string, scope = "all"): Promise<number> {
  const res = await fetch(`/api/search-history?userId=${userId}&scope=${scope}`, { method: "DELETE", headers: { Authorization: "Bearer valid" } });
  if (res.status === 200) {
    const body = await res.json();
    return body.deletedCount as number;
  }
  const err = (await res.json()) as ErrBody;
  throw Object.assign(new Error(err.message), { status: res.status, code: err.code });
}