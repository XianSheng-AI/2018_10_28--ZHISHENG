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
                    <!--<li class="look-nav-ul-li">-->
                        <!--<router-link to="/hot" tag="span">热门</router-link>-->
                    <!--</li>-->
                    <!--<li class="look-nav-ul-li">-->
                        <!--<router-link to="/focus" tag="span">关注</router-link>-->
                    <!--</li>-->
                    <!--<li class="look-nav-ul-li">-->
                        <!--<router-link to="star" tag="span">星点</router-link>-->
                    <!--</li>-->
                    <!--<li class="look-nav-ul-li">-->
                        <!--<router-link to="/question" tag="span">提问</router-link>-->
                    <!--</li>-->
                    <!--<li class="look-nav-ul-li">-->
                        <!--<router-link to="/topic" tag="span">话题</router-link>-->
                    <!--</li>-->
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
                name:'最新',
                href:'/newest'
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
        width 44rem
        /*height 40rem*/
        background #ffffff
        border-radius 0.4rem
        //clearFix()
        /*overflow hidden*/
        .look-wrapper

            width 100%
            /*height 30rem*/
            // background #888

            .look-nav
                border-bottom 1.2px solid #f4f5f4
                width 100%
                height 2.8rem
                .look-nav-ul

                    .look-nav-ul-li
                        width 3.8rem
                        height 2.8rem
                        float left
                        cursor pointer
                        position: relative
                        span
                            display inline-block
                            width 100%
                            height 2.8rem
                            text-align center
                            line-height 2.8rem
                            position relative
                            &.active
                                color $mainColor
                        &:not(:last-child):after
                            content ''
                            height 10px
                            width 1.2px
                            background #cccccc
                            position absolute
                            top 1.1em
                            right 0
            .look-container
                width 100%
                border-bottom 1px solid #f0f2f7



                                                






















</style>























