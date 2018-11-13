<template>
    <div class="setting-msg">
      <div class="set-head">
        <span>信息设置</span>
      </div>
      <div class="set-body">
        <div class="set-body-empty">
          <ul class="set-ul">
            <vue-scroll :ops="ops">
              <li class="set-item" :class="{'chan_col':change_bool_arr.focus_style}">
                <div class="set-item-box">
                  <span class="set-type">关注提醒&nbsp;</span>
                  <span class="hide-box-action" @click="show_box('focus')">
                  <svg-icon iconClass="icon-bottom"></svg-icon>
                </span>
                  <span class="explain">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我关注的内容有新的动态时,我会收到通知</span>
                  <span class="choose-btn">
                  <i-switch>
                    <span slot="open">开</span>
                    <span slot="close">关</span>
                  </i-switch>
                </span>
                  <!--hide-box-->
                  <div class="edit-box" :class="{'show':change_bool_arr.focus_bool}">
                    <ul class="edit-box-ul">
                      <li class="edit-box-ul-li">
                        <h4>关注了我</h4>
                      </li>
                      <li class="edit-box-ul-li">
                        <h4>关注了我的专栏</h4>
                      </li>
                      <li class="edit-box-ul-li">
                        <h4>关注了我收藏夹</h4>
                      </li>
                      <li class="edit-box-ul-li">
                        <h4>关注了我的问题</h4>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="set-item" :class="{'chan_col':change_bool_arr.invite_style}">
                <div class="set-item-box">
                  <span class="set-type">邀请提醒&nbsp;</span>
                  <span class="hide-box-action" @click="show_box('invite')">
                  <svg-icon iconClass="icon-bottom"></svg-icon>
                </span>
                  <span class="explain">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当别人邀请我回答或提到我时,我会收到通知</span>
                  <span class="choose-btn">
                  <i-switch>
                    <span slot="open">开</span>
                    <span slot="close">关</span>
                  </i-switch>
                </span>
                  <!--hide-box-->
                  <div class="edit-box" :class="{'show':change_bool_arr.invite_bool}">
                    <ul class="edit-box-ul">
                      <li class="edit-box-ul-li">
                        <h4>邀请我回答问题</h4>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="set-item" :class="{'chan_col':change_bool_arr.comment_style}">
                <div class="set-item-box">
                  <span class="set-type">评论提醒&nbsp;</span>
                  <span class="hide-box-action" @click="show_box('comment')">
                  <svg-icon iconClass="icon-bottom"></svg-icon>
                </span>
                  <span class="explain">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当别人对我发的内容点赞时,我会收到通知</span>
                  <span class="choose-btn">
                  <i-switch>
                    <span slot="open">开</span>
                    <span slot="close">关</span>
                  </i-switch>
                </span>
                  <!--hide-box-->
                  <div class="edit-box" :class="{'show':change_bool_arr.comment_bool}">
                    <ul class="edit-box-ul">
                      <li class="edit-box-ul-li">
                        <h4>谁评论了我的文章</h4>
                      </li>
                      <li class="edit-box-ul-li">
                        <h4>谁评论了我的星点</h4>
                      </li>
                      <li class="edit-box-ul-li">
                        <h4>谁评论了我的回答</h4>
                      </li>
                      <li class="edit-box-ul-li">
                        <h4>谁评论了我的专栏</h4>
                      </li>
                    </ul>
                  </div>
                </div>

              </li>
              <li class="set-item" :class="{'chan_col':change_bool_arr.like_style}">
                <div class="set-item-box">
                  <span class="set-type">点赞提醒&nbsp;</span>
                  <span class="hide-box-action" @click="show_box('like')">
                  <svg-icon iconClass="icon-bottom"></svg-icon>
                </span>
                  <span class="explain">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当别人对我发的内容点赞时,我会收到通知</span>
                  <span class="choose-btn">
                  <i-switch>
                    <span slot="open">开</span>
                    <span slot="close">关</span>
                  </i-switch>
                </span>
                  <!--hide-box-->
                  <div class="edit-box" :class="{'show':change_bool_arr.like_bool}">
                    <ul class="edit-box-ul">
                      <li class="edit-box-ul-li">
                        <h4>谁赞了我的文章</h4>
                      </li>
                      <li class="edit-box-ul-li">
                        <h4>谁赞了我的星点</h4>
                      </li>
                      <li class="edit-box-ul-li">
                        <h4>谁赞了我的问题</h4>
                      </li>
                      <li class="edit-box-ul-li">
                        <h4>谁赞了我的回答</h4>
                      </li>
                      <li class="edit-box-ul-li">
                        <h4>谁赞了我的评论</h4>
                      </li>
                      <li class="edit-box-ul-li">
                        <h4>谁赞了我的笔记</h4>
                      </li>
                      <li class="edit-box-ul-li">
                        <h4>谁赞了我的想法</h4>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="set-item" :class="{'chan_col':change_bool_arr.collect_style}">
                <div class="set-item-box">
                  <span class="set-type">收藏提醒&nbsp;</span>
                  <span class="hide-box-action" @click="show_box('collect')">
                    <svg-icon iconClass="icon-bottom"></svg-icon>
                  </span>
                  <span class="explain">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当别人收藏我发的任何内容时,我会收到通知</span>
                  <span class="choose-btn">
                  <i-switch>
                    <span slot="open">开</span>
                    <span slot="close">关</span>
                  </i-switch>
                </span>
                  <!--hide-box-->
                  <div class="edit-box" :class="{'show':change_bool_arr.collect_bool}">
                    <ul class="edit-box-ul">
                      <li class="edit-box-ul-li">
                        <h4>谁收藏了我的文章</h4>
                      </li>
                      <li class="edit-box-ul-li">
                        <h4>谁收藏了我的收藏夹</h4>
                      </li>
                      <li class="edit-box-ul-li">
                        <h4>谁收藏了我的回答</h4>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="set-item" :class="{'chan_col':change_bool_arr.share_style}">
                <div class="set-item-box">
                  <span class="set-type">分享提醒&nbsp;</span>
                  <span class="hide-box-action" @click="show_box('share')">
                  <svg-icon iconClass="icon-bottom"></svg-icon>
                </span>
                  <span class="explain">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当别人转发了我的内容时,我会收到通知</span>
                  <span class="choose-btn">
                  <i-switch>
                    <span slot="open">开</span>
                    <span slot="close">关</span>
                  </i-switch>
                </span>
                  <!--hide-box-->
                  <div class="edit-box" :class="{'show':change_bool_arr.share_bool}">
                    <ul class="edit-box-ul">
                      <li class="edit-box-ul-li">
                        <h4>谁收藏了我的文章</h4>
                      </li>
                      <li class="edit-box-ul-li">
                        <h4>谁收藏了我的收藏夹</h4>
                      </li>
                      <li class="edit-box-ul-li">
                        <h4>谁收藏了我的回答</h4>
                      </li>
                    </ul>
                  </div>
                </div>

              </li>
            </vue-scroll>
          </ul>
        </div>
      </div>

    </div>
