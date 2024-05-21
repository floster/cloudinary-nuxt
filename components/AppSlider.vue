<script setup lang="ts">
const slider = defineModel<number>();
</script>
<template>
  <section class="rounded border-2 px-2 py-4 flex flex-col items-center w-full">
    <label class="block mb-2 text-sm font-medium text-purple-900"
      ><slot
    /></label>
    <!-- prettier-ignore -->
    <input
      v-model.number="slider"
      type="range"
      class="w-full h2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
    >
  </section>
</template>
