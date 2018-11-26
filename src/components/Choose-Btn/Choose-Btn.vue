<template>
  <div class="choose-btn">
    <span class="confirm--com fLeft make-sure">确认</span>
    <span class="confirm--com fRight make-cancel">取消</span>
  </div>
</template>

<script>
    export default {
        name: "Choose-Btn",
        data() {
            return {}
        }
    }
</script>

<style lang="stylus" scoped>
  .fRight
    float: right
  .fLeft
    float: left
  .choose-btn
    width:135px
    .confirm--com
      border-radius .2rem
      display: inline-block
      background: #ccc
      padding: .4rem .8rem
      border 1px solid
      &.make-sure
        color: #ffffff
        border-color #0084ff
        background: #0084ff
      &.make-cancel
        background: #ffffff
        border-color #8590a6
</style>
