<template>
    <div class="errorTips showError">
      <div>
        {{tips}}
      </div>
    </div>
</template>

<script>
    export default {
        name: "warning-tips",
        data() {
            return {
              // showBool:
                tips:'',
                isvisible:false
            }
        }
    }
</script>
<!--一直没对，是这里的data写成了data:{}应该写成data(){}-->

<style lang="stylus" scoped>
.errorTips
  font-size .78rem
  z-index 1000000000
  position: fixed
  top 2%
  left 50%
  margin-left -200px
  border-radius .2rem
  width: 400px
  height 36px
  line-height 36px
  background: #ff090f
  color: #ffffff
  text-align center
  transition .4s
  opacity:1
  &.showError
    top 8%
    opacity:1
</style>
