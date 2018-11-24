<template>
  <div class="header">
    <div class="header-wrapper">
      <div class="logo">
        <a class="logo-go" href="#">
          <svg-icon iconClass="icon-logo"></svg-icon>
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
        <span class="go login">登陆</span>
        <span class="go register">注册</span>
      </div>
    </div>
  </div>
</template>

<script>
  import Search from './children/Search'

  export default {
    name: 'home-header',
    data() {
      return {}
    },
    components: {
      Search
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~@/common/stylus/mixins.styl"
  .header
    position: fixed
    top: 0
    left: 0
    width 100%
    /*height 3rem*/
    background #ffffff
    box-shadow 0 0 0.2rem #cccccc
    z-index 10
    .header-wrapper
      clearFix()
      width 60rem
      height 100%
      /*overflow: hidden*/
      // background #784
      margin 0 auto

      .logo
        float left
        height 100%
        width 6%
        /*background #cccccc*/
        text-align center
        line-height 3rem
        font-size 1.6rem
        font-weight bolder
        color $mainColor
        margin-right 2rem
        .logo-go
          display: block
          .svg-icon
            font-size 3.2rem
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
</style>
