<template>
    <div class="recommend">
        <span class="recommend-p">推荐</span>
        <ul class="recommend-ul">
            <li>
                <router-link tag="span" to="#">前端</router-link>
            </li>
            <li>
                <router-link tag="span" to="#">Android</router-link>
            </li>
            <li>
                <router-link tag="span" to="#">后端</router-link>
            </li>
            <li>
                <router-link tag="span" to="#">人工智能</router-link>
            </li>
            <li>
                <router-link tag="span" to="#">iOS</router-link>
            </li>
            <li>
                <router-link tag="span" to="#">工具资源</router-link>
            </li>
            <li>
                <router-link tag="span" to="#">阅读</router-link>
            </li>
            <li>
                <router-link tag="span" to="#">运维</router-link>
            </li>
        </ul>
        <!--<div class="tag-more">-->
            <!--<span>更多</span>-->
        <!--</div>-->
    </div>
</template>

<script>
    export default {
        name:'home-recommend',
  
    }
</script>

<style lang="stylus" scoped>
    .recommend
        float left
        width 44rem
        height 2.8rem
        margin 0 0.6rem 0.6rem 0  
        background #ffffff
        border-radius .4rem
        position relative
        .recommend-p
            line-height 2.8rem
            padding 0.8rem
            color #f71f03
        .recommend-ul
            float right 
            li
                line-height 2.8rem
                text-align center
                float right 
                height 2.8rem
                span
                    display inline-block
                    padding 0 0.8rem
                    cursor pointer
        .tag-more
            border-radius .4rem
            width 2.8rem
            height 2.8rem
            background #ffffff
            position absolute
            top 0
            right -3.6rem
            span   
                display inline-block 
                width 100%
                height 100%
                line-height 2.8rem
                text-align center
                cursor pointer
                
</style>
