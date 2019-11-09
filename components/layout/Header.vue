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
      <ul class="flex">
        <li class="mr-6">
          <a href="#">
            <i class="fas fa-gift"></i>&nbsp;Gifts for Him
          </a>
        </li>
        <li class="mr-6">
          <a href="#">
            <i class="fas fa-gift"></i>&nbsp;Gifts for Her
          </a>
        </li>
        <li class="mr-6">
          <a href="#">
            <i class="fas fa-gift"></i>&nbsp;Gifts for Kids
          </a>
        </li>
        <li class="mr-6">
          <a href="#">
            <i class="fas fa-gift"></i>&nbsp;Gifts for Fitness Buffs
          </a>
        </li>
        <li class="mr-6">
          <a href="#">
            <i class="fas fa-gift"></i>&nbsp;Splurge Worthy
          </a>
        </li>
        <li class="mr-6">
          <a href="#">
            <i class="fas fa-gift"></i>&nbsp;Secret Santa Gifts
          </a>
        </li>
      </ul>
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