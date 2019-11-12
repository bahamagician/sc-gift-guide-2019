<template>
  <div>
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
export default {
  components: { Loading, MasonryGrid },
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