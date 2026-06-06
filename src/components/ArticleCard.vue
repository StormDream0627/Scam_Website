<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true
  },
  variant: {
    type: String,
    default: 'card' // 'card', 'hero-card', 'art-story-card'
  },
  showBadge: {
    type: Boolean,
    default: true
  },
  isArticle: {
    type: Boolean,
    default: true
  }
})

const baseUrl = import.meta.env.BASE_URL
function articleUrl(title) {
  return `${baseUrl}article.html?title=${encodeURIComponent(title)}`
}

function getImageUrl(path) {
  if (!path) return ''
  if (path.startsWith('http')) return path
  // 確保路徑不會重複包含 base
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return `${baseUrl}${cleanPath}`
}
</script>

<template>
  <article :class="variant">
    <template v-if="variant === 'card' || variant === 'hero-card'">
      <a class="card-link-block" :href="articleUrl(item.title)" :aria-label="'閱讀文章：' + item.title">
        <span v-if="showBadge" class="card-badge">{{ item.category || '健康' }}</span>
        <h3>{{ item.title }}</h3>
        <p>{{ item.summary }}</p>
        <div class="meta-row">
          <span>{{ item.author || '內容編輯' }}</span>
          <span>{{ item.date || item.views || '' }}</span>
        </div>
        <span class="card-link-cta">閱讀全文</span>
      </a>
    </template>

    <template v-else-if="variant === 'art-story-card'">
      <a class="card-link-block" :href="articleUrl(item.title)" :aria-label="'閱讀圖文焦點：' + item.title">
        <img class="card-cover" :src="getImageUrl(item.image)" :alt="item.title" loading="lazy" decoding="async" />
        <span class="card-badge">{{ item.category }}</span>
        <h3>{{ item.title }}</h3>
        <p>{{ item.summary }}</p>
        <div class="meta-row">
          <span>焦點報導</span>
          <span>{{ item.date }}</span>
        </div>
        <span class="card-link-cta">閱讀全文</span>
      </a>
    </template>

    <template v-else>
      <div v-if="showBadge" class="card-badge">{{ item.category || '健康' }}</div>
      <h3>
        <a v-if="isArticle" class="card-title-link" :href="articleUrl(item.title)">{{ item.title }}</a>
        <template v-else>{{ item.title }}</template>
      </h3>
      <p>{{ item.summary }}</p>
      <div class="meta-row">
        <span>{{ item.category || '影音' }}</span>
        <span>{{ item.date || item.views || '' }}</span>
      </div>
      <a v-if="isArticle" class="card-link-cta" :href="articleUrl(item.title)">閱讀全文</a>
    </template>
  </article>
</template>
