<template>
  <div class="header" :class="{'header-move':moveBool}">
    <div class="header-wrapper">
      <div class="logo">
        <a class="logo-go" href="#">
          <img class="LOGO" src="static/images/logo/logo-1.png" alt="">
        </a>
      </div>
      <nav class="nav-wrapper">
        <a class="nav-item" href="javascript:;">首页</a>
        <a class="nav-item" href="javascript:;">星点</a>
        <a class="nav-item" href="javascript:;">CDN服务</a>
        <a class="nav-item" href="javascript:;">活动</a>
      </nav>
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
      <!--提问按钮-->
      <div class="question-btn">
        <span class="action-btn">提问</span>
      </div>
      <!--登录后的头部导航信息-->
      <div class="meta-header">
        <div class="metaInfo mataNotice">
          <span class="btnNotice">
            <svg-icon iconClass="icon-lingsheng6"></svg-icon>
          </span>
        </div>
        
        <div class="metaInfo mataPrivateLetter">
          <span class="btnPrivateLetter">
            <svg-icon iconClass="icon-weixin11"></svg-icon>
          </span>
        </div>
        
        <div class="metaInfo metaUserInfo">
          <img src="../../../static/images/comme.jpg" alt="">
        </div>
      </div>

      <!-- 写文章/登陆/注册 -->
      <!--<div class="log-reg">-->
      <!--<svg-icon class="svg-icon" iconClass="icon-wenzhangliebiaoxiangqing"></svg-icon>-->
      <!--<span class="go write-article">写文章</span>-->
      <!--<span class="go login"-->
      <!--@click="ToGo(true)"-->
      <!--&gt;登陆</span>-->
      <!--<span class="go register"-->
      <!--@click="ToGo(false)"-->
      <!--&gt;注册</span>-->
      <!--</div>-->
    </div>

    <!--顶部首页标签栏-->
    <!--<tag-list v-if="$route.meta.tagBool"></tag-list>-->
    <!--<div class="programming">-->

    <!--</div>-->
    <!--登录注册框-->
    <!--<transition name="fade">-->
      <!--&lt;!&ndash;遮罩&ndash;&gt;-->
      <!--<div class="mask"-->
           <!--v-if="toGoData.showFlag"-->
           <!--@click="toGoMethod()"-->
      <!--&gt;</div>-->
    <!--</transition>-->
    <!--登陆注册-->
    <!--<transition name="move">-->
      <!--<login-register-->
        <!--v-if="toGoData.showFlag"-->
        <!--:toGo="toGoData.way"-->
        <!--@toGoMe="toGoMethod"-->
      <!--&gt;-->
      <!--</login-register>-->
    <!--</transition>-->

  </div>
</template>

<script>
  import Search from './children/Search'
  import loginRegister from '../../pages/login-register/login-register'
  import TagList from './children/programming-tag'

  export default {
    name: 'home-header',
    components: {},
    data() {
      return {
        moveBool: false,
        toGoData: {
          showFlag: false,
          way: ''
        }
      }
    },
    components: {
      Search,
      loginRegister,
      TagList
    },
    mounted() {
      console.log(this.$route)
      //给window添加一个滚动滚动监听事件
      window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
      //没有写函数节流(后面补)
      // handleScroll() {
      //   let scrollTop;
      //
      //   scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      //   if (scrollTop >= 400) {
      //     //Number(scrollTop)
      //     if (this.moveBool) {
      //       return;
      //     }
      //     this.moveBool = true;
      //   } else {
      //     if (!this.moveBool) {
      //       return;
      //     }
      //     this.moveBool = false;
      //   }
      //
      //
      // },
      toGoMethod() {
        this.$set(this.toGoData, 'showFlag', false);
      },
      //注册登录 bool==true登录则反
      ToGo(bool) {
        this.$set(this.toGoData, 'showFlag', true);
        if (bool) {
          //  登录
          this.$set(this.toGoData, 'way', 'lg');
          return;
        }
        this.$set(this.toGoData, 'way', 'rj');
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

    background #ffffff
    box-shadow: 0 1px 3px rgba(26, 26, 26, .1);
    z-index 10


    .header-wrapper
      clearFix()
      height: 54px
      width 1034px
      margin 0 auto
      display: flex
      align-items  center
      .logo
        color $mainColor
        .logo-go
          display: block
          .LOGO
            display: block
            width 4rem

      .nav-wrapper
        display flex
        flex-flow row
        margin 0 14px
        .nav-item
          margin: 0 14px
          display block
          text-align center
          color: #8590a6
          font-size .9375rem
          &:hover
            transition .2s
            color $mainColor
      .question-btn
        .action-btn
          display block
          background: #ccc
          padding:.3rem .8rem
          background-color #0084FF
          color: #FFFFFF
          border-radius .2rem
          cursor: pointer;
          -webkit-transition: .2s
          -moz-transition: .2s
          -ms-transition: .2s
          -o-transition: .2s
          transition: .2s
          &:hover
            background-color #0073e6
      // 搜索框
      .search
        margin-right 14px
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

      .meta-header
        flex: 1;
        justify-content: flex-end;
        display: flex;
        align-items: center;
        /*height: 56px*/
        /*background: #ccc*/
        width: 14rem
        .metaInfo
          /*background: firebrick*/
          margin-left 40px
          cursor: pointer;
          .svg-icon
            fill #8590A6
            font-size 1.4rem
          &:hover .svg-icon
            fill #737b92
          &.mataNotice
            color: #FFFFFF
            span
              display: block
          &.mataPrivateLetter
            color: #FFFFFF
            span
              display: block
          &.metaUserInfo
            color: #FFFFFF

  /*登录注册遮罩*/

    .mask
      z-index: 1
      position: fixed
      top: 0
      left 0
      width: 100%
      height: 100%
      background-color: rgba(26, 26, 26, .65);

    &.header-move
      top -59px
</style>





























































