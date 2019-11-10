<template>
  <header class="header relative z-40">
    <div class="bg-primary border-t-2 border-highlight text-white px-4 py-4 flex">
      <div class="w-full md:w-2/3 text-center md:text-left">
        <a href="tel:242.394.7663">
          <i aria-hidden="true" class="fa fa-phone"></i> 242.394.7660
        </a> &nbsp; · &nbsp;
        <span class="contact-email">
          <a href="mailto:info@sportscenter242.com">
            <i aria-hidden="true" class="fa fa-envelope"></i> info@sportscenter242.com
          </a>
        </span>
      </div>
      <div class="sm:w-1/3 text-right hidden sm:block">
        <a href="https://www.facebook.com/sportscenter242/" target="_blank" data-v-52bfe41d>
          <i class="fab fa-facebook-f text-white pr-3"></i>
        </a>
        <a href="https://www.instagram.com/sportscenter242/" target="_blank">
          <i class="fab fa-instagram text-white pr-3"></i>
        </a>
        <a href="https://www.twitter.com/sportscenter242/" target="_blank">
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
  components: {
    NavBar
  }
};
</script>
