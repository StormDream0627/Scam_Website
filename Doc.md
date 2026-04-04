健康釣魚網站實作
===
網站設計風格
---
        
設計風格上參考原本網站採用綠白色配置，使其更貼合原本的健康知識網站定位，並且將網站各部分分隔為數個區塊方便使用者查找資料，且為文章配置圖片豐富網站內容。
在使用者點開任意文章後，會被導向一個統一的網站，並發現需要付費才能解鎖剩餘的文章，一旦點開付費頁面並輸入資料後系統會解鎖文章，但付費資訊會被保存進Payment-records.json裡(需要Node.js這類系統運行，靜態的如Github Pages和LiveServer無法實現這個功能)，同時網頁末端的訂閱電子報也會回傳使用者輸入的email並儲存起來
然後在網頁某處我藏了彩蛋

使用的Components
---
| UI Component | 位置 | 用途 |
|---|---|---|
| Header（site-header） | index.html, article.html, payment.html, styles.css | 頁首品牌、入口按鈕、導覽容器 |
| Navigation（primary-nav） | index.html, styles.css | 首頁主選單導覽 |
| Search Form（search-form） | index.html, article.html, styles.css | 站內搜尋輸入與送出 |
| Section Block（section-block） | index.html, styles.css | 各內容模組統一區塊骨架 |
| Article Cards（hero-card/card） | script.js, styles.css | 文章摘要卡片展示 |
| Art Spotlight Card（art-story-card） | script.js, styles.css | 圖片焦點新聞卡片 |
| Ranking List（rank-list） | index.html, script.js, styles.css | 熱門文章排行 |
| Topic/Product/Campaign Cards | script.js, styles.css | 專題、商品、活動卡片 |
| Keyword Chips（keyword-chip） | index.html, script.js, styles.css | 熱搜標籤互動 |
| Newsletter Form | index.html, script.js, styles.css | 訂閱電子報表單 |
| Article Shell + Paywall | article.html, styles.css, article.js | 文章頁與付費解鎖區 |
| Payment Form（payment-form） | payment.html, payment.js, styles.css | 付款輸入、驗證、提交 |
| Easter Egg Trigger | script.js, styles.css | 隱藏彩蛋點擊互動 |
| Footer（site-footer） | index.html, styles.css | 網站底部資訊與連結 |


製作方法
---
我先將原始網站丟改Github Copilot，讓他幫我生成WireFrame的.md檔案，在確認無誤後讓他依據.md檔案生成一個類似的網站

隨後我依據常見的健康詐騙網站手法，規劃出以下的詐騙手法:(1)將用戶通過聳動標題引向文章，(2)通過鎖定文章一部分的方法誘使使用者輸入付款方式，(3)利用JavaScript將使用者輸入的付款資料儲存為Json格式。隨後和AI說明我的意圖後讓他生成相關的JavaScript, HTML與CSS程式碼。並在確定架構完善後增加圖片豐富版面

與原本網站差異
---
圖片數量較少，且顏色較淡，且較少動態的效果
