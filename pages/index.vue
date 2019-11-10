<template>
  <div>
    <ApolloQuery
      :query="require('@/apollo/queries/PAGINATED_PRODUCTS.gql')"
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
        <div v-else>
          <masonry
            :cols="{default: 5, 2000: 4, 1500:3, 1000: 2, 700: 1}"
            :gutter="{default: '30px', 700: '15px'}"
          >
            <div v-for="product in paginatedProducts.nodes" :key="product.id">
              <div class="border-solid border border-gray-300 p-5 bg-white shadow-lg">
                <nuxt-link :to="`/product/${product.slug}`">
                  <img src="https://via.placeholder.com/150" class="w-full h-auto rounded-lg" />
                </nuxt-link>
                <h2 class="text-xl py-4">
                  <nuxt-link :to="`/product/${product.slug}`">{{ product.title }}</nuxt-link>
                </h2>
              </div>
            </div>
          </masonry>
        </div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
import Loading from "@/components/Loading.vue";

export default {
  components: { Loading },
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
  }
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
