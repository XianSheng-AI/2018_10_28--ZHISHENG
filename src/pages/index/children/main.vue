<template>
    <div class="container main-container">
        <div class="look-wrapper">
            <div class="look-nav">
                <ul class="look-nav-ul">
                    <li class="look-nav-ul-li">
                        <router-link to="#" tag="span" class="active">最新</router-link>
                    </li>
                    <li class="look-nav-ul-li">
                        <router-link to="#" tag="span">热门</router-link>
                    </li>
                    <li class="look-nav-ul-li">
                        <router-link to="#" tag="span">关注</router-link>
                    </li>
                    <li class="look-nav-ul-li">
                        <router-link to="#" tag="span">星点</router-link>
                    </li>
                    <li class="look-nav-ul-li">
                        <router-link to="#" tag="span">提问</router-link>
                    </li>
                    <li class="look-nav-ul-li">
                        <router-link to="#" tag="span">话题</router-link>
                    </li>
                </ul>
            </div>
            <div class="look-container">
                <!-- 最新 组件-->
                <div class="look-data">
                    <ul class="look-data-ul">
                        <li class="look-data-ul-li">
                            <div class="wapper-box">
                                <div class="info-box">
                                    <div class="info-row meta-row">
                                        <ul class="info-row-ul">
                                            <li class="info-row-ul-li">专栏</li>
                                            <li class="info-row-ul-li">GitHub猫</li>
                                            <li class="info-row-ul-li">2小时前</li>
                                            <li class="info-row-ul-li">React.js/前端</li>
                                        </ul>
                                    </div>
                                    <h3 class="title-row">反倒是个人认识他仍是突然热点话题热度</h3>
                                    <div class="action-row">
                                        <ul class="action-row-ul">
                                            <li class="action-row-ul-li">
                                                <div class="same action-like">
                                                    <svg-icon iconClass="icon-dianzan_active"></svg-icon>
                                                    <span class="same-count like-count">456</span>
                                                </div>
                                            </li>
                                            <li class="action-row-ul-li">
                                                <div class="same action-comment">
                                                    <svg-icon iconClass="icon-zhuanfa5"></svg-icon>
                                                    <span class="same-count comment-count">88</span>
                                                </div>
                                            </li>
                                            <li class="action-row-ul-li">
                                                <div class="same action-collect">
                                                    <svg-icon iconClass="icon-shoucang2"></svg-icon>
                                                    <span class="same-count collect-count">8</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'index',
  
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
                height 30rem
                // background #cccccc
                // padding .8rem 0
                .look-data
                    width 100%
                    height 100%
                    // background red
                    .look-data-ul
                        width 100%
                        .look-data-ul-li
                            width 100%
                            // height 7rem
                            // background #cccccc
                            border-bottom 1.2px solid #f4f5f4
                            // position relative
                            font-size 0.7rem
                            // &:after
                            //     content: "\B7";
                            //     margin: 0 .4em;
                            //     // color: #b2bac2;
                            //     color: #000;
                            //     position absolute
                            //     left 1.5rem
                            //     top 0.1rem

                            .wapper-box
                                display flex
                                align-items: center;
                                width 652px
                                height 80px
                                // padding: 1.5rem 2rem;
                                padding: .6rem .8rem;
                                .info-box 
                                    flex 1 1 auto
                                    justify-content center
                                    flex-direction: column;
                                    width 100%
                                    .info-row
                                        width 100%
                                        height 1rem
                                        // background #888
                                        .info-row-ul
                                            .info-row-ul-li
                                                float left
                                                &:after
                                                    content: "\B7";
                                                    margin: 0 0.4em;
                                                    // color: #b2bac2;
                                                    // background #b2bac2
                                    .title-row
                                        ellipsis()
                                        font-size 1rem
                                        margin .4rem 0 .4rem
                                        color #313437
                                    .action-row
                                        width 100%
                                        height 1.4rem
                                        // background orange
                                        .action-row-ul-li
                                            margin-right 1.8rem
                                            float left
                                            line-height 1.4rem
                                            cursor pointer
                                            .same

                                                .svg-icon
                                                    fill #cdcdcd
                                                .same-count
                                                    font-weight bold
                                                    color #CDCDCD
                                                    // &.action-like
                                                        // background #000
                                                        // .like-count
                                                        // font-weight bold
                                                        //     color #CDCDCD
                                                    // &.action-comment
                                                        // font-weight bold

                                                






















</style>























