<script setup>
defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="campaign-grid">
    <article v-for="(item, index) in items" :key="index" class="campaign-card">
      <h3>{{ item.title }}</h3>
      <p>{{ item.summary }}</p>
    </article>
  </div>
</template>
