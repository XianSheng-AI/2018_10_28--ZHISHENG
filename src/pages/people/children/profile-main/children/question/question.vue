<template>
    <div class="my-question">
      <div class="action-guide">
        <span class="my-action">我的提问</span>
      </div>
      <!--问题列表   (循环问题)-->
      <div class="action-item">
        <h2 class="qus-title">
          <div class="que-box">
            <a href="#">大学怎么平衡专业课程和自学？</a>
          </div>
        </h2>
        <div class="ContentItem-status">
          <span>2017-11-20</span>
          <span class="dot-com res-count">2个回答</span>
          <span class="dot-com focus-count">8个关注</span>
        </div>
      </div>
      <div class="action-item">
        <h2 class="qus-title">
          <div class="que-box">
            <a href="#">node配合mongodb能做中型电商平台吗？</a>
          </div>
        </h2>
        <div class="ContentItem-status">
          <span>2017-12-28</span>
          <span class="dot-com res-count">9个回答</span>
          <span class="dot-com focus-count">12个关注</span>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "question",
        data() {
            return {}
        }
    }
</script>

<style lang="stylus" scoped>
.my-question
  width:100%
  .action-guide
    border-bottom 1px solid #f6f6f6
    .my-action
      display inline-block
      padding .9rem 0
      font-weight 600
      color: #1a1a1a
      font-size .9375rem
  .action-item
    padding: 1rem 0
    .qus-title
      font-weight 600
      font-size 1.125rem

      .que-box

        a
          color: #1a1a1a
    .ContentItem-status
      margin-top: .2rem;
      color: #8590a6;
      font-size: 14px;
      .dot-com
        &:before
          margin: 0 6px 0 4px;
          content: "\B7";
        /*&.res-count*/

        /*&.focus-count*/



</style>
