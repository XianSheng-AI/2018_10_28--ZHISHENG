<template>
  <div class="setting-msg">
    <!--标题-->
    <div class="set-head">
      <h2 class="parent-action-title">修改密码</h2>
      <!--summarize总结-->
      <div class="action-summarize">修改密码</div>
    </div>
    <!--主体内容-->
    <div class="set-body">
      <div class="set-body-empty">
        <div class="set-item-title">
          <h4 class="set-type">安全修改&nbsp;</h4>
          <div class="explain">修改密码，帐号更安全 注意：为保证帐号安全，需进行二次验证。</div>
        </div>
        <div class="content-wrapper">
          <div class="set-empty">
            <ul class="content-list">
              <li class="item">
                <div class="item-head">
                  <h4 class="set-item">
                    <span class="svg">
                      <svg-icon iconClass="icon-jiumima"></svg-icon>
                    </span>
                    旧密码
                  </h4>
                  <!--输入框-->
                  <div class="input-part">
                    <div class="input-box input-password">
                      <input type="password" class="password" placeholder="请输入原密码">
                    </div>
                  </div>
                  <!--input-->
                  <!--<div class="explain">未绑定</div>-->
                  <div class="edit-btn">
                    <span class="edit-btn-com">忘记密码?</span>
                  </div>
                </div>
                <!--绑定手机展开-->
              </li>
              <li class="item">
                <div class="item-head">
                  <h4 class="set-item">
                    <span class="svg">
                    <svg-icon iconClass="icon-querenmima5"></svg-icon>
                    </span>
                    新密码
                  </h4>
                  <!--输入框-->
                  <div class="input-part">
                    <div class="input-box input-password">
                      <input type="password" class="password" placeholder="请输入新密码">
                    </div>
                  </div>
                  <!--input-->
                <!--<div class="explain">未绑定</div>-->
                  <div class="edit-btn">
                    <!--<span class="edit-btn-com">绑定</span>-->
                  </div>
                </div>
                <!--绑定手机展开-->
              </li>
              <li class="item">
                <div class="item-head">
                  <h4 class="set-item">
                    <span class="svg">
                    <svg-icon iconClass="icon-liuquerenmima"></svg-icon>
                    </span>
                    确认密码
                  </h4>
                  <!--输入框-->
                  <div class="input-part">
                    <div class="input-box input-password">
                      <input type="password" class="password" placeholder="确认新密码">
                    </div>
                  </div>
                  <!--input-->
                  <!--<div class="explain">未绑定</div>-->
                  <div class="edit-btn">
                    <!--<span class="edit-btn-com">绑定</span>-->
                  </div>
                </div>
                <!--绑定手机展开-->
              </li>
              <li class="item last-item">
                <!--密码填写完的确认按钮-->
                <div class="reset--sub-part">
                  <div class="submit-btn">保存修改</div>
                </div>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "change-password",
    data() {
      return {}
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
      padding: 1.2rem 2rem
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
        .set-item-title
          padding:1rem 2rem
          .set-type
            font-size: 1rem;
            font-weight: 600;
            color: #333639;
            margin-bottom: 0.4rem;
          .explain
            font-size: 0.875rem;
            color: #8590a6;

        .content-wrapper
          .set-empty
            .content-list
              .item
                padding: 0 4rem
                /*background: #ccc*/
                &.last-item
                  margin:2rem 0
                .item-head
                  position: relative
                  padding: 1rem 0
                  border-bottom 1px solid #ebebeb
                  .set-item
                    display: inline-block
                    font-weight normal
                    color: #1a1a1a
                    width:10rem
                    .svg
                      .svg-icon
                        font-size 1.4rem
                        fill #da475c
                  .explain
                    font-size .875rem
                    color: #8590a6
                  .input-part
                    /*background: #000*/
                    display: inline-block
                    .input-box
                      &.input-password
                      .password
                        display: block


                  .edit-btn
                    position: absolute
                    right: 0
                    top: 50%
                    margin-top -12px
                    cursor: pointer;
                    .edit-btn-com
                      color: #3b79ff
                      display: block
                      &:hover
                        color: #313a7a
          .reset--sub-part
            float: right
            .submit-btn
              border-radius .2rem
              background: #da475c
              padding:.6rem 1rem
              color #fff
              cursor: pointer;
              -webkit-transition: .2s
              -moz-transition: .2s
              -ms-transition: .2s
              -o-transition: .2s
              transition: .2s
              &:hover
                background: #b44054
  
</style>
