<template>
  <div class="header">
    <div
      style="background-image:url('/header-background.jpg'); background-repeat: repeat-x"
      class="text-center p-10 bg-white flex justify-center"
    >
      <nuxt-link to="/">
        <img class="logo" src="/logo.png" />
      </nuxt-link>
    </div>
    <div
      class="flex justify-center bg-christmas-red text-xl text-white p-5 font-display font-bold text-center"
    >
      <ApolloQuery
        :query="require('@/apollo/queries/MENU.gql')"
        :variables="{ slug: 'footwer-nav'}"
      >
        <template v-slot="{ result: { loading, error, data } }">
          <!-- Loading -->
          <div v-if="!data">
            <Loading />
          </div>
          <ul v-else class="flex">
            <li class="mr-6" v-for="item in data.menu.items">
              <nuxt-link :to="item.url">{{ item.title }}</nuxt-link>
            </li>
          </ul>
        </template>
      </ApolloQuery>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.logo {
  max-width: 220px;
  height: auto;
}
</style>