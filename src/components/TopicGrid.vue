<script setup>
defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="topic-grid">
    <article v-for="(item, index) in items" :key="index" class="topic-card">
      <span class="card-badge">{{ item.no }}</span>
      <h3>{{ item.title }}</h3>
      <p>{{ item.teaser }}</p>
    </article>
  </div>
</template>
