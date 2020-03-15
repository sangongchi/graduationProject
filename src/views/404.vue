<template>
  <div class="container">
    <div class="center-img"></div>
  </div>
</template>
<script>
export default {
  name: '404Page'
};
</script>
<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  background-color: #daeaf8;
  display: flex;
  justify-content: center;
  align-items: center;
  .center-img {
    width: 623px;
    height: 475px;
    background-image: url('../assets/imgs/404Center.png');
    background-repeat: no-repeat;
    background-size: 100% 99.9%;
  }
}
</style>