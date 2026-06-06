const paymentForm = document.querySelector("#paymentForm");
const paymentFeedback = document.querySelector("#paymentFeedback");
const cardNumberInput = document.querySelector("#cardNumber");
const expiryInput = document.querySelector("#expiry");
const targetArticle = document.querySelector("#targetArticle");
const backToArticle = document.querySelector("#backToArticle");

// 付款頁從 query string 取得文章標題；若缺少則帶預設值。
function getArticleTitle() {
  const params = new URLSearchParams(window.location.search);
  const title = params.get("title");
  return title && title.trim() ? title.trim() : "健康專題：打造可持續的日常習慣";
}

// 依 4 碼分組卡號，輸入時提升可讀性。
function formatCardNumber(value) {
  const digits = value.replace(/\D/g, "").slice(0, 16);
  const chunks = digits.match(/.{1,4}/g) || [];
  return chunks.join(" ");
}

// 將 MMYY 自動格式化為 MM/YY。
function formatExpiry(value) {
  const digits = value.replace(/\D/g, "").slice(0, 4);
  if (digits.length < 3) {
    return digits;
  }
  return `${digits.slice(0, 2)}/${digits.slice(2)}`;
}

function setupInputFormatting() {
  cardNumberInput.addEventListener("input", () => {
    cardNumberInput.value = formatCardNumber(cardNumberInput.value);
  });

  expiryInput.addEventListener("input", () => {
    expiryInput.value = formatExpiry(expiryInput.value);
  });
}

// 成功付款後回到已解鎖的文章頁。
function buildUnlockUrl(articleTitle) {
  const params = new URLSearchParams({
    title: articleTitle,
    unlock: "1"
  });
  return `article.html?${params.toString()}`;
}

function initializeHeader(articleTitle) {
  targetArticle.textContent = `目標文章：${articleTitle}`;
  backToArticle.href = buildUnlockUrl(articleTitle);
}

// 僅驗證格式，實際金流驗證仍應交由支付服務處理。
function validatePaymentData(payload) {
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email);
  const validCardholderName = payload.cardholderName.trim().length >= 2;
  const validCardNumber = /^\d{16}$/.test(payload.cardNumber);
  const validExpiry = /^(0[1-9]|1[0-2])\/(\d{2})$/.test(payload.expiry);
  const validCvv = /^\d{3,4}$/.test(payload.cvv);
  return validEmail && validCardholderName && validCardNumber && validExpiry && validCvv;
}

async function handleSubmit(event) {
  event.preventDefault();

  const articleTitle = getArticleTitle();
  const formData = new FormData(paymentForm);
  const payload = {
    email: String(formData.get("email") || "").trim().toLowerCase(),
    cardholderName: String(formData.get("cardholderName") || "").trim(),
    cardNumber: String(formData.get("cardNumber") || "").replace(/\s+/g, ""),
    expiry: String(formData.get("expiry") || "").trim(),
    cvv: String(formData.get("cvv") || "").trim(),
    articleTitle
  };

  if (!validatePaymentData(payload)) {
    paymentFeedback.textContent = "請檢查付款資訊格式。";
    paymentFeedback.style.color = "#9b2a2a";
    return;
  }

  try {
    const response = await fetch("/api/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message || "付款失敗");
    }

    paymentFeedback.textContent = "付款成功，將為你導回完整文章。";
    paymentFeedback.style.color = "#1f5a33";
    setTimeout(() => {
      window.location.href = buildUnlockUrl(articleTitle);
    }, 800);
  } catch (error) {
    paymentFeedback.textContent = `付款失敗：${error.message}`;
    paymentFeedback.style.color = "#9b2a2a";
  }
}

// 付款頁初始化：設定抬頭資訊、輸入格式、提交事件。
function initializePaymentPage() {
  const articleTitle = getArticleTitle();
  initializeHeader(articleTitle);
  setupInputFormatting();
  paymentForm.addEventListener("submit", handleSubmit);
}

initializePaymentPage();
