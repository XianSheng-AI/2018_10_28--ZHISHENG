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
                <svg-icon iconClass="icon-dianzan_active"></svg-icon>
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
                <svg-icon iconClass="icon-zhuanfa5"></svg-icon>
                <span class="star-cou star- transmit">28</span>
              </div>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "star",
    data() {
      return {}
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
              .star-cou
                color #cdcdcd
              .icon-pinglun1
                fill: #cdcdcd
              .icon-zhuanfa5
                fill: #cdcdcd

</style>
