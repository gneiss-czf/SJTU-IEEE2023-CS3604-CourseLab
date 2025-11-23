import { IncomingMessage, ServerResponse } from "http";

export function app(req: IncomingMessage, res: ServerResponse) {
  const url = new URL(req.url || "", "http://localhost");
  const send = (status: number, body: any) => {
    res.statusCode = status;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(body));
  };
  const auth = req.headers["authorization"];

  if (req.method === "GET" && url.pathname === "/api/session") {
    if (auth === "Bearer valid") return send(200, { userId: "u1", username: "张三", avatarUrl: "/avatar.png" });
    return send(401, { code: "UNAUTHORIZED", message: "Token 缺失或过期" });
  }

  if (req.method === "GET" && url.pathname === "/api/recommendations") {
    if (auth !== "Bearer valid") return send(401, { code: "UNAUTHORIZED", message: "未登录用户调用" });
    if (url.searchParams.get("error") === "1") return send(500, { code: "INTERNAL_ERROR", message: "推荐服务异常" });
    return send(200, { items: [{ id: "r1", label: "推荐1", route: "P002", score: 0.9 }] });
  }

  if (url.pathname === "/api/search-history") {
    if (auth !== "Bearer valid") return send(401, { code: "UNAUTHORIZED", message: "未登录用户调用" });
    if (req.method === "GET") {
      const all = [
        { id: "1", fromStation: "A", toStation: "B", travelDate: "2025-11-25", createdAt: "2025-11-22T12:00:00Z" },
        { id: "2", fromStation: "A", toStation: "C", travelDate: "2025-11-25", createdAt: "2025-11-22T13:00:00Z" },
        { id: "3", fromStation: "A", toStation: "D", travelDate: "2025-11-25", createdAt: "2025-11-22T14:00:00Z" },
        { id: "4", fromStation: "A", toStation: "E", travelDate: "2025-11-25", createdAt: "2025-11-22T15:00:00Z" },
        { id: "5", fromStation: "A", toStation: "F", travelDate: "2025-11-25", createdAt: "2025-11-22T16:00:00Z" },
        { id: "6", fromStation: "A", toStation: "G", travelDate: "2025-11-25", createdAt: "2025-11-22T17:00:00Z" },
      ];
      const sorted = all.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1)).slice(0, 5);
      return send(200, { items: sorted });
    }
    if (req.method === "DELETE") {
      return send(200, { deletedCount: 6 });
    }
  }

  return send(404, { code: "NOT_FOUND", message: "Unknown route" });
}