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
                    <div class="item">
                      <div class="item-header-info">
                          <span class="item-avatar">
                            <img src="../../../../../../static/images/comment-person-header.jpg" alt="">
                          </span>
                        <span class="avatar">
                            <a class="avatar-name" href="javascript:;">凯莎</a>
                          </span>
                        <span class="talk-timer">3小时前</span>
                      </div>
                      <div class="cText">
                        我一个月前想骑哈罗单车，没找到 但看到了周围的小黄，
                        就扫码想骑，然后一扫，说什么不提供免费骑行，
                        然后我交了，准备骑 说什么打不开锁 我也没骑成，
                        然后我退款[捂脸]，到现在也没有给我退[大哭]
                      </div>
                      <!--评论应该有图-->
                      <!--评论按钮组-->
                      <!--<reactor-button-group :initData="initBtn"></reactor-button-group>-->
                    </div>
                  </div>
                </div>
                <!--普通评论还有分页条-->
                <div class="com-for-comments comments-wrapper">
                  <div class="comments-top-bar">评论 (25)</div>

                  <div class="comments-wrapper">
                    <!--循环精选评论条数-->
                    <!--做到这了------->
                    <div class="item" v-for="(item,index) of initData.data">
                      <div class="item-header-info">
                          <span class="item-avatar">
                            <img :src="item.author.member.avatar_url" alt="">
                          </span>
                        <span class="avatar">
                            <a class="avatar-name" href="javascript:;">{{item.author.member.name}}</a>
                          </span>
                        <span class="talk-timer">{{addTimer(item.created_time)}}</span>
                      </div>
                      <div class="cText">{{item.content}}</div>
                      <!--评论应该有图-->

                      <!--评论按钮组-->
                      <!--<reactor-button-group :initData="initBtn"></reactor-button-group>-->
                      <!--对此用户进行回复-->
                      <div class="child-res-wrapper">
                        <!--循环子回复-->

                        <div class="item child-item" v-for="(itemC,index) of item.child_comments">
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
                          <!--<reactor-button-group :initData="initBtn"></reactor-button-group>-->
                        </div>
                        <div class="item child-item">
                          <div class="item-header-info">
                                <span class="item-avatar">
                                  <img src="../../../../../../static/images/qq.jpg" alt="">
                                </span>
                            <span class="avatar">
                                  <a class="avatar-name" href="javascript:;">徐知非</a>
                                  <span class="res-type">回复</span>
                                  <a class="avatar-name" href="javascript:;">徐知非</a>
                                </span>
                            <span class="talk-timer">6天前</span>
                          </div>
                          <div class="cText">
                            ？？？想发个单独的回复结果回复到你下面了 哭哭
                          </div>
                          <!--评论应该有图-->
                          <!--评论按钮组-->
                          <!--<reactor-button-group :initData="initBtn"></reactor-button-group>-->
                        </div>

                      </div>
                    </div>

                    <div class="item">
                      <div class="item-header-info">
                          <span class="item-avatar">
                            <img src="../../../../../../static/images/ss.jpg" alt="">
                          </span>
                        <span class="avatar">
                            <a class="avatar-name" href="javascript:;">powerpoint</a>
                          </span>
                        <span class="talk-timer">22小时前</span>
                      </div>
                      <div class="cText">
                        彩虹的意义是这只部队是由很多不同肤色的人组成的？
                      </div>
                      <!--评论应该有图-->

                      <!--评论按钮组-->
                      <!--<reactor-button-group :initData="initBtn"></reactor-button-group>-->
                    </div>
                  </div>
                </div>
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
  import comLike from '../../../../../components/action/com-like.vue'
  import reactorButtonGroup from '@/components/action/reactor-button-group.vue'

  export default {

    name: "home-newest",
    components: {
      comLike,
      reactorButtonGroup
    },
    data() {
      return {
        initData: {
          data: [
            {
              "id": 555103495,
              "type": "comment",
              "url": "https://www.zhihu.com/comments/555103495",
              "content": "有句KY一点的话。。感觉一灯不提段誉主要还是因为金庸先写射雕后写天龙，这种意义上说是先有的孙子后有的爷爷",
              "featured": false,
              "collapsed": false,
              "is_author": false,
              "is_delete": false,
              "created_time": 1543922010,
              "resource_type": "answer",
              "reviewing": false,
              "allow_like": true,
              "allow_delete": false,
              "allow_reply": true,
              "allow_vote": true,
              "can_recommend": false,
              "can_collapse": false,
              "author": {
                "role": "normal",
                "member": {
                  "id": "e945ae2e6a5244acfc43ea178c565860",
                  "url_token": "duan-wen-qi-81",
                  "name": "何足道",
                  "avatar_url": "https://pic1.zhimg.com/v2-3c1bbf9f0e56f4134215870abc1aa6ac_r.jpg",
                  "avatar_url_template": "https://pic1.zhimg.com/v2-3c1bbf9f0e56f4134215870abc1aa6ac_{size}.jpg",
                  "is_org": false,
                  "type": "people",
                  "url": "https://www.zhihu.com/people/e945ae2e6a5244acfc43ea178c565860",
                  "user_type": "people",
                  "headline": "国家注册二级吐槽师",
                  "badge": [],
                  "gender": 1,
                  "is_advertiser": false
                }
              },
              "vote_count": 23,
              "voting": false,
              "disliked": false,
              "censor_status": 0,
              "child_comment_count": 14,
              "child_comments": [
                {
                  "id": 555112959,
                  "type": "comment",
                  "url": "https://www.zhihu.com/comments/555112959",
                  "content": "哈哈有道理",
                  "featured": false,
                  "collapsed": false,
                  "is_author": false,
                  "is_delete": false,
                  "created_time": 1543923358,
                  "resource_type": "answer",
                  "reviewing": false,
                  "allow_like": true,
                  "allow_delete": false,
                  "allow_reply": true,
                  "allow_vote": true,
                  "can_recommend": false,
                  "can_collapse": false,
                  "author": {
                    "role": "normal",
                    "member": {
                      "id": "6053d189bf17e8aebe86f9c2ec35825b",
                      "url_token": "hao-li-82-3",
                      "name": "Lihao",
                      "avatar_url": "https://pic3.zhimg.com/v2-1faa7f2811d70c636692eee539c6fb9c_r.jpg",
                      "avatar_url_template": "https://pic3.zhimg.com/v2-1faa7f2811d70c636692eee539c6fb9c_{size}.jpg",
                      "is_org": false,
                      "type": "people",
                      "url": "https://www.zhihu.com/people/6053d189bf17e8aebe86f9c2ec35825b",
                      "user_type": "people",
                      "headline": "一命二运三风水，四修阴德五读书",
                      "badge": [],
                      "gender": 1,
                      "is_advertiser": false
                    }
                  },
                  "vote_count": 3,
                  "reply_to_author": {
                    "role": "normal",
                    "member": {
                      "id": "e945ae2e6a5244acfc43ea178c565860",
                      "url_token": "duan-wen-qi-81",
                      "name": "何足道",
                      "avatar_url": "https://pic1.zhimg.com/v2-3c1bbf9f0e56f4134215870abc1aa6ac_r.jpg",
                      "avatar_url_template": "https://pic1.zhimg.com/v2-3c1bbf9f0e56f4134215870abc1aa6ac_{size}.jpg",
                      "is_org": false,
                      "type": "people",
                      "url": "https://www.zhihu.com/people/e945ae2e6a5244acfc43ea178c565860",
                      "user_type": "people",
                      "headline": "国家注册二级吐槽师",
                      "badge": [],
                      "gender": 1,
                      "is_advertiser": false
                    }
                  },
                  "voting": false,
                  "disliked": false,
                  "censor_status": 0
                },
                {
                  "id": 555120094,
                  "type": "comment",
                  "url": "https://www.zhihu.com/comments/555120094",
                  "content": "<p>朋友，你忘记金庸在80年代和2003年，两次修订自己作品，力图使之成为一体了。</p><p>2003年的新修版《射雕》，已经加上了这段：</p><p>【这降龙十八掌可说是外门武学中的巅峰绝诣，当真是无坚不摧、无固不破。虽招数有限，但每一招均具绝大威力。北宋年间，丐帮帮主萧峰以此邀斗天下英雄，极少有人能挡得他三招两式，气盖当世，群豪束手。】</p><p>为何谈及丐帮时要加上前帮主萧峰，谈及大理段氏时却一字不提段誉？</p>",
                  "featured": false,
                  "collapsed": false,
                  "is_author": false,
                  "is_delete": false,
                  "created_time": 1543924419,
                  "resource_type": "answer",
                  "reviewing": false,
                  "allow_like": true,
                  "allow_delete": false,
                  "allow_reply": true,
                  "allow_vote": true,
                  "can_recommend": false,
                  "can_collapse": false,
                  "author": {
                    "role": "author",
                    "member": {
                      "id": "dd851a5ba9de70dcf4ce6b9604fd01c2",
                      "url_token": "mu-rong-chen-xi",
                      "name": "狐狸晨曦",
                      "avatar_url": "https://pic1.zhimg.com/v2-47a4f7a0f78f4e2b4abfc456d6090346_r.jpg",
                      "avatar_url_template": "https://pic1.zhimg.com/v2-47a4f7a0f78f4e2b4abfc456d6090346_{size}.jpg",
                      "is_org": false,
                      "type": "people",
                      "url": "https://www.zhihu.com/people/dd851a5ba9de70dcf4ce6b9604fd01c2",
                      "user_type": "people",
                      "headline": "历史/影视撰稿人。公众号：狐言论史（huyanls1012）。",
                      "badge": [],
                      "gender": 1,
                      "is_advertiser": false
                    }
                  },
                  "vote_count": 36,
                  "reply_to_author": {
                    "role": "normal",
                    "member": {
                      "id": "e945ae2e6a5244acfc43ea178c565860",
                      "url_token": "duan-wen-qi-81",
                      "name": "何足道",
                      "avatar_url": "https://pic1.zhimg.com/v2-3c1bbf9f0e56f4134215870abc1aa6ac_r.jpg",
                      "avatar_url_template": "https://pic1.zhimg.com/v2-3c1bbf9f0e56f4134215870abc1aa6ac_{size}.jpg",
                      "is_org": false,
                      "type": "people",
                      "url": "https://www.zhihu.com/people/e945ae2e6a5244acfc43ea178c565860",
                      "user_type": "people",
                      "headline": "国家注册二级吐槽师",
                      "badge": [],
                      "gender": 1,
                      "is_advertiser": false
                    }
                  },
                  "voting": false,
                  "disliked": false,
                  "censor_status": 0
                }
              ]
            }
          ],

          commentType: 1 //0代表评论 1代表精选
        },
        initBtn: [],
        btnData: {},
        showCommentBool: false,
      }
    },
    mounted() {
      this.initPage();


    },
    computed: {
      //时间戳转换--传入秒（不是毫秒）
      addTimer(){
        return function(time) {
          return this.getDateDiff(time)
        }
      },
    },
    //记住这是methods不是method，倒腾了3小时
    methods: {
      initPage() {

      },
      showComment() {
        this.showCommentBool = !this.showCommentBool;
      },
      getDateDiff(dateTimeStamp) {
        let result='';
        let minute = 1000 * 60;
        let hour = minute * 60;
        let day = hour * 24;
        let halfamonth = day * 15;
        let month = day * 30;
        let now = new Date().getTime();
        let diffValue = now - dateTimeStamp*1000;
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
          /*cursor: pointer;*/

          .info-box
            //ellipsis()
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
                height: 106px
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
                width: 456px
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
              width: 100%

              /*background: #ccc*/

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
                    /*background: palevioletred*/
                    //一条一条的评论

                    .item
                      box-sizing border-box
                      padding: .88rem 0 .5rem 0
                      width: 100%
                      border-bottom 1px solid #f6f6f6

                      &.child-item
                        padding-left 2rem

                      .item-header-info
                        /*background: peru*/
                        margin-bottom .26rem

                        .item-avatar
                          width: 24px
                          height: 24px
                          /*background: #ccc*/
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

                          /*font-weight 600*/

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


          .info-img-box
            height: 100%

            .info-img
              height: 5rem
</style>
