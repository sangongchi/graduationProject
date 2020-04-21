import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Index = (resolve) => require.ensure([], () => resolve(require('@views/Guid.vue')));
const Login = (resolve) => require.ensure([], () => resolve(require('@views/Login.vue')));
const Register = (resolve) => require([], () => resolve(require('@views/Register.vue')));

//作品管理系统
const WorkManager = (resolve) => require([], () => resolve(require('@views/workManager/Index.vue')));
const MenuOne = (resolve) => require([], () => resolve(require('@views/workManager/menu/index.vue')));
const MenuTwo = (resolve) => require([], () => resolve(require('@views/workManager/menu/menuOne.vue')));
const UploadPage = (resolve) => require([], () => resolve(require('@views/workManager/UploadPage.vue')));

//视频版块
const Movie = (resolve) => require([], () => resolve(require('@views/Movie/inedx.vue')));
//图片页面
const ImagePage = (resolve) => require([], () => resolve(require('@views/ImagePage')));

//404页面
const ErrorPage = (resolve) => require([], () => resolve(require('@views/404.vue')));
const routes = [
  {
    path:'/',
    component:Login
  },
  {
    path: '/home',
    name: 'Index',
    component: Index,
  },
  //登录注册部分
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  //作品管理系统路由部分
  {
    path: '/workManager',
    name: 'WorkManager',
    component: WorkManager,
    // redirect: '/workManager/one',
    children: [
      {
        path: '',
        name: 'One',
        component: MenuOne,
      },
      {
        path: 'two',
        name: 'Two',
        component: MenuTwo,
      },
    ],
  },
  {
    path: '/uploadPage',
    name: 'UploadPage',
    component: UploadPage,
  },
  {
    path: '/movie',
    name: 'Movie',
    component: Movie,
  },
  {
    path: '/imagePage',
    name: 'ImagePage',
    component: ImagePage,
  },
  {
    path: '/404',
    name: 'ErrorPage',
    component: ErrorPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
