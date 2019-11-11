<template>
  <masonry
    v-if="!initialloading"
    :cols="{default: 5, 2000: 4, 1500:3, 1000: 2, 700: 1}"
    :gutter="{default: '30px', 700: '15px'}"
  >
    <div v-for="product in products" :key="product.id">
      <div class="border-solid border border-gray-300 p-5 bg-white shadow-lg mb-5">
        <nuxt-link :to="`/product/${product.slug}`">
          <img src="https://via.placeholder.com/150" class="w-full h-auto rounded-lg" />
        </nuxt-link>
        <h2 class="text-xl py-4">
          <nuxt-link :to="`/product/${product.slug}`">{{ product.title }}</nuxt-link>
        </h2>
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