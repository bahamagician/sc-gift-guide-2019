<template>
  <ul
    v-if="pagination.lastPage > 1"
    class="pagination text-center p-5"
    role="navigation"
    aria-label="Pagination"
  >
    <!-- Previous page button -->
    <li v-if="pagination.currentPage > 1" class="pagination-previous inline p-4">
      <a href="#" @click.prevent="changePage(pagination.currentPage - 1)">
        Previous
        <span class="sr-only">page</span>
      </a>
    </li>
    <li v-else class="pagination-previous inline text-gray-500 p-4">
      Previous
      <span class="sr-only">page</span>
    </li>

    <li
      v-for="page in pagesNumber"
      class="m-3 p-4 hidden md:inline"
      :class="{'bg-primary text-white': page == pagination.currentPage}"
    >
      <button v-if="page == pagination.currentPage">
        <!-- <span class="sr-only">You're on page</span> -->
        {{page}}
      </button>
      <button v-else @click.prevent="changePage(page)">{{ page }}</button>
    </li>

    <!-- Next Page Button -->
    <li v-if="pagination.currentPage < pagination.lastPage" class="pagination-next inline p-4">
      <a href="#" @click.prevent="changePage(pagination.currentPage + 1)" aria-label="Next page">
        Next
        <span class="sr-only">page</span>
      </a>
    </li>
    <li v-else class="pagination-next text-gray-500 inline p-4">
      Next
      <span class="sr-only">page</span>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    pagination: {
      type: Object,
      required: true
    },
    offset: {
      type: Number,
      default: 4
    }
  },
  computed: {
    pagesNumber() {
      if (!this.pagination.total) {
        return [];
      }
      let from = this.pagination.currentPage - this.offset;
      if (from < 1) {
        from = 1;
      }
      let to = from + this.offset * 2;
      if (to >= this.pagination.lastPage) {
        to = this.pagination.lastPage;
      }
      const pagesArray = [];
      for (from = 1; from <= to; from++) {
        pagesArray.push(from);
      }
      return pagesArray;
    }
  },
  methods: {
    changePage(page) {
      this.$emit("changePage", page);
    }
  }
};
</script>
<style scoped>
.pagination-previous:before {
  display: inline-block;
  margin-right: 0.5rem;
  content: "\AB";
}
.pagination-next:after {
  display: inline-block;
  margin-left: 0.5rem;
  content: "\BB";
}
</style>