<template>
    <div class="login-register">
      <!--黑色透明遮罩-->
      <div class="mask"></div>
      <div class="go-in-empty">

        <!--3种登录共用头部logo-->
        <div class="platform-name">
          <img class="LOGO" src="../../../../static/images/logo/logo-1.png" alt="">
          <!--<svg-icon iconClass="icon-logo"></svg-icon>-->
        </div>
        <h1 class="platform-desc">登陆知声，发出属于你的声音</h1>
        <!--3种登陆方式-->
        <!--第一种-使用密码登陆方式（手机或邮箱）-->
        <div class="use-password">
          <div class="input-box">

            <div class="com-input">
              <!--第一种-->
              <input class="input-login" type="text"
                     placeholder="请输入手机号或者邮箱"
                      v-if="modeData.usePassword.activePassword"
              >
              <!--第二种-->
              <input class="input-login" type="text"
                     placeholder="输入手机号"
                     v-if="modeData.usePhoneCode.activePhoneCode"

              >
            </div>
            <!--第二种-->
            <!--验证码图片-->
            <div class="security-code"
                 v-if="formData.usePhoneCode.phone"

            >
              <div class="code-guide">
                <span class="guide-left">请点击图中倒立的文字</span>
                <span class="guide-right">
              <svg-icon iconClass="icon-zhongxin1"></svg-icon>
            </span>
              </div>
              <img src="../../../../static/images/验证码图/下载.jpg" alt="">
            </div>
            <!--手机号登陆2次及以上出现验证码保证账号安全-->
            <div class="com-input hideCode"
                 v-if="modeData.usePhoneCode.activePhoneCode"
                 :class="{'showCode':modeData.usePhoneCode.showSecurityCode}"
            >
              <!--第一种-->
              <input class="input-login" type="password"
                     placeholder="验证码"
                     v-if="modeData.usePhoneCode.activePhoneCode"
              >

              <!--第一种-->
              <span class="input-svg"
                    v-if="modeData.usePhoneCode.activePhoneCode"
              >
                <img class="vali-code" src="../../../../static/images/验证码图/code.jpg" alt="">
              </span>
            </div>
            <div class="com-input">
              <!--第一种-->
              <input class="input-login" type="password"
                     placeholder="输入密码"
                     v-if="modeData.usePassword.activePassword"
              >
              <!--第二种-->
              <input class="input-login" type="password"
                     placeholder="输入6位短信验证码"
                     v-if="modeData.usePhoneCode.activePhoneCode"
              >
              <!--第一种-->
              <span class="input-svg"
                    v-if="modeData.usePassword.activePassword"

              >
                <svg-icon iconClass="icon-yishezhikehuyinsi"></svg-icon>
              </span>
              <!--第二种-->
              <div class="getPhoneCodeBtn"
                   v-if="modeData.usePhoneCode.activePhoneCode"
              >
                <span
                  @click="repeatClick()"
                >获取短信验证码</span>
              </div>
            </div>
            <!--密码登陆2次及以上出现验证码保证账号安全-->
            <div class="com-input" v-if="modeData.usePassword.activePassword">
              <!--第一种-->
              <input class="input-login" type="password"
                     placeholder="验证码"
                     v-if="modeData.usePassword.activePassword"
              >

              <!--第一种-->
              <span class="input-svg"
                    v-if="modeData.usePassword.activePassword"
              >
                <img class="vali-code" src="../../../../static/images/验证码图/code.jpg" alt="">
              </span>
            </div>

          </div>

          <!--手机号登陆-忘记密码 按钮-->
          <div class="btn-group">
            <!--第一种-->
            <span class="btn-left"
                  v-if="modeData.usePassword.activePassword"
                  @click="changeShow('phoneCode')"
            >手机验证码登录</span>
            <!--第二种-->
            <span class="btn-left"
                  v-if="modeData.usePhoneCode.activePhoneCode"
                  @click="changeShow('password')"
            >密码登录(手机号或邮箱)</span>
            <!--第一种-->
            <span class="btn-right"
                  v-if="modeData.usePassword.activePassword"
            >忘记密码?</span>
            <!--第二种-->
            <span class="btn-right"
                  v-if="modeData.usePhoneCode.activePhoneCode"
            >接收语音验证码</span>
          </div>
        </div>
        <!--第3种-使用注册登陆方式-->
        <div class="use-register">

        </div>

          <!--提交登陆按钮-->
          <div class="submit-btn">登录</div>
          <!--第三方登陆-->
          <div class="footer-tip">
            <!--没有账号？注册-->
            <div class="account-status">
              <!--第一二种-->
              <span
                v-if="!modeData.useRegister.activeRegister"
              >没有账号？<a href="javascript:;">注册</a></span>
              <!--第三种-->
              <span
                v-if="modeData.useRegister.activeRegister"
              >已有账号？<a href="javascript:;">登录</a></span>
            </div>
            <!--第三方登陆-->
            <div class="third-party-empty">
              <span class="third-party-btn">第三方社交账号登陆</span>
              <!--点击展开第三方平台-->
              <div class="show-third-party">
              </div>
            </div>

          </div>



      </div>

    </div>
