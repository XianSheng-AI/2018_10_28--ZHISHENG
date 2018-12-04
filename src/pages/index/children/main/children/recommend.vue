<template>

    <div class="look-data">
      <ul class="look-data-list">
        <li class="look-data-item">
          <div class="wrapper-box">
            <div class="info-box">
              <h3 class="title-row">Go 语言到底适合干什么？</h3>
              <div class="main-body">
                <div class="content-desc-img">
                  <img class="desc-img" src="../../../../../../static/images/i.png" alt="">
                </div>
                <div class="content-text-box">
                  <span class="tText" style="word-wrap:break-word;white-space:normal">
                    这是按系统化学习路径整理的30个机器学习入门教程。除了基础知识，还有有趣的小项目，比如：猫咪图片识别，Python新闻摘要自动提取，神经网络实现人脸识别，Python气象数据分析等；这些教程大都是点开就能学，在线Linux，免环境配置。
                  </span>
                  <span class="read-more-btn">阅读全文</span>
                  <svg-icon iconClass="icon-zhankai10"></svg-icon>
                </div>
              </div>
              <com-like></com-like>
              <!--评论内容区-->
              <div class="comments-container">
                <div class="with-edit">
                  <!--评论顶部总条数，切换时间排序或默认-->
                  <div class="top-bar">
                    <!--条数-->
                    <div class="top-title">
                      <span class="top-bar-title">113 条评论</span>
                    </div>
                    <!--切换排序-->
                    <div class="top-options">
                      <span class="top-bar-sort-svg">
                        <svg-icon iconClass="icon-qiehuan6"></svg-icon>
                      </span>
                      <span class="top-bar-sort-type">切换为时间排序</span>
                    </div>
                  </div>
                  <!--精选评论-->
                  <div class="choiceness-comments">
                    <div class="choiceness-top-bar">精选评论 (3)</div>

                    <div class="choiceness-wrapper">
                      <!--循环精选评论条数-->
                      <!--做到这了------->
                      <div class="item">454</div>
                    </div>
                  </div>
                  <!--评论还有分页条-->
                  <div class="comments-wrapper"></div>
                  <!--写下你的评论(评论输入框)-->
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="look-data-item">
          <div class="wrapper-box">
            <div class="info-box">
              <h3 class="title-row">程序员让计算机替自己完成工作，老板该不该解雇他？</h3>
              <div class="main-body">
                <div class="content-desc-img">
                  <img class="desc-img" src="../../../../../../static/images/a.jpg" alt="">
                </div>
                <div class="content-text-box">
                  <span class="tText" style="word-wrap:break-word;white-space:normal">
                    呵呵： 经常看我答案的同学们都知道，我是在国企银行工作的，之前是在边缘部门，前几个月转到了资管条线的业务部门，至于这一段传奇经历，在我的上一篇文章中有写到。 努力多年，终于转到了核心业务部门，让自己学习多…
                  </span>
                  <span class="read-more-btn">阅读全文</span>
                  <svg-icon iconClass="icon-zhankai10"></svg-icon>
                </div>
              </div>
              <com-like></com-like>
            </div>
          </div>
        </li>
        <li class="look-data-item">
          <div class="wrapper-box">
            <div class="info-box">
              <h3 class="title-row">Google 有哪些逆天的黑科技？</h3>
              <div class="main-body">
                <div class="content-desc-img">
                  <img class="desc-img" src="../../../../../../static/images/b.jpeg" alt="">
                </div>
                <div class="content-text-box">
                  <span class="tText" style="word-wrap:break-word;white-space:normal">
                   近几年，手机后置多摄像头的现象越来越普遍。大多数旗舰手机都采用了后置双摄的设计，部分厂商甚至推出了后置
                  </span>
                  <span class="read-more-btn">阅读全文</span>
                  <svg-icon iconClass="icon-zhankai10"></svg-icon>
                </div>
              </div>
              <com-like></com-like>
            </div>
          </div>
        </li>
      </ul>
    </div>

</template>

<script>
  import comLike from '@/components/action/com-like.vue'
  export default {
    name: "home-newest",
    components:{
      comLike
    },
    data (){
      return {

      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~@/common/stylus/mixins.styl'
  .look-data
    width 100%
    height 100%
    .look-data-list
      width 100%
      .look-data-item
        width 100%
        border-bottom 1px solid #f0f2f7
        font-size 0.7rem
        .wrapper-box
          padding: 16px 20px 18px;
          /*cursor: pointer;*/
          .info-box
            ellipsis()
            width 100%
            .title-row
              ellipsis()
              font-size 1.1rem
              margin 0 0 0 0
              color #313437
            .main-body
              margin .6rem 0 .9rem
              clearFix()
              /*background: aquamarine*/
              .content-desc-img
                width: 190px
                height:106px
                overflow: hidden
                /*background: #000*/
                float: left
                .desc-img
                  width: 100%
                  border-radius .2rem
                  display: block
              .content-text-box
                /*background: aqua*/
                margin .2rem 0 0 0
                width:456px
                float: right
                /*background: #ccc*/
                line-height 1.5rem
                .tText
                  /*background: #ccc*/
                  font-size .9375rem
                .read-more-btn
                  font-size .875rem
                  color: #175199
                .svg-icon
                  fill #175199
            .comments-container
              font-size .875rem
              margin-top .96rem
              width:100%
              height:20rem
              background: #ccc
              .with-edit
                width 100%

                .top-bar
                  font-size .9375rem
                  background: bisque
                  clearFix()
                  padding:.9rem 1.1rem
                  .top-title
                    float: left
                    color #1a1a1a
                    .top-bar-title
                      font-weight 600
                      color: #000
                  .top-options
                    float: right
                    color #8590a6
                .choiceness-comments
                  .choiceness-top-bar
                    font-weight 600
                    color gray
                    padding:10px 20px
                    background-color: hsla(0,0%,96%,.5);
                  .choiceness-wrapper
                    padding:10px 20px
                    background: palevioletred
                    .item
                      width: 100%
                .comments-wrapper
                  color: #000
















































          .info-img-box
            height:100%
            .info-img
              height:5rem
</style>
