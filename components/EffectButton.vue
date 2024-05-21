<script setup lang="ts">
interface Effect {
  [key: string]: boolean;
}

const attributes = defineModel<{ effect: Effect }>();
defineProps<{ effect: string }>();
</script>

<template>
  <button
    v-if="attributes?.effect"
    class="w-full rounded text-purple-50 px-4 py-2 transition-colors"
    @click="
      attributes.effect = {
        ...attributes.effect,
        [effect as string]: !attributes.effect[effect],
      }
    "
  >
    <slot />
  </button>
</template>
