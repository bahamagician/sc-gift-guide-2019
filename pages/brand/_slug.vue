<template>
  <div>
    <ApolloQuery
      :query="require('@/apollo/queries/BRAND.gql')"
      :variables="{
        product_page: this.page,
        products_per_page: this.per_page,
        slug: this.$route.params.slug
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

        <div v-else>
          <video-banner :title="`${data.brand.title} Gifts`" video="/inner-banner.mp4" />
          <MasonryGrid :products="data.brand.products.nodes" class="px-4" />
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