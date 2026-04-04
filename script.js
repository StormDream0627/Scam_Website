// 首頁內容資料來源，集中管理方便後續替換成 API。
const content = {
  editorPicks: [
    {
      title: "睡眠與代謝互相影響，先從晚餐時間開始調整",
      summary: "主打內容區塊放置高優先文章，提供清楚摘要與分類。",
      category: "健康生活",
      author: "編輯團隊",
      date: "2026-04-04"
    },
    {
      title: "早餐蛋白質份量怎麼抓？營養師教你快速判斷",
      summary: "提供通勤族可執行的飲食策略。",
      category: "飲食營養",
      author: "林營養師",
      date: "2026-04-03"
    },
    {
      title: "肩頸痠痛反覆發作，3 招動作幫助日常放鬆",
      summary: "以圖文方式降低內容理解門檻。",
      category: "運動健身",
      author: "康復教練",
      date: "2026-04-02"
    }
  ],
  trending: [
    { title: "餐後血糖波動大？先檢查這 4 個飲食習慣", views: "142,220" },
    { title: "起床腰痠背痛不一定是老化，先看你的睡姿", views: "115,044" },
    { title: "補充水分的黃金時段，很多人都錯過", views: "103,551" },
    { title: "每天走路幾步才有保護效果？研究數據一次看", views: "95,342" },
    { title: "常見外食地雷排行，減脂期更要注意", views: "88,900" }
  ],
  latest: [
    {
      title: "換季鼻過敏總是發作？先做居家環境三步驟",
      summary: "從寢具、濕度、清潔頻率切入，建立低刺激生活環境。",
      category: "呼吸道健康",
      date: "2026-04-04"
    },
    {
      title: "久坐族護腰指南：辦公室也能做的微運動",
      summary: "每次 3 分鐘，降低下背壓力並提升循環。",
      category: "健康生活",
      date: "2026-04-04"
    },
    {
      title: "蔬果顏色與植化素：一眼看懂餐盤搭配",
      summary: "用顏色分配法快速建立均衡飲食。",
      category: "飲食營養",
      date: "2026-04-03"
    }
  ],
  videos: [
    {
      title: "5 分鐘晨間伸展，喚醒核心與穩定度",
      summary: "不需器材，適合初學者。",
      views: "31,200"
    },
    {
      title: "晚間舒壓呼吸法，改善睡前焦躁",
      summary: "以節奏呼吸放慢心率。",
      views: "27,845"
    },
    {
      title: "料理示範：高纖便當 15 分鐘完成",
      summary: "平衡蛋白質、碳水與纖維。",
      views: "19,430"
    }
  ],
  artSpotlight: [
    {
      title: "名醫警告：這種早餐搭配恐讓血糖整天失控",
      summary: "看似健康的組合其實藏有升糖陷阱，專家解析關鍵誤區。",
      category: "飲食營養",
      date: "2026-04-04",
      image: "Art_Resourse/14531616733_66c7a0ef46_b.jpg"
    },
    {
      title: "連三天熬夜後身體會發生什麼？結果比你想像更可怕",
      summary: "從精神渙散到代謝紊亂，短期作息失衡的連鎖反應一次看懂。",
      category: "健康生活",
      date: "2026-04-04",
      image: "Art_Resourse/20220202700118.jpg"
    },
    {
      title: "每天都在做卻越做越傷：熱門健身動作錯誤排行曝光",
      summary: "復健教練點出最常見代償動作，避免小痠痛變成大問題。",
      category: "運動健身",
      date: "2026-04-03",
      image: "Art_Resourse/images3.jpg"
    },
    {
      title: "醫師曝「沉默警訊」：這 3 個症狀可能不是單純疲勞",
      summary: "忽略日常小異常可能錯過黃金檢查時機，先掌握自我檢測重點。",
      category: "疾病症狀",
      date: "2026-04-03",
      image: "Art_Resourse/6293da64f8be085becb6385da3272fc2.jpg"
    },
    {
      title: "早餐店最常點組合被點名：營養師說這樣吃脂肪飆最快",
      summary: "同樣預算也能選到更穩定的能量組合，外食族必看替代清單。",
      category: "減肥瘦身",
      date: "2026-04-02",
      image: "Art_Resourse/images1.jpg"
    },
    {
      title: "久坐族驚覺下背痛惡化：原來不是椅子而是這習慣",
      summary: "物理治療師提供可立即執行的 2 分鐘調整流程。",
      category: "健康生活",
      date: "2026-04-02",
      image: "Art_Resourse/project_1_1.jpg"
    }
  ],
  campaigns: [
    { title: "試用活動", summary: "體驗健康產品並填寫回饋。" },
    { title: "加入 LINE", summary: "接收每日主題提醒與新文章通知。" },
    { title: "追蹤社群", summary: "掌握活動與直播更新。" }
  ],
  infographics: [
    {
      title: "高纖食物速查圖",
      summary: "一張圖比較常見食材纖維量。",
      category: "圖解健康",
      date: "2026-04-03"
    },
    {
      title: "血壓量測正確流程",
      summary: "避免錯誤姿勢造成讀值偏差。",
      category: "三高保健",
      date: "2026-04-02"
    },
    {
      title: "身體發炎訊號檢查表",
      summary: "從作息與飲食檢視日常警訊。",
      category: "健康生活",
      date: "2026-04-02"
    }
  ],
  topics: [
    { no: "01", title: "睡眠品質提升計畫", teaser: "從環境、作息到營養補充的完整方案。" },
    { no: "02", title: "40+ 健康行動清單", teaser: "以週為單位建立可持續習慣。" },
    { no: "03", title: "飲食與代謝管理", teaser: "理解身體訊號，改善餐盤比例。" }
  ],
  products: [
    { title: "護膝壓力褲", nowPrice: "$999", oldPrice: "$1,680" },
    { title: "舒眠支撐枕", nowPrice: "$1,280", oldPrice: "$1,980" },
    { title: "高纖穀粉組", nowPrice: "$760", oldPrice: "$980" }
  ],
  keywords: [
    "飯後血糖",
    "手腳冰冷",
    "睡不好",
    "胃脹氣",
    "喉嚨痛",
    "A 型流感",
    "體脂管理",
    "低醣料理",
    "關節保養"
  ]
};

