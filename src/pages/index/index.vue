<template>
    <div>
        <div class="posi">
            <!--<Home-Recommend></Home-Recommend>-->
            <home-main></home-main>
            <Home-Aside></Home-Aside>
        </div>
    </div>
</template>

<script>
// import HomeHeader from '@/components/Header/Header'
import HomeMain from './children/main/main'
import HomeAside from './children/aside/aside'
import {apiAddress} from "../../request/api";
import {LOGIN} from "../../store/mutation_type";

export default {
        name:'index',
        data(){
            return {
                token:''
            }
        },
        components:{
            HomeMain,
            HomeAside,
        },
      created(){
        this.onload()

      },
  mounted(){
    console.log(this.$route);
  },
      methods:{
        onload(){
          // this.$error('出错了！');
        //  调用接口
        //   apiAddress().then(res=>{
        //     console.log('888888')
        //     console.log(res)
        //   //  获取数据成功后的其他操作
        //   }).catch(err=>{
        //     console.log(err)
        //   })
        },
        login(){
          //我的仓库token测试 5c5f630f42e973361be7273be97970cdd9db2d66
          // alert(55) https://api.github.com/user/repos

          if(this.token){
            this.$store.commit(LOGIN, this.token)
            apiAddress().then(res=>{
              this.$store.commit(LOGIN, this.token)
            }).catch(err=>{
              this.$error('出错了！请稍后再试');
            })

            let redirect = decodeURIComponent(this.$route.query.redirect || '/');
            // let redirect = decodeURIComponent(this.$route.query.redirect || '/');
             console.log(redirect)
            // this.$router.push({
            //   path: redirect
            // })
          }
        }
      }
    }
</script>

<style lang="stylus" scoped>
  @import "~@/common/stylus/mixins.styl"
    .posi
        /*overflow: hidden*/

        width 1034px
        margin 4rem auto
        background: #ccc
        position: relative

</style>

