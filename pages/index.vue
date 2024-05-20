<template>
  <h1>
    {{ msg }}
  </h1>
  <CldImage src="cld-sample-4" width="640" height="480px" alt="an example image" />
</template>

<script setup lang="ts">
const msg = ref("Hello World");
</script>

<style lang="scss">
</style>
