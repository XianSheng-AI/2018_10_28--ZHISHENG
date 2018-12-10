<template>
  <div class="header" :class="{'header-move':moveBool}">
    <div class="header-wrapper">
      <div class="logo">
        <a class="logo-go" href="#">
          <img class="LOGO" src="static/images/logo/logo-1.png" alt="">
        </a>
      </div>
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
        <div class="search-empty">
          <input class="sea-inp" type="text" placeholder="安以轩亲答不拍戏做啥">
          <div class="search-svg-empty">
            <span class="search-svg">
              <svg-icon iconClass="icon-sousuo1"></svg-icon>
            </span>
          </div>
        </div>
      </div>
      <!-- 写文章/登陆/注册 -->

      <div class="log-reg">
        <svg-icon class="svg-icon" iconClass="icon-wenzhangliebiaoxiangqing"></svg-icon>
        <span class="go write-article">写文章</span>
        <span class="go login"
              @click="ToGo(true)"
        >登陆</span>
        <span class="go register"
              @click="ToGo(false)"
        >注册</span>
      </div>
    </div>

    <!--顶部首页标签栏-->
    <tag-list v-if="$route.tagBool"></tag-list>
    <!--<div class="programming">-->

    <!--</div>-->
    <!--登录注册框-->
    <transition name="fade" >
      <!--遮罩-->
      <div class="mask"
           v-if="toGoData.showFlag"
           @click="toGoMethod()"
      ></div>
    </transition>
      <!--登陆注册-->
    <transition name="move" >
      <login-register
        v-if="toGoData.showFlag"
        :toGo="toGoData.way"
        @toGoMe="toGoMethod"
      >
      </login-register>
    </transition>
  </div>
</template>

<script>
  import Search from './children/Search'
  import loginRegister from './children/login-register'
  import TagList from './children/programming-tag'

  export default {
    name: 'home-header',
    data() {
      return {
        moveBool:false,
        toGoData:{
          showFlag:false,
          way:''
        }
      }
    },
    components: {
      Search,
      loginRegister,
      TagList
    },
    mounted(){
      //给window添加一个滚动滚动监听事件
      window.addEventListener('scroll', this.handleScroll)
    },
    methods:{
      //没有写函数节流(后面补)
      handleScroll () {
        let scrollTop;

             scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
          if (scrollTop >= 400) {
            //Number(scrollTop)
            if(this.moveBool){
              return;
            }
            this.moveBool=true;
          } else {
            if(!this.moveBool){
              return;
            }
            this.moveBool=false;
          }


      },
      toGoMethod(){
        this.$set(this.toGoData,'showFlag',false);
      },
      //注册登录 bool==true登录则反
      ToGo(bool){
        this.$set(this.toGoData,'showFlag',true);
        if(bool){
        //  登录
          this.$set(this.toGoData,'way','lg');
          return;
        }
        this.$set(this.toGoData,'way','rj');
      //  注册
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~@/common/stylus/mixins.styl"
  .header
    transition .3s
    position: fixed
    top: 0
    left: 0
    width 100%
    /*height 3rem*/
    background #ffffff
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    z-index 10
    .header-wrapper
      clearFix()
      width 60rem
      height 100%
      margin 0 auto

      .logo
        float left
        height 100%
        text-align center
        line-height 3rem
        font-size 1.6rem
        font-weight bolder
        color $mainColor
        margin-right 2rem
        margin-top .9rem
        .logo-go
          display: block
          /*background: #000*/
          .LOGO
            display: block
            width 4rem
      .header-left
        float left
        /*width 50%*/
        height 100%
        // background #999
        .header-left-ul
          height 100%
          .header-left-ul-li
            float left
            a
              padding 0 1rem
              display block
              float left
              text-align center
              color: #8590a6
              font-size .9375rem
              line-height 3.6rem
              &:hover
                transition .2s
                color $mainColor
      // 搜索框
      .search
        float left
        position relative
        margin-left: 1rem
        margin-top .3rem
        .search-empty
          width: 16rem
          padding .3rem .8rem
          margin 0.4rem auto
          background: #f6f6f6
          border-radius .3rem
          border: 1px solid #ebebeb;
          clearFix()
          .sea-inp
            float: left
            width 88%
            color: #1a1a1a;
            display block
            margin: 0
            font-size .875rem
          .search-svg-empty
            .search-svg
              float: right
              line-height 1.3rem
              .svg-icon
                font-size 1rem
      .log-reg
        line-height 3rem
        float right
        height 3rem
        font-size 0
        .login
          &:after
            content: "\B7";
            margin: 0 0.2rem;
        .go
          margin 0
          padding 0
          color $mainColor
          cursor pointer
          font-size 1rem
          position relative
          &.write-article
            padding-right 2rem
            &:after
              content "|"
              position absolute
              top -1rem
              left 3.9rem
              color #ccc
        .svg-icon
          fill $mainColor
          font-size 1rem
      /*登录注册遮罩*/
    .mask
      z-index:1
      position: fixed
      top:0
      left 0
      width: 100%
      height: 100%
      background-color: rgba(26,26,26,.65);
    &.header-move
      top -59px
</style>





























