// 首頁會用到的 DOM 節點快取。
const elements = {
  menuToggle: document.querySelector("#menuToggle"),
  primaryNav: document.querySelector("#primaryNav"),
  searchForm: document.querySelector("#searchForm"),
  searchInput: document.querySelector("#searchInput"),
  newsletterForm: document.querySelector("#newsletterForm"),
  newsletterEmail: document.querySelector("#newsletterEmail"),
  newsletterFeedback: document.querySelector("#newsletterFeedback"),
  editorPicks: document.querySelector("#editorPicks"),
  trendingList: document.querySelector("#trendingList"),
  latestGrid: document.querySelector("#latestGrid"),
  videoGrid: document.querySelector("#videoGrid"),
  artGrid: document.querySelector("#artGrid"),
  campaignGrid: document.querySelector("#campaignGrid"),
  infographicGrid: document.querySelector("#infographicGrid"),
  topicGrid: document.querySelector("#topicGrid"),
  productGrid: document.querySelector("#productGrid"),
  keywordCloud: document.querySelector("#keywordCloud")
};

function articleUrl(title) {
  return `article.html?title=${encodeURIComponent(title)}`;
}

function createArticleCard(item, variant = "card") {
  const article = document.createElement("article");
  article.className = variant;
  const url = articleUrl(item.title);
  article.innerHTML = `
    <a class="card-link-block" href="${url}" aria-label="閱讀文章：${item.title}">
      <span class="card-badge">${item.category}</span>
      <h3>${item.title}</h3>
      <p>${item.summary}</p>
      <div class="meta-row">
        <span>${item.author ?? "內容編輯"}</span>
        <span>${item.date}</span>
      </div>
      <span class="card-link-cta">閱讀全文</span>
    </a>
  `;
  return article;
}

