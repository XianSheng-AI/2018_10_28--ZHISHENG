<template>
  <div class="personal-data">
    <div class="set-empty-head">
      <div class="">
        <span class="set-con-type">个人资料</span>
        <span class="fRight set-save">保存</span>
      </div>
    </div>
    <!--个人资料-->
    <div class="set-empty-content">
      <div class="set-list-wrapper">
        <ul class="set-list">
          <li class="set-item">
            <div class="set-item-box">
              <span class="set-per-type">用户名</span>
              <div class="set-inp-box">
                <div class="set-name">
                  <input class="set-inp" type="text"/>
                </div>
              </div>
              <span class="fRight">
                <svg-icon iconClass="icon-xieyoujian1"></svg-icon>
              </span>
            </div>
          </li>
          <li class="set-item">
            <div class="set-item-box">
              <span class="set-per-type">性别</span>
              <div class="set-radio-box">
                <RadioGroup v-model="disabledGroup">
                  <Radio label="男"></Radio>
                  <Radio class="set-sex" label="女"></Radio>
                </RadioGroup>
              </div>
              <span class="fRight">
                <svg-icon iconClass="icon-xieyoujian1"></svg-icon>
              </span>
            </div>
          </li>
          <li class="set-item">
            <div class="set-item-box">
              <span class="set-per-type">所在行业</span>
              <div class="set-inp-box">
                <span class="set-add-svg">
                  <svg-icon iconClass="icon-tianjia4"></svg-icon>
                </span>
                <span class="set-add-com">添加所在行业</span>
              </div>
              <span class="fRight">
                <svg-icon iconClass="icon-xieyoujian1"></svg-icon>
              </span>
            </div>
          </li>
          <li class="set-item">
            <div class="set-item-box">
              <span class="set-per-type">职业经历</span>
              <div class="set-inp-box chan-com">
                <span class="set-add-svg">
                  <svg-icon iconClass="icon-tianjia4"></svg-icon>
                </span>
                <span class="set-add-com">添加职业经历</span>
              </div>
              <span class="fRight">
                <svg-icon iconClass="icon-xieyoujian1"></svg-icon>
              </span>
            </div>
          </li>
          <li class="set-item">
            <div class="set-item-box">
              <span class="set-per-type">教育经历</span>
              <div class="set-inp-box chan-com">
                <span class="set-add-svg">
                  <svg-icon iconClass="icon-tianjia4"></svg-icon>
                </span>
                <span class="set-add-com">添加教育经历</span>
              </div>
              <span class="fRight">
                <svg-icon iconClass="icon-xieyoujian1"></svg-icon>
              </span>
            </div>
          </li>
          <li class="set-item">
            <div class="set-item-box">
              <span class="set-per-type">个人介绍</span>
              <div class="set-inp-box">
                <div class="set-name">
                  <input class="set-inp" type="text"/>
                </div>
              </div>
              <span class="fRight">
                <svg-icon iconClass="icon-xieyoujian1"></svg-icon>
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {Radio,RadioGroup} from 'iview'
  export default {
    name: "personal-data",
    data() {
      return {
        disabledGroup: '爪哇犀牛'
      }
    },
    components:{
      Radio,
      RadioGroup
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~@/common/stylus/mixins.styl'
  /*--通用--*/
  *
    padding: 0
    margin: 0
    border: none

  .fRight
    float: right

  /*-----*/
  .personal-data
    position: relative
    font-size .9735rem
    box-sizing border-box
    clearFix()

  .set-empty-head
    width: 100%
    box-sizing border-box
    padding: 1.4rem 2rem
    border-bottom 1px solid #ebebeb
    .set-con-type
      display: inline-block
      color: #1a1a1a
      font-weight 600

  .set-empty-content
    width: 100%
    padding: 0 2rem
    .set-list-wrapper
      .set-item
        color: #8590a6
        border-bottom 1px solid #ebebeb
        .set-item-box
          padding: 1.8rem 0
          /*background: #ccc*/
          .set-radio-box
            display: inline-block
            width:12rem
            /*background: #000*/
            .set-sex
              padding-left 3rem
          .set-per-type
            display: inline-block
            width: 9rem
          /*background #0ac2d2*/
          .set-inp-box
            display: inline-block
            border-radius .2rem
            cursor: pointer;
            .set-name
              padding:.3rem 1rem
              background: #f6f6f6
              border-radius .2rem
            .set-inp
              width 12rem
              display: block
            .set-add-svg
              display: inline-block
              .svg-icon
                fill #0084ff
                font-size 1rem
            .set-add-com
              display: inline-block
              color: #175199
            &:hover .set-add-com
              color: #5b6aff
            &:hover .svg-icon
              fill: #5b6aff


</style>
