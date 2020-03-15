import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { post, get } from './common/http';

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//video引入
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)

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
