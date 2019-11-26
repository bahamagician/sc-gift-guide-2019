<template>
  <div>
    <ApolloQuery
      :query="require('@/apollo/queries/PAGE.gql')"
      :variables="{ slug: this.$route.params.slug }"
    >
      <template v-slot="{ result: { loading, error, data } }">
        <!-- Loading -->
        <div v-if="!data">
          <Loading />
        </div>
        <div v-else>
          <video-banner :title="data.page.title" video="/inner-banner.mp4" />
          <div v-html="data.page.body"></div>
          <div>{{ data.page.featuredImage }}</div>
          <div v-if="data.page.grid.enable_image_grid">
            <image-grid :data="data.page.grid" />
          </div>
        </div>
      </template>
    </ApolloQuery>
  </div>
</template>
<script>
import Loading from "@/components/Loading.vue";
import ImageGrid from "@/components/ImageGrid.vue";
import VideoBanner from "@/components/VideoBanner.vue";
export default {
  components: { Loading, ImageGrid, VideoBanner },
  scrollToTop: true
};
</script>