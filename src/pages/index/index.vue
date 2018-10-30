<template>
    <div>
        <Home-Header></Home-Header>
        <div class="posi">
            <Home-Recommend></Home-Recommend>
            <home-main></home-main>
            <Home-Register></Home-Register>
        </div>
    </div>
</template>

<script>
import HomeHeader from '@/components/Header/Header'
import HomeRecommend from './children/recommend'
import HomeMain from './children/main/main'
import HomeRegister from './children/register'

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
            HomeRegister
        }
    }
</script>

<style lang="stylus" scoped>
    .posi
        // height 20rem
        width 64%
        margin 0.6rem auto 
        // background red
</style>

