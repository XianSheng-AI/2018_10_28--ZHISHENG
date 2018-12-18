<template>
    <div class="container main-container">
        <div class="look-wrapper">
            <div class="look-nav">
                <ul class="look-nav-ul">
                    <li class="look-nav-ul-li"
                        v-for="(item,index) in look_nav"
                        :key="index"
                        @click="computed_default_active_index(index)"
                    >
                        <router-link :to="item.href" tag="span"
                                     :class="{'active':default_active_index===index}"

                        >{{item.name}}</router-link>
                    </li>
                </ul>
            </div>
            <div class="look-container">
                <!-- 最新 组件-->

                <keep-alive>
                  <router-view></router-view>
                </keep-alive>

            </div>
        </div>
    </div>
</template>

<script>
    // import indexNewest from './children/newest'
    export default {
        name:'home-main',
        data(){
          return {
            default_active_index:0,
            look_nav:[
              {
                name:'推荐',
                href:'/recommend'
              },
              {
                name:'热门',
                href:'/hot'
              },
              {
                name:'关注',
                href:'/focus'
              },
              {
                name:'星点',
                href:'/star'
              },
              {
                name:'提问',
                href:'/question'
              },
              {
                name:'话题',
                href:'/toppic'
              }
            ]
          }
        },
      computed :{
      },
      methods :{
        computed_default_active_index(index){
          this.default_active_index=index;
        }
      }

    }
</script>

<style lang="stylus" scoped>
@import "~@/common/stylus/mixins.styl"
    .main-container
        float left
        clear both
        width 726px
        /*height 40rem*/
        background #FFFFFF
        border-radius 0.4rem
        /*box-shadow: 0 0 0.2rem #ccc;*/
        //clearFix()
        /*overflow hidden*/
        .look-wrapper

            width 100%
            /*height 30rem*/
            // background #888

            .look-nav
                clearFix()
                border-bottom 1px solid #f0f2f7

                .look-nav-ul

                    .look-nav-ul-li
                        float left

                        position: relative
                        padding:0 20px
                        span
                            cursor pointer
                            display inline-block
                            padding:18px 0
                            text-align center
                            /*line-height 2.8rem*/
                            position relative
                            /*background: #ccc*/
                            &.active
                                color $mainColor
                        /*&:not(:last-child):after*/
                            /*content ''*/
                            /*height 10px*/
                            /*width 1.2px*/
                            /*background #cccccc*/
                            /*position absolute*/
                            /*top 1.1em*/
                            /*right 0*/
            .look-container
                width 100%
                border-bottom 1px solid #f0f2f7



                                                






















</style>























