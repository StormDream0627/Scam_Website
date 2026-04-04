# EDH.tw 首頁 Wireframe 詳細文檔

## 1. 文件資訊

- 專案名稱：EDH.tw 首頁資訊架構與 Wireframe 規格
- 網站來源：https://edh.tw/
- 文件版本：v1.0
- 文件日期：2026-04-04
- 文件用途：
  - 對齊產品、設計、前端、內容團隊的首頁結構認知
  - 作為低保真 Wireframe 與後續 UI 設計依據
  - 作為前端元件拆分、CMS 串接與事件追蹤規格基礎

---

## 2. 目標與範圍

### 2.1 目標

1. 拆解 EDH.tw 首頁的內容層級與區塊排列
2. 定義每一區塊的關鍵元件、資料欄位、互動行為
3. 產出可直接落地的 Wireframe 結構（Desktop 與 Mobile）
4. 補上核心使用者流程（內容探索、影音消費、導購轉換、訂閱留存）

### 2.2 範圍

- 本文件以首頁資訊架構與內容模組為主
- 涵蓋文章、影音、短影音、專題、商城、活動、標籤、頁尾
- 不包含：
  - 實際視覺設計稿（高保真色彩與字體規範）
  - 後台 CMS 權限與編輯流程細節
  - 文章頁與影片頁完整內頁版型規範

---

## 3. 首頁資訊架構（IA）

首頁可拆為以下主區塊（由上而下）：

1. Header（品牌、主導覽、搜尋、會員入口）
2. 早安精選
3. 熱門文章（排行榜）
4. 最新文章
5. 人氣影音
6. 早安短影音
7. 活動專區
8. 圖解健康
9. 焦點專題
10. 早安健康嚴選（商城）
11. 健康熱搜字
12. Newsletter 訂閱與社群追蹤
13. Footer（分類導覽、關於資訊、相關網站、版權）

---

## 4. Desktop Wireframe（低保真結構）

```text
[TOP Utility Bar]
- 站點次級入口 / 公告 / 登入註冊（視實作而定）

[HEADER]
┌ Logo ─────────────────────────────────── Search ─ Member ┐
└ Main Nav: 疾病症狀 | 健康生活 | 飲食營養 | 減肥瘦身 | 運動健身 | 影音專區... ┘

[S01 早安精選]
┌ Hero 主卡（大圖 + 大標 + 摘要）──────────────────────────────┐
└ 次要內容卡（2~6 張）───────────────────────────────────────┘

[S02 熱門文章]
┌ 排行榜 #1~#10（標題 + 觀看/閱讀數）┐
└ 點擊導向文章頁                      ┘

[S03 最新文章]
┌ 文章卡片清單（圖 + 標題 + 分類 + 日期 + 作者可選）x N ┐
└ [閱讀更多文章] CTA                                        ┘

[S04 人氣影音]
┌ 影音卡片（縮圖 + 標題 + 簡介 + 觀看數）x N ┐
└ [觀看更多影片] CTA                            ┘

[S05 早安短影音]
┌ Shorts 直式卡片 x N ┐
└ [訂閱早安健康]（導向 YouTube Shorts）┘

[S06 活動專區]
┌ 試用活動 ┐ ┌ LINE 加好友 ┐ ┌ 追蹤 Facebook ┐
└ 可能含廣告版位（休息一下，看廣告）         ┘

[S07 圖解健康]
┌ 圖解文章卡片 x N ┐
└ [觀看更多圖片] CTA ┘

[S08 焦點專題]
┌ 專題卡片（編號 01~10 + 標題 + 摘要）x N ┐
└ [更多專題] CTA                           ┘

[S09 早安健康嚴選]
┌ 商品卡片（商品圖 + 品名 + 特價 + 原價）x N ┐
└ [前往商城] CTA                              ┘

[S10 健康熱搜字]
┌ Tag Cloud（熱門關鍵詞）x many ┐
└ 點擊導向相關內容               ┘

[S11 訂閱與社群]
┌ 電子報訂閱（欄位 + 按鈕）┐
└ 社群入口（FB / LINE / IG / YT）┘

[FOOTER]
- 客服資訊（服務時間、電話）
- 文章分類連結
- 關於早安健康
- 相關網站
- 版權聲明
```

