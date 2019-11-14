<template>
  <div>
    <video-banner title="Holiday Gift Guide" video="/inner-banner.mp4" />
    <div class="flex flex-wrap mb-6">
      <div class="w-full lg:w-1/2 flex">
        <div class="w-1/2 flex flex-col pl-4 px-2 pb-2 lg:pb-0">
          <div class="pb-2 relative">
            <div class="button-overlay">
              <button class="button">Gifts for Him</button>
            </div>
            <img class="w-full block" src="/gifts-for-him.jpg" alt="gifts for him" />
          </div>
          <div class="pt-2 relative">
            <div class="button-overlay">
              <button class="button">Gifts for Kids</button>
            </div>
            <img class="w-full" src="/gifts-for-kids.jpg" alt="gifts for kids" />
          </div>
        </div>
        <div class="w-1/2 px-2 pr-4 lg:pr-2">
          <div class="relative">
            <div class="button-overlay">
              <button class="button">Gifts for Her</button>
            </div>
            <img class="w-full" src="/gifts-for-her.jpg" alt="gifts for her" />
          </div>
        </div>
      </div>
      <div class="w-full lg:w-1/2 flex flex-col px-2 pr-4 pl-4 lg:pl-2 pt-2 lg:pt-0">
        <div class="flex pb-2">
          <div class="w-1/2 pr-2 relative">
            <div class="button-overlay">
              <button class="button">Stocking Stuffers</button>
            </div>
            <img class="w-full" src="/stocking-stuffers.jpg" alt="stocking stuffers" />
          </div>
          <div class="w-1/2 pl-2 relative">
            <div class="button-overlay">
              <button class="button">Secret Santa</button>
            </div>
            <img class="w-full" src="/secret-santa.jpg" alt="secret santa" />
          </div>
        </div>
        <div class="pt-2 relative">
          <div class="button-overlay">
            <button class="button">Splurge Worthy</button>
          </div>
          <img class="w-full" src="/splurge-worthy.jpg" alt="splurge worthy" />
        </div>
      </div>
    </div>

    <div class="flex bg-white ct-shadow pt-3 flex-wrap flex-row-reverse px-5">
      <div class="mr-auto w-full md:w-1/3 text-gray-600 flex flex-col justify-center">
        <h2 class="gift-card-title">Not Sure what to get?</h2>
        <p>Sports Center Gift Cards are the most popular gift in the country.</p>
        <p>So if you're not sure what to get that special someone this year, then give them the gift that let's them get what they really want.</p>
        <p class="font-display mt-3 text-xl">A gift card from The Sports Center ALWAYS WORKS!</p>
      </div>
      <div class="ml-auto w-full md:w-1/3 pt-3 flex">
        <img class="w-full self-end" src="/gift-card.jpg" alt="Gift Card" />
      </div>
    </div>

    <div class="font-display relative py-6 mb-3 bg-primary">
      <div class="inset-0 flex flex-wrap absolute text-center items-center justify-center">
        <h2 style="font-size:60px" class="text-white text-center">Featured Gifts</h2>
      </div>
      <div>
        <i class="text-white opacity-50 fas fa-gifts text-center block" style="font-size:70px"></i>
      </div>
    </div>
    <ApolloQuery
      :query="require('@/apollo/queries/PRODUCTS.gql')"
      :variables="{
        page: this.page,
        per_page: this.per_page
      }"
      @result="dataLoaded"
    >
      <template v-slot="{ result: { loading, error, data } }">
        <!-- Error -->
        <div v-if="error">
          <Error :error="error" />
        </div>
        <div v-if="!data">
          <Loading />
        </div>
        <div v-else class="px-4">
          <MasonryGrid :products="data.products.nodes" />
        </div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
import Loading from "@/components/Loading.vue";
import MasonryGrid from "@/components/MasonryGrid.vue";
import VideoBanner from "@/components/VideoBanner.vue";
export default {
  components: { Loading, MasonryGrid, VideoBanner },
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
  font-size: 40px;
  @screen xxl {
    font-size: 60px;
  }
}
</style>