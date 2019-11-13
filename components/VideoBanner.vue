<template>
  <div class="video-wrapper">
    <div class="video-text">
      <div class="w-full">
        <p>{{ title }}</p>
      </div>
    </div>
    <video autoplay="autoplay" muted loop="loop" poster="/poster.jpg">
      <source :src="video" type="video/mp4" />
    </video>
  </div>
</template>
<script>
export default {
  props: ["title", "video"]
};
</script>
<style scoped>
.video-wrapper {
  @apply flex relative -mt-4 mb-6;
}
.video-wrapper video {
  @apply w-full;
}
.video-text {
  @apply inset-0 flex flex-wrap absolute text-center items-center  justify-center font-display text-white;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 0h1L0 6V5zm1 5v1H5z' fill-opacity='.56' fill-rule='evenodd'/%3E%3C/svg%3E");
  font-size: 100px;
}
</style>