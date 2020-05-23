<template>
  <div class="nofile-container">
    <div class="nofile-content">
          作业管理系统
  
    </div>
  </div>
</template>
<script>
export default {
  name: 'noFile',
};
</script>
<style lang="scss">
.nofile-container{
  position: relative;
  .nofile-content{
    position: absolute;
    margin-top: 60px;
    width: 300px;
    height: 300px;
    left: 50%;
    top: 50%;
    transform: translate(-50%,50%);
    text-align: center;
    font-size: 26px;
    background-image: url("../assets/imgs/null.png");
    background-position: center;
    background-repeat: no-repeat;
  }
}
</style>
