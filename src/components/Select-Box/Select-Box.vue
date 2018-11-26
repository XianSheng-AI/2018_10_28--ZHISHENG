<template>
  <div class="hide--box">
    <div class="hide-empty">
      <div class="hide-list">
        <div class="hide-list-item" :style="'height:'+selectBox_data.HEI">
          <vue-scroll :ops="ops">
            <span class="edu-type" v-for="(item,index) in selectBox_data.ARRAY_DATA" :key="selectBox_data.ARRAY_DATA[index]">{{item}}</span>
          </vue-scroll>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        props:{
          selectBox_data:{
            type: Object
          }
        },
        name: "Select-Box",
        data() {
            return {
              ops: {
              }
            }
        }
    }
</script>

<style lang="stylus" scoped>
  .hide--box
    color: #8590a6
    position: absolute;
    bottom 2.6rem
    left 0
    background: #fff;
    border: 1px solid #ebebeb;
    border-radius: 4px;
    box-shadow: 0 5px 20px rgba(26,26,26,.1);
    box-sizing border-box
    width: 100%
    overflow: hidden
    .hide-empty
      padding:.5rem 0
      .hide-list
        .hide-list-item
          height:14.125rem
          .edu-type
            width: inherit
            display: block
            padding:.6rem 1.4rem
            cursor: pointer;
            /*background: #ccc*/
            &:hover
              background: #f6f6f6
</style>
