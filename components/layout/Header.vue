<template>
  <header class="header relative z-40">
    <div class="bg-primary border-t-2 border-highlight text-white px-4 py-4 flex">
      <div class="w-full md:w-2/3 text-center md:text-left">
        <a :href="`tel:${phone}`">
          <i aria-hidden="true" class="fa fa-phone"></i>
          {{ phone }}
        </a>
        <span class="hidden md:inline">&nbsp; · &nbsp;</span>
        <span class="contact-email">
          <a :href="`mailto:${email}`">
            <i aria-hidden="true" class="fa fa-envelope"></i>
            {{ email }}
          </a>
        </span>
      </div>
      <div class="sm:w-1/3 text-right hidden sm:block">
        <a :href="fb" target="_blank" data-v-52bfe41d>
          <i class="fab fa-facebook-f text-white pr-3"></i>
        </a>
        <a :href="ig" target="_blank">
          <i class="fab fa-instagram text-white pr-3"></i>
        </a>
        <a :href="twt" target="_blank">
          <i class="fab fa-twitter text-white"></i>
        </a>
      </div>
    </div>

    <nav-bar />
  </header>
</template>
<script>
import NavBar from "@/components/layout/NavBar";
export default {
  data() {
    return {
      phone: process.env.PHONE,
      email: process.env.EMAIL,
      fb: process.env.FACEBOOK,
      ig: process.env.INSTAGRAM,
      twt: process.env.TWITTER
    };
  },
  components: {
    NavBar
  }
};
</script>
