<script setup>
defineProps({
  items: {
    type: Array,
    required: true
  }
})

function articleUrl(title) {
  return `article.html?title=${encodeURIComponent(title)}`
}
</script>

<template>
  <ol class="rank-list">
    <li v-for="(item, index) in items" :key="index">
      <a class="rank-link" :href="articleUrl(item.title)" :aria-label="'閱讀熱門文章：' + item.title">
        <span>
          <span class="rank-index">#{{ index + 1 }}</span>
          <span class="rank-title">{{ item.title }}</span>
        </span>
        <span>{{ item.views }}</span>
      </a>
    </li>
  </ol>
</template>
