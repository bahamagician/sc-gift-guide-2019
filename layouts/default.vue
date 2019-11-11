<template>
  <div class="wrapper relative" style="background-color:#fcfcfc;">
    <div class="content-wrapper">
      <Header />
      <!-- Content -->
      <nuxt />
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
export default {
  props: ["alert"],
  components: {
    Header,
    Footer
  },
  data() {
    return {
      nav: false
    };
  }
};
</script>
<style>
body,
html {
  height: 100%;
  min-height: 100%;
  @apply font-body;
}

.content-wrapper {
  min-height: 92vh;
}
.contact-email {
  display: block;
  @screen md {
    display: inline;
  }
}
</style>