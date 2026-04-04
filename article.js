const titleElement = document.querySelector("#articleTitle");
const unlockButton = document.querySelector("#unlockButton");
const lockedContent = document.querySelector("#lockedContent");

// 文章標題可由首頁透過 query string 傳入。
function getArticleTitleFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const title = params.get("title");
  return title && title.trim() ? title.trim() : "健康專題：打造可持續的日常習慣";
}

// unlock=1 代表已完成付款流程。
function hasUnlockAccess() {
  const params = new URLSearchParams(window.location.search);
  return params.get("unlock") === "1";
}

function paymentUrl(articleTitle) {
  const params = new URLSearchParams({ title: articleTitle });
  return `payment.html?${params.toString()}`;
}

// 解除 paywall 顯示狀態，並停用解鎖按鈕。
function unlockArticle() {
  lockedContent.dataset.locked = "false";
  unlockButton.disabled = true;
  unlockButton.textContent = "已解鎖";
}

function setupPaywall() {
  unlockButton.addEventListener("click", () => {
    const articleTitle = getArticleTitleFromQuery();
    window.location.href = paymentUrl(articleTitle);
  });
}

// 文章頁初始化：設定標題、套用解鎖狀態、綁定付款導向。
function initializeArticle() {
  titleElement.textContent = getArticleTitleFromQuery();
  if (hasUnlockAccess()) {
    unlockArticle();
  }
  setupPaywall();
}

initializeArticle();
