<template>
  <div class="person-container">
    <div class="behavior-wrap">
      <div class="behavior-guide">
        <ul class="behavior-guide-list">
          <li class="tag-item" v-for="(item,index) of behavior_guide_data" :key="index" @click="changeActive(index)">
            <router-link tag="a" class="tag-link" :class="{'is-active':isActiveIndex.num===index}"
                         :to="item.to"
            >{{item.behavior_}}<span class="tag-count" v-show="item.behavior_count">{{item.behavior_count}}</span>
            </router-link>
          </li>
          <li class="tag-item tag-more">
            <div class="tag-more-box">
              <span @click.stop="showMore">更多<svg-icon iconClass="icon-shangxiazhankai_o1"></svg-icon></span>
            </div>
            <div class="more-box" :class="{'hide-more':showMoreFlag.bool}" id="hide-more">
              <div>
                <span class="Popover-arrow Popover-arrow--bottom" style="left:43.475px; top: 0;"></span>
                <!--<span class="triangle-com Popover-arrow Popover-arrow&#45;&#45;bottom"></span>-->
                <div class="tag-box">
                  <a class="more-collect" href="javascript:;">收藏</a>
                  <a class="more-focus" href="javascript:;">关注</a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!--变换内容区-->
      <!--二级导航-->
      <div class="change-wrapper">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "profileMain-pe",
    data() {
      return {
        isActiveIndex: {num: 0},
        behavior_guide_data: [
          {
            behavior_: '动态',
            to: '/people/1132/dynamicStatePe',
          },
          {
            behavior_: '回答',
            to: '/people/1132/answerPe',
            behavior_count: 2
          },
          {
            behavior_: '提问',
            to: '/people/1132/questionPe',
            behavior_count: 3
          },
          {
            behavior_: '星点',
            to: '/people/1132/startPe',
            behavior_count: 4
          },
          {
            behavior_: '文章',
            to: '/people/1132/articlePe',
            behavior_count: 8
          },
          {
            behavior_: '想法',
            to: '/people/1132/ideaPe',
            behavior_count: 10
          }
          // {
          //   behavior_: '关注',
          //   to: '/people/1132/focusPe',
          //   behavior_count: 102
          // },
          // {
          //   behavior_: '收藏',
          //   to: '/people/1132/collectPe',
          //   behavior_count: 200
          // }
        ],
        showMoreFlag: {
          bool: true
        }
      }
    },
    components: {},
    mounted() {
      document.body.addEventListener('click', (e) => {
        let sp = document.getElementById('hide-more');
        if (sp) {
          if (!sp.contains(e.target)) {
            this.$set(this.showMoreFlag, 'bool', true)
          }
        }
      })
    },
    methods: {
      changeActive(index) {
        this.$set(this.isActiveIndex, 'num', index)
      },
      showMore() {
        if(this.showMoreFlag.bool){
          this.$set(this.showMoreFlag, 'bool', false);
        }else{
          this.$set(this.showMoreFlag, 'bool', true);
        }
      }
    }

  }
</script>
<!--css难点  css三角形-->
<style lang="stylus" scoped>

  @import "~@/common/stylus/mixins.styl"
  .person-container
    float: left
    width: 41.3rem
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    /*height:80rem*/
    background: #ffffff
    border-radius .3rem
    overflow: hidden
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
            .tag-more-box
              cursor: pointer;
              /*background red*/
              margin-top 12px
              .svg-icon
                font-size 1.1rem
              &:hover
                color: #8590a6
            .more-box
              padding .6rem 0
              position: absolute
              top: 46px
              left: -4px
              width: 87px
              background: #fff
              border-radius .3rem
              /*overflow: hidden*/
              /*box-shadow 0 0 12px #ccc*/
              border: 1px solid #ebebeb;
              font-size .875rem
              box-shadow: 0 5px 20px rgba(26, 26, 26, .1)
              z-index: 203;
              &.hide-more
                display none
              .Popover-arrow
                position: absolute;
                overflow: hidden;
                pointer-events: none;
                &:after
                  content: "";
                  position: absolute;
                  box-sizing: border-box;
                  width: 24px;
                  height: 24px;
                  margin: -12px;
                  /*border: 1px solid #ebebeb;*/
                  border: 1px solid #ebebeb;
                  background: #fff;
                  -webkit-transform: rotate(45deg);
                  transform: rotate(45deg);
                  pointer-events: auto;
                &.Popover-arrow--bottom
                  width: 32px;
                  height: 16px;
                  -webkit-transform: translate(-50%, -100%);
                  transform: translate(-50%, -100%);
                  &:after
                    left: 50%;
                    bottom: -8px;
              .tag-box

                a
                  display: block
                  width: 100%
                  padding .4rem 0
                  text-align center
                  color: #1a1a1a
                  &:hover
                    background: #f6f6f6
                    color: #8590a6
            &.tag-more
              position: relative

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

      .change-wrapper
        width: 100%
        /*background: #000*/
        padding: 0 1.3rem
</style>



































