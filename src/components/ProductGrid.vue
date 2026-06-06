<script setup>
defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="product-grid">
    <article v-for="(item, index) in items" :key="index" class="product-card">
      <span class="card-badge">限時特價</span>
      <h3>{{ item.title }}</h3>
      <p><strong>{{ item.nowPrice }}</strong> <s>{{ item.oldPrice }}</s></p>
    </article>
  </div>
</template>
