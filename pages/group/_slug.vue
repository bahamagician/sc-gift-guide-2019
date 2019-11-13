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
          <MasonryGrid :products="data.group.products.nodes" class="px-4" />
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
      per_page: 10,
      page: 1
    };
  },
  methods: {},
  scrollToTop: true
};
</script>
