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
  shorts: [
    { title: "1 分鐘肩頸放鬆", views: "12,890" },
    { title: "站姿提踵訓練", views: "10,440" },
    { title: "低糖早餐搭配", views: "9,760" },
    { title: "午休護眼技巧", views: "8,112" }
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
  shortsRail: document.querySelector("#shortsRail"),
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

function renderCardGrid(target, items, mapper) {
  target.innerHTML = "";
  items.forEach((item) => target.append(mapper(item)));
}

function renderShorts(items) {
  elements.shortsRail.innerHTML = "";
  items.forEach((item) => {
    const card = document.createElement("article");
    card.className = "shorts-card";
    card.innerHTML = `
      <span class="card-badge">短影音</span>
      <h3>${item.title}</h3>
      <p>觀看數 ${item.views}</p>
    `;
    elements.shortsRail.append(card);
  });
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
  renderShorts(content.shorts);
  renderCampaigns(content.campaigns);
  renderCardGrid(elements.infographicGrid, content.infographics, (item) => createSimpleCard(item, "", true));
  renderTopics(content.topics);
  renderProducts(content.products);
  renderKeywords(content.keywords);
}

function setupNavigationToggle() {
  elements.menuToggle.addEventListener("click", () => {
    const isExpanded = elements.menuToggle.getAttribute("aria-expanded") === "true";
    const nextState = !isExpanded;
    elements.menuToggle.setAttribute("aria-expanded", String(nextState));
    elements.primaryNav.dataset.open = String(nextState);
  });
}

function setupSearch() {
  // 搜尋會同時過濾精選與最新文章，保留首頁瀏覽節奏。
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
      elements.newsletterFeedback.textContent = "";
    }
  });
}

initializePage();
setupNavigationToggle();
setupSearch();
setupNewsletterForm();
