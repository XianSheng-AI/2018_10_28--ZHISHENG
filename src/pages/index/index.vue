<template>
    <div>
        <Home-Header></Home-Header>
        <div class="posi">
            <Home-Recommend></Home-Recommend>
            <home-main></home-main>
            <Home-Aside></Home-Aside>
        </div>
    </div>
</template>

<script>
import HomeHeader from '@/components/Header/Header'
import HomeRecommend from './children/recommend'
import HomeMain from './children/main/main'
import HomeAside from './children/aside/aside'


    export default {
        name:'index',
        data(){
            return {
                
            }
        },
        components:{
            HomeHeader,
            HomeRecommend,
            HomeMain,
            HomeAside
        }
    }
</script>

<style lang="stylus" scoped>
  @import "~@/common/stylus/mixins.styl"
    .posi
        /*overflow: hidden*/

        width 60rem
        margin 0.6rem auto
        background: #ccc
        position: relative
        /*margin 0.6rem 0 0 19rem*/
</style>

