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
            <li class="side-item active">
              <h3 class="article-title">每一丰个人都值得去赞扬</h3>
              <span class="word-count">2012字</span>
            </li>
            <li class="side-item">
              <h3 class="article-title">是个GregGreg三十多个哥热缩管</h3>
              <span class="word-count">2012字</span>
            </li>
            <li class="side-item">
              <h3 class="article-title">二是过热热狗Greg</h3>
              <span class="word-count">2012字</span>
            </li>
            <li class="side-item">
              <h3 class="article-title">挖肺癌我v大哥个字符的个数噶政府</h3>
              <span class="word-count">2012字</span>
            </li>
            <li class="side-item">
              <h3 class="article-title">而设身体阿和太热的教育 教育就一天</h3>
              <span class="word-count">2012字</span>
            </li>
          </ul>
        </div>
      </div>
      <!--编辑内容区-->
      <div class="edit-container"></div>
    </div>
</template>

<script>
    export default {
        name: "take-notes",
        data() {
            return {}
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
            background #dde9ff
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
</style>
