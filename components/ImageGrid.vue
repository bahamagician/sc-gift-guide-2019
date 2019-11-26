<template>
  <div class="flex flex-wrap mb-6">
    <div class="w-full lg:w-1/2 flex">
      <div class="w-1/2 flex flex-col pl-4 px-2 pb-2 lg:pb-0">
        <div class="pb-2 relative">
          <nuxt-link :to="data.image_1_url.url">
            <div class="button-overlay">
              <nuxt-link :to="data.image_1_url.url" class="button">{{ data.image_1_url.title }}</nuxt-link>
            </div>
            <img class="w-full block" :src="data.image_1" :alt="data.image_1_url.title" />
          </nuxt-link>
        </div>
        <div class="pt-2 relative">
          <nuxt-link :to="data.image_2_url.url">
            <div class="button-overlay">
              <nuxt-link :to="data.image_2_url.url" class="button">{{ data.image_2_url.title }}</nuxt-link>
            </div>
            <img class="w-full block" :src="data.image_2" :alt="data.image_2_url.title" />
          </nuxt-link>
        </div>
      </div>
      <div class="w-1/2 px-2 pr-4 lg:pr-2">
        <div class="relative">
          <nuxt-link :to="data.image_3_url.url">
            <div class="button-overlay">
              <nuxt-link :to="data.image_3_url.url" class="button">{{ data.image_3_url.title }}</nuxt-link>
            </div>
            <img class="w-full block" :src="data.image_3" :alt="data.image_3_url.title" />
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="w-full lg:w-1/2 flex flex-col px-2 pr-4 pl-4 lg:pl-2 pt-2 lg:pt-0">
      <div class="flex pb-2">
        <div class="w-1/2 pr-2 relative">
          <nuxt-link :to="data.image_4_url.url">
            <div class="button-overlay">
              <nuxt-link :to="data.image_4_url.url" class="button">{{ data.image_4_url.title }}</nuxt-link>
            </div>
            <img class="w-full block" :src="data.image_4" :alt="data.image_4_url.title" />
          </nuxt-link>
        </div>
        <div class="w-1/2 pl-2 relative">
          <nuxt-link :to="data.image_5_url.url">
            <div class="button-overlay">
              <nuxt-link :to="data.image_5_url.url" class="button">{{ data.image_5_url.title }}</nuxt-link>
            </div>
            <img class="w-full block" :src="data.image_5" :alt="data.image_5_url.title" />
          </nuxt-link>
        </div>
      </div>
      <div class="pt-2 relative">
        <nuxt-link :to="data.image_6_url.url">
          <div class="button-overlay">
            <nuxt-link :to="data.image_6_url.url" class="button">{{ data.image_6_url.title }}</nuxt-link>
          </div>
          <img class="w-full block" :src="data.image_6" :alt="data.image_6_url.title" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["data"]
};
</script>
<style scoped>
.button {
  @apply rounded-full text-white bg-highlight uppercase px-2 py-1 text-xl font-bold mr-3;
}
.button-overlay {
  @apply inset-0 flex flex-wrap absolute text-center items-center justify-center font-display text-white;
}
</style>