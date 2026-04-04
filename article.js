const titleElement = document.querySelector("#articleTitle");
const unlockButton = document.querySelector("#unlockButton");
const lockedContent = document.querySelector("#lockedContent");

function getArticleTitleFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const title = params.get("title");
  return title && title.trim() ? title.trim() : "健康專題：打造可持續的日常習慣";
}

function hasUnlockAccess() {
  const params = new URLSearchParams(window.location.search);
  return params.get("unlock") === "1";
}

function paymentUrl(articleTitle) {
  const params = new URLSearchParams({ title: articleTitle });
  return `payment.html?${params.toString()}`;
}

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

function initializeArticle() {
  titleElement.textContent = getArticleTitleFromQuery();
  if (hasUnlockAccess()) {
    unlockArticle();
  }
  setupPaywall();
}

initializeArticle();
