<template>
  <div class="choose-btn">
    <span class="confirm--com make-sure"
          :class="{'hasActive':!!chooseData.DATA.word}"
          @click="chooseMethod(true)"
    >保存</span>
    <span class="confirm--com make-cancel"
          :style="'margin-left:'+chooseData.LEFT"
          @click="chooseMethod(false)"
    >取消</span>
  </div>
</template>

<script>
    export default {
      props:{
        chooseData:{
          type:Object,
          request:true
        }
      },
        name: "Choose-Btn",
        data() {
            return {}
        },
      methods:{
        chooseMethod(bool){
          if(bool){
            if(!!this.chooseData.DATA.word){
              this.$emit('chooseMe','YES');
              return;
            }
            return;
          }
          this.$emit('chooseMe','NO')
        },
        canClick(){

        }
      }
    }
</script>

<style lang="stylus" scoped>

  .choose-btn
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
    .confirm--com
      float: left
      border-radius .2rem
      display: inline-block
      background: #ccc
      padding: .3rem .96rem
      border 1px solid
      &.make-sure
        color: #ffffff
        border-color #bbcdff
        background: #bbcdff
        transition .2s
        cursor: hand;
        &.hasActive
          background: #5b6aff
          border:1px solid #5b6aff
          cursor: pointer;
          &:hover
            background: #747cff
            border-color #747cff
      &.make-cancel
        background: #ffffff
        border-color #8590a6
        cursor: pointer;
        &:hover
          background: #f9f9f9
</style>
