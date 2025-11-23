import { http } from "msw";

export const handlers = [
  http.get("/api/session", (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ userId: "u1", username: "张三", avatarUrl: "/avatar.png" }));
  }),
  http.get("/api/recommendations", (req, res, ctx) => {
    const error = req.url.searchParams.get("error");
    if (error === "1") return res(ctx.status(500), ctx.json({ code: "INTERNAL_ERROR", message: "服务异常" }));
    return res(ctx.status(200), ctx.json({ items: [{ id: "r1", label: "推荐1", route: "P002", score: 0.9 }] }));
  }),
  http.get("/api/search-history", (req, res, ctx) => {
    const items = [
      { id: "1", fromStation: "A", toStation: "B", travelDate: "2025-11-25", createdAt: "2025-11-22T12:00:00Z" },
      { id: "2", fromStation: "A", toStation: "C", travelDate: "2025-11-25", createdAt: "2025-11-22T13:00:00Z" },
      { id: "3", fromStation: "A", toStation: "D", travelDate: "2025-11-25", createdAt: "2025-11-22T14:00:00Z" },
      { id: "4", fromStation: "A", toStation: "E", travelDate: "2025-11-25", createdAt: "2025-11-22T15:00:00Z" },
      { id: "5", fromStation: "A", toStation: "F", travelDate: "2025-11-25", createdAt: "2025-11-22T16:00:00Z" },
      { id: "6", fromStation: "A", toStation: "G", travelDate: "2025-11-25", createdAt: "2025-11-22T17:00:00Z" },
    ];
    return res(ctx.status(200), ctx.json({ items }));
  }),
  http.delete("/api/search-history", (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ deletedCount: 6 }));
  }),
];