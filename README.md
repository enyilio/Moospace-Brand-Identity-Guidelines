# Moospace Brand Identity Guidelines

Moospace（沐空間）品牌識別設計規範 — 單頁式 bilingual（中/EN）靜態網站。

## 線上檢視

- https://brand.moospace.info（正式網址）
- https://moospace-brand-guide.pages.dev（Cloudflare Pages 預設網址）

每次 push 到 `main` 由 GitHub Actions（`.github/workflows/deploy.yml`）自動部署到 Cloudflare Pages。

## 本地預覽

任何靜態伺服器都可以。例如：

```bash
npx http-server -p 5501
# 然後瀏覽 http://localhost:5501
```

## 專案結構

```
.
├── index.html              # 主頁（12 章節）
├── assets/
│   ├── css/style.css       # 所有樣式
│   ├── js/app.js           # i18n 切換 + 進場動畫
│   └── logos/              # Logo 素材（PNG / SVG）
├── scripts/
│   └── build-lockups.mjs   # 用 sharp 產生 fb / bw / dark 三版 lockup
├── package.json            # Node 工具相依（只有 build logo 時會用到）
└── .gitignore
```

## 章節

01 Essence · 02 Logo · 03 Color · 04 Typography · 05 Tone of Voice · 06 Photography · 07 Iconography · 08 Pattern · 09 Motion · 10 Social · 11 Application · 12 Download

## 授權

© Moospace 2026 · 本規範僅供授權合作夥伴使用
