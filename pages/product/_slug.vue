<template>
  <div class="px-4">
    <ApolloQuery
      :query="require('@/apollo/queries/PRODUCT.gql')"
      :variables="{ slug: this.$route.params.slug }"
    >
      <template v-slot="{ result: { loading, error, data } }">
        <!-- Loading -->
        <div v-if="!data">
          <Loading />
        </div>
        <div v-else>
          <div>Title: {{ data.product.title }}</div>
          <div>Description: {{ data.product.description }}</div>
          <div>
            Images:
            <div v-for="image in data.product.images" :key="image.index">{{ image.url }}</div>
          </div>
        </div>
      </template>
    </ApolloQuery>
  </div>
</template>
<script>
import Loading from "@/components/Loading.vue";

export default {
  components: { Loading }
};
</script>