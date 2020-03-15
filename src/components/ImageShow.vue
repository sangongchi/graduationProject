<template>
  <div class="Image-container">
    <div class="content">
      <div class="selctOptions">
        <div
          class="select-option"
          v-for="(item) in seletOptionArr"
          :key="item.name+item.id"
          :class="{active:item.value==imgSelectType}"
          @click="imgSelectType=item.value"
        >{{item.name}}</div>
      </div>
      <div class="img-body">
        <div class="img-option" v-for="item in imgData" :key="item.id">
          <div class="img">
            <img :src="item.imgSrc" alt="item.name" />
          </div>
          <div class="list-info trans"></div>
          <div class="list-btn trans">
            <div class="img-download">立即下载</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ImageContainer',
  props: ['imgData'],
  data() {
    return {
      imgSelectType: '',
      seletOptionArr: [
        { name: '精选作品', value: 0 },
        { name: '个人设计', value: 1 },
        { name: '未知名称', value: 2 },
        { name: '未知名称2', value: 3 }
      ]
    };
  },
  mounted() {
    console.log(this.imgData[0]);
  }
};
</script>
<style lang="scss" scoped>
.trans {
  transition: all 0.2s;
  -webkit-transition: all 0.2s;
}
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
  .img-body {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .img-option {
      height: 460px;
      background-color: yellowgreen;
      margin: 0 10px;
      margin-bottom: 45px;
      position: relative;
      overflow: hidden;
      .list-info {
        width: 100%;
        height: 50px;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.263), #ffffff41);
        box-shadow: 130px 0 40px 20px #ffffff41;
        position: absolute;
        top: -50px;
      }
      .list-btn {
        width: 100%;
        position: absolute;
        height: 83px;
        background-color: rgba(0, 0, 0, 0.363);
        background: linear-gradient(to top, rgba(0, 0, 0, 0.563), #ffffff41);
        box-shadow: 130px 0 40px 20px #ffffff41;
        bottom: -83px;
        .img-download {
          display: inline-block;
          height: 38px;
          text-align: center;
          font-size: 14px;
          line-height: 38px;
          border-radius: 2px;
          margin-right: 14px;
          padding: 0 15px;
          color: #fff;
          background-color: #5bdcc3;
        }
      }
      &:hover {
        .list-btn {
          bottom: 0;
        }
        .list-info {
          top: 0;
        }
      }
    }
  }
}
</style>