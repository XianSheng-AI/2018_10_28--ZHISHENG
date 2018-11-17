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
            <div class="">

            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
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
              ]
            }
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
      width: 100%s
      height:20rem
      background: olivedrab
      padding:2rem
</style>



































