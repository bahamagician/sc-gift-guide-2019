<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
export default {
  components: {
    Header,
    Footer
  }
};
</script>
<style>
body {
  @apply font-body text-gray-600;
  background-color: rgb(238, 241, 244);
}
h1 {
  @apply text-gray-600 font-normal text-3xl;
}
</style>
