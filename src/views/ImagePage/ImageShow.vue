<template>
  <div class="Image-container">
    <div class="content">
      <Tabs :animated="false" @on-click="clickHandler">
        <TabPane :label="selectItem.name" v-for="selectItem in seletOptionArr" :key="selectItem.name + selectItem.id">
          <div class="img-body">
            <div v-if="imgData.length == 0">无照片</div>
            <div class="img-option" v-for="item in imgData" :key="item.id" v-else>
              <div class="img">
                <img :src="item.fileSrc" alt="item.name" />
              </div>
              <div class="list-info trans">
                {{item.fileDesr}}
              </div>
              <div class="list-btn trans">
                <div class="img-download" @click="downloadHandler(item.fileSrc)">立即下载</div>
              </div>
            </div>
          </div>
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ImageContainer',
  data() {
    return {
      imgData: [],
      imgSelectType: '',
      seletOptionArr: [
        { name: '精选图片', value: 0 },
        { name: '设计图', value: 1 },
        { name: '摄影图', value: 2 },
      ],
    };
  },
  methods: {
    clickHandler(id) {
      // console.log(id)
      this.$loading.show();
      this.$post('/seeFile/ImageData', {
        fileName: 'images',
        classType: 2,
        imgType: id.toString(),
      }).then((res) => {
        this.$loading.hide();
        if (res.err == 0) {
          this.imgData = res.imgArr;
          // console.log(this.imgData)
        } else {
          this.imgData = [];
          // this.$Message.error({ content: res.message });
        }
      });
    },
    getImageData() {
      this.$loading.show();
      this.$post('/seeFile/ImageData', {
        fileName: 'images',
        classType: 2,
        imgType:'0'
      }).then((res) => {
        this.$loading.hide();
        if (res.err == 0) {
          this.imgData = res.imgArr;
        } else {
          this.imgData = [];
          // this.$Message.error({ content: res.message });
        }
      });
    },
    downloadHandler(href) {
      href = href.split('9999')[1];
      this.$get('/downloadUrl', {
        fileHref: href,
      })
        .then((res) => {
          location.href = res.downloadUrl;
        })
        .catch((err) => {
          this.$Message.error({content:'文件下载失败'})
          // console.log('文件下载失败');
        });
    },
  },
  mounted() {
    this.getImageData();
  },
};
</script>
<style lang="scss">
.Image-container {
  .ivu-tabs-nav {
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
<style lang="scss" scoped>
.trans {
  transition: all 0.2s;
  -webkit-transition: all 0.2s;
}
.Image-container {
  width: 100%;
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
    column-count: 4;
    column-gap: 0;
    .img-option {
      width: 260px;
      margin-bottom: 45px;
      position: relative;
      overflow: hidden;
      img {
        width: 100%;
      }
      .list-info {
        width: 100%;
        background: linear-gradient(to bottom, rgba(48, 161, 54, 0.486), #ffffff41);
        box-shadow: 130px 0 40px 20px #ffffff41;
        position: absolute;
        text-align: center;
        color: #ffffff;
        padding:10px 0;
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
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          bottom: 8px;
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
