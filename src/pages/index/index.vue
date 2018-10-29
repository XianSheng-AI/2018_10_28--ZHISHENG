<template>
    <div>
        <Home-Header></Home-Header>
        <Home-Recommend></Home-Recommend>
        <Home-Register></Home-Register>
    </div>
</template>

<script>
import HomeHeader from '@/components/Header/Header'
import HomeRecommend from './children/recommend'
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
            HomeRegister
        }
    }
</script>

<style lang="stylus" scoped>

</style>

