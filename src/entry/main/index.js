import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import vuescroll from 'vuescroll';
import 'vuescroll/dist/vuescroll.css';
import 'normalize.css';
import App from './App.vue';
import router from '../../router';
import store from '../../store';
import '../../registerServiceWorker';
import '@/assets/styles/main.scss';
import 'filter/index'; // 过滤器
import '@/assets/iconfont/iconfont.css';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(vuescroll);


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
