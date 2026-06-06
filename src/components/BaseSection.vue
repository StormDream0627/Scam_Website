<script setup>
defineProps({
  title: String,
  titleId: String,
  moreLink: String,
  moreText: {
    type: String,
    default: '更多'
  },
  customClass: String
})
</script>

<template>
  <section class="section-block" :class="customClass" :aria-labelledby="titleId">
    <div class="section-header">
      <h2 :id="titleId">{{ title }}</h2>
      <a v-if="moreLink" :href="moreLink">{{ moreText }}</a>
    </div>
    <slot></slot>
  </section>
</template>
