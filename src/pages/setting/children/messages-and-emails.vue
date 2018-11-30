<template>
  <div class="setting-msg">
    <div class="set-head">
      <h2 class="parent-action-title">消息与邮件</h2>
      <!--summarize总结-->
      <div class="action-summarize">关注设置/邀请评论设置/赞同与踩/私信设置/邮件设置</div>
    </div>
    <div class="set-body">
      <div class="set-body-empty">
        <ul class="set-ul">
            <li class="set-item" :class="{'chan_col':change_bool_arr.focus_style}">
              <div class="set-item-box">
                <div class="set-item-title">
                  <h4 class="set-type">关注提醒&nbsp;</h4>
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
                        <click-select></click-select>
                        <!--END-->
                      </div>
                    </li>
                    <li class="edit-box-ul-li">
                      <h4 class="action-title">关注了我的专栏</h4>
                      <div class="child-explain">
                        <span class="explain-desc">我的专栏被谁关注时，我会收到消息通知</span>
                      </div>
                      <!--选择按钮-->
                      <div class="selectMsgBox">
                        <click-select></click-select>
                        <!--END-->
                      </div>
                    </li>
                    <li class="edit-box-ul-li">
                      <h4 class="action-title">专栏更新文章</h4>
                      <div class="child-explain">
                        <span class="explain-desc">关注的专栏有新文章时，我会收到消息通知</span>
                      </div>
                      <!--选择按钮-->
                      <div class="selectMsgBox">
                        <click-select></click-select>
                        <!--END-->
                      </div>
                    </li>
                    <li class="edit-box-ul-li">
                      <h4 class="action-title">关注的问题有新回答</h4>
                      <div class="child-explain">
                        <span class="explain-desc">我的收藏夹被关注时，我将收到消息通知</span>
                      </div>
                      <!--选择按钮-->
                      <div class="selectMsgBox">
                        <click-select></click-select>
                        <!--END-->
                      </div>
                    </li>
                    <li class="edit-box-ul-li">
                      <h4 class="action-title">关注了我的问题</h4>
                      <div class="child-explain">
                        <span class="explain-desc">我的问题被关注时，我将收到消息通知</span>
                      </div>
                      <!--选择按钮-->
                      <div class="selectMsgBox">
                        <click-select></click-select>
                        <!--END-->
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          <li class="set-item" :class="{'chan_col':change_bool_arr.inviteComment_bool}">

            <div class="set-item-box">
              <div class="set-item-title">
                <h4 class="set-type">邀请/评论&nbsp;</h4>
                <div class="explain">当别人邀请我回答或评论提到我时,我会收到通知</div>
                <div class="edit-btn">
                  <span class="edit-btn-com" @click="show_box('inviteComment')">编辑</span>
                </div>
              </div>
              <!--hide-box-->
              <div class="edit-box" :class="{'show':change_bool_arr.inviteComment_style}">
                <ul class="edit-box-ul">
                  <li class="edit-box-ul-li">
                    <h4 class="action-title">邀请我回答问题</h4>
                    <div class="child-explain">
                      <span class="explain-desc">被谁邀请回答问题时，我将收到消息通知</span>
                    </div>
                    <!--选择按钮-->
                    <div class="selectMsgBox">
                      <click-select></click-select>
                      <!--END-->
                    </div>
                  </li>
                  <li class="edit-box-ul-li">
                    <h4 class="action-title">提到我</h4>
                    <div class="child-explain">
                      <span class="explain-desc">被谁提及时，我将收到消息通知</span>
                    </div>
                    <!--选择按钮-->
                    <div class="selectMsgBox">
                      <click-select></click-select>
                      <!--END-->
                    </div>
                  </li>
                  <li class="edit-box-ul-li">
                    <h4 class="action-title">评论或回复我</h4>
                    <div class="child-explain">
                      <span class="explain-desc">被谁评论或回复时，我将收到消息通知</span>
                    </div>
                    <!--选择按钮-->
                    <div class="selectMsgBox">
                      <click-select></click-select>
                      <!--END-->
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li class="set-item" :class="{'chan_col':change_bool_arr.agreeNo_bool}">

            <div class="set-item-box">
              <div class="set-item-title">
                <h4 class="set-type">赞同/踩&nbsp;</h4>
                <div class="explain">当别人赞同或者踩时,我会收到通知</div>
                <div class="edit-btn">
                  <span class="edit-btn-com" @click="show_box('agreeNo')">编辑</span>
                </div>
              </div>
              <!--hide-box-->
              <div class="edit-box" :class="{'show':change_bool_arr.agreeNo_style}">
                <ul class="edit-box-ul">
                  <li class="edit-box-ul-li">
                    <h4 class="action-title">赞同我的回答</h4>
                    <div class="child-explain">
                      <span class="explain-desc">我的回答被谁赞同时，我会收到消息通知</span>
                    </div>
                    <!--选择按钮-->
                    <div class="selectMsgBox">
                      <click-select></click-select>
                      <!--END-->
                    </div>
                  </li>
                  <li class="edit-box-ul-li">
                    <h4 class="action-title">赞了我的内容</h4>
                    <div class="child-explain">
                      <span class="explain-desc">我的评论/专栏文章/星点被谁点赞时，我会收到消息通知</span>
                    </div>
                    <!--选择按钮-->
                    <div class="selectMsgBox">
                      <click-select></click-select>
                      <!--END-->
                    </div>
                  </li>
                  <li class="edit-box-ul-li">
                    <h4 class="action-title">踩我</h4>
                    <div class="child-explain">
                      <span class="explain-desc">我的内容被谁‘踩’时，我将收到消息通知</span>
                    </div>
                    <!--选择按钮-->
                    <div class="selectMsgBox">
                      <click-select></click-select>
                      <!--END-->
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li class="set-item" :class="{'chan_col':change_bool_arr.privateLetter_bool}">

            <div class="set-item-box">
              <div class="set-item-title">
                <h4 class="set-type">私信设置&nbsp;</h4>
                <div class="explain">当别人赞同或者踩时,我会收到通知</div>
                <div class="edit-btn">
                  <span class="edit-btn-com" @click="show_box('privateLetter')">编辑</span>
                </div>
              </div>
              <!--hide-box-->
              <div class="edit-box" :class="{'show':change_bool_arr.privateLetter_style}">
                <ul class="edit-box-ul">
                  <li class="edit-box-ul-li">
                    <h4 class="action-title">私信设置</h4>
                    <div class="child-explain">
                      <span class="explain-desc">允许谁给我发私信</span>
                    </div>
                    <!--选择按钮-->
                    <div class="selectMsgBox">
                      <click-select></click-select>
                      <!--END-->
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li class="set-item" :class="{'chan_col':change_bool_arr.email_bool}">

            <div class="set-item-box">
              <div class="set-item-title">
                <h4 class="set-type">邮件设置&nbsp;</h4>
                <div class="explain">重要事件发生时，我将会收到邮件提醒</div>
                <div class="edit-btn">
                  <span class="edit-btn-com" @click="show_box('email')">编辑</span>
                </div>
              </div>
              <!--提示框-->
              <!--hide-box-->
              <!--<div class="edit-box" :class="{'show':change_bool_arr.inviteComment_style}">-->
                <!--<ul class="edit-box-ul">-->
                  <!--<li class="edit-box-ul-li">-->
                    <!--<h4 class="action-title">私信设置</h4>-->
                    <!--<div class="child-explain">-->
                      <!--<span class="explain-desc">允许谁给我发私信</span>-->
                    <!--</div>-->
                    <!--&lt;!&ndash;选择按钮&ndash;&gt;-->
                    <!--<div class="selectMsgBox">-->
                      <!--<click-select></click-select>-->
                      <!--&lt;!&ndash;END&ndash;&gt;-->
                    <!--</div>-->
                  <!--</li>-->
                <!--</ul>-->
              <!--</div>-->
            </div>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
  // import {Switch} from 'iview'
  import clickSelect from '@/components/clickSelect/clickSelect.vue'
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
          agreeNo_bool:false,
          agreeNo_style:false,

          inviteComment_bool:false,
          inviteComment_style:false,

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
      // iSwitch:Switch,
      clickSelect
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
        this.bridgeValue.showEditBool=!this.bridgeValue.showEditBool;
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
        //邀请/评论
        if(SE==='inviteComment'){
          if(this.change_bool_arr.inviteComment_bool){
            this.$set(this.change_bool_arr,'inviteComment_bool',false)
            this.$set(this.change_bool_arr,'inviteComment_style',false)
          }else {
            this.$set(this.change_bool_arr,'inviteComment_bool',true)
            this.$set(this.change_bool_arr,'inviteComment_style',true)
          }
        }

        if(SE==='agreeNo'){
          if(this.change_bool_arr.agreeNo_bool){
            this.$set(this.change_bool_arr,'agreeNo_bool',false)
            this.$set(this.change_bool_arr,'agreeNo_style',false)
          }else {
            this.$set(this.change_bool_arr,'agreeNo_bool',true)
            this.$set(this.change_bool_arr,'agreeNo_style',true)
          }
        }

        if(SE==='privateLetter'){
          if(this.change_bool_arr.privateLetter_bool){
            this.$set(this.change_bool_arr,'privateLetter_bool',false)
            this.$set(this.change_bool_arr,'privateLetter_style',false)
          }else {
            this.$set(this.change_bool_arr,'privateLetter_bool',true)
            this.$set(this.change_bool_arr,'privateLetter_style',true)
          }
        }

        if(SE==='email'){
          if(this.change_bool_arr.email_bool){
            this.$set(this.change_bool_arr,'email_bool',false)
            this.$set(this.change_bool_arr,'email_style',false)
          }else {
            this.$set(this.change_bool_arr,'email_bool',true)
            this.$set(this.change_bool_arr,'email_style',true)
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
      .set-body-empty
        .set-ul
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
                padding:0 0 0 1.4rem
                &.show
                  display: block
                .edit-box-ul
                  .edit-box-ul-li
                    border-top 1px solid #ebebeb
                    padding:1rem 0
                    position: relative
                    /*&:last-child*/
                      /*padding-bottom 0*/
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


</style>
