<template>
  <div>
    <video-banner title="Holiday Gift Guide" video="/inner-banner.mp4" />
    <home-image-grid />

    <div class="flex bg-white ct-shadow pt-3 flex-wrap flex-row-reverse px-5">
      <div class="mr-auto w-full md:w-1/3 text-gray-600 flex flex-col justify-center py-6">
        <h2 class="gift-card-title">Buy a Gift Card Online!</h2>
        <p>Sports Center Gift Cards are the most popular gift in the country, and now you can buy them right from the comfort of your living room.</p>
        <p>Skip the long lines and still get them what they really want this year. Buy a Sports Center eGift Card online and have it automatically sent via email or print it out and hand deliver it to that special someone.</p>
        <p>So if you're not sure what to get that special someone this year, then give them the gift that let's them get what they really want.</p>
        <p class="font-display mt-3 text-xl">A gift card from The Sports Center ALWAYS WORKS!</p>
        <p class="py-5 text-center md:text-left">
          <a
            class="rounded-lg text-2xl font-display bg-highlight text-white font-bold py-2 px-4"
            href="https://giftcards.sportscenter242.com"
          >Buy Gift Cards Online</a>
        </p>
      </div>
      <div class="ml-auto w-full md:w-1/3 pt-3 flex">
        <img class="w-full self-end" src="/gift-card.jpg" alt="Gift Card" />
      </div>
    </div>
    <ApolloQuery
      :query="require('@/apollo/queries/GROUP.gql')"
      :variables="{
        product_page: 1,
        products_per_page: 20,
        slug: 'featured'
      }"
    >
      <template v-slot="{ result: { loading, error, data } }">
        <!-- Error -->
        <div v-if="error">
          <Error :error="error" />
        </div>
        <div v-if="!data">
          <Loading />
        </div>
        <div v-else-if="data.group">
          <div class="font-display relative py-6 mb-3 bg-primary">
            <div class="inset-0 flex flex-wrap absolute text-center items-center justify-center">
              <h2 style="font-size:60px" class="text-white text-center">Featured Gifts</h2>
            </div>
            <div class="text-center">
              <i
                class="text-white opacity-50 fas fa-gifts text-center block"
                style="font-size:70px"
              ></i>
            </div>
          </div>
          <MasonryGrid id="product-grid" :products="data.group.products.nodes" class="px-4" />
        </div>
        <div v-else></div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
import Loading from "@/components/Loading.vue";
import MasonryGrid from "@/components/MasonryGrid.vue";
import VideoBanner from "@/components/VideoBanner.vue";
import HomeImageGrid from "@/components/HomeImageGrid.vue";
export default {
  components: { Loading, MasonryGrid, VideoBanner, HomeImageGrid },
  data() {
    return {
      paginatedProducts: "",
      per_page: 10,
      page: 1
    };
  },
  methods: {
    dataLoaded({ data }) {
      data && (this.paginatedProducts = data.paginatedProducts);
    }
  },
  scrollToTop: true
};
</script>
<style scoped>
p {
  margin-bottom: 10px;
}
.button {
  @apply rounded-full text-white bg-highlight uppercase px-2 py-1 text-xl font-bold mr-3;
}
.button-overlay {
  @apply inset-0 flex flex-wrap absolute text-center items-center justify-center font-display text-white;
}

@variants focus {
  .button {
    @apply outline-none;
  }
}
.ct-shadow {
  box-shadow: inset 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
.gift-card-title {
  @apply font-display;
  font-size: 30px;
  @screen xxl {
    font-size: 60px;
  }
}
</style>