---

## 5. Mobile Wireframe（低保真結構）

1. Header 簡化為：Logo + 搜尋 icon + 漢堡選單
2. 主選單改為抽屜式，分類以手風琴展開
3. 內容區塊全面改為單欄垂直流
4. 熱門文章維持排行榜樣式（可做橫滑或單列）
5. 人氣影音與短影音改水平滑動容器
6. 訂閱區塊靠近頁尾，但需維持高可見度
7. Footer 採折疊式群組，降低捲動負擔

---

## 6. 元件拆解（Component Inventory）

### 6.1 全域元件

#### A. GlobalHeader
- 用途：品牌識別、全站導覽、搜尋與帳號入口
- 欄位：
  - logoUrl
  - navItems[]
  - searchEnabled
  - authState（guest/login）
- 狀態：default, sticky, scrolled, menuOpen(mobile)

#### B. SearchBar / SearchOverlay
- 用途：輸入關鍵字並導向內容
- 子元件：input、清除按鈕、熱門詞、建議結果
- 狀態：idle, typing, result, noResult

#### C. SectionHeader
- 用途：統一區塊標題與更多連結
- 欄位：title, subtitle(optional), moreLink(optional)

### 6.2 內容元件

#### D. ArticleCard（通用文章卡）
- 欄位：
  - id
  - coverImage
  - title
  - summary(optional)
  - category
  - author(optional)
  - publishDate
  - readCount(optional)
- 變體：hero, standard, compact, rankRow, imageHeavy

#### E. RankList
- 欄位：rank, title, count
- 可擴充：rankChange(up/down/flat)

#### F. VideoCard
- 欄位：thumbnail, title, description(optional), views, duration(optional)

#### G. ShortsCard
- 欄位：verticalThumbnail, title, views(optional)

#### H. TopicCard（焦點專題）
- 欄位：topicNo, title, teaser, cover, linkType(internal/external)

#### I. ProductCard（商城導購）
- 欄位：productName, image, priceNow, priceOriginal, badge(optional), shopLink

#### J. KeywordChip / TagCloud
- 欄位：keyword, targetUrl, targetType(article/video)

### 6.3 轉換元件

#### K. NewsletterForm
- 欄位：email, consent(optional)
- 驗證：email format
- 回饋：success message / error message

#### L. SocialLinks
- 平台：Facebook, LINE, Instagram, YouTube
- 行為：外部開新分頁

#### M. FooterNavGroup
- 群組：文章分類、關於我們、相關網站、法規條款

---

## 7. 區塊資料來源與更新邏輯（建議）

| 區塊 | 建議資料來源 | 更新頻率 | 排序邏輯 |
|---|---|---|---|
| 早安精選 | 編輯手動挑選/CMS | 每日 | 編輯優先 |
| 熱門文章 | 閱讀數統計服務 | 即時或每小時 | 依讀取量/加權熱度 |
| 最新文章 | 文章資料庫 | 即時 | 發布時間新到舊 |
| 人氣影音 | 影音資料庫 | 每日 | 觀看量與時效加權 |
| 短影音 | 影音資料庫/外部渠道 | 每日 | 近期表現排序 |
| 焦點專題 | 專題 CMS | 活動期內異動 | 編輯排序 |
| 嚴選商城 | 商城 API | 即時 | 檔期商品優先 |
| 健康熱搜字 | 搜尋與流量分析 | 每日 | 熱度排名 |

---

## 8. 關鍵使用者流程（User Flow）

### 8.1 Flow A：首頁內容探索（文章）

1. 進入首頁
2. 在「早安精選/熱門文章/最新文章」中點擊內容
3. 進入文章頁閱讀
4. 透過推薦內容回流首頁或其他文章頁

### 8.2 Flow B：搜尋導向

1. 點擊搜尋欄
2. 輸入症狀/關鍵詞
3. 顯示建議關鍵字與結果
4. 點擊結果進入文章或影音頁
5. 無結果時提供熱門關鍵詞與分類入口

