import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

app.use(
  "/api",
  createProxyMiddleware({
    target: "https://blog.skywt.cn/api",
    changeOrigin: true,
  }),
);

app.listen(3000);
