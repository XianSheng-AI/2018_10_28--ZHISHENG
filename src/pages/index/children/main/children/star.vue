<template>
  <div class="star-wapper">
    <ul class="star-ul">
      <li class="star-ul-li">
        <div class="star-user-info">
          <div class="star-user-img">
            <svg-icon iconClass="icon-gugediqiu1"></svg-icon>
          </div>
          <div class="star-user-content">
            <h5 class="star-name">开心就好</h5>
            <div class="star-meta">
              <span class="sta star-desc">前端</span>
              <span class="sta star-time">12月18日&nbsp;19:58</span>
            </div>
          </div>
        </div>
        <div class="star-content">
          <span class="content">👉👉👉企鹅云羊毛继续开车啦：最低至6元每月，最多8元撸41个月，美滋滋。
            1.想直接买的人，上车地址https://0x7.me/d6Ha网页链接，点击参团购买，选择买3个月送1个月，24元买了4个月 ，平均6元每月，最多可买一年。<br/>
2.有能力自己开车的，开车地址https://0x7.me/9cne网页链接，选择购买一个月，然后开团，在微信群和朋友圈分享地址，最多可最多8元撸41个月。</span>
        </div>
        <div class="star-action">
          <ul class="star-action-ul">
            <li class="star-action-ul-li">
              <div class="lik star-like-box">
                <svg-icon iconClass="icon-dianzan2"></svg-icon>
                <span class="star-cou star-like">87</span>
              </div>
            </li>
            <li class="star-action-ul-li">
              <div class="lik star-comment-box">
                <svg-icon iconClass="icon-pinglun1"></svg-icon>
                <span class="star-cou star-like">66</span>
              </div>
            </li>
            <li class="star-action-ul-li">
              <div class="lik star-transmit-box">
                <svg-icon iconClass="icon-icon_zhuanfa"></svg-icon>
                <span class="star-cou star- transmit">28</span>
              </div>
            </li>
          </ul>
        </div>
        <!--评论-->
        <div class="comment">
          <div class="comment-empty">
            <div class="comment-form">
              <div class="comment-form-box">
                <span class="comment-head-img">
                  <svg-icon iconClass="icon-gugediqiu1"></svg-icon>
                </span>
                <input placeholder="输入评论..." class="comment-inp" type="text">
              </div>
              <div class="comment-option">
                <div class="comment-option-left">
                  <span class="comment-same comment-face">
                    <div class="comment-face-svg">
                      <svg-icon iconClass="icon-biaoqing"></svg-icon>
                    </div>
                    <span class="comment-s">表情</span>
                  </span>
                  <span class="comment-same comment-img">
                    <div class="comment-face-svg">
                      <svg-icon iconClass="icon-tupian7"></svg-icon>
                    </div>
                    <span class="comment-s">图片</span>
                  </span>
                </div>
                <div class="comment-option-right">
                  <div></div>
                  <span class="comment-option-right-btn">评论</span>
                </div>
              </div>
            </div>
            <div class="comment-list"></div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "star",
    data() {
      return {
        data:null
      }
    }
  }
</script>

<style lang="stylus" scoped>
.star-wapper
  width 100%
  /*height:20rem*/
  /*background: #555*/
  .star-ul
    width:100%

    .star-ul-li
      width:100%
      display flex
      flex-direction column
      align-items  center
      justify-content:center
      .star-user-info
        width: 41.6rem
        height: 2.82rem
        /*background: aqua*/
        padding:.8rem 0 0 0
        .star-user-img
          width:2.82rem
          height:2.82rem
          /*background: aquamarine*/
          padding-right .6rem
          float left
        .icon-gugediqiu1
          font-size 2.8rem
        .star-user-content
         float: left
         width:14rem
         height: 2.5rem
         padding .2rem 0 0 0
         /*background: burlywood*/
         .star-name
           width:100%

         .star-meta
           width:100%
           .sta
             font-size .8rem
      .star-content
        /*background: violet*/
        width:79.8%

        /*height:12rem*/
        .content
          display: block
          padding:.1rem 0 1rem 0
      .star-action
        height:2.6rem
        width:100%
        /*background: burlywood*/
        .star-action-ul

          .star-action-ul-li
            float: left
            width: 33.333333333333333%
            height: 100%
            border-bottom 2px #F4F5F5 solid
            .lik
              text-align center
              width:100%
              /*background aqua*/
              margin 0 auto
              line-height 2.6rem
              .icon-dianzan2
                fill: #cdcdcd
              .star-cou
                color #cdcdcd
              .icon-pinglun1
                fill: #cdcdcd
              .icon-icon_zhuanfa
                fill: #cdcdcd
      .comment
        width:100%
        height:10rem
        /*background: burlywood*/
        .comment-empty
          width: 95%
          height: 100%
          /*background: blue*/
          margin:0 auto
          overflow: hidden
          .comment-form
            width:35rem
            /*width:35.5rem*/
            height:6rem
            background: #f4f5f5
            margin:1rem auto
            padding: .8rem .8rem
            .comment-form-box
              width:100%
              height:2rem
              /*background: burlywood*/
              .comment-head-img
                display: inline-block
                padding:0 .4rem 0 0
                /*background: violet*/
                .icon-gugediqiu1
                  font-size 2rem
              .comment-inp
                float: right
                width:89%
                height: 100%
                padding 0 0 .2rem .8rem
                /*background: aquamarine*/
                border-bottom 1px solid gray
            .comment-option
              clear both
              float: right
              width:91.2%
              height:2.9rem
              /*background: cadetblue*/
              .comment-option-left
                /*width:8rem*/
                ///*height: 44%*/
                /*background: thistle*/
                margin:.4rem 0
                padding:.4rem
                float left
                /*cursor: pointer;*/

                .comment-same
                  cursor: pointer;
                  display: inline-block
                  /*width:rem*/
                  /*height:2rem*/
                  /*background: goldenrod*/
                  padding:.4rem
                  .comment-face-svg
                    float: left;
                  .icon-biaoqing
                    fill #4c65fb
                    font-size 1.2rem
                  .comment-s
                    color: #4c65fb
                    display: inline-block
                    font-size .8rem
                    /*background: fuchsia*/
                  .icon-tupian7
                    fill #4c65fb
                    font-size 1.2rem
              .comment-option-right
                float: right;
                width:10rem
                height:2.2rem
                padding 0.8rem 0 0 0
                /*background: greenyellow*/
                .comment-option-right-btn
                  float: right
                  display: inline-block
                  padding:.4rem 1rem
                  border-radius .4rem
                  background: #4c65fb
                  color: #f4f5f5


          .comment-list
            width: 100%

</style>
