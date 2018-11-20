<template>
  <div class="tem-like-article">
    <div class="t-like-head">
      <span class="t-action-type">{{Data.d.action_type}}</span>
      <span class="t-action-timer">{{Data.d.action_timer}}</span>
    </div>
    <h2>
      <a class="content-title article-title" href="#">{{Data.d.article_title}}</a>
    </h2>
    <div class="t-like-meta">
        <span class="t-like-img">
          <img :src="Data.d.target_avatar_url" alt="">
          <!--<img src="../../../../../../static/images/5.jpg" alt="">-->
        </span>
      <div class="t-like-info">
        <div class="userName">{{Data.d.userName}}</div>
        <div class="headLike">{{Data.d.headLine}}</div>
      </div>
    </div>
    <span class="follow-to-count">{{Data.d.follow_count_text}}</span>
    <div class="t-like-content">
      <div class="text-part-box">
        <span class="text-part">{{Data.d.article_content}}…
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
      Data:{
        type: Object,
        request:true
      }
    },
    name: "answer",
    data() {
      return {}
    },
    mounted(){
      console.log(this.Data)
    },
    methods :{

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
    .article-title
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
