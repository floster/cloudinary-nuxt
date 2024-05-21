<script setup lang="ts">
import AppSlider from "~/components/AppSlider.vue";
import EffectButton from "~/components/EffectButton.vue";

const route = useRoute();
const publicId = route.query.photo as string;

const fontWeightValues = [
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
];
const textPositions = [
  "north",
  "north_east",
  "east",
  "south_east",
  "south",
  "south_west",
  "west",
  "north_west",
];

// blur
const blurSlider = ref(0);
const blurComputed = computed(() => blurSlider.value * 30);

const attributes = reactive({
  effect: {
    width: "640",
    height: "640",
    crop: "fill",
    src: publicId,
    alt: "photo for editing",
    opacity: 100,
    blur: blurComputed,
    overlays: [
      {
        position: {
          gravity: "north",
          y: 60,
          x: 0,
        },
        text: {
          color: "#0092d1",
          fontFamily: "Source Sans Pro",
          fontSize: 100,
          fontWeight: "400",
          text: "your text here",
        },
      },
    ],
  },
});
</script>

<template>
  <section class="w-full flex flex-col gap-y-4">
    <PageHeader title="Cloudinary Image Editor" />
    <Teleport to="body">
      <button
        class="absolute left-4 top-7 px-4 py-2 bg-purple-100 hover:bg-purple-200 rounded text-purple-700 transition-colors"
        @click="$router.push('/')"
      >
        ⇦ back
      </button></Teleport
    >
    <div class="grid grid-cols-[1fr_2fr] gap-x-4">
      <!-- editor -->
      <div class="flex flex-col gap-y-2">
        <!-- text -->
        <div
          class="flex flex-col gap-y-3 p-3 rounded border-purple-200 border-2"
        >
          <!-- prettier-ignore -->
          <input v-model="attributes.effect.overlays[0].text.text" type="text" class="w-full input">
          <div class="grid grid-cols-3 gap-x-3">
            <!-- prettier-ignore -->
            <input v-model="attributes.effect.overlays[0].text.fontSize" type="number" class="input-number">
            <select
              v-model="attributes.effect.overlays[0].text.fontWeight"
              class="input"
            >
              <option
                v-for="value in fontWeightValues"
                :key="value"
                :value="value"
              >
                {{ value }}
              </option>
            </select>
            <!-- prettier-ignore -->
            <input v-model="attributes.effect.overlays[0].text.color" type="color" class="w-full">
          </div>
          <div class="grid grid-cols-2 gap-x-3">
            <select
              v-model="attributes.effect.overlays[0].position.gravity"
              class="input"
            >
              <option
                v-for="position in textPositions"
                :key="position"
                :value="position"
              >
                {{ position }}
              </option>
            </select>
            <div class="flex gap-x-3">
              <!-- prettier-ignore -->
              <input v-model="attributes.effect.overlays[0].position.x" type="number" class="input-number w-1/2">
              <!-- prettier-ignore -->
              <input v-model="attributes.effect.overlays[0].position.y" type="number" class="input-number w-1/2">
            </div>
          </div>
        </div>
        <!-- /text -->
        <!-- opacity -->
        <AppSlider v-model="attributes.effect.opacity" class="border-sky-200"
          >Opacity</AppSlider
        >
        <!-- /opacity -->
        <!-- blur -->
        <AppSlider v-model="blurSlider" class="border-amber-200"
          >Blur</AppSlider
        >
        <!-- /blur -->
        <div class="flex gap-x-3">
          <!-- grayscale -->
          <EffectButton
            v-model="attributes"
            effect="grayscale"
            class="bg-slate-400 hover:bg-slate-500"
            >grayscale</EffectButton
          >
          <!-- /grayscale -->
          <!-- pixelate -->
          <EffectButton
            v-model="attributes"
            effect="pixelate"
            class="bg-teal-500 hover:bg-teal-600"
            >pixelate</EffectButton
          >
          <!-- /pixelate -->
        </div>
      </div>
      <!-- /editor -->

      <!-- preview -->
      <CldImage v-if="publicId" v-bind="attributes.effect" />
      <!-- /preview -->
    </div>
  </section>
</template>

<style scoped>
.input {
  @apply h-8 rounded px-4;
}
.input-number {
  @apply h-8 rounded pl-1 text-center;
}
</style>
