/*
 * @Author: 蔡先佳 
 * @Date: 2018-10-27 21:31:09 
 * @Last Modified by: 蔡先佳
 * @Last Modified time: 2018-10-29 11:49:51
 */



import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from './router'
import store from './store/index'
import errorTips from './components/errorTips/errorTips.js' //错误提示
// import iView from 'iview'
// import 'iview/dist/styles/iview.css';
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import '../static/iconfont/iconfont.js'
import './common/reset.css'
//引用vuescroll插件
import VueScroll from 'vuescroll/dist/vuescroll-native';
import 'vuescroll/dist/vuescroll.css';
//全局组件
import SvgIcon from '@/components/iconfont/SvgIcon.vue'
import FaceGif from '@/components/face/face.vue'
Vue.use(VueRouter)
Vue.use(errorTips)
Vue.component('svg-icon',SvgIcon);
//错误提示组件
Vue.component('face-gif',FaceGif);
//评论表情组件



// 状态码错误信息
const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

// 简单配置
NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })

//路由跳转有progress
router.beforeEach((to,from,next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})


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

// Vue.config.productionTip = false
/* eslint-disable no-new */
//去除字符串首尾空白
String.prototype.$trim = function (char, type) {
  if (char) {
    if (type == 'left') {
      return this.replace(new RegExp('^\\'+char+'+', 'g'), '');
    } else if (type == 'right') {
      return this.replace(new RegExp('\\'+char+'+$', 'g'), '');
    }
    return this.replace(new RegExp('^\\'+char+'+|\\'+char+'+$', 'g'), '');
  }
  return this.replace(/^\s+|\s+$/g, '');
};
//$trim用法
// 去除字符串首尾的全部空白
// var str = ' Ruchee ';
// console.log('xxx' + str.trim() + 'xxx');  // xxxRucheexxx
//
//
// // 去除字符串左侧空白
// str = ' Ruchee ';
// console.log('xxx' + str.trim(' ', 'left') + 'xxx');  // xxxRuchee xxx
//
//
// // 去除字符串右侧空白
// str = ' Ruchee ';
// console.log('xxx' + str.trim(' ', 'right') + 'xxx');  // xxx Rucheexxx
//
//
// // 去除字符串两侧指定字符
// str = '/Ruchee/';
// console.log(str.trim('/'));  // Ruchee
//
//
// // 去除字符串左侧指定字符
// str = '/Ruchee/';
// console.log(str.trim('/', 'left'));  // Ruchee/
//
//
// // 去除字符串右侧指定字符
// str = '/Ruchee/';
// console.log(str.trim('/', 'right'));  // /Ruchee
//

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
