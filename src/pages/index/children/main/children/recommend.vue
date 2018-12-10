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
            <com-like @showComments="showComment"></com-like>
            <!--评论内容区-->
            <div class="comments-container" v-if="showCommentBool">
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
                <div class="com-for-comments choiceness-comments">
                  <div class="comments-top-bar">精选评论 (3)</div>

                  <div class="comments-wrapper">
                    <!--循环精选评论条数-->
                    <!--做到这了------->
                    <div class="item" v-for="(item,index) of commentsData.data" v-if="item.featured">
                      <div class="parentItem">
                        <div class="item-header-info">
                          <span class="item-avatar">
                            <img src="../../../../../../static/images/comment-person-header.jpg" alt="">
                          </span>
                          <span class="avatar">
                            <a class="avatar-name" href="javascript:;">{{item.author.member.name}}</a>
                          </span>
                          <span class="talk-timer">{{addTimer(item.created_time)}}</span>
                        </div>
                        <div class="cText" v-html="item.content"></div>
                        <!--评论应该有图-->
                        <!--评论按钮组-->
                        <reactor-button-group :initData="initBtn(item.vote_count,item.featured)"></reactor-button-group>
                      </div>

                    </div>
                  </div>
                </div>
                <!--普通评论还有分页条-->
                <div class="com-for-comments comments-wrapper">
                  <div class="comments-top-bar">评论 (25)</div>

                  <div class="comments-wrapper">
                    <!--循环评论条数-->
                    <!--做到这了------->
                    <div class="item" v-for="(item,index) of commentsData.data" v-if="!item.featured">

                       <div class="parentItem">
                         <div class="item-header-info">
                          <span class="item-avatar">
                            <img :src="item.author.member.avatar_url" alt="">
                          </span>
                           <span class="avatar">
                            <a class="avatar-name" href="javascript:;">{{item.author.member.name}}</a>
                          </span>
                           <span class="talk-timer">{{addTimer(item.created_time)}}</span>
                         </div>
                         <div class="cText" v-html="item.content"></div>
                         <!--评论应该有图-->
                         <!--评论按钮组-->
                         <reactor-button-group :initData="initBtn(item.vote_count,item.featured)"></reactor-button-group>
                       </div>
                        <!--对此用户进行回复-->
                        <div class="child-res-wrapper">
                          <!--循环子回复-->

                          <div class="item child-item" v-for="(itemC,index) of item.child_comments">
                            <div class="parentItem">
                              <div class="item-header-info">
                                <span class="item-avatar">
                                  <img :src="itemC.author.member.avatar_url" alt="">
                                </span>
                                <span class="avatar">
                                  <a class="avatar-name" href="javascript:;">{{itemC.author.member.name}}</a>
                                  <span class="res-type" v-if="itemC.author.role==='author'">(作者)</span>

                                  &nbsp;<span class="res-type">回复</span>&nbsp;
                                  <a class="avatar-name" href="javascript:;">{{itemC.reply_to_author.member.name}}</a>
                                </span>
                                <span class="talk-timer">{{addTimer(itemC.created_time)}}</span>
                                <!--<span class="talk-timer">{{itemC.created_time}}</span>-->
                              </div>
                              <div class="cText" ref="resText">
                                <!--回复文本位置-->
                                <div v-html="itemC.content"></div>
                              </div>
                              <!--评论应该有图-->
                              <!--评论按钮组-->
                              <reactor-button-group :initData="initBtn(item.vote_count,item.featured)"></reactor-button-group>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
                <!--评论查看更多-->
                <div class="read-more">
                  <span>更多评论</span>
                </div>
                <!--写下你的评论(评论输入框)-->
                <div class="write-comment">
                  <div placeholder="写下你的评论..."
                       contenteditable="true"
                       spellcheck="false"
                       class="write-input"
                       :class="{'empty':!!hasWord}"
                       v-model="hasWord"
                  >
                  </div>
                  <!--表情大全(组件)-->
                  <span class="face-svg">
                    <svg-icon iconClass="icon-biaoqing14"></svg-icon>
                    <div class="face-show">
                      <div class="face-all">
                        <ul>
                          <li class="face-item" v-for="(item,index) of faceImgData">
                            <div class="face-empty">
                              <img class="face-gif" :src="item.url" alt="">
                            </div>
                            <h6 class="face-type">{{item.title}}</h6>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </span>
                  <div class="sub-btn">发布</div>
                </div>
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
  import comLike from '../../../../../components/action/com-like.vue'
  import reactorButtonGroup from '@/components/action/reactor-button-group.vue'
  import {apiComments,apiFaceImg} from '@/request/api.js'

  export default {

    name: "home-newest",
    components: {
      comLike,
      reactorButtonGroup
    },
    data() {
      return {

        commentsData: {},//评论数据

        faceImgData:null, //评论表情数据
        showCommentBool: false,
      }
    },
    create: {},
    mounted() {
      this.initPage();
      this.initFace()

    },
    computed: {
      //时间戳转换--传入秒（不是毫秒）
      addTimer() {
        return function (time) {
          return this.getDateDiff(time)
        }
      },
      initBtn() {
        return function (likeCount, isGood) {
          return {
            likeCount: likeCount,
            isGood: isGood
          }
        }
      },
    },
    //记住这是methods不是method，倒腾了3小时
    methods: {
      initPage() {

      },
      initFace(){
        apiFaceImg().then(res=>{
          console.log(res);
          this.faceImgData=res;
        })
      },
      showComment() {
        this.showCommentBool = !this.showCommentBool;
        //点击展开评论获取评论数据
        apiComments().then(res => {
          this.commentsData = res;
          console.log(this.commentsData)
        })
      },
      getDateDiff(dateTimeStamp) {
        let result = '';
        let minute = 1000 * 60;
        let hour = minute * 60;
        let day = hour * 24;
        let halfamonth = day * 15;
        let month = day * 30;
        let now = new Date().getTime();
        let diffValue = now - dateTimeStamp * 1000;
        if (diffValue < 0) {
          return;
        }
        let monthC = diffValue / month;
        let weekC = diffValue / (7 * day);
        let dayC = diffValue / day;
        let hourC = diffValue / hour;
        let minC = diffValue / minute;
        if (monthC >= 1) {
          result = "" + parseInt(monthC) + "月前";
        } else if (weekC >= 1) {
          result = "" + parseInt(weekC) + "周前";
        } else if (dayC >= 1) {
          result = "" + parseInt(dayC) + "天前";
        } else if (hourC >= 1) {
          result = "" + parseInt(hourC) + "小时前";
        } else if (minC >= 1) {
          result = "" + parseInt(minC) + "分钟前";
        } else
          result = "刚刚";
        return result;
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
          .info-box
            width 100%
            .title-row
              ellipsis()
              font-size 1.1rem
              margin 0 0 0 0
              color #313437
            .main-body
              margin .6rem 0 .9rem
              clearFix()
              .content-desc-img
                width: 190px
                height: 106px
                overflow: hidden
                float: left
                .desc-img
                  width: 100%
                  border-radius .2rem
                  display: block
              .content-text-box
                margin .2rem 0 0 0
                width: 456px
                float: right
                line-height 1.5rem
                .tText
                  font-size .9375rem
                .read-more-btn
                  font-size .875rem
                  color: #175199
                .svg-icon
                  fill #175199
            .comments-container
              font-size .875rem
              margin-top .96rem
              width: 100%
              .with-edit
                width 100%
                border: 1px solid #ebebeb;
                box-shadow: 0 1px 3px rgba(26, 26, 26, .1);
                background: #fff;
                .top-bar
                  font-size .9375rem
                  /*background: bisque*/
                  clearFix()
                  padding: .9rem 1.1rem
                  .top-title
                    float: left
                    color #1a1a1a
                    .top-bar-title
                      font-weight 600
                      color: #000
                  .top-options
                    float: right
                    color #8590a6
                .com-for-comments
                  /*此元素里的公用元素*/
                  .comments-top-bar
                    font-weight 600
                    color gray
                    padding: 10px 20px
                    background-color: hsla(0, 0%, 96%, .5);
                  /*精选评论*/
                  /*&.choiceness-comments*/
                  .comments-wrapper
                    padding: 0 20px
                    //一条一条的评论
                    .item
                      box-sizing border-box
                      width: 100%

                      clearFix()
                      &.child-item
                        padding-left 2rem
                      .parentItem
                        border-top 1px solid #f6f6f6
                        padding:.88rem 0
                        .item-header-info
                          margin-bottom .26rem
                          .item-avatar
                            width: 24px
                            height: 24px
                            float: left
                            margin-right .6rem
                            img
                              width: 24px
                              height: 24px
                              display: block
                          .avatar
                            color #1a1a1a
                            line-height 1.6rem
                            .avatar-name
                              display: inline-block
                              color #333333
                            .res-type
                              color: #8590a6
                          .talk-timer
                            float: right
                            color: #8590a6
                        .cText
                          font-size .875rem
                          margin-left 2rem
                  /*评论*/
                  &.comments-wrapper
                    color: #000
                .read-more
                  /*border-top 1px solid #f6f6f6*/
                  /*border-bottom 1px solid #dbdbdb*/
                  width: 100%
                  color: #8590a6
                  text-align center
                  cursor: pointer;
                  span
                    -webkit-transition: .2s
                    -moz-transition: .2s
                    -ms-transition: .2s
                    -o-transition: .2s
                    transition: .2s
                    display: block
                    padding:.6rem
                    background: #ffffff
                    &:hover
                      background: #f6f6f6
                .write-comment
                  margin .8rem auto
                  width: 100%
                  /*background: gray*/
                  position: relative
                  .write-input
                    box-sizing border-box
                    -webkit-transition: .2s
                    -moz-transition: .2s
                    -ms-transition: .2s
                    -o-transition: .2s
                    transition: .2s
                    position: relative;
                    padding: .5rem 2rem .5rem 1.6rem;
                    line-height: 1.7;
                    color: #8590a6;
                    outline: none;
                    min-height: 1.3em;
                    background: #f6f6f6
                    width:83%
                    margin-left 1.2rem
                    border-radius 21px
                    border 1px solid #f6f6f6
                    &:before
                      font-size .9275rem
                      content: attr(placeholder);
                      position: absolute;
                      /*opacity: 1;*/
                      pointer-events: none;
                      -webkit-user-select: none;
                      -moz-user-select: none;
                      -ms-user-select: none;
                      user-select: none;
                      &:not(.empty):before
                        display: none

                    &:focus
                      background: #ffff
                      border-color #39acff
                  .face-svg
                    position: absolute
                    bottom 7px
                    right 15.8%
                    cursor: pointer;
                    .svg-icon
                      fill #646f83
                      font-size 1.5rem
                    .face-show
                      position: relative
                      .face-all
                        border: 1px solid #ebebeb;
                        border-radius: 4px;
                        box-shadow: 0 5px 20px rgba(26,26,26,.1);
                        z-index: 1000000;
                        background: #ffffff
                        position: absolute
                        top 1.4rem
                        right -11.7rem
                        width 408px
                        height 208px
                        .face-item
                          width 48px
                          padding 8px
                          text-align center
                          float: left
                          .face-empty
                            .face-gif
                              width: 48px;
                              height: 48px;
                              padding-bottom: 4px;
                              display: block
                          .face-type
                            width: 48px;
                            line-height: 18px;
                            font-size: 12px;
                            color: #a9a9a9;
                  .sub-btn
                    cursor: pointer;
                    text-align center
                    border-radius 21px
                    width 4rem
                    color #ffffff
                    background: #0084ff
                    line-height 42px
                    height 42px
                    position: absolute
                    bottom 0
                    right 3%
                    transition .2s
                    &:hover
                      background: #006ad3
          .info-img-box
            height: 100%
            .info-img
              height: 5rem
</style>
