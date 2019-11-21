<template>
  <div>
    <ApolloQuery
      :query="require('@/apollo/queries/GROUP.gql')"
      :variables="{
        product_page: this.page,
        products_per_page: this.per_page,
        slug: this.$route.params.slug
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
        <div v-else>
          <video-banner :title="data.group.title" video="/inner-banner.mp4" />
          <MasonryGrid
            id="product-grid"
            :products="data.group.products.nodes"
            class="px-4"
          />
          <pagination
            :pagination="data.group.products.meta"
            @changePage="changePage"
          />
        </div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
import Loading from "@/components/Loading.vue";
import MasonryGrid from "@/components/MasonryGrid.vue";
import VideoBanner from "@/components/VideoBanner.vue";
import Pagination from "@/components/Pagination.vue";
export default {
  components: { Loading, MasonryGrid, VideoBanner, Pagination },
  mounted() {
    this.page = parseInt(this.$route.query.page) || 1;
  },
  watch: {
    $route() {
      this.page = this.$route.query.page || 1;
      window.scrollTo(0, 0);
    }
  },
  data() {
    return {
      per_page: 15,
      page: 1
    };
  },
  methods: {
    changePage(page) {
      this.$router.push({
        path: this.$route.path,
        query: { page }
      });
    }
  },
  scrollToTop: true
};
</script>
