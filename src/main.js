// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';
import store from './store/'
console.log(store);
import '@/assets/js/common.js';


Vue.config.productionTip = false
Vue.prototype.$http=axios;
// console.log(router)
router.beforeEach(((to,form,next)=>{
  
  next();
}))
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})