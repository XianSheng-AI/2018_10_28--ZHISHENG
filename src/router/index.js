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
//通知管理
import myalerts from '../pages/MyAlerts/index'
import my_comment from '../pages/MyAlerts/children/comment'
import my_like from '../pages/MyAlerts/children/like'
import my_focus from '../pages/MyAlerts/children/focus'
import my_collect from '../pages/MyAlerts/children/collect'
import my_share from '../pages/MyAlerts/children/share'
import my_contribute from '../pages/MyAlerts/children/contribute'
import my_settingMsg from '../pages/MyAlerts/children/setting-msg'

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
  }, {
      path:'/setting',
      component:myalerts,
      children:[
        {
          path:'comment',
          component:my_comment
        }
        ,{
          path:'like',
          component:my_like
        }
        ,{
          path:'focus',
          component:my_focus
        }
        ,{
          path:'collect',
          component:my_collect
        }
        ,{
          path:'share',
          component:my_share
        }
        ,{
          path:'contribute',
          component:my_contribute
        }
        ,{
          path:'settingMsg',
          component:my_settingMsg
        }
      ]
    }
  ]
})
