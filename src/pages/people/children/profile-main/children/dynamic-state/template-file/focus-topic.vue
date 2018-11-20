<template>
  <div class="focus-topic">
    <div class="t-like-head">
      <span class="t-action-type">{{Data.d.action_type}}</span>
      <span class="t-action-timer">{{Data.d.action_timer}}</span>
    </div>
    <div class="topic-box">
      <span class="topic-img">
        <svg-icon iconClass="icon-guge4"></svg-icon>
      </span>
      <div class="topic-empty">
        <span class="content-title topic-name">谷歌浏览器开发</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "focus-topic",
    props: {
      Data: {
        type: Object
      }
    },
    data() {
      return {}
    }
  }
</script>

<style lang="stylus" scoped>
  .focus-topic
    width: 100%
    color: #8590a6
    .t-like-head
      .t-action-type
        font-size .875rem
      .t-action-timer
        float: right
        font-size .875rem
    .topic-box
      padding-top .4rem
      width: 100%
      overflow: hidden
      .topic-img
        display: block
        float: left
        overflow: hidden
        .svg-icon
          font-size 3rem
      .topic-empty
        padding-left .6rem
        display: block
        float: left
        line-height 3rem
        /*.topic-name*/
      .content-title
        color: #1a1a1a
        font-size 1.1rem
        font-weight 600


</style>
