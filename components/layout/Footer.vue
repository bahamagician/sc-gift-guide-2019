<template>
  <footer class="footer mt-5">
    <div class="bg-darkGrey shadow-inner">
      <div class="mx-auto px-4 py-4 flex">
        <div class="w-full text-center text-center">
          <h2 class="font-display" style="font-size:60px">
            Don't See What You're Looking For?
          </h2>
          <p>
            A gift card from the Sports Center always works. Visit one of our
            three locations and get them exactly what they want this year
          </p>
          <p class="py-4">
            <a
              class="rounded-lg text-2xl font-display bg-highlight text-white font-bold py-2 px-4"
              :href="cta"
              >Contact Us</a
            >
          </p>
        </div>
      </div>
    </div>

    <div class="bg-primary text-white px-4 py-4 flex">
      <div class="full sm:w-2/3 text-center sm:text-left">
        &copy; 2019 The Sports Center Ltd.
      </div>
      <div class="sm:w-1/3 text-right hidden sm:block">
        Prices displayed on website are not inclusive of VAT.
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      cta: process.env.CTA
    };
  }
};
</script>
