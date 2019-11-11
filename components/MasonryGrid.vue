<template>
  <masonry
    v-if="!initialloading"
    :cols="{default: 5, 2000: 4, 1500:3, 1000: 2, 700: 1}"
    :gutter="{default: '30px', 700: '15px'}"
  >
    <div v-for="product in products" :key="product.id">
      <div class="border-solid border border-gray-300 bg-white shadow-lg mb-5 rounded-lg">
        <nuxt-link :to="`/product/${product.slug}`">
          <img
            v-if="product.images"
            :src="product.images[0].url"
            class="w-full h-auto rounded-t-lg"
          />
        </nuxt-link>
        <div>
          <h2 class="py-4 text-gray-900 text-base text-center">
            <nuxt-link :to="`/product/${product.slug}`">{{ product.title }}</nuxt-link>
          </h2>
          <ul class="text-gray-600 text-center -mt-3 pb-2">
            <li class="brand" v-for="brand in product.brands" :key="brand.id">
              <nuxt-link :to="`/brand/${brand.slug}`">{{ brand.title }}</nuxt-link>
            </li>
          </ul>
          <div class="bg-gray-100 rounded-b-lg">
            <div class="flex p-2">
              <div class="w-1/2 text-sm">
                <i class="far fa-calendar-alt"></i> Added 10/10/10
              </div>
              <div class="text-right w-1/2">View More</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </masonry>
</template>
<script>
export default {
  props: ["products"],
  data() {
    return {
      initialloading: true
    };
  },
  mounted() {
    this.initialloading = false;
  }
};
</script>
<style scoped="true">
.brand {
  @apply pr-2 inline border-r border-gray-600 pl-1 font-display text-base;
}
.brand:first-child {
  padding-left: 0;
}
.brand:last-child {
  border-right: none;
  padding-right: 0;
}
</style>