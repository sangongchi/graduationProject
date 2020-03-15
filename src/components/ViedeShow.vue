<template>
  <div class="Image-container">
    <div class="content">
      <div class="selctOptions">
        <div
          class="select-option active"
          v-for="(item,index) in seletOptionArr"
          :key="index"
        >{{item.name}}</div>
      </div>
      <div class="video-body">
        <div class="video-option" v-for="item in movieList" :key="item.id+item.now">
          <img :src="item.imgSrc" alt="item.name" />
        </div>
        <video-player
          class="video-player vjs-custom-skin"
          ref="videoPlayer"
          :playsinline="true"
          :options="playerOptions"
        ></video-player>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ImageContainer',
  props: ['movieList'],
  data() {
    return {
      seletOptionArr: [
        { name: '精选作品', value: '0' },
        { name: '个人设计', value: '1' },
        { name: '未知名称', value: '2' },
        { name: '未知名称2', value: '3' }
      ],
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: 'video/mp4',
            src:
              'http://vfx.mtime.cn/Video/2019/03/21/mp4/190321153853126488.mp4'
          }
        ],
        poster: '../assets/imgs/img1.jpg', //你的封面地址
        // width: document.documentElement.clientWidth, //播放器宽度
        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: true,
          fullscreenToggle: true //全屏按钮
        }
      }
    };
  },
  methods: {
    videoInit() {}
  }
};
</script>
<style lang="scss" scoped>
.Image-container {
  width: 1200px;
  padding: 24px;
  background-color: #ffffff;
  margin: 0 auto;
  .selctOptions {
    height: 30px;
    width: 100%;
    background-color: aliceblue;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    .select-option {
      line-height: 30px;
      padding: 0 20px;
      transition: all 0.2s;
      border-radius: 30px;
      margin: 0 20px;
    }
    .select-option.active {
      background-color: #0ec5a1;
      color: #fff;
    }
  }
  .video-body {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .video-option {
      height: 204px;
      width: 336px;
      background-color: yellowgreen;
      margin: 0 20px;
      margin-bottom: 45px;
    }
  }
  .video-player {
    width: 100%;
    height: 100%;
    display: block;
  }
}
</style>