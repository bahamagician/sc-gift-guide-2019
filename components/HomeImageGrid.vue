<template>
  <ApolloQuery :query="require('@/apollo/queries/OPTIONS.gql')">
    <template v-slot="{ result: { loading, error, data } }">
      <!-- Error -->
      <div v-if="error">
        <Error :error="error" />
      </div>
      <div v-if="!data">
        <Loading />
      </div>
      <div v-else-if="data.options.enable_image_grid">
        <image-grid :data="data.options" />
      </div>
      <div v-else class="-mt-6"></div>
    </template>
  </ApolloQuery>
</template>
<script>
import ImageGrid from "@/components/ImageGrid.vue";
export default {
  components: {
    ImageGrid
  }
};
</script>