function renderEditorPicks(items) {
  if (!items.length) {
    elements.editorPicks.innerHTML = "<p>目前沒有符合條件的精選內容。</p>";
    return;
  }

  const [first, ...rest] = items;
  elements.editorPicks.innerHTML = "";
  elements.editorPicks.append(createArticleCard(first, "hero-card"));

  const list = document.createElement("div");
  list.className = "card-grid";
  rest.forEach((item) => list.append(createArticleCard(item)));
  elements.editorPicks.append(list);
}

function renderTrending(items) {
  elements.trendingList.innerHTML = "";
  items.forEach((item, index) => {
    const li = document.createElement("li");
    const url = articleUrl(item.title);
    li.innerHTML = `
      <a class="rank-link" href="${url}" aria-label="閱讀熱門文章：${item.title}">
        <span><span class="rank-index">#${index + 1}</span><span class="rank-title">${item.title}</span></span>
        <span>${item.views}</span>
      </a>
    `;
    elements.trendingList.append(li);
  });
}

function createSimpleCard(item, extra = "", isArticle = false) {
  const article = document.createElement("article");
  article.className = "card";
  const heading = isArticle
    ? `<a class="card-title-link" href="${articleUrl(item.title)}">${item.title}</a>`
    : item.title;
  const cta = isArticle ? '<a class="card-link-cta" href="' + articleUrl(item.title) + '">閱讀全文</a>' : "";
  article.innerHTML = `
    ${extra}
    <h3>${heading}</h3>
    <p>${item.summary}</p>
    <div class="meta-row">
      <span>${item.category ?? "影音"}</span>
      <span>${item.date ?? item.views ?? ""}</span>
    </div>
    ${cta}
  `;
  return article;
}

function createArtStoryCard(item) {
  const article = document.createElement("article");
  article.className = "card art-story-card";
  const url = articleUrl(item.title);
  article.innerHTML = `
    <a class="card-link-block" href="${url}" aria-label="閱讀圖文焦點：${item.title}">
      <img class="card-cover" src="${item.image}" alt="${item.title}" loading="lazy" decoding="async" />
      <span class="card-badge">${item.category}</span>
      <h3>${item.title}</h3>
      <p>${item.summary}</p>
      <div class="meta-row">
        <span>焦點報導</span>
        <span>${item.date}</span>
      </div>
      <span class="card-link-cta">閱讀全文</span>
    </a>
  `;
  return article;
}

// 通用網格渲染器，避免重複 append 迴圈。
function renderCardGrid(target, items, mapper) {
  target.innerHTML = "";
  items.forEach((item) => target.append(mapper(item)));
}

function renderCampaigns(items) {
  elements.campaignGrid.innerHTML = "";
  items.forEach((item) => {
    const card = document.createElement("article");
    card.className = "campaign-card";
    card.innerHTML = `<h3>${item.title}</h3><p>${item.summary}</p>`;
    elements.campaignGrid.append(card);
  });
}

function renderTopics(items) {
  elements.topicGrid.innerHTML = "";
  items.forEach((item) => {
    const card = document.createElement("article");
    card.className = "topic-card";
    card.innerHTML = `
      <span class="card-badge">${item.no}</span>
      <h3>${item.title}</h3>
      <p>${item.teaser}</p>
    `;
    elements.topicGrid.append(card);
  });
}

function renderProducts(items) {
  elements.productGrid.innerHTML = "";
  items.forEach((item) => {
    const card = document.createElement("article");
    card.className = "product-card";
    card.innerHTML = `
      <span class="card-badge">限時特價</span>
      <h3>${item.title}</h3>
      <p><strong>${item.nowPrice}</strong> <s>${item.oldPrice}</s></p>
    `;
    elements.productGrid.append(card);
  });
}

