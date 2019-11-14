<template>
  <section class="wrapper">
    <nav class="nav flex px-4 py-4 shadow-lg mb-4">
      <div class="w-2/3 xl:w-2/12">
        <nuxt-link to="/">
          <img
            class="logo pr-10 -mt-2"
            :style="`width:${logoWidth}px; height: auto;`"
            :src="`/${logo}`"
          />
        </nuxt-link>
      </div>

      <!-- Desktop Nav -->
      <div class="w-10/12 hidden xl:flex justify-end items-center">
        <ApolloQuery
          :query="require('@/apollo/queries/MENU.gql')"
          :variables="{ slug: 'footwer-nav'}"
        >
          <template v-slot="{ result: { loading, error, data } }">
            <!-- Loading -->
            <div v-if="!data">Loading</div>
            <ul v-else class="flex">
              <li class="navLinks">
                <nuxt-link to="/">Home</nuxt-link>
              </li>
              <li class="navLinks" v-for="item in data.menu.items">
                <nuxt-link :to="item.url" v-if="!item.children">{{ item.title }}</nuxt-link>
                <drop-nav v-else :title="item.title" :links="item.children" />
              </li>
            </ul>
          </template>
        </ApolloQuery>
      </div>

      <!-- Hamburger -->
      <div class="w-1/3 xl:hidden flex justify-end items-center text-3xl pr-5">
        <a href="#" @click.prevent="nav=true">
          <i aria-hidden="true" class="fa fa-bars"></i>
        </a>
      </div>
    </nav>
    <mobile-nav v-if="nav" @close="nav=false" />
  </section>
</template>
<script>
import DropNav from "@/components/layout/DropNav";
import MobileNav from "@/components/layout/MobileNav";
export default {
  components: {
    DropNav,
    MobileNav
  },
  data() {
    return {
      logo: process.env.LOGO,
      logoWidth: process.env.LOGO_WIDTH,
      basketball: [
        {
          title: "Basketballs",
          url: "/tags/basketballs"
        },
        {
          title: "Nets",
          url: "/tags/basketball-nets"
        },
        {
          title: "Scoreboards",
          url: "/tags/basketball-scoreboards"
        },
        {
          title: "Goals",
          url: "/tags/basketball-goals"
        },
        {
          title: "In-Ground Systems",
          url: "/tags/in-ground-basketball-systems"
        }
      ],
      baseballSoftball: [
        {
          title: "Balls",
          url: "/tags/baseball-softball"
        },
        {
          title: "Protection",
          url: "/tags/baseball-softball-protection"
        },
        {
          title: "Accessories",
          url: "/tags/baseball-softball-accessories"
        }
      ],

      nav: false
    };
  }
};
</script>
<style scoped>
.navLinks {
  @apply mr-6 relative text-primary uppercase;
  font-size: 13px;
  font-family: Roboto, sans-serif;
  font-weight: 500;
}
.wrapper {
  background: url("/christmas-background.jpg");
  background-repeat: repeat-x;
  background-color: #fff;
}
</style>