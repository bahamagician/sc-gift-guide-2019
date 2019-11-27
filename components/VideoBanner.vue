<template>
  <div>
    <div class="text-center font-display text-3xl pb-5 pt-3 lg:hidden">{{ title }}</div>
    <div class="video-wrapper flex relative -mt-4 mb-6 hidden lg:block">
      <div class="video-text">
        <div class="w-full">
          <p>{{ title }}</p>
        </div>
      </div>
      <video autoplay="autoplay" muted loop="loop" poster="/poster.jpg">
        <source :src="video" type="video/mp4" />
      </video>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title", "video"]
};
</script>
<style scoped>
.video-wrapper {
}
.video-wrapper video {
  @apply w-full;
}
.video-text {
  @apply inset-0 flex flex-wrap absolute text-center items-center  justify-center font-display text-white;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 0h1L0 6V5zm1 5v1H5z' fill-opacity='.56' fill-rule='evenodd'/%3E%3C/svg%3E");
  font-size: 50px;
  @screen lg {
    font-size: 100px;
  }
}
</style>