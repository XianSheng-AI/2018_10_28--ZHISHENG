/*
 * @Author: 蔡先佳 
 * @Date: 2018-10-27 21:31:09 
 * @Last Modified by: 蔡先佳
 * @Last Modified time: 2018-10-29 11:49:51
 */


// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/iconfont/iconfont.js'
// import './common/normalize.css'
import './common/reset.css'

import SvgIcon from '@/components/iconfont/SvgIcon.vue'

Vue.component('svg-icon',SvgIcon);

// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// import Vue from 'vue'
// import router from 'vue-router'
// import App from './App'

// new Vue({
//   el:'#app',
//   router,
//   components:{ App },
//   template: '<App/>'

// })


