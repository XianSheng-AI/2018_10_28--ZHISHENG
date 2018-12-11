/*
 * @Author: 蔡先佳 
 * @Date: 2018-10-27 21:30:57 
 * @Last Modified by: 蔡先佳
 * @Last Modified time: 2018-10-27 21:52:44
 */


import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../pages/index/index.vue'
//注册登录
import loginRegister from '../pages/login-register/login-register'
//注册，第二步选择标签
import technologyLabel from '../pages/login-register/technologyLabel'
// import indexNewest from '../pages/index/children/main/children/newest'
import indexRecommend from '../pages/index/children/main/children/recommend'
import indexHot from '../pages/index/children/main/children/hot'
import indexFocus from '../pages/index/children/main/children/focus'
import indexStar from '../pages/index/children/main/children/star'
import indexQuestion from '../pages/index/children/main/children/question'
import indexTopic from '../pages/index/children/main/children/topic'
//通知管理
import myalerts from '../pages/MyAlerts/index'
import my_comment from '../pages/MyAlerts/children/comment'
import my_like from '../pages/MyAlerts/children/like'
import my_focus from '../pages/MyAlerts/children/focus/focus'
import my_collect from '../pages/MyAlerts/children/collect/collect'
import my_share from '../pages/MyAlerts/children/share/share'
import my_contribute from '../pages/MyAlerts/children/contribute/contribute'
import my_settingMsg from '../pages/MyAlerts/children/setting-msg'
//my_fofus里的子选项
import allFo from '../pages/MyAlerts/children/focus/children/all-fo'
import collectFo from '../pages/MyAlerts/children/focus/children/collect-fo'
import columnFo from '../pages/MyAlerts/children/focus/children/column-fo'
import meFo from '../pages/MyAlerts/children/focus/children/me-fo'
import questionFo from '../pages/MyAlerts/children/focus/children/question-fo'
//my_share子选项
import allSh from '../pages/MyAlerts/children/share/children/all-sh'
import articleSh from '../pages/MyAlerts/children/share/children/article-sh'
import questionSh from '../pages/MyAlerts/children/share/children/question-sh'
import starSh from '../pages/MyAlerts/children/share/children/star-sh'
//my_contribute子选项
import allCo from '../pages/MyAlerts/children/contribute/children/all-co'
//my_collect子选项
import allCol from '../pages/MyAlerts/children/collect/children/all-col'
import answerCol from '../pages/MyAlerts/children/collect/children/answer-col'
import articleCol from '../pages/MyAlerts/children/collect/children/article-col'
import favoriteCol from '../pages/MyAlerts/children/collect/children/favorite-col'
//个人主页
import personIndex from '../pages/people/people'
//----------------------------------------------------------------
//个人主页组件(pe父级组件)
import bgImgPe from '../pages/people/children/person-header/children/bgImg'
//--个人信息--column
import personHeader from '../pages/people/children/person-header/person-header'
//--视图切换父盒子--column
import profileMainPe from '../pages/people/children/profile-main/profile-main-pe'
//--回答--answerPe
import answerPe from '../pages/people/children/profile-main/children/answer/answer'
//--文章--articlePe
import articlePe from '../pages/people/children/profile-main/children/article/article'
//--收藏--collectPe
import collectPe from '../pages/people/children/profile-main/children/collect'
//--专栏--column
import columnPe from '../pages/people/children/profile-main/children/column/column'
//--动态--dynamicState
import dynamicStatePe from '../pages/people/children/profile-main/children/dynamic-state/dynamic-state'
//--想法--ideaPe
import ideaPe from '../pages/people/children/profile-main/children/idea/idea'
//--问题--questionPe
import questionPe from '../pages/people/children/profile-main/children/question/question'
//--关注--focusPe
import focusPe from '../pages/people/children/profile-main/children/focus/focus'
//--星点--startPe
import startPe from '../pages/people/children/profile-main/children/star/star'
//------------------------------------------------------------------
//个人荣誉组件
import personalHonor from '../pages/people/children/personal-honor/personal-honor'
//--文章数--articleCountPh
import articleCountPh from '../pages/people/children/personal-honor/children/article-count'
//--关注我--focusMeCountPh
import focusMeCountPh from '../pages/people/children/personal-honor/children/focus-me-count'
//--关注的人--focusOtherCountPh
import focusOtherCountPh from '../pages/people/children/personal-honor/children/focus-other'
//--点赞数--likeCountPh
import likeCountPh from '../pages/people/children/personal-honor/children/like-count'
//--字数--wordCountPh
import wordCountPh from '../pages/people/children/personal-honor/children/word-count'

//写文章
import writeArticle from '../pages/writeArticle/writeArticle'

