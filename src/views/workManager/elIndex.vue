<template>
  <div class="container">
    <el-container>
      <el-menu  :default-active="this.$router.path" router class="left-menu" :collapse="isCollapse">
        <div class="top-icon"></div>
        <el-submenu index="/workManager">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/workManager">选项一</router-link></el-menu-item>
            <el-menu-item index="/workManager/two">选项二</el-menu-item>
            <el-menu-item index="/workManager/three">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
      <el-container class="right-box">
        <el-header style="text-align: right; font-size: 12px" class="top-menu">
          <el-button type="primary" @click="menuHandle()" :class="[isCollapse ? 'collapseBtnOpen' : 'collapseBtnClose']">
            <i class="el-icon-s-unfold"></i>
          </el-button>
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>三公尺</span>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: true,
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ]
    };
  },
  methods: {
    menuHandle() {
      console.log(this.isCollapse);
      this.isCollapse = !this.isCollapse;
    }
  }
};
</script>
<style lang="scss">
.container {
  .left-menu:not(.el-menu--collapse) {
    width: 200px;
    height: 100vh;
  }
  .left-menu {
    height: 100vh;
    color: #333;
    .top-icon {
      width: 100%;
      height: 50px;
    }
  }
  .right-box {
    .top-menu {
      position: relative;
      background-color: #b3c0d1;
      color: #333;
      line-height: 60px;
      .collapseBtnOpen {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 30px;
        padding: 5px;
      }
      .collapseBtnClose {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 30px;
        padding: 5px;
        i {
          transform: rotate(180deg);
        }
      }
    }
  }
}
</style>
