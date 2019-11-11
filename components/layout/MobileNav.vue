<template>
  <div class="top-0 left-0 w-screen h-screen bg-white fixed overflow-auto py-3 z-10">
    <span class="absolute top-0 right-0 px-4 py-3">
      <a href="#" @click.prevent="$emit('close')">
        <svg
          class="fill-current h-6 w-6 text-red"
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <title>Close</title>
          <path
            d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
          />
        </svg>
      </a>
    </span>
    <ApolloQuery :query="require('@/apollo/queries/MENU.gql')" :variables="{ slug: 'footwer-nav'}">
      <template v-slot="{ result: { loading, error, data } }">
        <!-- Loading -->
        <div v-if="!data">Loading</div>
        <div v-else>
          <div class="mx-auto mt-20">
            <div @click="$emit('close')">
              <nuxt-link
                class="text-primary tab__link p-4 block no-underline border-t-2 border-primary flex justify-between"
                to="/"
              >Home</nuxt-link>
            </div>
            <template v-for="item in data.menu.items">
              <div @click="$emit('close')" v-if="!item.children">
                <nuxt-link
                  class="text-primary tab__link p-4 block no-underline border-t-2 border-primary flex justify-between"
                  :to="item.url"
                >{{ item.title }}</nuxt-link>
              </div>
              <accordion v-else :title="item.title" :items="item.children" @close="$emit('close')" />
            </template>
          </div>
        </div>
      </template>
    </ApolloQuery>
  </div>
</template>
<script>
import Accordion from "@/components/layout/Accordion";
export default {
  components: {
    Accordion
  },
};
</script>