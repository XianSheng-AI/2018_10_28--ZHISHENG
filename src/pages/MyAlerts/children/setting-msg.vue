<template>
    <div class="setting-msg">
      <div class="set-head">
        <span>信息设置</span>
      </div>
      <div class="set-body">
        <div class="set-body-empty">
          <ul class="set-ul">
            <li class="set-item">
              <span class="set-type">关注信息提醒&nbsp;</span>
              <span>
                <svg-icon iconClass="icon-bottom"></svg-icon>
              </span>
              <span class="explain">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--我关注的内容有新的动态时,我会收到通知</span>
              <span class="choose-btn">
                <i-switch>
                  <span slot="open">开</span>
                  <span slot="close">关</span>
                </i-switch>
              </span>
            </li>
            <li class="set-item">
              <span class="set-type">邀请信息提醒&nbsp;</span>
              <span>
                <svg-icon iconClass="icon-bottom"></svg-icon>
              </span>
              <span class="explain">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--我关注的内容有新的动态时,我会收到通知</span>
              <span class="choose-btn">
                <i-switch>
                  <span slot="open">开</span>
                  <span slot="close">关</span>
                </i-switch>
              </span>
            </li>
            <li class="set-item">
              <span class="set-type">评论信息提醒&nbsp;</span>
              <span>
                <svg-icon iconClass="icon-bottom"></svg-icon>
              </span>
              <span class="explain">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--我关注的内容有新的动态时,我会收到通知</span>
              <span class="choose-btn">
                <i-switch>
                  <span slot="open">开</span>
                  <span slot="close">关</span>
                </i-switch>
              </span>
            </li>
            <li class="set-item">
              <span class="set-type">收藏信息提醒&nbsp;</span>
              <span>
                <svg-icon iconClass="icon-bottom"></svg-icon>
              </span>
              <span class="explain">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--我关注的内容有新的动态时,我会收到通知</span>
              <span class="choose-btn">
                <i-switch>
                  <span slot="open">开</span>
                  <span slot="close">关</span>
                </i-switch>
              </span>
            </li>
            <li class="set-item">
              <span class="set-type">分享信息提醒&nbsp;</span>
              <span>
                <svg-icon iconClass="icon-bottom"></svg-icon>
              </span>
              <span class="explain">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--我关注的内容有新的动态时,我会收到通知</span>
              <span class="choose-btn">
                <i-switch>
                  <span slot="open">开</span>
                  <span slot="close">关</span>
                </i-switch>
              </span>
            </li>
          </ul>
        </div>
      </div>

    </div>
</template>

<script>
  import {Switch} from 'iview'
    export default {
        name: "setting-msg",
        data() {
            return {}
        },
        components:{
          iSwitch:Switch
        }
    }
</script>

<style lang="stylus" scoped>
.setting-msg
  width: 100%
  /*height:30rem*/
  /*background: #777*/
  border-radius .3rem
  .set-head
    width: 100%
    /*background: #555*/
    border-bottom 1px solid #f4f5f5
    span
      display: block
      padding .58rem 2rem
      color: #4c65fb
  .set-body
    width: 100%
    /*height:20rem*/
    /*background: #ccc*/
    /*padding-top 1rem*/
    .set-body-empty
      padding:0 2rem
      .set-ul
        .set-item
          /*background: #000*/
          padding .64rem 0
          border-bottom 1px solid #f4f5f5

          .set-type
            font-size 1rem
            color: #333639

          .explain
            font-size .7rem
            color: #a7a7a7

          .choose-btn
            display: block
            float: right
          .svg-icon
            font-size .8rem

















</style>
