<template>
    <div class="person-container">
      <div class="behavior-wrap">
        <div class="behavior-guide">
          <ul class="behavior-guide-list">
            <li class="tag-item" v-for="(item,index) of behavior_guide_data" :key="index" @click="changeActive(index)">
              <router-link tag="a" class="tag-link" :class="{'is-active':isActiveIndex.num===index}"
                           :to="item.to"
                           >{{item.behavior_}}<span class="tag-count" v-show="item.behavior_count">{{item.behavior_count}}</span></router-link>
            </li>
          </ul>
        </div>
        <!--变换内容区-->
        <!--二级导航-->
        <div class="sec-guide">
          <div class="sec-guide-empty">
            <span class="com-sec-guide">我的动态</span>
          </div>
        </div>
        <div class="behavior-main">
          <div>
            <div class="list-item" v-for="item in Pe_Data">
                <component :is="item.show_type" :Data="item"></component>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import temAnswer from './template-file/answer'
  import temComment from './template-file/comment'
  import temArticle from './template-file/article'
  import temLike from './template-file/like'
  import temFocusQuestion from './template-file/focus-question'
    export default {
        name: "profileMain-pe",
        data() {
            return {
              isActiveIndex:{num:0},
              behavior_guide_data:[
                {
                  behavior_:'动态',
                  to:'/people/1132/dynamicStatePe',
                },
                {
                  behavior_:'回答',
                  to:'/people/1132/answerPe',
                  behavior_count:2
                },
                {
                  behavior_:'提问',
                  to:'/people/1132/questionPe',
                  behavior_count:3
                },
                {
                  behavior_:'星点',
                  to:'/people/1132/startPe',
                  behavior_count:4
                },
                {
                  behavior_:'文章',
                  to:'/people/1132/articlePe',
                  behavior_count:8
                },
                {
                  behavior_:'想法',
                  to:'/people/1132/ideaPe',
                  behavior_count:10
                }
              ],
              Pe_Data:[
                {
                  show_type:'temArticle',
                  d:{
                    action_type:'赞了文章',
                    action_timer:'1天前',
                    article_title:'2017总结',
                    target_avatar_url:'https://pic2.zhimg.com/50/v2-780d41185c8842cf4252dd120745b036_xs.jpg',
                    userName:'罗宾仙子',
                    headLine:'梵蒂冈热风',
                    follow_count_text:'1 人也赞了该文章',
                    article_content:'2017年完成的任务。 一，跑步一千公里。 二，看书22本。 三，看电影32部。 四，泰山旅游。…',
                    like_count:96,
                    comment_count:106
                  }
                },
                {
                  show_type:'temAnswer',
                  d:{
                    action_type:'赞同了回答',
                    action_timer:'2天前',
                    article_title:'是什么支持着你在偌大的城市中孤身一人奋斗？',
                    target_avatar_url:'https://pic3.zhimg.com/50/a224eb9f7f6cf0ba637879e872161710_xs.jpg',
                    userName:'网知',
                    headLine:'愿你出走半生，归来依旧少年！',
                    follow_count_text:'2 人赞同了该回答',
                    article_content:' 没什么支撑的，回去也是孤身一人奋斗，没得选择啊！阅读全文',
                    like_count:96,
                    comment_count:106
                  }
                },
                {
                  show_type:'temFocusQuestion',
                  d:{
                    action_type:'赞同了回答',
                    action_timer:'2天前',
                    article_title:'是什么支持着你在偌大的城市中孤身一人奋斗？',
                    target_avatar_url:'https://pic3.zhimg.com/50/a224eb9f7f6cf0ba637879e872161710_xs.jpg',
                    userName:'网知',
                    headLine:'愿你出走半生，归来依旧少年！',
                    follow_count_text:'2 人赞同了该回答',
                    article_content:' 没什么支撑的，回去也是孤身一人奋斗，没得选择啊！阅读全文',
                    like_count:96,
                    comment_count:106
                  }
                }

                // ,{
                //   show_type:'temComment',
                //   d:'d'
                // },{
                //   show_type:'temLike',
                //   c:'c'
                // }
              ]
            }
        },
      components:{
        temAnswer,
        temComment,
        temArticle,
        temLike,
        temFocusQuestion
      },
      methods : {
        changeActive(index){
          // alert(88)
          this.$set(this.isActiveIndex,'num',index)
        }
      }

    }
</script>

<style lang="stylus" scoped>
  @import "~@/common/stylus/mixins.styl"
.person-container
  float: left
  width: 41.3rem
  height:80rem
  background: #ffffff
  .behavior-wrap
    background: #ffffff
    box-sizing border-box
    .behavior-guide
      .behavior-guide-list
        clearFix()
        border-bottom: 1px solid #f6f6f6;
        .tag-item
          float: left
          padding: 0 16px;

          .tag-link
            text-decoration none
            display: inline-block
            position: relative;
            padding: 14px 0;
            font-size: 16px;
            line-height: 22px;
            color: #1a1a1a;
            text-align: center;
            &.is-active
              font-weight 600
            &.is-active:after
              position: absolute;
              right: 0;
              bottom: -1px;
              left: 0;
              height: 3px;
              background: #0084ff;
              content: "";
              border-radius 2px
          .tag-count
            margin-left: 6px;
            font-size: 14px;
            line-height: 20px;
            color: #999;
            font-weight: 400;
          &:first-child
            padding-left 20px
    .sec-guide
      width: 100%
      .sec-guide-empty
        padding 0 19px
        border-bottom: 1px solid #f6f6f6;
        box-sizing: border-box;
        .com-sec-guide
          display: inline-block
          padding: 13px 0
    .behavior-main
      box-sizing: border-box;
      .list-item
        position: relative
        padding: 10px 20px
        &:not(:first-child):after
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          display: block;
          border-bottom: 1px solid #f6f6f6;
          content: "";
</style>



































