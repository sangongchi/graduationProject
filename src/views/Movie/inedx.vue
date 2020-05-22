<template>
  <div class="movie-page">
    <div class="movie-container">
      <VideoComponent :movieList="movieList"></VideoComponent>
    </div>
  </div>
</template>
<script>
import VideoComponent from './ViedeShow';
export default {
  name: 'Movie',
  data() {
    return {
      movieList: [],
    };
  },
  components: {
    VideoComponent,
  },
  methods: {
    /**
     * @method getVideoData
     * @description 获取视频的接口
     */
    getVideoData() {
      this.$post('/seeFile/VideoData', {})
        .then((res) => {
          this.movieList = [];
          let result = res.fileArr;
          result.map((item, index) => {
            let params = {};
            params.movieTitle = item.fileName;
            params.movieDesr = item.fileDesr;
            params.movieSrc = item.fileSrc;
            params.id = (index + 1).toString();
            this.movieList.push(params);
          });
        })
        .catch((err) => {
          console.log('数据请求错误' + err);
        });
    },
  },
  created() {
    this.getVideoData();
  },
};
</script>
<style lang="scss" scoped>
.movie-page {
  width: 100%;
}
</style>
