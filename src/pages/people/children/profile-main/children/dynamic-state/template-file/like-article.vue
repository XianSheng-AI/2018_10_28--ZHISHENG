<template>
  <div class="tem-like-article">
    <div class="t-like-head">
      <span class="t-action-type">赞了文章</span>
      <span class="t-action-timer">1天前</span>
    </div>
    <h2>
      <a class="content-title article-title" href="#">2017总结</a>
    </h2>
    <div class="t-like-meta">
        <span class="t-like-img">
          <img src="../../../../../../../../static/images/5.jpg" alt="">
        </span>
      <div class="t-like-info">
        <div class="userName">罗宾仙子</div>
        <div class="headLike">唐卡画师</div>
      </div>
    </div>
    <span class="follow-to-count">1人也赞了该文章</span>
    <div class="t-like-content">
      <div class="text-part-box">
        <span class="text-part">2017年完成的任务。 一，跑步一千公里。 二，看书22本。 三，看电影32部。 四，泰山旅游。…
          <button class="show-all-btn Button" type="button" value="阅读全文">阅读全文<span
            style="display: inline-flex; align-items: center;" class="show-all-svg">
                      <!--<svg class="show-svg Zi&#45;&#45;ArrowDown ContentItem-arrowIcon" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M12 13L8.285 9.218a.758.758 0 0 0-1.064 0 .738.738 0 0 0 0 1.052l4.249 4.512a.758.758 0 0 0 1.064 0l4.246-4.512a.738.738 0 0 0 0-1.052.757.757 0 0 0-1.063 0L12.002 13z" fill-rule="evenodd"></path></svg>-->
                    <svg-icon class="act" iconClass="icon-xia"></svg-icon>
                  </span>
          </button>
        </span>
      </div>
      <div class="interaction-box">
        <common-like></common-like>
      </div>
    </div>
  </div>
</template>

<script>
  import commonLike from '@/components/action/com-like'

  export default {
    props: {
      Data: {
        type: Object
      }
    },
    name: "answer",
    data() {
      return {}
    },
    components: {
      commonLike
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~@/common/stylus/mixins.styl"
  .tem-like-article
    font-size .875rem
    width: 100%
    /*height: 8rem*/
    /*background: yellow*/
    position: relative
    clearFix()
    .t-like-head
      width: 100%
      color: #8590a6
      .t-action-type
        font-size .875rem
      .t-action-timer
        float: right
        font-size .875rem
    .content-title
      display: block
      color: #1a1a1a
      font-size 1.1rem
      padding .4rem 0 .5rem 0
    .t-like-meta
      margin-bottom .3rem
      .t-like-img
        display: inline-block
        border-radius .3rem
        overflow: hidden
        img
          display: block
          width: 40px
      .t-like-info
        display: inline-block
        font-size .875rem
        margin: 0 0 0 .8rem
        overflow: hidden
        /*overflow:hident---知识点    */
        .userName
          color: #1a1a1a
          font-weight 600
          .headLine
            color: #8590a6
    .follow-to-count
      color: #8590a6
    .t-like-content
      margin: .3rem 0
      .text-part-box
        margin: .4rem 0
      .text-part
        width: 100%
        color #1a1a1a
        .show-all-btn
          display: inline-block
          padding: 0;
          border: none
          margin-left: 4px;
          /*color: #175199;*/
          background :none
          font-size .9rem
          cursor: pointer;
          &.Button
            display: inline-block
            margin: 0
            padding: none
            color: #175199
          &:hover
            color: #71777c
          //#71777c
          .show-all-svg
            display: inline-block
            line-height 2rem
          .act
            line-height: 2rem
            font-size .7rem
            padding-left .2rem
            fill #175199
          &:hover .act
            fill #71777c
      .interaction-box
        padding 4px 0 10px 0
</style>
