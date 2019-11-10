<template>
  <div class="top-0 left-0 w-screen h-screen bg-white fixed overflow-auto py-3 z-10">
    <span class="absolute top-0 right-0 px-4 py-3">
      <a href="#" @click.prevent="$emit('close')">
        <svg
          class="fill-current h-6 w-6 text-red"
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <title>Close</title>
          <path
            d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
          />
        </svg>
      </a>
    </span>
    <ul>
      <!-- <div class="container mx-auto mt-20">
        <div @click="$emit('close')">
          <g-link
            class="text-primary tab__link p-4 block no-underline border-t-2 border-primary flex justify-between"
            to="/"
          >Home</g-link>
        </div>

        <accordion title="Basketball">
          <ul>
            <li v-for="item in basketball" @click="$emit('close')">
              <g-link
                class="text-primary pl-10 tab__link p-4 block no-underline border-t-2 border-gray justify-between"
                :to="item.url"
              >
                <i class="fas fa-chevron-right mr-3"></i>
                {{ item.title }}
              </g-link>
            </li>
          </ul>
        </accordion>

        <accordion title="Baseball & Softball">
          <ul>
            <li v-for="item in baseballSoftball" @click="$emit('close')">
              <g-link
                class="text-primary pl-10 tab__link p-4 block no-underline border-t-2 border-gray justify-between"
                :to="item.url"
              >
                <i class="fas fa-chevron-right mr-3"></i>
                {{ item.title }}
              </g-link>
            </li>
          </ul>
        </accordion>

        <div @click="$emit('close')">
          <g-link
            class="text-primary tab__link p-4 block no-underline border-t-2 border-primary flex justify-between"
            to="/tags/soccer"
          >Soccer</g-link>
        </div>

        <div @click="$emit('close')">
          <g-link
            class="text-primary tab__link p-4 block no-underline border-t-2 border-primary flex justify-between"
            to="/tags/track-and-field"
          >Track & Field</g-link>
        </div>

        <div @click="$emit('close')">
          <g-link
            class="text-primary tab__link p-4 block no-underline border-t-2 border-primary flex justify-between"
            to="/tags/raquet-sports"
          >Raquet Sports</g-link>
        </div>

        <div @click="$emit('close')">
          <g-link
            class="text-primary tab__link p-4 block no-underline border-t-2 border-primary flex justify-between"
            to="/tags/volleyball"
          >Volleyball</g-link>
        </div>

        <div @click="$emit('close')">
          <g-link
            class="text-primary tab__link p-4 block no-underline border-t-2 border-primary flex justify-between"
            to="/tags/misc"
          >Physical Ed. & Accessories</g-link>
        </div>

        <div @click="$emit('close')">
          <g-link
            class="text-primary tab__link p-4 block no-underline border-t-2 border-primary flex justify-between"
            to="/tags/equipment-bags"
          >Bags</g-link>
        </div>

        <div @click="$emit('close')">
          <g-link
            class="text-primary tab__link p-4 block no-underline border-t-2 border-primary flex justify-between"
            to="/contact-us"
          >Contact Us</g-link>
        </div>
      </div>-->
    </ul>
  </div>
</template>
<script>
import Accordion from "@/components/layout/Accordion";
export default {
  components: {
    Accordion
  },
  data() {
    return {
      basketball: [
        {
          title: "Basketballs",
          url: "/tags/basketballs"
        },
        {
          title: "Nets",
          url: "/tags/basketball-nets"
        },
        {
          title: "Scoreboards",
          url: "/tags/basketball-scoreboards"
        },
        {
          title: "Goals",
          url: "/tags/basketball-goals"
        },
        {
          title: "In-Ground Systems",
          url: "/tags/in-ground-basketball-systems"
        }
      ],
      baseballSoftball: [
        {
          title: "Balls",
          url: "/tags/baseball-softball"
        },
        {
          title: "Protection",
          url: "/tags/baseball-softball-protection"
        },
        {
          title: "Accessories",
          url: "/tags/baseball-softball-accessories"
        }
      ]
    };
  },
  methods: {
    whaps() {
      console.log("rah");
    }
  }
};
</script>