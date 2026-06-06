<script setup>
defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="keyword-cloud">
    <button v-for="keyword in items" :key="keyword" type="button" class="keyword-chip">
      {{ keyword }}
    </button>
  </div>
</template>
