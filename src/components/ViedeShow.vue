<template>
  <div class="Image-container">
    <div class="content">
      <div class="selctOptions">
        <div class="select-option" v-for="(item, index) in seletOptionArr" :key="index">{{ item.name }}</div>
      </div>
      <div class="video-body">
        <div class="video-option" v-for="(item, index) in movieList" :key="index">
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
  props: ['movieList'],
  data() {
    return {
      seletOptionArr: [
        { name: '精选作品', value: '0' },
        { name: '个人设计', value: '1' },
        { name: '未知名称', value: '2' },
        { name: '未知名称2', value: '3' }
      ]
    };
  },
  methods: {
    videoInit() {
      //初始化视频方法,循环数组获取id值
      this.movieList.map((item, index) => {
        let myPlayer = this.$video('myVideo' + item.id, {
          //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
          controls: true,
          //自动播放属性,muted:静音播放
          autoplay: 'muted',
          //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
          preload: 'auto'
        });
      });
    }
  },
  mounted() {
    this.videoInit();
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
      .video-js {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
