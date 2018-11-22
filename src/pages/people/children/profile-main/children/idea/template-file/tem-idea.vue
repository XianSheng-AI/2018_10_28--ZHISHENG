<template>
  <div class="my-answer">
    <div class="user-meta">
        <span class="avatar-im">
          <img src="../../../../../../../../static/images/4.jpg" alt="">
        </span>
      <div class="user-meta-info">
        <div class="userName">清风车影</div>
        <div class="headLike">物业管理师</div>
      </div>
    </div>
    <div class="action-content-wrapper">
      <div class="text-part-box">
        <span class="text-part">2017年完成的任务。 一，跑步一千公里。 二，看书22本。 三，看电影32部。 四，泰山旅游。
          <!--<button class="show-all-btn Button" type="button" value="阅读全文">阅读全文<span-->
            <!--style="display: inline-flex; align-items: center;" class="show-all-svg">-->
                      <!--&lt;!&ndash;<svg class="show-svg Zi&#45;&#45;ArrowDown ContentItem-arrowIcon" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M12 13L8.285 9.218a.758.758 0 0 0-1.064 0 .738.738 0 0 0 0 1.052l4.249 4.512a.758.758 0 0 0 1.064 0l4.246-4.512a.738.738 0 0 0 0-1.052.757.757 0 0 0-1.063 0L12.002 13z" fill-rule="evenodd"></path></svg>&ndash;&gt;-->
                    <!--<svg-icon class="act" iconClass="icon-xia"></svg-icon>-->
                  <!--</span>-->
          <!--</button>-->
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
    // props: {
    //   Data: {
    //     type: Object
    //   }
    // },
    name: "my-article",
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
  .my-answer
    font-size .875rem
    width: 100%
    padding .9rem 0
    /*height: 8rem*/
    /*background: yellow*/
    position: relative
    clearFix()
    .question-title
      display: block
      color: #1a1a1a
      font-size 1.1rem
      padding .4rem 0 .5rem 0
    .user-meta
      margin-bottom .3rem
      .avatar-im
        display: inline-block
        border-radius .3rem
        overflow: hidden
        img
          display: block
          width: 40px
      .user-meta-info
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
    .action-content-wrapper
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
