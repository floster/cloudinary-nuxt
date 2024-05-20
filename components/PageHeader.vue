<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <header class="text-center">
    <h1 class="text-2xl font-black text-purple-900 text-center">{{ title }}</h1>
  </header>
</template>
