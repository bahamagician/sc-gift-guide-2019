<template>
  <ApolloQuery
    :query="require('@/apollo/queries/GROUP.gql')"
    :variables="{ slug: this.$route.params.slug }"
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
        <MasonryGrid :products="data.group.products.nodes" />
      </div>
    </template>
  </ApolloQuery>
</template>
<script>
import Loading from "@/components/Loading.vue";
import MasonryGrid from "@/components/MasonryGrid.vue";
export default {
  components: { Loading, MasonryGrid }
};
</script>