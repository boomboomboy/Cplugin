import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
Vue.config.productionTip = false
// import Cloading from 'vue-sxlymsg'
// Vue.use(Cloading)
import Cplugin from './plugin/c-plugin/index'
Vue.use(Cplugin)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
