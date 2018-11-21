<template>
  <div>
    <div class="action-guide">
      <span class="my-action">我的想法</span>
    </div>
    <div class="behavior-main">
      <div>
        <div class="list-item" v-for="item in Pe_Data">
          <component :is="item.show_type" :Data="item"></component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import temAnswer from './template-file/like-answer'
  import temArticle from './template-file/like-article'
  import temFocusQuestion from './template-file/focus-question'
  import temFocusTopic from './template-file/focus-topic'
  import temLikeStar from './template-file/like-star'

  export default {
    name: "dynamic-state",
    data() {
      return {
        Pe_Data: [
          {
            show_type: 'temArticle',
            d: {
              action_type: '赞了文章',
              action_timer: '1天前',
              article_title: '2017总结',
              target_avatar_url: 'https://pic2.zhimg.com/50/v2-780d41185c8842cf4252dd120745b036_xs.jpg',
              userName: '罗宾仙子',
              headLine: '梵蒂冈热风',
              follow_count_text: '1 人也赞了该文章',
              article_content: '2017年完成的任务。 一，跑步一千公里。 二，看书22本。 三，看电影32部。 四，泰山旅游。…',
              like_count: 96,
              comment_count: 106
            }
          },
          {
            show_type: 'temAnswer',
            d: {
              action_type: '赞同了回答',
              action_timer: '2天前',
              article_title: '是什么支持着你在偌大的城市中孤身一人奋斗？',
              target_avatar_url: 'https://pic3.zhimg.com/50/a224eb9f7f6cf0ba637879e872161710_xs.jpg',
              userName: '网知',
              headLine: '愿你出走半生，归来依旧少年！',
              follow_count_text: '2 人赞同了该回答',
              article_content: ' 没什么支撑的，回去也是孤身一人奋斗，没得选择啊！阅读全文',
              like_count: 96,
              comment_count: 106
            }
          },
          {
            show_type: 'temFocusQuestion',
            d: {
              action_type: '关注了问题',
              action_timer: '8天前',
              target_question: 'node配合mongodb能做中型电商平台吗？'
            }
          },
          {
            show_type: 'temFocusTopic',
            d: {
              action_type: '关注了话题',
              action_timer: '11天前',
              target_topic: 'java'
            }
          },
          {
            show_type: 'temLikeStar',
            d: {
              action_type: '点赞了星点',
              action_timer: '1个月前'
            }
          }
        ]
      }
    },
    components: {
      temAnswer,
      temArticle,
      temFocusQuestion,
      temFocusTopic,
      temLikeStar
    },
  }
</script>

<style lang="stylus" scoped>
  .action-guide
    border-bottom 1px solid #f6f6f6
    .my-action
      display inline-block
      padding .9rem 0
      font-weight 600
      color: #1a1a1a
      font-size .9375rem
  .behavior-main
    box-sizing: border-box;
    .list-item
      position: relative
      padding: 10px 0
      &:not(:first-child):after
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        display: block;
        border-bottom: 1px solid #f6f6f6;
        content: "";
</style>
