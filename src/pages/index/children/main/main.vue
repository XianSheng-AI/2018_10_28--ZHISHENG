<template>
    <div class="container main-container">
        <div class="look-wrapper">
            <div class="look-nav">
                <ul class="look-nav-ul">
                    <li class="look-nav-ul-li">
                        <router-link to="/newest" tag="span" class="active">最新</router-link>
                    </li>
                    <li class="look-nav-ul-li">
                        <router-link to="/hot" tag="span">热门</router-link>
                    </li>
                    <li class="look-nav-ul-li">
                        <router-link to="/focus" tag="span">关注</router-link>
                    </li>
                    <li class="look-nav-ul-li">
                        <router-link to="star" tag="span">星点</router-link>
                    </li>
                    <li class="look-nav-ul-li">
                        <router-link to="/question" tag="span">提问</router-link>
                    </li>
                    <li class="look-nav-ul-li">
                        <router-link to="/topic" tag="span">话题</router-link>
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

          }
        }

    }
</script>

<style lang="stylus" scoped>
@import "~@/common/stylus/mixins.styl"
    .main-container
        clear both
        width 43.6rem
        height 40rem
        background #ffffff
        border-radius 0.4rem
        overflow hidden
        .look-wrapper

            width 100%
            height 30rem
            // background #888

            .look-nav
                border-bottom 1.2px solid #f4f5f4
                width 100%
                height 2.8rem
                // background #777
                .look-nav-ul

                    .look-nav-ul-li
                        width 3.8rem
                        height 2.8rem
                        // background red
                        float left
                        span
                            display inline-block
                            // background #777
                            width 100%
                            height 2.8rem
                            text-align center
                            line-height 2.8rem
                            position relative
                            &.active
                                color $mainColor
                            &:after
                                content ''
                                height 10px
                                width 1.2px
                                background #cccccc
                                position absolute
                                top 1.1em
                                right 0
            .look-container
                width 100%
                /*height 30rem*/
                // background #cccccc
                // padding .8rem 0



                                                






















</style>























