<template>
    <div class="questions">
      <ul class="questions-ul">
        <li class="questions-ul-li">
          <div class="item-info">
            <div class="item-info-head">
              <ul class="item-info-head-ul">
                <li class="item-info-head-ul-li">
                  <a href="#" class="ques userName">苏南</a>
                </li>
                <li class="item-info-head-ul-li">
                  <span class="ques">前端</span>
                </li>
                <li class="item-info-head-ul-li">
                  <span class="ques">2018年10月10日</span>
                </li>
                <li class="item-info-head-ul-li">
                  <span class="ques">141关注</span>
                </li>
                <li class="item-info-head-ul-li">
                  <span class="ques">212浏览</span>
                </li>
              </ul>
            </div>
            <div class="item-info-content">
              <h2 class="ques-title">如何同人社团热水和热水管热缩管热热水过热？</h2>
              <div class="answer-box">
                <div class="item-info-content-img">
                  <img src="https://pic2.zhimg.com/50/v2-93cbe44b7bfda7ae2175c3bd45eef285_400x224.jpg" alt="" class="ques-img">
                </div>
                <div class="answer-content">
                  <span>解决方案，支持多地同步直播，支持密码观看、手机白名单、表单收集等多种授权观看方式，支持10万人并发在线观看，可将直播嵌入企业官方网站、微信公众号、小程序、App，支持一键创建企业视频直播门户。</span>
                </div>
                <div class="show-all-btn">
                  <button></button>
                </div>
              </div>
            </div>
            <common-like></common-like>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
  import commonLike from '@/components/action/com-like'
    export default {
      name: "question",
      data(){
        return {

        }
      },
      methods:{

      },
      components:{
        commonLike
      }

    }
</script>

<style lang="stylus" scoped>

  .questions
    /*width: 10rem*/
    /*height: 30rem*/
    /*background: aqua*/
    .questions-ul-li
      /*display flex*/
      margin:.9rem
      /*background: #ccc*/
      .item-info
        width: 100%
        .item-info-head
          /*height:10rem*/
          /*background: darkcyan*/
          .item-info-head-ul
            .item-info-head-ul-li
              float: left
              .ques
                color: #a4a4a4
              &:not(:last-child):after
                content: "\B7";
                margin: 0 0.4rem;
                color: #a4a4a4

      .item-info-content
        clear: both
        /*display: block*/
        width:100%
        /*font-size 0*/
        /*display: flex*/
        /*justify-content left*/

        /*align-items left*/

        padding:0 0 .8rem 0
        .item-info-content-img
          /*display: inline-block*/
          /*width:8rem*/
          height: 100%
          /*background: #ccc*/
          padding:0 1rem 0 0
          float: left;
          .ques-img
            width:11rem
            display: block
            overflow: hidden
            border-radius .4rem
        .ques-title
          /*display: inline-block*/
          padding:.6rem 0 .6rem 0
          font-size 1.2rem
          color: #1a1a1a

        .answer-content
          max-width 30rem
          display: inline-block
          /*max-width 1%*/
          /*background: #ccc*/
          padding: .1rem 0 0 0
          span
            font-size .94rem

</style>

















































