<template>
  <div>
    <div class="w-1/6 hidden lg:block">
      <client-only>
        <slick-slide ref="slickNav" :options="thumbOptions" class="slider-nav">
          <img
            class="rimage__img"
            :src="image.medium"
            :alt="title"
            v-for="image in images"
            :key="image.id"
            @load="loaded"
          />
        </slick-slide>
        <div class="arrows flex"></div>
      </client-only>
    </div>
    <div class="w-full lg:w-5/6 px-2">
      <client-only>
        <slick-slide ref="slick" :options="largeOptions" class="slider-for">
          <img :src="image.large" :alt="title" v-for="image in images" :key="image.id" />
        </slick-slide>
      </client-only>
    </div>
  </div>
</template>
<script>
export default {
  props: ["images", "title"],
  methods: {
    loaded() {
      this.$nextTick(() => {
        window.dispatchEvent(new Event("resize"));
      });
    }
  },
  data() {
    return {
      largeOptions: {
        slidesToShow: 1,
        asNavFor: ".slider-nav",
        arrows: false,
        infinite: false,
        responsive: [
          {
            breakpoint: 700,
            settings: {
              dots: true,
              adaptiveHeight: true
            }
          }
        ]
      },
      thumbOptions: {
        infinite: false,
        slidesToShow: 4,
        asNavFor: ".slider-for",
        vertical: true,
        focusOnSelect: true,
        appendArrows: ".arrows",
        prevArrow:
          '<button type="button" class="focus:outline-none w-1/2 slick-prev mr-1 text-gray-600"><i class="fas fa-chevron-up"></i></button>',
        nextArrow:
          '<button type="button" class="focus:outline-none w-1/2 slick-next ml-1 text-gray-600"><i class="fas fa-chevron-down"></i></button>'
      }
    };
  }
};
</script>
<style scoped>
/deep/ .slider-nav .slick-current img {
  border: 2px solid red !important;
}
button:focus {
  outline: none;
}
/deep/ .slick-slide img {
  border: 2px solid transparent;
}
.arrows {
  position: relative;
  background-color: #fff;
  padding-top: 10px;
  z-index: 100;
}
/deep/ .slick-arrow {
  cursor: pointer;
  height: 38px !important;
  @apply bg-gray-200;
}

/deep/ .slick-dots {
  position: absolute;
  bottom: -25px;
  display: block;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
  text-align: center;
}

/deep/ .slick-dots li {
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: 0 5px;
  padding: 0;
  cursor: pointer;
}
/deep/ .slick-dots li button {
  font-size: 0;
  line-height: 0;
  display: block;
  width: 20px;
  height: 20px;
  padding: 5px;
  cursor: pointer;
  color: transparent;
  border: 0;
  outline: none;
  background: transparent;
}
/deep/ .slick-dots li.slick-active button:before {
  opacity: 0.75;
  color: black;
}
/deep/ .slick-dots li button:before {
  font-family: "slick";
  font-size: 20px;
  line-height: 20px;
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  content: "•";
  text-align: center;
  opacity: 0.25;
  color: black;
  -webkit-font-smoothing: antialiased;
}
/deep/ .slick-dotted {
  margin-bottom: 10px;
}
</style>