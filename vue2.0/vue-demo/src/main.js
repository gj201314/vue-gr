import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routerConfig from './router.config.js'
import Loading from './components/loading'


Vue.use(Loading);

Vue.use(VueRouter);
const router = new VueRouter(routerConfig);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
