<template>
  <div class="clickSelect">
    <!--<div class="sureBtn" @click="setMsgChooseMethod('focusMe')">-->
    <div class="sureBtn" @click="showSelectBox()">
      <span class="sureChoose"
        ref="selectedId"
      >{{formData.selectedValue}}</span>
      <span class="sureSvg">
        <svg-icon iconClass="icon-ICON-"></svg-icon>
      </span>
    </div>
    <!--隐藏选择框-->
    <!--<div class="selectBtn" v-if="bridgeValue.showEditBool">-->
    <div class="selectBtn" v-if="bridgeValue.showSelectBool">
      <!--循环-->
      <div class="selectBtnItem"
           v-for="(item,index) in formData.selectValueArr"
           @click="showSelectBox(item,index)"
      >
        <span class="electedSvg" v-if="bridgeValue.tick===index">
          <svg-icon iconClass="icon-gouxuan4"></svg-icon>
        </span>
        <span class="itemBtnType">{{item}}</span>
      </div>
      <!--END-->
    </div>
  </div>
</template>

<script>

  export default {
    name: "clickSelect",
    data() {
      return {
        formData:{
          selectedValue:'所有人',
          selectValueArr:['所有人','关注我的人','不接收通知']
        },
        bridgeValue:{
          showSelectBool:false,
          tick:0
        },
      }
    },
    methods:{
      showSelectBox(value,index){
        if(value){
          this.$set(this.formData,'selectedValue',value);
          this.$set(this.bridgeValue,'tick',index);
        }
        this.$set(this.bridgeValue,'showSelectBool',!this.bridgeValue.showSelectBool)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .clickSelect
    width:10.25rem

    .sureBtn
      /*z-index: 1*/
      border-radius .2rem
      position: relative
      cursor: pointer;
      padding: .8rem .9rem
      border 1px solid #ebebeb
      .sureChoose
        display: inline-block
        padding: 0 2.4rem 0 .2rem
        color: #8590a6
        font-size .875rem
      .sureSvg
        float: right
        .svg-icon
          fill #8590a6
          font-size 1rem
    .selectBtn
      background: #ffffff
      z-index: 403
      position: absolute
      top: -100%
      right: 0
      /*padding:1rem 1.8rem*/
      width:102%
      padding: .5rem 0
      border: 1px solid #ebebeb;
      border-radius: 4px;
      box-shadow: 0 5px 20px rgba(26, 26, 26, .1);
      .selectBtnItem
        text-align center
        position: relative
        padding .8rem 1.6rem
        cursor: pointer;
        display: block
        &:hover
          background: #f4f8fb
        .electedSvg
          position: absolute
          left: 12%
        .itemBtnType
          color: #1a1a1a

</style>
