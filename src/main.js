import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { post, get } from './common/http';

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//引入video.js
import Video from 'video.js';
import 'video.js/dist/video-js.css';
Vue.prototype.$video = Video;
//引入loading
import loading from './components/common/Loading/Loading';
Vue.use(loading);

Vue.config.productionTip = false;
Vue.use(ViewUI);
Vue.use(ElementUI);
Vue.prototype.$post = post;
Vue.prototype.$get = get;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
