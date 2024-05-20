<script setup lang="ts">
const { data, refresh } = useFetch("/api/cloud");
</script>

<template>
  <section class="p-4 grid grid-cols-3 gap-3 w-3/5 m-auto border-sky">
    <div
      v-for="picture in data?.resources"
      :key="picture.asset_id"
      class="cursor-pointer hover:transform hover:scale-105 transition-transform"
    >
      <CldImage
        width="600"
        height="600"
        :src="picture.public_id"
        :alt="picture.asset_id"
      />
    </div>

    <!-- <pre>{{ data?.resources[0] }}</pre> -->
  </section>
</template>
