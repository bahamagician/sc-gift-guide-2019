<template>
  <div class>
    <div class="tab__header">
      <a
        href="#"
        class="text-primary tab__link p-4 block no-underline border-t-2 border-primary flex justify-between"
        @click.prevent="active = !active"
      >
        {{title}}
        <span class="down-Arrow" v-show="!active">&#9660;</span>
        <span class="up-Arrow" v-show="active">&#9650;</span>
      </a>
    </div>
    <div class="tab__content" v-show="active">
      <ul>
        <li v-for="item in items" @click="$emit('close')">
          <nuxt-link
            class="text-primary pl-10 tab__link p-4 block no-underline border-t-2 border-gray justify-between"
            :to="item.url"
          >
            <i class="fas fa-chevron-right mr-3"></i>
            {{ item.title }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title", "items"],
  data() {
    return {
      active: false
    };
  },
  methods: {
    close() {
      $emit("close");
    }
  }
};
</script>