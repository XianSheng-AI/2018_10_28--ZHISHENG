<template>
    <div>
        <div class="posi">
            <!--<Home-Recommend></Home-Recommend>-->
            <home-main></home-main>
            <Home-Aside></Home-Aside>
        </div>
      <div class="aaaa" @click="login">
        <input type="text" v-model="token" value="446464">
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
    this.$error('出错了！');
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
              console.log(res)
              this.$store.commit(LOGIN, this.token)
            }).catch(err=>{
              console.log('123')
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

        width 60rem
        margin 7.6rem auto
        background: #ccc
        position: relative
        /*margin 0.6rem 0 0 19rem*/
    .aaaa
      position: relative;
      width:200px
      height:200px
      background: darkmagenta
      input
        position: absolute
        display: block
        width:100px
        height:30px
        background: violet

</style>

