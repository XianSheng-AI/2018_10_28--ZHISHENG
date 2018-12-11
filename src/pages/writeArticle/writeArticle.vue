<template>
    <div class="write-article">
      <!--侧边导航栏-->
      <div class="side-bar">
        <div class="side-bar-top">
          <div class="com-title side-title">
            <span class="side-type">写文章</span>
            <!--选择按钮-->
            <div class="select-button">
              <span class="btn-svg">
                <svg-icon iconClass="icon-caidan4"></svg-icon>
              </span>
              <div class="select-box"></div>
            </div>
          </div>
          <!--添加文章按钮-->
          <div class="com-title new-button">
            <span class="new-svg">
              <svg-icon iconClass="icon-tianjia4"></svg-icon>
            </span>
            <span>新建文章</span>
          </div>
        </div>
        <div class="list-wrapper">
          <ul class="side-list">
            <li class="side-item" :class="{'active':activeIndex===index}" v-for="(item,index) of articleData" @click="handleClick(index)" >
              <h3 class="article-title">{{item.title}}</h3>
              <span class="word-count">{{item.countWord}}字</span>
              <div class=""></div>
            </li>
          </ul>
        </div>
      </div>
      <!--编辑内容区-->
      <div class="edit-container">
        <!--文章title-->
        <h1 class="edit-top">
          <input class="article-title" type="text" value="大师傅大师傅">
        </h1>

      </div>
    </div>
</template>

<script>
    export default {
        name: "take-notes",
        data() {
            return {
              activeIndex:0,
              articleData:[
                {
                  title:'但是发高热',
                  countWord:1084
                }
                ,{
                  title:'热给热爱过热啊',
                  countWord:2045
                }
                ,{
                  title:'热爱给热爱过热啊火热',
                  countWord:10848
                }
                ,{
                  title:'v反对v反对v发达不发达和埃格',
                  countWord:5124
                }
                ,{
                  title:'恶趣味驱蚊器few',
                  countWord:2046
                }
              ]
            }
        },
      methods:{
        handleClick(index){
          this.activeIndex=index;
        }
      }
    }
</script>

<style lang="stylus" scoped>
  @import '~@/common/stylus/mixins.styl'
.write-article
  margin 4.6rem auto
  width: 960px
  height:20rem
  /*background: skyblue*/
  .side-bar
    width 220px
    height:500px
    float: left
    .side-bar-top
      font-size .9375rem
      .com-title
        /*background: #ccc*/
        &.side-title
          border: 1px solid #ebebeb;
          /*border-bottom none*/
          box-shadow: 0 1px 3px rgba(26, 26, 26, .1);
          box-sizing border-box
          clearFix()
          padding:.6rem 18px
          background: #ffffff
          .side-type
            float left
            color #717e97
          .select-button
            float: right
            .btn-svg
              cursor: pointer;
              .svg-icon
                font-size 1rem
                fill #52596b
              &:hover .svg-icon
                fill #686f85
        &.new-button
          padding .6rem 18px
          color: #717e97
          background: #ffffff
          cursor: pointer;
          border-radius 0 0 .2rem .2rem
          border: 1px solid #ebebeb;
          border-top none
          box-shadow: 0 1px 3px rgba(26, 26, 26, .1);
          .new-svg
            .svg-icon
              fill #717e97
          &:hover
            color #565c73
          &:hover .svg-icon
            fill #565c73
          /*display: none*/
    .list-wrapper

      .side-list
        .side-item
          position: relative
          transition .2s
          cursor: pointer;
          padding .6rem 18px
          background: #ffffff
          border-radius .2rem
          margin-top 8px
          border: 1px solid #ebebeb;
          box-shadow: 0 1px 3px rgba(26, 26, 26, .1);
          &.active
            border-left 3px solid #0084ff
          &:hover
            background #f3f5f7
          .article-title
            ellipsis()
            width 180px
            font-weight normal
            font-size 1rem
          .word-count
            color #565c73
            font-size .8rem
  .edit-container
    float: right
    width:720px
    height:30rem
    background: #ffffff
    .edit-top
      background: rosybrown
      padding .6rem 1rem
      .article-title
        width 40rem
        display: block
        /*background: #ccc*/
        font-size 1.2rem
        color #595959
        overflow: hidden
</style>
