<template>
    <div class="my-alert">
      <div class="guide-box-left">
        <ul class="guide-box-ul">
          <router-link tag="li" to="./comment" class="guide-box-ul-li">
            <router-link to="./comment" class="guide-svg"><svg-icon iconClass="icon-pinglun10"></svg-icon></router-link>
            <span>评论</span>
            <span class="no-read-count">126</span>
          </router-link>
          <router-link tag="li" to="./like" class="guide-box-ul-li">
            <span class="guide-svg"><svg-icon iconClass="icon-dianzan7"></svg-icon></span>
            <span>点赞</span>
            <!--<div class="no-read">-->
            <span class="no-read-count">85</span>
            <!--</div>-->
          </router-link>
          <router-link tag="li" to="./focus" class="guide-box-ul-li">
            <span class="guide-svg"><svg-icon iconClass="icon-guanzhu"></svg-icon></span>
            <span>关注</span>
            <span class="no-read-count">89</span>
          </router-link>
          <router-link tag="li" to="./collect" class="guide-box-ul-li">
            <span class="guide-svg"><svg-icon iconClass="icon-shoucang10"></svg-icon></span>
            <span>收藏</span>
            <span class="no-read-count">28</span>
          </router-link>
          <router-link tag="li" to="./share" class="guide-box-ul-li">
            <span class="guide-svg"><svg-icon iconClass="icon-fenxiangzhuanfafasongzhijiantouyuanxingshar"></svg-icon></span>
            <span>分享</span>
            <span class="no-read-count">4</span>
          </router-link>
          <router-link tag="li" to="./contribute" class="guide-box-ul-li">
            <span class="guide-svg"><svg-icon iconClass="icon-tougao1"></svg-icon></span>
            <span>投稿</span>
            <span class="no-read-count">2</span>
          </router-link>
          <router-link tag="li" to="./settingMsg" class="guide-box-ul-li">
            <span class="guide-svg"><svg-icon iconClass="icon-IOT_tongzhishezhi"></svg-icon></span>
            <span>信息设置</span>
          </router-link>
        </ul>
      </div>
      <div class="change-box">
        <router-view></router-view>
      </div>

    </div>
</template>

<script>

    export default {
        name: "index",
        data() {
            return {}
        }
    }
</script>

<style lang="stylus" scoped>
  @import "~@/common/stylus/mixins.styl"
  *
    margin:0
    padding:0
    border none
  .my-alert
    position: relative
    width:60rem
    /*height: 25rem*/
    /*background: aqua*/
    margin:.9rem auto
    .guide-box-left
      box-shadow 0 0 .6rem #ccc
      clearFix()
      width:14rem
      border-radius .3rem
      overflow: hidden
      /*height: 100%*/
      background #ffffff
      /*padding:.8rem 1rem*/

      .guide-box-ul
        clearFix()
        .guide-box-ul-li
          /*width:15rem*/
          position: relative
          /*height:2rem*/
          /*background: tomato*/
          padding .5rem 1.8rem
          -webkit-transition: .2s
          -moz-transition: .2s
          -ms-transition: .2s
          -o-transition: .2s
          transition: .2s
          line-height 1.6rem
          &:not(:last-child)
            border-bottom 1px solid #f5f5f5
          .svg-icon
            fill #4c65fb
            padding-right 1rem
          /*.no-read*/


          .no-read-count
            background: #ff4848
            font-size .6rem
            color: #ffff
            padding:.16rem .4rem
            border-radius .5rem
            margin:0 0 1rem 4rem
            line-height 1.6rem
          &:hover
            background: #bdf9f7
            cursor pointer
    .change-box
      border-radius .3rem
      overflow: hidden
      position: absolute;
      top: 0
      right: 0
      float right
      width: 75%
      height:30rem
      background: #ffffff

</style>
