<script setup lang="ts">
const attributes = defineModel<object>();
defineProps<{ effect: string }>();
</script>

<template>
  <button
    v-if="attributes"
    class="w-full rounded text-purple-50 px-4 py-2 transition-colors"
    @click="attributes = { ...attributes, [effect]: true }"
  >
    <slot />
  </button>
</template>
