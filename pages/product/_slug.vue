<template>
  <div>
    <ApolloQuery
      :query="require('@/apollo/queries/PRODUCT.gql')"
      :variables="{ slug: this.$route.params.slug }"
    >
      <template v-slot="{ result: { loading, error, data } }">
        <!-- Loading -->
        <div v-if="!data">
          <Loading />
        </div>
        <div v-else class="container mx-auto flex flex-wrap px-4">
          <div class="w-full md:w-1/2 xxl:w-1/3 xxl:ml-auto mb-4" v-if="!data.product.images[1]">
            <img class="px-2" :src="data.product.images[0].large" :alt="data.product.title" />
          </div>
          <carousel
            :images="data.product.images"
            :title="data.product.title"
            class="w-full md:w-1/2 xxl:w-1/3 xxl:ml-auto flex mb-4"
            v-if="data.product.images[1]"
          />

          <div class="w-full md:w-1/2 xxl:w-1/3 xxl:mr-auto px-2">
            <h1 class="font-display text-3xl" v-html="data.product.title"></h1>
            <div class="text-sm pb-4" v-if="data.product.sku">SKU: {{ data.product.sku }}</div>
            <div
              class="font-display text-2xl pb-4 text-primary"
              v-if="data.product.price"
            >{{ data.product.price | currency }}</div>
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
                  class="inline-block mb-1 whitespace-no-wrap rounded-full text-white bg-highlight uppercase px-2 py-1 text-xs font-bold mr-3"
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
                  class="inline-block mb-1 whitespace-no-wrap rounded-full text-white bg-highlight uppercase px-2 py-1 text-xs font-bold mr-3"
                >
                  <i class="fas fa-tag"></i>
                  {{ brand.title }}
                </span>
              </nuxt-link>
            </div>
            <div v-html="data.product.description" class="mb-4"></div>
          </div>
        </div>
        <div
          class="flex bg-white ct-shadow pt-3 flex-wrap flex-row-reverse px-5 -mb-5 shadow-inner"
        >
          <div class="mr-auto w-full md:w-1/3 text-gray-600 flex flex-col justify-center py-6">
            <h2 class="gift-card-title">Buy a Gift Card Online!</h2>
            <p>Sports Center Gift Cards are the most popular gift in the country, and now you can buy them right from the comfort of your living room.</p>
            <p>Skip the long lines and still get them what they really want this year. Buy a Sports Center eGift Card online and have it automatically sent via email or print it out and hand deliver it to that special someone.</p>
            <p>So if you're not sure what to get that special someone this year, then give them the gift that let's them get what they really want.</p>
            <p class="font-display mt-3 text-xl">A gift card from The Sports Center ALWAYS WORKS!</p>
            <p class="py-5 text-center md:text-left">
              <a
                class="rounded-lg text-2xl font-display bg-highlight text-white font-bold py-2 px-4"
                href="https://giftcards.sportscenter242.com"
              >Buy Gift Cards Online</a>
            </p>
          </div>
          <div class="ml-auto w-full md:w-1/3 pt-3 flex">
            <img class="w-full self-end" src="/gift-card.jpg" alt="Gift Card" />
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
/deep/ h2 {
  @apply text-2xl font-display mb-3;
}
/deep/ ul {
  @apply list-disc ml-5;
}

/deep/ li {
  @apply mb-2;
}
/deep/ p {
  margin-bottom: 20px;
}
/deep/ .wp-block-embed__wrapper {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
  margin-bottom: 20px;
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

/deep/ th {
  padding-bottom: 10px;
}

/deep/ td,
th {
  padding: 0.5rem 0.625rem 0.625rem;
  text-transform: uppercase;
  font-size: 10px;
}

/deep/ #machine-specs-tab tbody,
#machine-specs-tab tfoot,
#machine-specs-tab thead {
  border: 1px solid #f1f1f1;
  background-color: #fefefe;
  text-align: left;
}

/deep/ table#machine-specs-tab {
  font-size: 10px;
  text-transform: uppercase;
  display: table;
  border-collapse: separate !important;
  border-spacing: 2px !important;
  border-color: grey !important;
}

/deep/ #machine-specs-tab h3 {
  font-size: 25px;
  @apply font-display;
}
/deep/ #machine-specs-tab tbody tr:nth-child(2n) {
  border-bottom: 0;
  background-color: #f1f1f1;
}
.gift-card-title {
  @apply font-display;
  font-size: 30px;
  @screen xxl {
    font-size: 60px;
  }
}
</style>
