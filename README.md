# 六龜基督長老教會官方網站

歡迎來到六龜基督長老教會官方網站。本網站專為零技術維護需求而設計。網站內容驅動自 Markdown 檔案，不需具備程式開發背景也能輕鬆在 GitHub 上更新網站內容。

---

## 📖 給教會行政與內容維護人員 (一般使用者)

如果您需要更新網站上的文字內容，請直接在瀏覽器上操作 GitHub 即可，**完全不需要寫程式碼！**

### 如何更新網站內容？

網站所有的文字內容都放在 `content/` 資料夾內。您可以透過點擊以下檔案進行修改：

1. **[首頁內容 (index.md)](./content/index.md)**：包含首頁大標題、副標題，以及「特色介紹」卡片上的文字。
2. **[認識我們 (about.md)](./content/about.md)**：包含「教會沿革與信仰」的詳細歷史介紹文案。
3. **[聚會時間與地點 (schedule.md)](./content/schedule.md)**：包含聚會時間表（主日禮拜、各種團契聚會）以及導航/聯絡資訊等。

### 修改步驟 (無須下載任何軟體)：

1. 登入您的 GitHub 帳號。
2. 點擊上面的內容連結（例如 `content/schedule.md`）。
3. 點擊右上角的 **✏️ (鉛筆圖示)** 開始編輯檔案。
4. 這裡的文字格式是 **Markdown**。您可以直接修改裡面的中文字，就像在 Word 裡打字一樣。*(請注意：在 `---` 夾住的區域是設定區塊，請小心修改對應中文字即可)*
5. 修改完成後，捲動到頁面最下方。
6. 在 "Commit message" 欄位簡單寫下您改了什麼（例如「更新主日禮拜時間」）。
7. 點擊綠色的 **Commit changes** 按鈕。

**完成！網站將會透過 GitHub Actions 自動重新編譯並上線，通常在幾分鐘內就會看到最新內容。**

---

## 💻 For Developers (技術開發人員)

This website is a static site generated using **Nuxt 3** and `@nuxt/content` to explicitly decouple technical maintenance from content editing. 

### Technology Stack
- **Framework**: Nuxt 3 (Static Site Generation `ssr: true`, `nitro.prerender`)
- **Content Module**: `@nuxt/content` v2
- **Styling**: SCSS (Bespoke variables, no bulky UI libraries like Bootstrap)
- **Typography**: [霞鶩文楷 (LXGW WenKai)](https://lxgw.github.io/2021/01/28/lxgw-wenkai/) combined with responsive fallbacks (`assets/css/variables.scss`).
- **Icons**: Inline SVGs

### Setup & Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:3000`.

3. **Generate Static Site (Production)**:
   ```bash
   npm run generate
   ```
   This command statically generates the pages and outputs them into the `.output/public` directory.

### Key Architecture Details

- The design is tailored intentionally to mimic "paper and ink" aesthetics using a soft ivory background (`#FDFBF7`), dark charcoal (`#2C363F`) text, and a warm copper accent (`#A67C52`).
- Fonts are loaded directly through Nuxt Google Fonts config (`nuxt.config.ts`), with `download: false` explicitly set for LXGW WenKai TC to avoid incorrect subsetting/faux-bolding issues with CJK fonts.
- Pure CSS `reveal` staggered animations dictate component micro-interactions across page navigation.
