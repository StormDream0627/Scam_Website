<script setup>
import { ref } from 'vue'

const isNavOpen = ref(false)

const emit = defineEmits(['search'])
const searchQuery = ref('')

const handleSearch = () => {
  emit('search', searchQuery.value)
}

const toggleNav = () => {
  isNavOpen.value = !isNavOpen.value
}
</script>

<template>
  <header class="site-header" id="top">
    <div class="utility-bar">
      <div class="container utility-content">
        <p>每日健康內容精選</p>
        <div class="utility-actions" aria-label="快速入口">
          <button type="button" class="text-button">登入</button>
          <button type="button" class="text-button">註冊</button>
        </div>
      </div>
    </div>

    <div class="container header-main">
      <a class="logo" href="/" aria-label="首頁">Health Daily</a>

      <form class="search-form" id="searchForm" role="search" aria-label="站內搜尋" @submit.prevent="handleSearch">
        <label class="visually-hidden" for="searchInput">搜尋健康主題</label>
        <input
          v-model="searchQuery"
          id="searchInput"
          name="q"
          type="search"
          placeholder="搜尋症狀、主題、關鍵字"
          autocomplete="off"
        />
        <button type="submit" class="primary-button">搜尋</button>
      </form>

      <button
        type="button"
        id="menuToggle"
        class="menu-toggle"
        :aria-expanded="isNavOpen"
        aria-controls="primaryNav"
        aria-label="切換導覽選單"
        @click="toggleNav"
      >
        選單
      </button>
    </div>

    <nav class="primary-nav" id="primaryNav" aria-label="主導覽" :data-open="isNavOpen">
      <div class="container">
        <ul>
          <li><a href="#">疾病症狀</a></li>
          <li><a href="#">健康生活</a></li>
          <li><a href="#">飲食營養</a></li>
          <li><a href="#">減肥瘦身</a></li>
          <li><a href="#">運動健身</a></li>
          <li><a href="#">影音專區</a></li>
          <li><a href="#">專家專欄</a></li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style scoped>
/* Scoped styles if needed, but we'll use global styles for now as requested to keep index.html clean */
</style>
