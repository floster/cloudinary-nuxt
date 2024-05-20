<script setup lang="ts">
import type { Result } from "@/types";

const { data, refresh } = useFetch("/api/cloud");

const imageInfo = ref<Result | null>(null);

const router = useRouter();
const gotoPhotoEditor = (publicId: string) => {
  router.push(`/photo-editor?photo=${encodeURIComponent(publicId)}`);
};

const onUpload = (result: Ref<Result>) => {
  imageInfo.value = result.value;
};

const refreshPics = () => {
  refresh();
};
</script>

<template>
  <div class="flex flex-col gap-y-8 items-center py-5">
    <PageHeader title="Cloudinary Image Gallery" />
    <!-- Cloudinary upload widget -->
    <CldUploadWidget
      v-slot="{ open }"
      upload-preset="bkvz6dmm"
      :on-upload="onUpload"
      :on-close="refreshPics"
    >
      <button
        class="bg-purple-400 hover:bg-purple-500 rounded text-purple-50 px-4 py-2 transition-colors"
        @click="open"
      >
        Upload an Image
      </button>
    </CldUploadWidget>
    <!-- /Cloudinary upload widget -->

    <!-- Cloudinary photos -->
    <section class="grid grid-cols-4 gap-2 w-3/5 m-auto border-sky">
      <div
        v-for="picture in data?.resources"
        :key="picture.asset_id"
        class="cursor-pointer hover:transform hover:scale-105 transition-transform"
      >
        <CldImage
          width="320"
          height="320"
          :src="picture.public_id"
          :alt="picture.context?.alt || 'cloudinary image'"
          @click="gotoPhotoEditor(picture.public_id)"
        />
      </div>
    </section>
    <!-- Cloudinary photos -->
    <!-- <pre>{{ data?.resources }}</pre> -->
  </div>
</template>
