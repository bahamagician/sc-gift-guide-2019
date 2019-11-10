<template>
  <section @mouseleave="hideDropdown">
    <a href="#" @click.prevent="showDropdown">
      {{ title }} &nbsp;
      <i class="fas fa-chevron-down"></i>
    </a>
    <div
      v-show="show"
      @mouseenter="showDropdown"
      class="rounded shadow-md absolute mt-12 top-0 right-0 min-w-full bg-white"
      style="width:300px;"
    >
      <div class="p-4 bg-primary text-white">
        <h3 class="text-sm">
          <i class="fas fa-gifts"></i>
          &nbsp;
          {{ title }}
        </h3>
      </div>
      <div>
        <ul class="list-reset border-solid" @click="show = false">
          <li>
            <nuxt-link
              v-for="link in links"
              :to="link.url"
              :key="link.url"
              class="px-4 py-2 block text-primary hover:bg-gray-200"
            >{{ link.title }}</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: ["title", "links"],
  data() {
    return {
      show: false,
      timeout: ""
    };
  },
  methods: {
    showDropdown() {
      this.show = true;
      clearTimeout(this.timeout);
    },

    hideDropdown() {
      this.timeout = setTimeout(() => {
        this.show = false;
      }, 500);
    }
  }
};
</script>