/*
 * @Author: 蔡先佳 
 * @Date: 2018-10-27 21:30:57 
 * @Last Modified by: 蔡先佳
 * @Last Modified time: 2018-10-27 21:52:44
 */


import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../pages/index/index.vue'

import indexNewest from '../pages/index/children/main/children/newest'
import indexHot from '../pages/index/children/main/children/hot'
import indexFocus from '../pages/index/children/main/children/focus'
import indexStar from '../pages/index/children/main/children/star'
import indexQuestion from '../pages/index/children/main/children/question'
import indexTopic from '../pages/index/children/main/children/topic'

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  base: __dirname,
  routes:[
  {
    path:'/',
    component:index,
    children:[
      {
        path: '/newest',
        // name: 'home-newest',
        component:indexNewest
      },
      {
        path:'/hot',
        component:indexHot
      },
      {

        path:'/focus',
        component:indexFocus
      },
      {
        path:'/star',
        component:indexStar
      },
      {
        path:'/question',
        component:indexQuestion
      },
      {
        path:'/topic',
        component:indexTopic
      },
      {
        path : '',
        redirect : '/newest'
      }
    ]
  }
  ]
})
