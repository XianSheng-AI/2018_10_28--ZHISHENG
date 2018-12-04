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
// import iView from 'iview'
// import 'iview/dist/styles/iview.css';

import '../static/iconfont/iconfont.js'
// import './common/normalize.css'
import './common/reset.css'
//引用vuescroll插件
import VueScroll from 'vuescroll/dist/vuescroll-native';
// import VueScroll from 'vuescroll/dist/vuescroll-slide';
import 'vuescroll/dist/vuescroll.css';

import SvgIcon from '@/components/iconfont/SvgIcon.vue'

Vue.component('svg-icon',SvgIcon);
// Vue.use(VueScroll);
Vue.use(VueScroll, {
  // mode: 'native',
  ops: {
    vuescroll: {
      mode: 'native',
      sizeStrategy: 'percent',
    },
    scrollPanel: {
      scrollingX: false,
    },
    rail: {
      background: '#c8c4f4',
      opacity: 0,
      /** Rail's size(Height/Width) , default -> 6px */
      size: '6px',
    },
    bar: {
      background : '#b3b3b3',
      keepShow: false,
    }
  }, // 在这里设置全局默认配置
  name: 'vueScroll' // 在这里自定义组件名字，默认是vueScroll

});
// import iView from 'iview';
// Vue.use(iView);
//
// router.beforeEach((to, from, next) => {
//   iView.LoadingBar.start();
//   next();
// });
//
// router.afterEach(route => {
//   iView.LoadingBar.finish();
// });

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


