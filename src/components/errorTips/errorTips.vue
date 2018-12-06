<template>
  <transition name="fade">
    <div v-show="isvisible" class="errorTips">
      <div>
        {{tips}}
      </div>
    </div>
  </transition>
</template>

<script>
    export default {
        name: "warning-tips",
        data() {
            return {
                tips:'',
                isvisible:false
            }
        }
    }
</script>
<!--一直没对，是这里的data写成了data:{}应该写成data(){}-->

<style lang="stylus" scoped>

.fade-enter-active {
  transition: all .4s ease;
}

.fade-leave-active {
  transition: all .4s ease;
}

.fade-enter, .fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
.errorTips
  font-size .78rem
  z-index 1000000000
  position: fixed
  top 8%
  left 50%
  margin-left -200px
  border-radius .2rem
  width: 400px
  height 36px
  line-height 36px
  background: #ff090f
  color: #ffffff
  text-align center
</style>
