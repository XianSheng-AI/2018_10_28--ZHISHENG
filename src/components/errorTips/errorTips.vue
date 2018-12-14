<template>
  <transition name="fade">
    <div v-show="isvisible" ref="errorRef" class="errorTips" :style="{backgroundColor:bg_color}">
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
        tips: '',
        bg_color: '',
        isvisible: false

      }
    },
    //难点，原来return里的值其实还没有，使用nextTick才有(后来发现只能一次)
    // watch :{
    //   tips:function (val) {
    //     alert(val)
    //   }
    // },
    // mounted() {
    //   this.$nextTick(function () {
    //     alert(this.tips)
    //     if (this.bg_color) {
    //
    //         this.$refs.errorRef.style.backgroundColor=this.bg_color;
    //       }
    //   })
    //
    //   // this.$refs.errorRef.style.backgroundColor=this.bg_color;
    //   // alert(this.$refs.errorRef)
    //   // if (this.bg_color) {
    //   //   alert(this.bg_color)
    //   //       this.$refs.errorRef.style.background=this.bg_color;
    //   // }
    // }
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
    font-size 16px
    line-height 36px
    /*background-color: #ff090f*/
    color: #ffffff
    text-align center
</style>
