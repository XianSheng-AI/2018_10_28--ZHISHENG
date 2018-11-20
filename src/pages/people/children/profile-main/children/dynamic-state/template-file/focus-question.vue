<template>
    <div class="focus-question">
      <div class="t-like-head">
        <span class="t-action-type">{{Data.d.action_type}}</span>
        <span class="t-action-timer">{{Data.d.action_timer}}</span>
      </div>
      <div class="question-box">
        <h2>
          <a class="content-title" href="#">{{Data.d.target_question}}</a>
        </h2>
      </div>
    </div>
</template>

<script>
    export default {
        name: "focus-question",
      props:{
          Data:{
            type:Object
          }
      },
        data() {
            return {}
        }
    }
</script>

<style lang="stylus" scoped>
.focus-question
  color: #8590a6
  width: 100%
  .t-action-type
    font-size .875rem
  .t-action-timer
    float: right
    font-size .875rem
  .question-box
    width: 100%
    .content-title
      display: block
      color: #1a1a1a
      font-size 1.1rem
      padding .4rem 0 .5rem 0

</style>
