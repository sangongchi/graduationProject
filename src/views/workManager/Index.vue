<template>
  <div class="container-layout">
    <Layout>
      <Layout>
        <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed" class="leftNav">
          <Menu theme="dark" width="auto" :class="menuitemClasses" @on-select="changeMenu" :open-names="['1']">
            <Submenu name="1" class="mulLevel">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>
                <span>版块菜单</span>
              </template>
              <MenuItem name="FilePage" :to="{ path: '/home/filePage' }">文件版块</MenuItem>
              <MenuItem name="ImagePage" :to="{ path: '/home/imagePage' }">图片版块</MenuItem>
              <MenuItem name="Movie" :to="{ path: '/home/movie' }">视频版块</MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout>
          <Header :style="{ padding: 0 }" class="layout-header-bar">
            <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{ margin: '0 20px' }" type="md-menu" size="24"></Icon>
            <div class="nav-top">
              <MenuItem name="5" class="item" :to="{ path: '/home/uploadPage' }"> <Icon type="ios-navigate"></Icon>上传 </MenuItem>
              <MenuItem name="2" class="item"> 
                 <Dropdown>
                  <a href="javascript:void(0)">
                     <Icon type="ios-keypad"></Icon>切换系统
                      <Icon type="ios-arrow-down"></Icon>
                  </a>
                  <DropdownMenu slot="list">
                      <DropdownItem v-for="item in systems" :key='item.identify'>
                        <a :href="item.resPath" class="system-link" target="blank">
                          <p style="text-align: center; padding-top: 10px;">{{ item.resName }}</p>
                        </a>
                      </DropdownItem>
                  </DropdownMenu>
              </Dropdown>
                
              </MenuItem>
              <MenuItem name="4" class="item" @click.native="goOut"> <Icon type="ios-paper"></Icon>注销 </MenuItem>
            </div>
          </Header>
          <Content :style="{ margin: '20px', background: '#fff', minHeight: '260px' }">
            <router-view style="maxHeight: '100vh'"></router-view>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      routerActiveName: this.$route.name,
      isCollapsed: false,
      systems:[],
    };
  },
  computed: {
    rotateIcon() {
      return ['menu-icon', this.isCollapsed ? 'rotate-icon' : ''];
    },
    menuitemClasses() {
      return ['menu-item', this.isCollapsed ? 'collapsed-menu' : ''];
    },
  },
  //当前路由改变时调用
  beforeRouteUpdate(to, from, next) {
    this.routerActiveName = to.name;
    next();
  },
  methods: {
    getSystems() {
      this.$post('/guid/guidSystems', {})
        .then((res) => {
          this.systems = res.systems;
        })
        .catch((err) => {
          console.log('数据请求错误' + err);
        });
    },
    collapsedSider() {
      this.$refs.side1.toggleCollapse();
    },
    goOut(){
      console.log("执行登出事件")
      this.$router.replace({
        path:'/login'
      })
    },
    changeMenu() {
      this.$router.push('/' + this.routerActiveName);
    },
  },
  mounted() {
    console.log(this.$route.name);
    this.getSystems();
  },
};
</script>
<style lang="scss">
.container-layout {
  a{
    color: inherit;
  }
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  .leftNav {
    height: 100vh;
  }
  .nav-top {
    position: absolute;
    top: 0;
    right: 30px;
    .item {
      float: left;
      margin: auto 20px;
    }
  }
  .layout-header-bar {
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  }
  .layout-logo-left {
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
  }
  .menu-icon {
    transition: all 0.3s;
  }
  .rotate-icon {
    transform: rotate(-90deg);
  }
  //侧边栏展开收缩样式书写

  .collapsed-menu {
    span {
      width: 0px;
      transition: width 0.2s ease;
    }
    i {
      transform: translateX(5px);
      transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
      vertical-align: middle;
      font-size: 22px;
    }
    .ivu-menu-submenu-title-icon {
      display: none;
    }
    .mulLevel {
      .ivu-menu-item {
        padding-left: 5px !important;
        padding-right: 5px !important;
      }
    }
  }
}
.menu-item {
  span {
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width 0.2s ease 0.2s;
  }
  i {
    transform: translateX(0px);
    transition: font-size 0.2s ease, transform 0.2s ease;
    vertical-align: middle;
    font-size: 16px;
  }
}
</style>
