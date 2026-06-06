<script setup>
import { ref, computed } from 'vue'
import { content } from './data/content'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import BaseSection from './components/BaseSection.vue'
import ArticleCard from './components/ArticleCard.vue'
import RankList from './components/RankList.vue'
import Newsletter from './components/Newsletter.vue'
import ProductGrid from './components/ProductGrid.vue'
import TopicGrid from './components/TopicGrid.vue'
import CampaignGrid from './components/CampaignGrid.vue'
import KeywordCloud from './components/KeywordCloud.vue'

const searchQuery = ref('')

const handleSearch = (query) => {
  searchQuery.value = query.trim().toLowerCase()
}

const filteredEditorPicks = computed(() => {
  if (!searchQuery.value) return content.editorPicks
  return content.editorPicks.filter(item => item.title.toLowerCase().includes(searchQuery.value))
})

const filteredLatest = computed(() => {
  if (!searchQuery.value) return content.latest
  return content.latest.filter(item => item.title.toLowerCase().includes(searchQuery.value))
})

const showEasterEgg = () => {
  window.alert("被你發現了我是航線玩家")
}
</script>

<template>
  <div class="app-container">
    <a class="skip-link" href="#main-content">跳到主要內容</a>

    <AppHeader @search="handleSearch" />

    <main id="main-content" class="container main-layout">
      <!-- Editor Picks -->
      <BaseSection title="早安精選" titleId="editor-title" moreLink="#" moreText="更多精選">
        <div v-if="filteredEditorPicks.length" class="editor-grid">
          <ArticleCard :item="filteredEditorPicks[0]" variant="hero-card" />
          <div class="card-grid">
            <ArticleCard v-for="(item, index) in filteredEditorPicks.slice(1)" :key="index" :item="item" />
          </div>
        </div>
        <p v-else>目前沒有符合條件的精選內容。</p>
      </BaseSection>

      <!-- Trending -->
      <BaseSection title="熱門文章" titleId="trending-title">
        <RankList :items="content.trending" />
      </BaseSection>

      <!-- Latest -->
      <BaseSection title="最新文章" titleId="latest-title" moreLink="#" moreText="閱讀更多文章">
        <div class="card-grid">
          <ArticleCard v-for="(item, index) in filteredLatest" :key="index" :item="item" variant="none" />
        </div>
      </BaseSection>

      <!-- Videos -->
      <BaseSection title="人氣影音" titleId="video-title" moreLink="#" moreText="觀看更多影片">
        <div class="card-grid">
          <ArticleCard 
            v-for="(item, index) in content.videos" 
            :key="index" 
            :item="item" 
            variant="none" 
            :isArticle="false"
          />
        </div>
      </BaseSection>

      <!-- Art Spotlight -->
      <BaseSection title="爆點圖文焦點" titleId="art-title" moreLink="#" moreText="看更多爆點內容">
        <div class="card-grid">
          <ArticleCard 
            v-for="(item, index) in content.artSpotlight" 
            :key="index" 
            :item="item" 
            variant="art-story-card" 
          />
        </div>
      </BaseSection>

      <!-- Campaigns -->
      <BaseSection title="活動專區" titleId="campaign-title">
        <CampaignGrid :items="content.campaigns" />
      </BaseSection>

      <!-- Infographics -->
      <BaseSection title="圖解健康" titleId="infographic-title" moreLink="#" moreText="觀看更多圖片">
        <div class="card-grid">
          <ArticleCard v-for="(item, index) in content.infographics" :key="index" :item="item" variant="none" />
        </div>
      </BaseSection>

      <!-- Topics -->
      <BaseSection title="焦點專題" titleId="topic-title" moreLink="#" moreText="更多專題">
        <TopicGrid :items="content.topics" />
      </BaseSection>

      <!-- Products -->
      <BaseSection title="健康嚴選" titleId="shop-title" moreLink="#" moreText="前往商城">
        <ProductGrid :items="content.products" />
      </BaseSection>

      <!-- Keywords -->
      <BaseSection title="健康熱搜字" titleId="keyword-title">
        <KeywordCloud :items="content.keywords" />
      </BaseSection>

      <Newsletter />
    </main>

    <AppFooter />

    <button type="button" class="easter-egg-trigger" aria-label="隱藏彩蛋" @click="showEasterEgg">
      <img src="/Art_Resourse/36d55e386b2da65ba290c40e7668d264.jpg" alt="" loading="lazy" decoding="async" />
    </button>
  </div>
</template>

<style>
/* Global styles can stay in styles.css and be imported in main.js */
</style>

