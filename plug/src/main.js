import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// import Cloading from 'vue-sxlymsg'
// Vue.use(Cloading)

import Cplugin from 'vue-cplugin'
Vue.use(Cplugin)
new Vue({
  render: h => h(App),
}).$mount('#app')
