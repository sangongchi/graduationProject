<template>
  <div class="movie-page">
    <div class="movie-container">
      <div class="movie-list">
        <div class="movie-item" v-for="(item, index) in movieList" :key="item.movieTitle + index">
          <div class="Imag"></div>
          <div class="txt-content">
            <p class="movie-title">{{item.movieTitle}}</p>
            <p class="movie-context">{{item.movieDesr}}</p>
          </div>
        </div>
      </div>
      <VideoComponent :movieList="movieList"></VideoComponent>
    </div>
  </div>
</template>
<script>
import VideoComponent from '../../components/ViedeShow';
export default {
  name: 'Movie',
  data() {
    return {
      movieList: [
        {
          movieTitle: '苹果AE视频',
          movieDesr: '【sbr剧情手书/动画】谢谢你，杰洛，除此之外我找不出',
          movieImage: '',
          movieSrc: 'http://img.yopoo.cn/banner_video.mp4',
          id: '1'
        },
        {
          movieTitle: '苹果AE视频',
          movieDesr: '【sbr剧情手书/动画】谢谢你，杰洛，除此之外我找不出',
          movieImage: '',
          movieSrc: 'http://img.yopoo.cn/banner_video.mp4',
          id: '2'
        },
        {
          movieTitle: '苹果AE视频',
          movieDesr: '【sbr剧情手书/动画】谢谢你，杰洛，除此之外我找不出',
          movieImage: '',
          movieSrc: 'http://sangongchi.top:9999/test1.mp4',
          id: '3'
        }
      ],
      movieList2: []
    };
  },
  components: {
    VideoComponent
  },
  methods: {
    getVideoData() {
      this.$post('/videoData', {})
        .then(res => {
          this.movieList2 = res.data.videoArr;
          console.log(this.movieList2);
        })
        .catch(err => {
          console.log('数据请求错误' + err);
        });
    }
  },
  mounted() {
    this.getVideoData();
  }
};
</script>
<style lang="scss" scoped>
.movie-page {
  width: 100vw;
  .movie-container {
    width: 90%;
    .movie-list {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
