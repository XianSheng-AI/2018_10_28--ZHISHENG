<template>
  <div class="action-row">
    <ul class="action-row-ul">
      <li class="action-row-ul-li">
        <div class="action-like">
          <span class="like-btn" @click="handleClick('zt')">赞同 552</span>
        </div>
      </li>
      <li class="action-row-ul-li com-m">
        <div class="same action-answer">
          <svg-icon class="act" iconClass="icon-xieyoujian1"></svg-icon>
          <span  class="same-count answer-count" @click="handleClick('hd')">486回答</span>
        </div>
      </li>
      <li class="action-row-ul-li com-m">
        <div class="same action-comment">
          <svg-icon class="act" iconClass="icon-wodepinglun"></svg-icon>
          <span class="same-count comment-count" @click="handleClick('pl')">1088评论</span>
        </div>
      </li>
      <li class="action-row-ul-li com-m">
        <div class="same action-collect">
          <svg-icon class="act" iconClass="icon-emizhifeiji1"></svg-icon>
          <span class="same-count collect-count" @click="handleClick('fx')">分享</span>
        </div>
        <!--分享展开(复制链接/新浪微博/微信扫一扫)-->
        <div class="show-wrapper" v-if="showShare">
          <div class="show-empty">

            <div class="show-item">
              <div class="item-img">
                <img class="" src="../../../static/images/saoyisao.png" alt="">
              </div>
              <span class="item-svg">
                <svg-icon iconClass="icon-weixin-copy"></svg-icon>
              </span>
              <span class="item-type">微信扫一扫</span>
            </div>
            <div class="show-item">
              <span class="item-svg">
                <svg-icon iconClass="icon-weibo2"></svg-icon>
              </span>
              <span class="item-type">新浪微博</span>
            </div>
            <div class="show-item">
              <span class="item-svg">
                <svg-icon iconClass="icon-guanlian6"></svg-icon>
              </span>
              <span class="item-type">复制链接</span>
            </div>

          </div>
          <!--三角-->
          <span class="small-triangle small-triangle--bottom" style="left: 75px; top:3px"></span>
        </div>
      </li>
      <li class="action-row-ul-li com-m">
        <div class="same action-collect">
          <svg-icon class="act" iconClass="icon-shoucang0"></svg-icon>
          <span class="same-count collect-count" @click="handleClick('sc')">收藏</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "action",
    data() {
      return {
        showShare:false
      }
    },
    methods:{
      //赞同zt  回答hd 评论pl 分享fx 收藏sc
      handleClick(val){
        let _this=this;
        if(val==="pl"){
          _this.$emit("showComments",val);
        }else if(val==='fx'){
          this.showShare=!this.showShare;
        }

      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~@/common/stylus/mixins.styl'
  .small-triangle
    z-index 1000000000
    position: absolute;
    overflow: hidden;
    pointer-events: none;
    &:after
      content: "";
      position: absolute;
      box-sizing: border-box;
      width: 24px;
      height: 24px;
      margin: 10px 0 0 0;
      border: 1px solid #ebebeb;
      background: #ffffff;
      transform: rotate(45deg);
      pointer-events: auto;
    &.small-triangle--bottom
      width: 32px;
      height: 16px;
      margin-top: -2px;
      transform: translate(-50%,-100%);
  .action-row

    width 100%
    /*height 1.4rem*/
    clearFix()
    .action-row-ul-li
      position: relative
      margin-right 1.8rem
      float left
      line-height 1.4rem
      cursor pointer
      /*background red*/
      &.com-m
        /*background: #000*/
        margin-top:.3rem

      .like-btn
        font-size .9rem
        display: inline-block
        padding: .3rem 1rem
        border-radius .3rem
        color: #0084ff;
        background: rgba(0,132,255,.1);
        &:hover
          background-color: rgba(0,132,255,.15);
      .same
        /*margin-top:.3rem*/
        .svg-icon
          fill #ccc
          font-size 1rem
        .same-count
          font-size .9rem
          /*font-weight 600*/
          color #8590a6

        .act
          fill #8590a6
        &:hover .same-count
          color: #717c94;
        &:hover .act
          fill #717c94
      .show-wrapper
        z-index 324
        position: absolute
        top 35px
        left -45px
        background: #ffffff
        border: 1px solid #ebebeb;
        border-radius: 4px;
        box-shadow: 0 5px 20px rgba(26,26,26,.1);
        .show-empty
          width 136px
          /*height: 240px*/
          padding 8px 0
          .show-item
            /*background: aqua*/
            padding: .4rem 1.2rem
            color #8590a6
            .item-img
              margin-bottom 6px
              margin-top 10px
              img
                display: block
                width 94px
                height:94px
            &:hover
              background #f6f6f6
            .item-svg
              .svg-icon
                font-size 1rem
            .item-type
              font-size .875rem
  .info-img-box
    height:100%
    .info-img
      height:5rem
</style>
