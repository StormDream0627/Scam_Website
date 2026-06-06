<script setup>
import { ref } from 'vue'

const email = ref('')
const feedback = ref('')
const feedbackColor = ref('')

const subscribe = async () => {
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)

  if (!isValid) {
    feedback.value = "請輸入有效的電子郵件格式。"
    feedbackColor.value = "#9b2a2a"
    return
  }

  try {
    const response = await fetch("/api/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: email.value })
    })

    const result = await response.json()
    if (!response.ok) {
      feedback.value = result.message || "儲存失敗"
      feedbackColor.value = "#9b2a2a"
      return
    }

    feedback.value = result.message || "訂閱成功，電子信箱已儲存。"
    feedbackColor.value = "#1f5a33"
    email.value = ''
  } catch (error) {
    console.error("Newsletter save failed:", error)
    feedback.value = "連線伺服器失敗，請檢查後台是否已啟動。"
    feedbackColor.value = "#9b2a2a"
  }
}
</script>

<template>
  <section class="section-block newsletter" aria-labelledby="newsletter-title">
    <div>
      <h2 id="newsletter-title">訂閱電子報</h2>
      <p>免費訂閱每日健康內容，掌握最新文章與影音。</p>
    </div>
    <form id="newsletterForm" class="newsletter-form" novalidate @submit.prevent="subscribe">
      <label class="visually-hidden" for="newsletterEmail">電子郵件</label>
      <input 
        v-model="email"
        id="newsletterEmail" 
        name="email" 
        type="email" 
        placeholder="you@example.com" 
        required 
      />
      <button type="submit" class="primary-button">訂閱</button>
      <p 
        id="newsletterFeedback" 
        class="form-feedback" 
        role="status" 
        aria-live="polite"
        :style="{ color: feedbackColor }"
      >
        {{ feedback }}
      </p>
    </form>
  </section>
</template>
