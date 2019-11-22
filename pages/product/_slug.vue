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
        <div v-else class="container mx-auto flex flex-wrap">
          <div
            class="w-full md:w-1/2 xxl:w-1/3 xxl:ml-auto mb-4"
            v-if="!data.product.images[1]"
          >
            <img
              class="px-2"
              :src="data.product.images[0].large"
              :alt="data.product.title"
            />
          </div>
          <carousel
            :images="data.product.images"
            :title="data.product.title"
            class="w-full md:w-1/2 xxl:w-1/3 xxl:ml-auto flex mb-4"
            v-if="data.product.images[1]"
          />

          <div class="w-full md:w-1/2 xxl:w-1/3 xxl:mr-auto px-2">
            <h1 class="font-display text-3xl" v-html="data.product.title"></h1>
            <div class="text-sm pb-4" v-if="data.product.sku">
              SKU: {{ data.product.sku }}
            </div>
            <div
              class="font-display text-2xl pb-4 text-primary"
              v-if="data.product.price"
            >
              {{ data.product.price | currency }}
            </div>
            <div class="text-xs text-gray-600">
              <i class="far fa-calendar-alt"></i>
              Added {{ $moment(data.product.date).fromNow() }}
            </div>
            <div class="my-5">
              <nuxt-link
                :to="`/group/${group.slug}`"
                v-for="group in data.product.groups"
                :key="group.id"
              >
                <span
                  class="rounded-full text-white bg-highlight uppercase px-2 py-1 text-xs font-bold mr-3"
                >
                  <i data-v-a7fd6656 class="fas fa-link"></i>
                  {{ group.title }}
                </span>
              </nuxt-link>
              <nuxt-link
                :to="`/brand/${brand.slug}`"
                v-for="brand in data.product.brands"
                :key="brand.id"
              >
                <span
                  class="rounded-full text-white bg-highlight uppercase px-2 py-1 text-xs font-bold mr-3"
                >
                  <i class="fas fa-tag"></i>
                  {{ brand.title }}
                </span>
              </nuxt-link>
            </div>
            <div v-html="data.product.description" class="mb-4"></div>
          </div>
        </div>
      </template>
    </ApolloQuery>
  </div>
</template>
<script>
import Loading from "@/components/Loading.vue";
import Carousel from "@/components/Carousel.vue";
export default {
  components: { Loading, Carousel }
};
</script>
<style scoped>
/deep/ p {
  margin-bottom: 20px;
}
/deep/ .wp-block-embed__wrapper {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
}

/deep/ .wp-block-embed__wrapper iframe,
.wp-block-embed__wrapper object,
.wp-block-embed__wrapper embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
