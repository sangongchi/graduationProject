<template>
  <div class="index-container">
    <div class="index-head"></div>
    <div class="index-content">
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {}
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
  }
  .index-content {
    width: 80%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding-top: 120px;
    margin: 0 auto;
    .item {
      width: 460px;
      height: 160px;
      box-shadow: 0px 0px 17px 1px rgba(126, 122, 122, 0.42);
      margin-bottom: 60px;
      background-color: #74dbef;
    }
  }
}
</style>
