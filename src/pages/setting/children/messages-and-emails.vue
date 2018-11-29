<template>
  <div class="setting-msg">
    <div class="set-head">
      <h2 class="parent-action-title">消息与邮件</h2>
      <!--summarize总结-->
      <div class="action-summarize">私信设置/邀请设置/赞同与赞赏/关注/邮件设置</div>
    </div>
    <div class="set-body">
      <div class="set-body-empty">
        <ul class="set-ul">
            <li class="set-item" :class="{'chan_col':change_bool_arr.focus_style}">
              <div class="set-item-box">
                <div class="set-item-title">
                  <h4 class="set-type">关注提醒&nbsp;</h4>
                  <!--<span class="hide-box-action" @click="show_box('focus')">-->
                  <!--<svg-icon iconClass="icon-bottom"></svg-icon>-->
                  <!--</span>-->
                  <div class="explain">我关注的内容有新的动态时,我会收到通知</div>
                  <div class="edit-btn">
                    <span class="edit-btn-com" @click="show_box('focus')">编辑</span>
                  </div>
                </div>
                <div class="edit-box" :class="{'show':change_bool_arr.focus_bool}">
                  <ul class="edit-box-ul">
                    <li class="edit-box-ul-li">
                      <h4 class="action-title">关注了我</h4>
                      <div class="child-explain">
                        <span class="explain-desc">我被谁关注时，我将收到消息通知</span>
                      </div>
                      <!--选择按钮-->
                      <div class="selectMsgBox">
                        <div class="sureBtn" @click="setMsgChooseMethod('focusMe')">
                          <span class="sureChoose">{{formData.setFocus.resultValue}}</span>
                          <span class="sureSvg">
                            <svg-icon iconClass="icon-ICON-"></svg-icon>
                          </span>

                        </div>
                        <!--隐藏选择框-->
                        <div class="selectBtn">
                          <div class="selectBtnItem">
                            <span class="electedSvg">
                              <svg-icon iconClass="icon-gouxuan4"></svg-icon>
                            </span>
                            <span class="itemBtnType">所有人</span>
                          </div>
                          <div class="selectBtnItem">
                            <span class="electedSvg">
                              <svg-icon iconClass="icon-gouxuan4"></svg-icon>
                            </span>
                            <span class="itemBtnType">关注我的人</span>
                          </div>
                          <div class="selectBtnItem">
                            <span class="electedSvg">
                              <svg-icon iconClass="icon-gouxuan4"></svg-icon>
                            </span>
                            <span class="itemBtnType">不接收通知</span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="edit-box-ul-li">
                      <h4 class="action-title">关注了我的专栏</h4>
                      <div class="child-explain">
                        <span class="explain-desc">我的专栏被谁关注时，我会收到消息通知</span>
                      </div>
                    </li>
                    <li class="edit-box-ul-li">
                      <h4 class="action-title">专栏更新文章</h4>
                      <div class="child-explain">
                        <span class="explain-desc">关注的专栏有新文章时，我会收到消息通知</span>
                      </div>
                    </li>
                    <li class="edit-box-ul-li">
                      <h4 class="action-title">关注的问题有新回答</h4>
                      <div class="child-explain">
                        <span class="explain-desc">我的收藏夹被关注时，我将收到消息通知</span>
                      </div>
                    </li>
                    <li class="edit-box-ul-li">
                      <h4 class="action-title">关注了我的问题</h4>
                      <div class="child-explain">
                        <span class="explain-desc">我的问题被关注时，我将收到消息通知</span>
                      </div>
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
        formData:{
          setFocus:{
            resultValue:'所有人'
          },
          setInvite:{
            resultValue:''
          }
        },
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
      setMsgChooseMethod(typeValue){
        alert(typeValue)
      },
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
      border-bottom 1px solid #ebebeb
      padding:1.2rem 2rem
      /*background: #ccc*/
      .parent-action-title
        color: #1a1a1a;
        font-size: 19px;
        font-weight: 600;
        height: 26px;
        line-height: 26px;
        margin-bottom: 9px;
      .action-summarize
        font-size .875rem
        color: #8590a6
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
              .set-item-title
                position: relative
                .edit-btn
                  position: absolute
                  top:50%
                  margin-top :-12px
                  right:0
                  cursor: pointer;
                .edit-btn-com
                  color: #3b79ff
                  display: block
                  &:hover
                    color: #313a7a
              .set-type
                font-size 1rem
                font-weight 600
                color: #333639
                margin-bottom .4rem
              .hide-box-action
                /*display: none*/
              .explain
                /*background: #ccc*/
                font-size .875rem
                color: #8590a6
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
                    position: relative
                    &:last-child
                      padding-bottom 0
                    .action-title
                      margin-bottom .2rem
                      font-size 0.875rem
                      color: #1a1a1a;
                      font-weight: 400;
                      height: 21px;
                      line-height: 21px;
                    .child-explain
                      .explain-desc
                        color: #8590a6
                        font-size .875rem
                    .selectMsgBox
                      position: absolute
                      top:50%
                      right:0
                      margin-top -25.8px
                      background: #ffffff
                      z-index:100
                      .sureBtn
                        position: relative
                        cursor: pointer;
                        padding:.8rem 1rem
                        border 1px solid #ebebeb
                        .sureChoose
                          display: inline-block
                          padding:0 2.4rem 0 .1rem
                          color: #8590a6
                          font-size .875rem
                        .sureSvg
                          .svg-icon
                            fill #8590a6
                            font-size 1rem
                      .selectBtn
                        display: none
                        background: #ffffff
                        z-index:101
                        position: absolute
                        top: -100%
                        right: 0
                        /*padding:1rem 1.8rem*/
                        width: 118%
                        padding:.5rem 0
                        border: 1px solid #ebebeb;
                        border-radius: 4px;
                        box-shadow: 0 5px 20px rgba(26,26,26,.1);
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
                            left:9%
                          .itemBtnType
                            color: #1a1a1a


</style>