//设置中心
//父组件
import setting from '../pages/setting/setting'
//子组件
import personalData from '../pages/setting/children/personal-data'
import messagesAndEmails from '../pages/setting/children/messages-and-emails'
import accountAssociated from '../pages/setting/children/account-associated'
import changePassword from '../pages/setting/children/change-password'
import shield from '../pages/setting/children/shield'
import privacy from '../pages/setting/children/privacy'
import hobbiesSetting from '../pages/setting/children/hobbies-setting'



//使用路由控制
Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  // base: __dirname,
  routes: [
    {
      path:'/signup',
      component: loginRegister,
      meta:{
        tagBool:false,
        showHeader:false
      }
    },
    {
      path: '/',
      component: index,
      meta: {
        tagBool:true,
      },
      children: [
        {
          path: '/recommend',
          component: indexRecommend,
          meta: {
            tagBool:true,
          },

        },
        {
          path: '/hot',
          component: indexHot,
          meta: {
            tagBool:true,
          },
        },
        {
          path: '/focus',
          component: indexFocus,
          meta: {
            tagBool:true,
          },
        },
        {
          path: '/star',
          component: indexStar,
          meta: {
            tagBool:true,
          },
        },
        {
          path: '/question',
          component: indexQuestion,
          meta: {
            tagBool:true,
          },
        },
        {
          path: '/topic',
          component: indexTopic,
          meta: {
            tagBool:true,
          },
        },
        {
          path: '',
          redirect: '/recommend'
        }
      ]

    },

    {
      path: '/write',
      component: writeArticle,
      meta:{
        tagBool:false
      }
    },
    {
      path: '/messageCenter',
      component: myalerts,
      children: [
        {
          path: 'comment',
          component: my_comment
        }
        , {
          path: 'like',
          component: my_like
        }
        , {
          path: 'focus',
          component: my_focus,
          children: [
            {
              path: 'all-fo',
              component: allFo
            },
            {
              path: 'collect-fo',
              component: collectFo
            },
            {
              path: 'column-fo',
              component: columnFo
            },
            {
              path: 'me-fo',
              component: meFo
            },
            {
              path: 'question-fo',
              component: questionFo
            },
            {
              path: '',
              redirect: 'all-fo'
            }
          ]
        }
        , {
          path: 'collect',
          component: my_collect,
          children: [
            {
              path: 'all-col',
              component: allCol
            },
            {
              path: 'answer-col',
              component: answerCol
            },
            {
              path: 'article-col',
              component: articleCol
            },
            {
              path: 'favorite-col',
              component: favoriteCol
            },
            {
              path: '',
              redirect: 'all-col'
            }
          ]
        }
        , {
          path: 'share',
          component: my_share,
          children: [
            {
              path: 'all-sh',
              component: allSh
            },
            {
              path: 'star-sh',
              component: starSh
            },
            {
              path: 'question-sh',
              component: questionSh
            },
            {
              path: 'article-sh',
              component: articleSh
            },
            {
              path: '',
              redirect: 'all-sh'
            }
          ]
        }
        , {
          path: 'contribute',
          component: my_contribute,
          children: [
            {
              path: 'all-co',
              component: allCo
            },
            {
              path: '',
              redirect: 'all-co'
            }
          ]
        }
        , {
          path: 'settingMsg',
          component: my_settingMsg
        }
      ]
    }, {
      path: '/people/:id',
      component: personIndex,
      children: [
        //个人中心（动态，关注，收藏，想法，专栏，文章，问题，回答）
        {
          path: 'dynamicStatePe',
          component: dynamicStatePe
        }
        , {
          path: '',
          redirect: 'dynamicStatePe'
        }
        , {
          path: 'focus',
          component: focusPe
        }
        , {
          path: 'startPe',
          component: startPe
        }
        , {
          path: 'collect',
          component: collectPe
        }
        , {
          path: 'ideaPe',
          component: ideaPe
        }
        , {
          path: 'columnPe',
          component: columnPe,
        }
        , {
          path: 'articlePe',
          component: articlePe
        }
        , {
          path: 'questionPe',
          component: questionPe
        }
        , {
          path: 'answerPe',
          component: answerPe
        },
        //-----------------
        //个人荣誉
        {
          path: 'article-ph',
          component: articleCountPh
        }
        , {
          path: 'focus-me-ph',
          component: focusMeCountPh
        }
        , {
          path: 'focus-other-ph',
          component: focusOtherCountPh
        }
        , {
          path: 'like-ph',
          component: likeCountPh
        }
      ]
    }, {
      path:'/setting',
      component:setting,
      children:[
        {
          path:'account',
          component:personalData,
          meta:{
            keepAlive:false
          }
        },{
          path:'notification',
          component:messagesAndEmails
        },{
          path:'association',
          component:accountAssociated
        },{
          path:'password',
          component:changePassword
        },{
          path:'shield',
          component:shield
        },{
          path:'privacy',
          component:privacy
        },{
          path:'hobby',
          component:hobbiesSetting
        }
      ]
    }

  ]
})