</template>

<script>
  import {Switch} from 'iview'
  import change from '../../../util/util'
    export default {
        name: "setting-msg",
        data() {
            return {
              ops:{},
              change_bool_arr:{
                collect_bool:false,
                collect_style:false,

                comment_bool:false,
                comment_style:false,

                focus_bool:false,
                focus_style:false,

                share_bool:false,
                share_style:false,

                like_bool:false,
                like_style:false,

                setting_bool:false,
                setting_style:false,

                invite_bool:false,
                invite_style:false,
              }

            }
        },
        components:{
          iSwitch:Switch
        },
      computed:{

      },
      created(){
        // this.start();
      },
      mounted(){
        // this.finish()
      },
      methods :{
        show_box(SE){
          if(SE==='focus'){
            if(this.change_bool_arr.focus_bool){
              this.$set(this.change_bool_arr,'focus_bool',false)
              this.$set(this.change_bool_arr,'focus_style',false)
            }else {
              this.$set(this.change_bool_arr,'focus_bool',true)
              this.$set(this.change_bool_arr,'focus_style',true)
            }
          }

          if(SE==='collect'){
            if(this.change_bool_arr.collect_bool){
              this.$set(this.change_bool_arr,'collect_bool',false)
              this.$set(this.change_bool_arr,'collect_style',false)
            }else {
              this.$set(this.change_bool_arr,'collect_bool',true)
              this.$set(this.change_bool_arr,'collect_style',true)
            }
          }

          if(SE==='invite'){
            if(this.change_bool_arr.invite_bool){
              this.$set(this.change_bool_arr,'invite_bool',false)
              this.$set(this.change_bool_arr,'invite_style',false)
            }else {
              this.$set(this.change_bool_arr,'invite_bool',true)
              this.$set(this.change_bool_arr,'invite_style',true)
            }
          }

          if(SE==='comment'){
            if(this.change_bool_arr.comment_bool){
              this.$set(this.change_bool_arr,'comment_bool',false)
              this.$set(this.change_bool_arr,'comment_style',false)
            }else {
              this.$set(this.change_bool_arr,'comment_bool',true)
              this.$set(this.change_bool_arr,'comment_style',true)
            }
          }

          if(SE==='like'){
            if(this.change_bool_arr.like_bool){
              this.$set(this.change_bool_arr,'like_bool',false)
              this.$set(this.change_bool_arr,'like_style',false)
            }else {
              this.$set(this.change_bool_arr,'like_bool',true)
              this.$set(this.change_bool_arr,'like_style',true)
            }
          }

          if(SE==='share'){
            if(this.change_bool_arr.share_bool){
              this.$set(this.change_bool_arr,'share_bool',false)
              this.$set(this.change_bool_arr,'share_style',false)
            }else {
              this.$set(this.change_bool_arr,'share_bool',true)
              this.$set(this.change_bool_arr,'share_style',true)
            }
          }
        }


        // start () {
        //   this.$Loading.start();
        // },
        // finish () {
        //   this.$Loading.finish();
        // },
        // error () {
        //   this.$Loading.error();
        // }
      }

    }