</template>

<script>
  import selectBox from '../../Select-Box/Select-Box.vue'
    export default {
        name: "login-register",
      components:{
        selectBox
      },
        data() {
            return {
              formData:{
                usePassword:{
                  phone:''
                },
                usePhoneCode:{
                  phone:'',
                  securityCode:'',
                }
              },
              modeData:{
                usePassword:{
                  activePassword:true,
                },
                usePhoneCode:{
                  activePhoneCode:false,
                  clickCount:0,
                  //多点出现验证码框
                  showSecurityCode:false
                },
                useRegister:{
                  activeRegister:false
                }
              }
            }
        },
      methods:{

        changeShow(who){
          if(who==='phoneCode'){
            // alert(who)
            this.$set(this.modeData.usePassword,'activePassword',false);
            this.$set(this.modeData.usePhoneCode,'activePhoneCode',true)
          } else if(who==='password'){
            this.$set(this.modeData.usePassword,'activePassword',true);
            this.$set(this.modeData.usePhoneCode,'activePhoneCode',false)
          }
        },
        //第二种(重复点击获取验证码出现的验证码框)
        repeatClick(){
          if(this.modeData.usePhoneCode.clickCount>=1){
            this.$set(this.modeData.usePhoneCode,'showSecurityCode',true);
            return;
          }
          this.modeData.usePhoneCode.clickCount++;
        }
      }
    }
</script>

<style lang="stylus" scoped>
  @import '~@/common/stylus/mixins.styl'
.login-register
  .mask
    z-index: 100
    width: 100%
    height: 100%
    position: fixed
    background: rgba(0,0,0,.6)
  .go-in-empty
    border-radius .2rem
    /*padding:0 1rem*/
    position: fixed
    top: 50%
    left: 50%
    margin:-250px -180px
    z-index: 101
    width:320px
    /*height:500px*/
    background: #fff
    /*padding-bottom 2rem*/
    padding: 1.8rem 1rem 1.8rem
    font-size: 14px;

    .platform-name
      text-align center
      /*background: #ccc*/
      .LOGO
        width:5rem
      .svg-icon
        font-size 4rem
        fill #0084ff
    .platform-desc
      font-weight normal
      text-align center
      color: #0084ff
      font-size 18px
      margin .4rem 0 0
      /*background: wheat*/
    //第一种-使用密码登陆方式(手机或邮箱)
    .use-password
      .input-box
        margin:.4rem 0 1rem
        .com-input
          padding: .8rem 0
          border-bottom 1px solid #ebebeb
          transition .2s
          /*background: #ccc*/
          clearFix()
          &.hideCode
            display: none
            height:0
            &.showCode
              height:auto
              display: block
          &:not(:first-child)
            padding-top 1rem
          .input-login
            width: 11rem
            /*letter-spacing .2rem*/
            display: inline-block
          .input-svg
            float: right
            position: relative
            cursor: pointer;
            .svg-icon
              font-size 1rem
            .vali-code
              position: absolute
              top -.2rem
              right:0
              width:4.6rem

          .getPhoneCodeBtn
            float: right
            cursor: pointer;
            span
              color: #175199
              &:hover
                color: #77839c
      .security-code
        margin: 0 0 .2rem
        background: #f9f9f9
        img
          display: block
          margin:.4rem auto
          width: 60%
          padding-bottom .6rem
        .code-guide
          padding-top .2rem
          clearFix()
          .guide-left
            float: left
            color: #8590a6
          .guide-right
            cursor: pointer;
            float: right

      .btn-group
        margin .2rem 0 1.6rem

        /*background: #ccc*/
        clearFix()
        .btn-left
          cursor: pointer;
          float: left
          color: #343d83
        .btn-right
          cursor: pointer;
          float: right
          color: #8590a6
    .submit-btn
      cursor: pointer
      width:100%
      padding:.5rem 0
      background: #0084ff
      text-align center
      color: #ffffff
      border-radius .2rem
      transition .2s
      &:hover
        background: #0060bf
    .footer-tip
      margin-top 1rem
      margin-bottom 1rem
      color: #8590a6
      width:100%
      .third-party-empty
        float: right
        /*margin:0 auto*/
        .third-party-btn
          display: inline-block
          cursor: pointer;
          &:hover
            color: #a68b9a
      .account-status
        float: left
    /*第二种-使用手机号验证码登陆方式*/
    .use-phone-code
      .input-box
        margin:.4rem 0 1rem
        .com-input
          padding: .6rem 0
          border-bottom 1px solid #ebebeb
          clearFix()
          .input-login
            width: 15rem
            /*letter-spacing .2rem*/
            display: inline-block
          .input-svg
            float: right
            .svg-icon
              fill #8590a6
</style>
