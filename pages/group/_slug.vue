<template>
  <ApolloQuery
    :query="require('@/apollo/queries/GROUP.gql')"
    :variables="{ slug: this.$route.params.slug }"
  >
    <template v-slot="{ result: { loading, error, data } }">
      <!-- Loading -->
      <div v-if="!data">
        <Loading />
      </div>
      <div v-else class="px-4">
        <div class="flex flex-wrap">
          <div v-for="product in data.group.products" :key="product.id">
            <div>
              <nuxt-link :to="`/product/${product.slug}`">{{ product.title }}</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </template>
  </ApolloQuery>
</template>
<script>
import Loading from "@/components/Loading.vue";

export default {
  components: { Loading }
};
</script>