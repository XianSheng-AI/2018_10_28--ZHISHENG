<template>
  <div class="action-row">
    <ul class="action-row-ul">
      <li class="action-row-ul-li">
        <div class="action-like">
          <span class="like-btn">赞同 552</span>
        </div>
      </li>
      <li class="action-row-ul-li com-m">
        <div class="same action-answer">
          <svg-icon class="act" iconClass="icon-xieyoujian1"></svg-icon>
          <span  class="same-count answer-count">486回答</span>
        </div>
      </li>
      <li class="action-row-ul-li com-m">
        <div class="same action-comment">
          <svg-icon class="act" iconClass="icon-wodepinglun"></svg-icon>
          <span class="same-count comment-count">1088评论</span>
        </div>
      </li>
      <li class="action-row-ul-li com-m">
        <div class="same action-collect">
          <svg-icon class="act" iconClass="icon-emizhifeiji1"></svg-icon>
          <span class="same-count collect-count">分享</span>
        </div>
      </li>
      <li class="action-row-ul-li com-m">
        <div class="same action-collect">
          <svg-icon class="act" iconClass="icon-shoucang0"></svg-icon>
          <span class="same-count collect-count">收藏</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "action",
    data() {
      return {}
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~@/common/stylus/mixins.styl'
  .action-row

    width 100%
    /*height 1.4rem*/
    clearFix()
    .action-row-ul-li
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

  .info-img-box
    height:100%
    .info-img
      height:5rem
</style>
