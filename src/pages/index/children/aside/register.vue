<template>
    <section class="register">
      <div class="reg-title">知声 - zhisheng.com</div>
      <div class="reg-tip">一个可以讨论话题的社区</div>
      <div class="input-group">
          <div class="input-box">
            <input name="registerUsername" maxlength="20" placeholder="用户名" class="input">
          </div>
          <div class="input-box">
            <input name="registerPhoneNumber" maxlength="64" placeholder="手机号" class="input">
          </div><!----><!---->
          <div data-v-c1cc7ad0="" class="input-box">
            <input name="registerPassword" type="password" maxlength="64" autocomplete="new-password" placeholder="密码（不少于 6 位）" class="input">
          </div>
        <!--注册按钮-->
      </div>
      <button st:name="registerBtn" class="btn submit-btn">立即注册</button>
      <div class="other-box">第三方登录：<span>
       <svg-icon iconClass="icon-weibo1"></svg-icon>
      </span> <span>
        <svg-icon iconClass="icon-list-icon-github"></svg-icon>
      </span> <span>
        <svg-icon iconClass="icon-icons-qq"></svg-icon>
      </span>
      </div>
    </section>
</template>

<script>
    export default {
        name:'home-register',

    }
</script>

<style lang="stylus" scoped>
.register
  padding: .8rem
  background: #fff
  border-radius .3rem
  .reg-title
    margin-bottom: .3rem;
    font-size: .9rem;
    color: #2e3135;
    font-weight 600
    /*background: yellow*/
  .reg-tip
    margin-bottom: .8rem;
    font-size: .9rem;
    color: #4e5357;
    /*background: yellow*/
  .input-group
    .input-box
      position: relative;
      margin-bottom: .6rem;
      .input
        padding: .44rem .34rem;
        width: 100%;
        font-size: .9rem;
        background-color: #fbfbfb;
        border: 1px solid #f4f4f4;
        border-radius: .3rem;
        outline: none;
        box-sizing: border-box;
  .btn
    padding: .5rem 0;
    width: 100%;
    font-size: .9rem;
    font-weight 700
    &.submit-btn
      background-color: #007fff;
      color: #fff;
      border-radius: .3rem;
      border: none;
      /*padding: .5rem 1.3rem;*/
      outline: none;
      transition: background-color .3s,color .3s;
      cursor: pointer
      &:hover
        background-color: #0371df;
        color: #fff
  .other-box
    margin-top: 1.1rem;
    font-size: .8rem;
    line-height: 1.9rem;
    color: #8f969c;
    .svg-icon
      font-size 1.26rem
      margin-left .9rem




</style>
