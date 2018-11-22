<template>
    <div class="my-star">
      <div class="action-guide">
        <span class="my-action">我的星点</span>
      </div>
      <my-satr></my-satr>
    </div>
</template>

<script>
  import mySatr from './template-star/tem-star'
    export default {
        name: "star",
        data() {
            return {

            }
        },
      components:{
        mySatr
      }
    }
</script>

<style lang="stylus" scoped>
.my-star
  .action-guide
    border-bottom 1px solid #f6f6f6
    .my-action
      display inline-block
      padding .9rem 0
      font-weight 600
      color: #1a1a1a
      /*15px*/
      font-size .9375rem





</style>
