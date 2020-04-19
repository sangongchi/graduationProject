<template>
  <div class="index-container">
    <div class="index-head">
      <h1 class="logo-title">作品管理平台</h1>
    </div>
    <div class="index-content">
      <div class="item" v-for="(item) in systems" :key="item.identify">
        <a :href="item.resPath" class="system-link">
          <img :src="item.ImgSrc" :alt="item.identify" />
          <p style="text-align: center; padding-top: 10px;">{{ item.resName }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'guid',
  data() {
    return {
      systems: []
    };
  },
  components: {},
  methods: {
    getSystems() {
      this.$post('/guid/guidSystems', {})
        .then(res => {
          this.systems = res.systems;
        })
        .catch(err => {
          console.log('数据请求错误' + err);
        });
    }
  },
  mounted() {
    this.getSystems();
  }
};
</script>
<style lang="scss">
.index-container {
  width: 100vw;
  position: relative;
  .index-head {
    width: 100%;
    height: 70px;
    background-color: #0074e4;
    position: fixed;
    z-index: 33;
    .logo-title {
      line-height: 70px;
      font-size: 26px;
      color: #fff;
      margin-left: 25px;
      float: left;
    }
  }
  .index-content {
    max-width: 1400px;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding-top: 120px;
    margin: 0 auto;
    .item {
      float: left;
      width: 50%;
      margin: 30px 0 0;
      box-sizing: border-box;
      &:nth-of-type(odd) {
        padding-right: 50px;
      }
      &:nth-of-type(even) {
        padding-left: 50px;
      }
      p {
        font-size: 14px;
      }
    }
    .system-link {
      display: block;
      > img {
        display: block;
        width: 100%;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        transition: all 0.4s ease;
        &:hover {
          transform: translateY(-4px);
          box-shadow: 0 6px 14px rgba(0, 0, 0, 0.2);
        }
      }
    }
  }
}
</style>
