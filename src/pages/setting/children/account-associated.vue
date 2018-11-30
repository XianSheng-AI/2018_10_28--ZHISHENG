<template>
  <div class="setting-msg">
    <!--标题-->
    <div class="set-head">
      <h2 class="parent-action-title">账号关联</h2>
      <!--summarize总结-->
      <div class="action-summarize">手机/邮箱/微信/微博/QQ关联设置</div>
    </div>
    <!--主体内容-->
    <div class="set-body">
      <div class="set-body-empty">
        <div class="set-item-title">
          <h4 class="set-type">绑定关联&nbsp;</h4>
          <div class="explain">绑定手机和邮箱，并设置密码，帐号更安全 注意：为保证帐号安全，需进行二次验证。</div>
        </div>
        <!--账号绑定关联盒子-->
        <div class="content-wrapper">
          <div class="set-empty">
            <ul class="content-list">
              <li class="item">
                <div class="item-head">
                  <h4 class="set-item">
                    <span class="svg">
                      <svg-icon iconClass="icon-shouji9"></svg-icon>
                    </span>
                    绑定手机
                  </h4>
                  <div class="explain">未绑定</div>
                  <div class="edit-btn">
                    <span class="edit-btn-com">绑定</span>
                  </div>
                </div>
                <!--绑定手机展开-->
              </li>
              <li class="item">
                <div class="item-head">
                  <h4 class="set-item">
                    <span class="svg">
                      <svg-icon iconClass="icon-LiveHotmailyouxiang"></svg-icon>
                    </span>
                    绑定邮箱
                  </h4>
                  <div class="explain">未绑定</div>
                  <div class="edit-btn">
                    <span class="edit-btn-com">绑定</span>
                  </div>
                </div>
                <!--绑定邮箱展开-->
              </li>
              <li class="item">
                <div class="item-head">
                  <h4 class="set-item">
                    <span class="svg">
                      <svg-icon iconClass="icon-list-icon-github"></svg-icon>
                    </span>
                    绑定GitHub
                  </h4>
                  <div class="explain">未绑定</div>
                  <div class="edit-btn">
                    <span class="edit-btn-com">绑定</span>
                  </div>
                </div>
                <!--绑定微信展开-->
              </li>
              <li class="item">
                <div class="item-head">
                  <h4 class="set-item">
                    <span class="svg">
                      <svg-icon iconClass="icon-weixin-copy"></svg-icon>
                    </span>
                    绑定微信
                  </h4>
                  <div class="explain">未绑定</div>
                  <div class="edit-btn">
                    <span class="edit-btn-com">绑定</span>
                  </div>
                </div>
                <!--绑定微信展开-->
              </li>
              <li class="item">
                <div class="item-head">
                  <h4 class="set-item">
                    <span class="svg">
                      <svg-icon iconClass="icon-weibo12"></svg-icon>
                    </span>
                    绑定微博
                  </h4>
                  <div class="explain">未绑定</div>
                  <div class="edit-btn">
                    <span class="edit-btn-com">绑定</span>
                  </div>
                </div>
                <!--绑定微博展开-->
              </li>
              <li class="item">
                <div class="item-head">
                  <h4 class="set-item">
                    <span class="svg">
                      <svg-icon iconClass="icon-QQ11"></svg-icon>
                    </span>
                    绑定腾讯QQ
                  </h4>
                  <div class="explain">未绑定</div>
                  <div class="edit-btn">
                    <span class="edit-btn-com">绑定</span>
                  </div>
                </div>
                <!--绑定微博展开-->
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
        name: "account-associated",
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
                padding:0 4rem
                /*background: #ccc*/

                .item-head
                  position: relative
                  padding:1rem 0
                  border-bottom 1px solid #ebebeb
                  .set-item
                    font-weight normal
                    color: #1a1a1a
                    .svg
                      .svg-icon
                        font-size 1.4rem
                        fill #da475c
                  .explain
                    font-size .875rem
                    color: #8590a6
                  .edit-btn
                    position: absolute
                    right:0
                    top: 50%
                    margin-top -12px
                    cursor: pointer;
                    .edit-btn-com
                      color: #3b79ff
                      display: block
                      &:hover
                        color: #313a7a

        /* .set-item
           padding 1.2rem 0
           border-bottom 1px solid #ebebeb
           background: #ccc
            .set-item-box
              padding:0 2rem
              .set-item-title
                position: relative
                .set-type
                  font-size: 1rem;
                  font-weight: 600;
                  color: #333639;
                  margin-bottom: 0.4rem;
                .explain
                  font-size: 0.875rem;
                  color: #8590a6;
            /*  .edit-box
                display: none
                margin-top 1.4rem
                width: 100%
                /*height:10rem*/
                /*background: #ccc
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
                   /* .action-title
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

  */





















</style>
