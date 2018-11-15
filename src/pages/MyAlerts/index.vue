<template>
    <div class="my-alert">
      <div class="guide-box-left">
        <ul class="guide-box-ul">
          <router-link tag="li" to="/setting/comment" class="guide-box-ul-li">
            <span  class="guide-svg"><svg-icon iconClass="icon-pinglun10"></svg-icon></span>
            <span class="type-tip">评论</span>
            <span class="no-read-count">126</span>
          </router-link>
          <router-link tag="li" to="/setting/like" class="guide-box-ul-li">
            <span class="guide-svg"><svg-icon iconClass="icon-dianzan7"></svg-icon></span>
            <span class="type-tip">点赞</span>
            <span class="no-read-count">85</span>
          </router-link>
          <router-link tag="li" to="/setting/focus" class="guide-box-ul-li">
            <span class="guide-svg"><svg-icon iconClass="icon-guanzhu"></svg-icon></span>
            <span class="type-tip">关注</span>
            <span class="no-read-count">89</span>
          </router-link>
          <router-link tag="li" to="/setting/collect" class="guide-box-ul-li">
            <span class="guide-svg"><svg-icon iconClass="icon-shoucang10"></svg-icon></span>
            <span class="type-tip">收藏</span>
            <span class="no-read-count">28</span>
          </router-link>
          <router-link tag="li" to="/setting/share" class="guide-box-ul-li">
            <span class="guide-svg"><svg-icon iconClass="icon-fenxiangzhuanfafasongzhijiantouyuanxingshar"></svg-icon></span>
            <span class="type-tip">分享</span>
            <span class="no-read-count">4</span>
          </router-link>
          <router-link tag="li" to="/setting/contribute" class="guide-box-ul-li">
            <span class="guide-svg"><svg-icon iconClass="icon-tougao1"></svg-icon></span>
            <span class="type-tip">投稿</span>
            <span class="no-read-count">2</span>
          </router-link>
          <router-link tag="li" to="/setting/settingMsg" class="guide-box-ul-li">
            <span class="guide-svg"><svg-icon iconClass="icon-IOT_tongzhishezhi"></svg-icon></span>
            <span class="type-tip">信息设置</span>
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
    top 3.1rem
    width:60rem
    /*height: 25rem*/
    /*background: aqua*/
    margin:.9rem auto
    .guide-box-left
      position: fixed;
      top:4rem
      border: 1px solid #ebebeb;
      /*border-radius: 3px;*/
      box-shadow: 0 0 4px rgba(6,10,29,.04);
      /*box-shadow 0 0 .6rem #ccc*/
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
          padding .5rem 2.1rem
          /*-webkit-transition: .2s*/
          /*-moz-transition: .2s*/
          /*-ms-transition: .2s*/
          /*-o-transition: .2s*/
          /*transition: .2s*/
          line-height 1.6rem
          .type-tip
            color #8590a6
          .svg-icon
            fill #8590a6
            margin-right .8rem
          .no-read-count
            background: #ff4848
            font-size .6rem
            color: #ffff
            padding:.16rem .4rem
            border-radius .5rem
            margin:0 0 1rem 3.6rem
            line-height 1.6rem
          /*float: right*/
          &:hover
            background: rgba(133,144,166,.08);
            cursor pointer

    .change-box
      border-radius .3rem
      /*overflow: hidden*/
      /*height: 100%;*/
      position: fixed;
      top: 4rem
      right 17.8rem
      float right
      width: 45rem
      /*height:30rem*/
      background: #ffffff
      /*box-shadow 0 0 .6rem #ccc*/
      border: 1px solid #ebebeb;
      /*border-radius: 3px;*/
      box-shadow: 0 0 4px rgba(6,10,29,.04);

</style>
