<template>
  <div class="file-container">
    <div class="file-content" v-if="fileList != undefined && fileList.length > 0">
      <div class="file-option" v-for="(item, index) in fileList" :key="index">
        <div class="option-img"></div>
        <div class="option-title">
          {{ item.fileName }}
          <Button class="btn" @click="downloadHandler(item.fileSrc)" type="primary" ghost>下载</Button>
        </div>
        <div class="option-desrc">{{ item.fileDesr }}</div>
      </div>
    </div>
    <div class="nofile" v-else>无文件</div>
  </div>
</template>
<script>
export default {
  name: 'filePage',
  data() {
    return {
      fileList: [],
    };
  },
  methods: {
    init() {
      this.$post('/seeFile/FileData', {})
        .then((res) => {
          this.fileList = res.fileArr;
        })
        .catch((err) => {
          this.fileList = [];
          console.log('数据请求错误' + err);
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
          console.log('文件下载失败');
        });
    },
  },
  mounted() {
    this.init();
    console.log(this.fileList);
  },
};
</script>
<style lang="scss">
.file-container {
  width: 100%;
  height: 100%;
  padding: 25px;
  .file-content {
    width: 100%;
    height: 100%;
    .file-option {
      float: left;
      margin: 10px 15px;

      .option-img {
        width: 300px;
        height: 120px;
        // background-color: bisque;
        background-image: url("../../assets/imgs/file.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: 40%, 40%;
      }
      .option-title {
        font-size: 18px;
        font-weight: 500;
        margin: 5px 0;
        .btn {
          border: 1px solid transparent;
          float: right;
        }
      }
      .option-desrc {
        width: 100%;
        height: 60px;
        line-height: 28px;
        overflow: hidden;
      }
    }
  }
}
</style>
