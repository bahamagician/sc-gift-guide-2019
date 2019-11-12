<template>
  <div class="px-4">
    <ApolloQuery
      :query="require('@/apollo/queries/PAGE.gql')"
      :variables="{ slug: this.$route.params.slug }"
    >
      <template v-slot="{ result: { loading, error, data } }">
        <!-- Loading -->
        <div v-if="!data">
          <Loading />
        </div>
        <div v-else>
          <h1>{{ data.page.title }}</h1>
          <div v-html="data.page.body"></div>
          <div>{{ data.page.featuredImage }}</div>
        </div>
      </template>
    </ApolloQuery>
  </div>
</template>
<script>
import Loading from "@/components/Loading.vue";

export default {
  components: { Loading },
  scrollToTop: true
};
</script>