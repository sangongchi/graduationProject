import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Guid = (resolve) => require.ensure([], () => resolve(require('@views/Guid.vue')));
const Login = (resolve) => require.ensure([], () => resolve(require('@views/Login.vue')));
const Register = (resolve) => require([], () => resolve(require('@views/Register.vue')));

//作品管理系统
const WorkManager = (resolve) => require([], () => resolve(require('@views/workManager/Index.vue')));
const HomeNo = (resolve) => require([], () => resolve(require('@views/noFile.vue')));
const UploadPage = (resolve) => require([], () => resolve(require('@views/workManager/UploadPage.vue')));

//视频版块
const Movie = (resolve) => require([], () => resolve(require('@views/Movie/inedx.vue')));
//图片页面
const ImagePage = (resolve) => require([], () => resolve(require('@views/ImagePage')));
//文件页面
const filePage = (resolve) => require([], () => resolve(require('@views/filePage/index.vue')));
//404页面
const ErrorPage = (resolve) => require([], () => resolve(require('@views/404.vue')));
const routes = [
  {
    path: '/',
    component: Login,
  },
  {
    path: '/home',
    name: 'Home',
    component: WorkManager,
    children: [
      {
        path: '',
        name: 'HomeNofile',
        component: HomeNo,
      },
      {
        path: 'uploadPage',
        name: 'UploadPage',
        component: UploadPage,
      },
      {
        path: 'movie',
        name: 'Movie',
        component: Movie,
      },
      {
        path: 'imagePage',
        name: 'ImagePage',
        component: ImagePage,
      },
      {
        path: 'filePage',
        name: 'FilePage',
        component: filePage,
      },
    ],
  },
  {
    path: '/guid',
    name: 'Guid',
    component: Guid,
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
  {
    path: '/404',
    name: 'ErrorPage',
    component: ErrorPage,
  },
];

const router = new VueRouter({
  mode: 'hash',
  routes,
});

export default router;