</script>

<style lang="stylus" scoped>
  @import '~@/common/stylus/mixins.styl'
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
      padding .6rem 2rem
      color: #4c65fb
  .set-body
    noSelectText()
    width: 100%
    /*height:20rem*/
    /*background: #ccc*/
    /*padding-top 1rem*/
    .set-body-empty
      /*padding:0 2rem*/
      .set-ul
        height:40rem
        .set-item
          padding 1.2rem 0
          border-bottom 1px solid #ebebeb
          &.chan_col
            background: rgba(133,144,166,.08);
          .set-item-box
            padding 0 2rem
            .set-type
              font-size 1rem
              font-weight 600
              color: #333639
            .hide-box-action
              /*display: none*/
            .explain
              font-size .875rem
              color: #8590a6

            .choose-btn
              display: block
              float: right
            .svg-icon
              font-size .8rem
            .edit-box
              display: none
              margin-top 1.4rem
              width: 100%
              /*height:10rem*/
              /*background: #ccc*/
              padding:0 0 0 1.4rem
              &.show
                display: block
              .edit-box-ul
                .edit-box-ul-li
                  border-top 1px solid #ebebeb
                  padding:1rem 0
                  &:last-child
                    padding-bottom 0


                  h4
                    font-size 0.875
                    color: #1a1a1a;
                    font-weight: 400;
                    height: 21px;
                    line-height: 21px;
                    margin: 0;

</style>
