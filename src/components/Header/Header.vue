<template>
    <div class="header">
        <div class="header-wrapper">
            <div class="logo">HT8</div>
            <div class="header-left">
                <ul class="header-left-ul">
                    <li class="header-left-ul-li">
                        <a href="javascript:;" class="active">首页</a>
                    </li>
                    <li class="header-left-ul-li">
                        <a href="javascript:;">星点</a>
                    </li>
                    <li class="header-left-ul-li">
                        <a href="javascript:;">CDN服务</a>
                    </li>
                    <li class="header-left-ul-li">
                        <a href="javascript:;">活动</a>
                    </li>
                    <li class="header-left-ul-li">
                        <a href="javascript:;">编程大赛</a>
                    </li>
                </ul>
            </div>
            <!-- 搜索框 -->
            <div class="search">
                <input class="sea-inp" type="text" placeholder="搜索" >
            </div>
            <!-- 写文章/登陆/注册 -->
            <div class="log-reg">
                <!-- <svg class="icon icon-wenzhangliebiaoxiangqing" aria-hidden="true">  
                    <use xlink:href="#icon-wenzhangliebiaoxiangqing"></use>
                </svg> -->
                <svg class="icon icon-wenzhangliebiaoxiangqing" aria-hidden="true">　　
                            <use xlink:href="#icon-wenzhangliebiaoxiangqing"></use>
                </svg>
                <!-- <span class="iconfont icon-wenzhangliebiaoxiangqing"></span> -->
                <span class="go write-article">写文章</span>
                <span class="go login">登陆</span>
                <span class="go register">注册</span>
            </div>
        </div>
    </div>
</template>

<script>
import Search from './children/Search'
// import '../../../static/iconfont/iconfont.js'
    export default {
        name:'index',
        data(){
            return {

            }
        },
        components:{
            Search
        }
    }
</script>

<style lang="stylus" scoped>
@import "~@/common/stylus/mixins.styl"
    .header
        width 100%
        height 3rem
        background #ffffff
        box-shadow 0 0 0.2rem #cccccc
        .header-wrapper
            width 64%
            height 100%
            // background #784
            margin 0 auto
            .logo
                float left
                height 100%
                width 6%
                // background #cccccc
                text-align center
                line-height 3rem
                font-size 1.6rem
                font-weight bolder
                color $mainColor
                margin-right 2rem
            .header-left
                float left
                width 50%
                height 100%
                // background #999
                .header-left-ul
                    height 100%
                    .header-left-ul-li
                        // height 100%
                        // width 16%
                        float left

                        a
                            // width 100%
                            // height 100%
                            padding 0 1.3rem
                            display block
                            float left
                            text-align center
                            line-height 3rem
                            &:hover
                                transition .2s
                                color $mainColor
                            &.active
                                color $mainColor
            // 搜索框
            .search
                float left
                width 14rem
                height 3rem
                // background  #222222
                .sea-inp
                    width 80%
                    background #eeeeee
                    display block
                    height 2rem
                    border-radius 1rem
                    margin 0.5rem auto
                    text-align center
            .log-reg
                line-height 3rem
                float right 
                width 11rem
                height 3rem
                // background #888888
                font-size 0
                .login
                    &:after
                        content: "\B7";
                        margin: 0 0.2rem;
                .go
                    // float right 
                    margin 0
                    padding 0
                    color $mainColor
                    cursor pointer
                    font-size 1rem
                    &.write-article
                        padding-right 1rem
                .icon
                    // color $mainColor
                    color #000
                    font-size 1rem
                    
                    
                    


</style>