function renderKeywords(items) {
  elements.keywordCloud.innerHTML = "";
  items.forEach((keyword) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "keyword-chip";
    button.textContent = keyword;
    button.addEventListener("click", () => {
      elements.searchInput.value = keyword;
      elements.searchForm.requestSubmit();
    });
    elements.keywordCloud.append(button);
  });
}

function initializePage() {
  renderEditorPicks(content.editorPicks);
  renderTrending(content.trending);
  renderCardGrid(elements.latestGrid, content.latest, (item) => createSimpleCard(item, "", true));
  renderCardGrid(elements.videoGrid, content.videos, (item) => createSimpleCard(item, '<span class="card-badge">人氣影音</span>'));
  renderCardGrid(elements.artGrid, content.artSpotlight, (item) => createArtStoryCard(item));
  renderCampaigns(content.campaigns);
  renderCardGrid(elements.infographicGrid, content.infographics, (item) => createSimpleCard(item, "", true));
  renderTopics(content.topics);
  renderProducts(content.products);
  renderKeywords(content.keywords);
}

// 手機版導覽收合控制。
function setupNavigationToggle() {
  elements.menuToggle.addEventListener("click", () => {
    const isExpanded = elements.menuToggle.getAttribute("aria-expanded") === "true";
    const nextState = !isExpanded;
    elements.menuToggle.setAttribute("aria-expanded", String(nextState));
    elements.primaryNav.dataset.open = String(nextState);
  });
}

function setupSearch() {
  // 搜尋同時過濾精選與最新文章，維持首頁閱讀節奏。
  elements.searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const keyword = elements.searchInput.value.trim().toLowerCase();

    if (!keyword) {
      renderEditorPicks(content.editorPicks);
      renderCardGrid(elements.latestGrid, content.latest, (item) => createSimpleCard(item, "", true));
      return;
    }

    const filterByTitle = (item) => item.title.toLowerCase().includes(keyword);
    renderEditorPicks(content.editorPicks.filter(filterByTitle));
    renderCardGrid(elements.latestGrid, content.latest.filter(filterByTitle), (item) => createSimpleCard(item, "", true));
  });
}

// 電子報提交：前端先做格式驗證，再呼叫後端 API。
function setupNewsletterForm() {
  elements.newsletterForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = elements.newsletterEmail.value.trim();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!isValid) {
      elements.newsletterFeedback.textContent = "請輸入有效的電子郵件格式。";
      elements.newsletterFeedback.style.color = "#9b2a2a";
      return;
    }

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || "儲存失敗");
      }

      elements.newsletterFeedback.textContent = "訂閱成功，電子信箱已儲存。";
      elements.newsletterFeedback.style.color = "#1f5a33";
      elements.newsletterForm.reset();
    } catch (error) {
      console.error("Newsletter save failed:", error);
      elements.newsletterFeedback.textContent = "訂閱失敗，請稍後再試。";
      elements.newsletterFeedback.style.color = "#9b2a2a";
    }
  });
}

// 彩蛋使用極低可見度按鈕，避免影響主要版面。
function setupEasterEgg() {
  const trigger = document.createElement("button");
  trigger.type = "button";
  trigger.className = "easter-egg-trigger";
  trigger.setAttribute("aria-label", "隱藏彩蛋");
  trigger.innerHTML = '<img src="Art_Resourse/36d55e386b2da65ba290c40e7668d264.jpg" alt="" loading="lazy" decoding="async" />';

  trigger.addEventListener("click", () => {
    window.alert("被你發現了我是航線玩家");
  });

  document.body.append(trigger);
}

// 啟動首頁互動。
initializePage();
setupNavigationToggle();
setupSearch();
setupNewsletterForm();
setupEasterEgg();
