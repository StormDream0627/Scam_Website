const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = Number(process.env.PORT) || 5500;
const ROOT_DIR = __dirname;
const NEWSLETTER_FILE = path.join(ROOT_DIR, "data", "newsletter-subscribers.json");
const PAYMENT_FILE = path.join(ROOT_DIR, "data", "payment-records.json");

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8"
};

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(payload));
}

function getRequestBody(req) {
  return new Promise((resolve, reject) => {
    let raw = "";

    req.on("data", (chunk) => {
      raw += chunk;
      if (raw.length > 1e6) {
        reject(new Error("Request body too large"));
      }
    });

    req.on("end", () => resolve(raw));
    req.on("error", reject);
  });
}

function loadJsonArray(filePath) {
  try {
    const fileText = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(fileText);
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

function saveJsonArray(filePath, records) {
  fs.writeFileSync(filePath, JSON.stringify(records, null, 2), "utf-8");
}

function maskCardNumber(cardNumber) {
  const digits = cardNumber.replace(/\D/g, "");
  return {
    maskedCardNumber: digits,
  };
}

function detectCardBrand(cardNumber) {
  const digits = cardNumber.replace(/\D/g, "");
  if (/^4/.test(digits)) {
    return "Visa";
  }

  if (/^5[1-5]/.test(digits)) {
    return "Mastercard";
  }

  if (/^3[47]/.test(digits)) {
    return "Amex";
  }

  return "Other";
}

function getSafeFilePath(urlPathname) {
  const requestedPath = urlPathname === "/" ? "/index.html" : urlPathname;
  const normalizedPath = path.normalize(requestedPath).replace(/^([.][.][/\\])+/, "");
  return path.join(ROOT_DIR, normalizedPath);
}

async function handleNewsletter(req, res) {
  try {
    const rawBody = await getRequestBody(req);
    const body = JSON.parse(rawBody || "{}");
    const email = String(body.email || "").trim().toLowerCase();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!isValidEmail) {
      return sendJson(res, 400, { message: "電子信箱格式不正確" });
    }

    const subscribers = loadJsonArray(NEWSLETTER_FILE);
    const existed = subscribers.some((item) => item.email === email);
    if (existed) {
      return sendJson(res, 409, { message: "此電子信箱已訂閱" });
    }

    subscribers.push({
      email,
      subscribedAt: new Date().toISOString()
    });

    saveJsonArray(NEWSLETTER_FILE, subscribers);
    return sendJson(res, 201, { message: "已成功儲存", total: subscribers.length });
  } catch {
    return sendJson(res, 500, { message: "伺服器處理失敗" });
  }
}

async function handlePayment(req, res) {
  try {
    const rawBody = await getRequestBody(req);
    const body = JSON.parse(rawBody || "{}");

    const email = String(body.email || "").trim().toLowerCase();
    const cardholderName = String(body.cardholderName || "").trim();
    const cardNumber = String(body.cardNumber || "").replace(/\s+/g, "");
    const expiry = String(body.expiry || "").trim();
    const articleTitle = String(body.articleTitle || "").trim();

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validCardholderName = cardholderName.length >= 2;
    const validCardNumber = /^\d{16}$/.test(cardNumber);
    const validExpiry = /^(0[1-9]|1[0-2])\/(\d{2})$/.test(expiry);

    if (!validEmail || !validCardholderName || !validCardNumber || !validExpiry) {
      return sendJson(res, 400, { message: "付款資訊格式不正確" });
    }

    const { maskedCardNumber, last4 } = maskCardNumber(cardNumber);
    const records = loadJsonArray(PAYMENT_FILE);
    records.push({
      email,
      cardholderName,
      cardBrand: detectCardBrand(cardNumber),
      maskedCardNumber,
      last4,
      expiry,
      articleTitle,
      paidAt: new Date().toISOString()
    });

    saveJsonArray(PAYMENT_FILE, records);
    return sendJson(res, 201, { message: "付款資料已儲存", total: records.length });
  } catch {
    return sendJson(res, 500, { message: "伺服器處理失敗" });
  }
}

function serveStatic(req, res, pathname) {
  const filePath = getSafeFilePath(pathname);
  if (!filePath.startsWith(ROOT_DIR)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Not found");
      return;
    }

    const extension = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[extension] || "application/octet-stream";
    res.writeHead(200, { "Content-Type": contentType });
    res.end(data);
  });
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (req.method === "POST" && url.pathname === "/api/newsletter") {
    await handleNewsletter(req, res);
    return;
  }

  if (req.method === "POST" && url.pathname === "/api/payment") {
    await handlePayment(req, res);
    return;
  }

  if (req.method === "GET") {
    serveStatic(req, res, url.pathname);
    return;
  }

  res.writeHead(405, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("Method not allowed");
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
