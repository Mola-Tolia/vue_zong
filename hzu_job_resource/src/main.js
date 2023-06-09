import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import 'material-design-icons/iconfont/material-icons.css';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this
  }
}).$mount('#app')
