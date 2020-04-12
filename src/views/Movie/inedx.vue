<template>
  <div class="movie-page">
    <div class="movie-container">
      <VideoComponent></VideoComponent>
    </div>
  </div>
</template>
<script>
import VideoComponent from './ViedeShow';
export default {
  name: 'Movie',
  data() {
    return {
      movieList2: []
    };
  },
  components: {
    VideoComponent
  },
  methods: {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.movie-page {
  width: 100vw;
}
</style>
