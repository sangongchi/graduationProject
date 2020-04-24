<template>
  <div class="Image-container">
    <div class="content">
      <div class="video-body">
        <div
          class="video-option"
          v-for="(item, index) in movieList"
          :key="index"
          @mouseenter="videController(item.id, 1)"
          @mouseleave="videController(item.id, 2)"
        >
          <video :id="'myVideo' + item.id" class="video-js">
            <source :src="item.movieSrc" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ImageContainer',
  data() {
    return {
      seletOptionArr: [
        { name: '精选作品', value: '0' },
        { name: '个人设计', value: '1' },
        { name: '未知名称', value: '2' },
        { name: '未知名称2', value: '3' }
      ],
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
        }
      ]
    };
  },
  methods: {
    /**
     * @method videoInit
     * @description video组件的初始化循环数组获取id值
     */
    videoInit() {
      this.movieList.map((item, index) => {
        let myPlayer = this.$video('myVideo' + item.id, {
          //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
          controls: true,
          //自动播放属性,muted:静音播放
          // autoplay: 'muted',
          autoplay: false,
          //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
          preload: 'auto'
        });
      });
    },
    /**
     * @method videController
     * @description 控制视频的播放
     */
    videController(id, status) {
      let myPlayer = this.$video('myVideo' + id);
      if (status == 1) {
        myPlayer.play();
      }
    },
    /**
     * @method getVideoData
     * @description 获取视频的接口
     */
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
    this.videoInit();
  }
};
</script>
<style lang="scss">
.Image-container {
  .ivu-tabs-nav {
    left: 50%;
    transform: translateX(-50%);
  }
  .vjs-big-play-button{
    position: absolute!important;
    left: 50%!important;
    top: 30%!important;
    transform: translateX(-50%)!important;
  }
}
</style>
<style lang="scss" scoped>
.Image-container {
  width: 1200px;
  min-height: 100vh;
  padding: 24px;
  background-color: #f8f8f9;
  margin: 0 auto;
  .video-body {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    .video-option {
      height: 204px;
      width: 360px;
      overflow: hidden;
      margin: 0 12px;
      margin-bottom: 45px;
      .video-js {
        width: 100%;
        height: 100%;
        position: relative;
      }
    }
  }
}
</style>