### 8.3 Flow C：影音消費

1. 滑到「人氣影音」或「短影音」
2. 點擊卡片進入影片頁
3. 觀看後透過更多影片繼續瀏覽

### 8.4 Flow D：商城導購

1. 在「早安健康嚴選」看到商品卡
2. 點擊跳轉商城
3. 在商城完成瀏覽與下單

### 8.5 Flow E：訂閱留存

1. 在頁尾看到電子報訂閱區
2. 輸入 Email 並送出
3. 訂閱成功顯示回饋訊息
4. 後續透過 EDM 帶回訪問

### 8.6 Flow F：社群擴散

1. 點擊社群 icon
2. 前往 FB/LINE/IG/YT
3. 透過社群內容回流主站

---

## 9. Wireframe 標註規範（給設計與前端）

每一個區塊建議標註以下資訊：

1. 區塊 ID（例如 S01, S02...）
2. 元件名稱與變體（ArticleCard-Hero）
3. 資料來源（CMS/API/手動）
4. 裝置行為（desktop grid/mobile slider）
5. CTA 目標（internal/external）
6. 追蹤事件（impression, click, outbound）
7. 空狀態規則（無資料時是否隱藏區塊）

---

## 10. 事件追蹤建議（Analytics）

### 10.1 事件命名

- section_impression
- card_click
- cta_click
- search_submit
- search_result_click
- newsletter_submit
- newsletter_success
- outbound_click

### 10.2 事件參數建議

- section_id
- section_name
- card_id
- card_type
- rank_index
- content_category
- is_external
- device_type
- position_index

---

## 11. SEO 與內容策略觀察（首頁層級）

1. 多區塊內容覆蓋面廣，有助於多關鍵字入口
2. 「健康熱搜字」可作為長尾關鍵字樞紐
3. Footer 分類連結對搜尋引擎抓取有輔助價值
4. 建議補強結構化資料：
   - Article
   - VideoObject
   - BreadcrumbList
   - Organization

---

## 12. 可用性與可及性建議

1. 所有卡片與按鈕提供清楚焦點狀態（鍵盤操作）
2. 圖片需具備替代文字（alt）
3. 影片縮圖按鈕需有 aria-label（包含標題）
4. 色彩對比達 WCAG 2.2 AA
5. 表單錯誤提示需同時支援視覺與語意提示

---

## 13. 風險與注意事項

1. 首頁模組多，若載入策略不佳可能影響 LCP
2. 外部連結（專題/商城/社群）需清楚標示出站
3. 各區塊排序規則若過度依賴人工，維運成本較高
4. 影音與短影音若無懶載入，可能增加首屏負擔

---

## 14. 後續交付建議

1. 將本文件轉為 Figma 低保真版框（Desktop 1440 與 Mobile 390）
2. 建立元件命名與 Token 規範（供前端/設計同步）
3. 補齊 CMS 欄位定義與 API Schema
4. 建立首頁 KPI 監測儀表：CTR、深度瀏覽、訂閱轉換、出站率

---

## 15. 附錄：快速元件對照

| 區塊 | 主要元件 |
|---|---|
| Header | GlobalHeader, SearchBar |
| 早安精選 | SectionHeader, ArticleCard(hero/standard) |
| 熱門文章 | SectionHeader, RankList |
| 最新文章 | SectionHeader, ArticleCard(standard) |
| 人氣影音 | SectionHeader, VideoCard |
| 早安短影音 | SectionHeader, ShortsCard |
| 活動專區 | PromoLinkCard, AdSlot |
| 圖解健康 | SectionHeader, ArticleCard(imageHeavy) |
| 焦點專題 | SectionHeader, TopicCard |
| 早安健康嚴選 | SectionHeader, ProductCard |
| 健康熱搜字 | SectionHeader, KeywordChip |
| Footer | NewsletterForm, SocialLinks, FooterNavGroup |

---

本文件可直接作為 Wireframe 與前端切版需求基底。若要進一步實作，可在下一版加入「區塊尺寸規格、欄網格與間距 token、斷點行為細則」。
