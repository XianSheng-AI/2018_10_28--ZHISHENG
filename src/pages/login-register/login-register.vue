<template>
  <div class="login-register">
    <div class="wapper-all">
      <div class="box-empty" v-if="showLoginRegister">

        <div class="go-in-empty">
          <!--关闭按钮-->
          <!--<div class="close" @click="hideLogin()">-->
          <!--<span>-->
          <!--<svg-icon iconClass="icon-guanbi4"></svg-icon>-->
          <!--</span>-->
          <!--</div>-->
          <!--3种登录共用头部logo-->
          <div class="platform-name">
            <img class="LOGO" src="../../../static/images/logo/logo-1.png" alt="">
            <!--<svg-icon iconClass="icon-logo"></svg-icon>-->
          </div>
          <h1 class="platform-desc">
            <span href="#"
                  v-if="!modeData.useRegister.activeRegister"
            >登陆</span>
            <span href="#"
                  v-if="modeData.useRegister.activeRegister"
            >注册</span> 知声，发出属于你的声音</h1>
          <!--3种登陆方式-->
          <!--第一种-使用密码登陆方式（手机或邮箱）-->
          <div class="use-password">
            <div class="input-box">

              <div class="com-input">
                <!--第一种账号密码-->
                <input class="input-login" type="text"
                       placeholder="请输入手机号或者邮箱"
                       v-if="modeData.usePassword.activePassword"
                >
                <!--第二种手机号或邮箱-->
                <input class="input-login" type="text"
                       placeholder="输入手机号"
                       v-if="modeData.usePhoneCode.activePhoneCode"

                >
                <!--第三种注册-->
                <input class="input-login" type="text"
                       placeholder="输入手机号"
                       v-if="modeData.useRegister.activeRegister"

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
                <img src="../../../static/images/验证码图/下载.jpg" alt="">
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
                <img class="vali-code" src="../../../static/images/验证码图/code.jpg" alt="">
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
                <!--第三种注册-->
                <input class="input-login" type="password"
                       placeholder="输入6位短信验证码"
                       v-if="modeData.useRegister.activeRegister"
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
                <!--第三种注册-->
                <div class="getPhoneCodeBtn"
                     v-if="modeData.useRegister.activeRegister"
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
                <img class="vali-code" src="../../../static/images/验证码图/code.jpg" alt="">
              </span>
              </div>

            </div>

            <!--手机号登陆-忘记密码 按钮-->
            <div class="btn-group">
              <!--第一种-->
              <span class="btn-left"
                    v-if="modeData.usePassword.activePassword"
                    @click="changeShow('pc')"
              >手机验证码登录</span>
              <!--第二种-->
              <span class="btn-left"
                    v-if="modeData.usePhoneCode.activePhoneCode"
                    @click="changeShow('pw')"
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
          <div class="submit-btn" @click="subBtn(modeData.subTy)">{{modeData.subTy}}</div>
          <!--注册的footer-tip-->
          <div class="footer-tip">

            <!--登录结构-->
            <div class="login-status" v-if="!modeData.useRegister.activeRegister">
              <!--没有账号？注册-->
              <div class="account-status">

                <!--第一二种-->
                <span
                  v-if="!modeData.useRegister.activeRegister"
                >没有账号？
                  <a href="javascript:;"
                     @click="changeShow('rg')"
                  >注册</a></span>
                <!--第三种-->
                <span
                  v-if="modeData.useRegister.activeRegister"
                >已有账号？<a href="javascript:;">登录</a></span>
              </div>
              <!--第三方登陆-->
              <div class="third-party-empty">
              <span class="third-party-btn"
                    @click="changeShow('sp')"
                    v-if="!modeData.useSocialPlatform.activeSocialPlatform"
              >第三方社交账号登陆</span>
                <!--点击展开第三方平台-->
                <div class="show-third-party"
                     v-if="modeData.useSocialPlatform.activeSocialPlatform"
                >
                  <div class="item-list">
                  <span class="item">
                    <svg-icon iconClass="icon-weixin2"></svg-icon>
                  </span>
                    <span class="item">
                    <svg-icon iconClass="icon-github5"></svg-icon>
                  </span>
                    <span class="item">
                    <svg-icon iconClass="icon-weiboheibai"></svg-icon>
                  </span>
                    <span class="item">
                    <svg-icon iconClass="icon-icon28"></svg-icon>
                  </span>
                  </div>
                </div>
              </div>
            </div>
            <!--注册结构-->
            <div class="register-status" v-if="modeData.useRegister.activeRegister">
              <span class="register-tip">
                注册即代表同意
                <a href="#">《知声协议》</a>
                <a href="#">《隐私保护指引》</a>
              </span>
              <!--已有账号？登录-->
              <div class="hasAccount">
                已有账号?
                <a href="#"
                   @click="changeShow('pw')"
                >登录</a>
              </div>
            </div>
          </div>


        </div>
      </div>

      <!--选择技术领域标签-->
      <technology-label v-if="showTeLa"></technology-label>
    </div>
    <!--<div class="ship-svg">-->
      <!--<svg version="1.1" class="ship" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"-->
           <!--x="0px" y="0px"-->
           <!--viewBox="0 0 600 600" style="enable-background:new 0 200 600 800;" xml:space="preserve">-->
<!--<circle id="sun" class="ship1" cx="520.8" cy="369.8" r="44.9"/>-->


        <!--<rect id="smoke1" x="173" y="225" width="18" height="10"/>-->
        <!--<rect id="smoke2" x="173" y="225" width="18" height="10"/>-->
        <!--<rect id="smoke3" x="173" y="225" width="18" height="10"/>-->
        <!--<rect id="smoke4" x="173" y="225" width="18" height="10"/>-->


        <!--<g id="ship">-->
  <!--<polyline class="ship3" points="261.4,274.1 266.7,246.9 272.1,274.3 261.4,274.1 		"/>-->
          <!--<ellipse class="ship1" cx="267.1" cy="253.7" rx="13.6" ry="13.3"/>-->
          <!--<path class="ship3" d="M274.8,244c5.2,4.1,6,11.6,1.8,16.9c0,0-2.4-5.9-7.6-10c-5.2-4.1-11.1-4.7-11.1-4.7-->
    <!--C262.1,240.9,269.6,239.9,274.8,244z"/>-->
          <!--<polyline class="ship1" points="269.6,274.3 272.1,274.3 270.9,268.1 		"/>-->
          <!--<polygon class="ship3" points="389.3,371.2 108.9,371.2 85.7,319.9 86.2,315.7 97.2,315.1 111.6,274.3 318.2,274.1 318.4,286.7-->
    <!--331.6,286.6 332,296.9 344.9,296.9 345.5,319 447.5,310.5 		"/>-->
          <!--<path class="ship1" d="M294.6,274.2l23.6,0l0.2,12.6l13.2-0.1l0.4,10.2h12.9l1.4,23.7c0,0-79.5,6.6-123.1,7.3-->
    <!--c-34.4,0.5,97.4-8.2,97.4-8.2l-0.7-20.2l-15.9-0.2l0.1-11h-9.8L294.6,274.2z"/>-->
          <!--<g>-->
    <!--<polygon class="ship1" points="195.1,275 167,275 172.2,238.8 189.9,238.8 			"/>-->
            <!--<polygon class="ship3" points="189.3,275 167,275 172.2,238.8 187.5,238.8 			"/>-->
  <!--</g>-->
          <!--<path class="ship4" d="M189.4,240H173c-1.2,0-2.1-0.9-2.1-2.1v0c0-1.2,0.9-2.1,2.1-2.1h16.4c1.2,0,2.1,0.9,2.1,2.1v0-->
    <!--C191.5,239,190.6,240,189.4,240z"/>-->
          <!--<polygon class="ship5" points="294.6,288.2 199.8,288.2 190.6,297.5 103.4,297.5 110.1,277.5 294.5,277.6 		"/>-->
          <!--<path class="ship1"-->
                <!--d="M134.6,286.7h-20.4c-1.3,0-2.3-1.2-2.1-2.5l0.6-3.6h23.5l0.6,3.6C136.9,285.6,135.9,286.7,134.6,286.7z"/>-->
          <!--<path class="ship6" d="M131.6,281.6h-14.5c-0.7,0-1.3-0.6-1.3-1.3v-0.6c0-0.7,0.6-1.3,1.3-1.3h14.5c0.7,0,1.3,0.6,1.3,1.3v0.6-->
    <!--C132.9,281,132.3,281.6,131.6,281.6z"/>-->
          <!--<path class="ship3" d="M134.6,286.7h-20.4c-1.3,0-2.3-1.2-2.1-2.5h24.6C136.9,285.6,135.9,286.7,134.6,286.7z"/>-->
          <!--<path class="ship1"-->
                <!--d="M163.6,286.7h-20.4c-1.3,0-2.3-1.2-2.1-2.5l0.6-3.6h23.5l0.6,3.6C165.9,285.6,164.9,286.7,163.6,286.7z"/>-->
          <!--<path class="ship6" d="M160.6,281.6h-14.5c-0.7,0-1.3-0.6-1.3-1.3v-0.6c0-0.7,0.6-1.3,1.3-1.3h14.5c0.7,0,1.3,0.6,1.3,1.3v0.6-->
    <!--C161.9,281,161.3,281.6,160.6,281.6z"/>-->
          <!--<path class="ship3" d="M163.6,286.7h-20.4c-1.3,0-2.3-1.2-2.1-2.5h24.6C165.9,285.6,164.9,286.7,163.6,286.7z"/>-->
          <!--<path class="ship1"-->
                <!--d="M191.6,286.7h-20.4c-1.3,0-2.3-1.2-2.1-2.5l0.6-3.6h23.5l0.6,3.6C193.9,285.6,192.9,286.7,191.6,286.7z"/>-->
          <!--<path class="ship6" d="M188.6,281.6h-14.5c-0.7,0-1.3-0.6-1.3-1.3v-0.6c0-0.7,0.6-1.3,1.3-1.3h14.5c0.7,0,1.3,0.6,1.3,1.3v0.6-->
    <!--C189.9,281,189.3,281.6,188.6,281.6z"/>-->
          <!--<path class="ship3" d="M191.6,286.7h-20.4c-1.3,0-2.3-1.2-2.1-2.5h24.6C193.9,285.6,192.9,286.7,191.6,286.7z"/>-->
          <!--<g id="windows">-->
    <!--<rect x="299.9" y="278.2" class="ship7" width="2.2" height="3"/>-->
            <!--<rect x="311.9" y="291.2" class="ship7" width="2.2" height="3"/>-->
            <!--<rect x="330.9" y="303.2" class="ship7" width="2.2" height="3"/>-->
            <!--<rect x="308.8" y="315.8" class="ship7" width="2.5" height="3"/>-->
            <!--<rect x="281.6" y="315.8" class="ship7" width="2.5" height="3"/>-->
            <!--<rect x="256.6" y="291.2" class="ship7" width="2.5" height="3"/>-->
            <!--<rect x="252.1" y="291.2" class="ship7" width="2.5" height="3"/>-->
            <!--<rect x="266.7" y="303.2" class="ship7" width="2.5" height="3"/>-->
            <!--<rect x="232.5" y="303.2" class="ship7" width="2.5" height="3"/>-->
            <!--<rect x="192.4" y="303.2" class="ship7" width="2.5" height="3"/>-->
            <!--<rect x="186.7" y="303.2" class="ship7" width="2.5" height="3"/>-->
            <!--<rect x="181.1" y="303.2" class="ship7" width="2.5" height="3"/>-->
            <!--<rect x="175.5" y="303.2" class="ship7" width="2.5" height="3"/>-->
            <!--<rect x="157.1" y="303.2" class="ship7" width="2.5" height="3"/>-->
            <!--<rect x="151.4" y="303.2" class="ship7" width="2.5" height="3"/>-->
            <!--<rect x="123.1" y="303.2" class="ship7" width="2.5" height="3"/>-->
            <!--<rect x="117.4" y="303.2" class="ship7" width="2.5" height="3"/>-->
            <!--<rect x="111.7" y="303.2" class="ship7" width="2.5" height="3"/>-->
            <!--<rect x="106.1" y="303.2" class="ship7" width="2.5" height="3"/>-->
            <!--<rect x="275.8" y="315.8" class="ship7" width="2.5" height="3"/>-->
            <!--<rect x="270.1" y="315.8" class="ship7" width="2.5" height="3"/>-->
            <!--<rect x="264.4" y="315.8" class="ship7" width="2.5" height="3"/>-->
            <!--<rect x="239.8" y="315.8" class="ship7" width="2.5" height="3"/>-->
            <!--<rect x="234.1" y="315.8" class="ship7" width="2.5" height="3"/>-->
            <!--<rect x="228.4" y="315.8" class="ship7" width="2.5" height="3"/>-->
            <!--<rect x="223.9" y="315.8" class="ship7" width="2.5" height="3"/>-->
            <!--<rect x="218.2" y="315.8" class="ship7" width="2.5" height="3"/>-->
            <!--<rect x="212.6" y="315.8" class="ship7" width="2.5" height="3"/>-->
            <!--<rect x="206.8" y="315.8" class="ship7" width="2.5" height="3"/>-->
            <!--<rect x="201.1" y="315.8" class="ship7" width="2.5" height="3"/>-->
            <!--<rect x="168.8" y="315.8" class="ship7" width="2.5" height="3"/>-->
            <!--<rect x="163.1" y="315.8" class="ship7" width="2.5" height="3"/>-->
            <!--<rect x="157.4" y="315.8" class="ship7" width="2.5" height="3"/>-->
            <!--<rect x="152.9" y="315.8" class="ship7" width="2.5" height="3"/>-->
            <!--<rect x="147.2" y="315.8" class="ship7" width="2.5" height="3"/>-->
            <!--<rect x="141.6" y="315.8" class="ship7" width="2.5" height="3"/>-->
            <!--<rect x="135.8" y="315.8" class="ship7" width="2.5" height="3"/>-->
            <!--<rect x="130.1" y="315.8" class="ship7" width="2.5" height="3"/>-->
            <!--<rect x="124.4" y="315.8" class="ship7" width="2.5" height="3"/>-->
            <!--<rect x="119.9" y="315.8" class="ship7" width="2.5" height="3"/>-->
            <!--<rect x="114.2" y="315.8" class="ship7" width="2.5" height="3"/>-->
            <!--<rect x="108.6" y="315.8" class="ship7" width="2.5" height="3"/>-->
            <!--<path class="ship7" d="M298.8,292.6c0-0.8-0.7-1.5-1.5-1.5H270c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5h27.4-->
      <!--C298.2,294.1,298.8,293.4,298.8,292.6z"/>-->
            <!--<path class="ship7" d="M248.9,292.6c0-0.8-0.7-1.5-1.5-1.5H231c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5h16.5-->
      <!--C248.3,294.1,248.9,293.4,248.9,292.6z"/>-->
            <!--<path class="ship7" d="M216.7,292.6c0-0.8-0.7-1.5-1.5-1.5H201c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5h14.3-->
      <!--C216,294.1,216.7,293.4,216.7,292.6z"/>-->
            <!--<path class="ship7" d="M307.3,303.1h-18.6c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5h18.6c0.8,0,1.5-0.7,1.5-1.5-->
      <!--S308.2,303.1,307.3,303.1z"/>-->
            <!--<path class="ship7" d="M314.6,278.2h-9.9c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5h9.9c0.8,0,1.5-0.7,1.5-1.5-->
      <!--S315.4,278.2,314.6,278.2z"/>-->
            <!--<path class="ship7" d="M261.8,303.1h-12.1c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5h12.1c0.8,0,1.5-0.7,1.5-1.5-->
      <!--S262.6,303.1,261.8,303.1z"/>-->
            <!--<path class="ship7" d="M227.3,303.1h-18.6c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5h18.6c0.8,0,1.5-0.7,1.5-1.5-->
      <!--S228.2,303.1,227.3,303.1z"/>-->
            <!--<path class="ship7" d="M197.2,315.7h-17.3c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5h17.3c0.8,0,1.5-0.7,1.5-1.5-->
      <!--S198,315.7,197.2,315.7z"/>-->
            <!--<path class="ship7" d="M149.8,304.6c0-0.8-0.7-1.5-1.5-1.5h-18.6c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5h18.6-->
      <!--C149.2,306.1,149.8,305.4,149.8,304.6z"/>-->
            <!--<path class="ship7" d="M304.7,315.8h-16c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5h16c0.8,0,1.5-0.7,1.5-1.5S305.5,315.8,304.7,315.8-->
      <!--z"/>-->
            <!--<path class="ship7" d="M260.8,315.8h-11.1c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5h11.1c0.8,0,1.5-0.7,1.5-1.5-->
      <!--S261.6,315.8,260.8,315.8z"/>-->
            <!--<path class="ship7" d="M327.5,291.1h-9.9c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5h9.9c0.8,0,1.5-0.7,1.5-1.5-->
      <!--S328.4,291.1,327.5,291.1z"/>-->
            <!--<path class="ship7" d="M341.5,303.1h-5.7c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5h5.7c0.8,0,1.5-0.7,1.5-1.5-->
      <!--S342.3,303.1,341.5,303.1z"/>-->
  <!--</g>-->
          <!--<path class="ship3"-->
                <!--d="M389.3,371.2H108.9l59.4-48.2c0,0,108.7-1.2,148.9-4.3c27.7-2.2,132.4-10.1,132.4-10.1L389.3,371.2z"/>-->
          <!--<path class="ship8"-->
                <!--d="M389.3,371.2H108.9l-23.2-51.3c0,0,54.7,1.3,138.9,2.5c43.6,0.6,218.9-7.9,218.9-7.9L389.3,371.2z"/>-->
          <!--<path class="ship9" d="M418.7,323.4c0,0-124.7,8.3-168.8,9.2c-44.1,0.9-115.9,0-156.5-3.9"/>-->
          <!--<rect x="238.9" y="228.7" class="ship1" width="2" height="46.2"/>-->
          <!--<line class="ship10" x1="239.9" y1="228.7" x2="221.5" y2="274.5"/>-->
          <!--<line class="ship10" x1="240.5" y1="228.7" x2="258.9" y2="274.5"/>-->
          <!--<polygon class="ship3" points="240.6,228.7 238.9,228.7 238.9,274.8 240.7,274.8 		"/>-->
          <!--<path class="ship1" d="M250.5,237.7h-21c-0.4,0-0.7-0.3-0.7-0.7l0,0c0-0.4,0.3-0.7,0.7-0.7h21c0.4,0,0.7,0.3,0.7,0.7l0,0-->
    <!--C251.2,237.4,250.9,237.7,250.5,237.7z"/>-->
          <!--<path class="ship1" d="M247.6,243.3h-15.1c-0.4,0-0.7-0.3-0.7-0.7l0,0c0-0.4,0.3-0.7,0.7-0.7h15.1c0.4,0,0.7,0.3,0.7,0.7l0,0-->
    <!--C248.3,242.9,248,243.3,247.6,243.3z"/>-->
          <!--<path class="ship1" d="M245.7,249.6h-11.4c-0.4,0-0.7-0.3-0.7-0.7l0,0c0-0.4,0.3-0.7,0.7-0.7h11.4c0.4,0,0.7,0.3,0.7,0.7l0,0-->
    <!--C246.5,249.2,246.1,249.6,245.7,249.6z"/>-->
<!--</g>-->
        <!--<rect id="sea" x="0" y="370" class="ship2" width="600" height="230"/>-->
        <!--<path id="wave6" d="M324.3,382.1c0,0-23.2,2.1-56.7-3"/>-->
        <!--<path id="wave5" d="M378.1,378.6c0,0-13.8,3.4-34.5,3.5"/>-->
        <!--<path id="wave4" d="M127,375.2c0,0-21.7,5.4-54.4,5.5"/>-->
        <!--<path id="wave3" d="M93.1,390.5c0,0-25.7,2.3-62.9-3.4"/>-->
        <!--<path id="wave2" d="M200,381c0,0-25.7,2.3-62.9-3.4"/>-->
        <!--<path id="wave1" d="M253.6,375.5c0,0-21.8,3.6-42.4,5.3"/>-->
        <!--<path id="spindript" class="ship1" d="M256.9,371h114.2h25.3c0,0,10.9-3.6,9-8.1s-4.5-3.6-10.9,0.9c0,0-6.3,4.5-11.8,2.7-->
  <!--c-5.4-1.8-6.3-5.4-14.5-4.5c-8.1,0.9-6.3,3.6-19,5.4c-12.7,1.8-16.3-3.6-19.9-4.5S296.8,368.3,256.9,371z"/>-->
        <!--<g>-->
    <!--<path id="wave1" d="M538.2,424.7c0,0-21.6,0.7-41.8-0.4"/>-->
          <!--<path id="wave2" d="M559.7,388.6c0,0-32.6,2.3-79.8-3.4"/>-->
          <!--<path id="wave3" d="M545.5,411c0,0-21.7,5.4-54.4,5.5"/>-->
          <!--<path id="wave4" d="M545.9,403.9c0,0-20.5,2.3-50.4-1.5"/>-->
          <!--<path id="wave5" d="M553.3,375.1c0,0-29,4.2-72.1,2.2"/>-->
  <!--</g>-->
<!--</svg>-->
    <!--</div>-->

  </div>
</template>

<script>
  import '@/common/ship.css'
  import selectBox from '../../components/Select-Box/Select-Box.vue'
  import technologyLabel from './technologyLabel'

  export default {
    name: "login-register",
    props: {
      toGo: {
        type: String
      }
    },
    mounted() {
      // document.querySelector('body').style.backgroundColor = '#0084ff';
      if (this.toGo === 'lg') {
        this.$set(this.modeData, 'subTy', '登录');
        this.changeShow('pw');
      } else {
        this.$set(this.modeData, 'subTy', '注册');
        this.changeShow('rg')
      }
    },
    components: {
      selectBox,
      technologyLabel
    },
    data() {
      return {

        showLoginRegister: true,  //控制登录注册隐藏
        showTeLa: false,    //控制标签隐藏
        formData: {
          usePassword: {
            phone: ''
          },
          usePhoneCode: {
            phone: '',
            securityCode: '',
          }
        },
        modeData: {
          //判断提交是登录(lo)还是注册(rg)方式
          subTy: 'lo',
          usePassword: {
            activePassword: true,
          },
          usePhoneCode: {
            activePhoneCode: false,
            clickCount: 0,
            //多点出现验证码框
            showSecurityCode: false
          },
          useRegister: {
            activeRegister: false
          },
          //使用第三方社交平台登录
          useSocialPlatform: {
            activeSocialPlatform: false
          }
        }
      }
    },
    methods: {
      //  登录/注册提交事件
      subBtn(typ) {
        this.showLoginRegister = !this.showLoginRegister;
        this.showTeLa = true;
      },
      hideLogin() {
        this.$emit('toGoMe')
      },
      changeShow(who) {
        if (who === 'pc') {
          // alert(who)
          this.$set(this.modeData.usePassword, 'activePassword', false);
          this.$set(this.modeData.usePhoneCode, 'activePhoneCode', true);
          this.$set(this.modeData.useRegister, 'activeRegister', false)
        } else if (who === 'pw') {
          this.$set(this.modeData, 'subTy', '登录');
          this.$set(this.modeData.useRegister, 'activeRegister', false);
          this.$set(this.modeData.usePassword, 'activePassword', true);
          this.$set(this.modeData.usePhoneCode, 'activePhoneCode', false)
        } else if (who === 'sp') {
          this.$set(this.modeData.useSocialPlatform, 'activeSocialPlatform', true)
        } else if (who === 'rg') {
          this.$set(this.modeData, 'subTy', '注册');
          this.$set(this.modeData.usePassword, 'activePassword', false);
          this.$set(this.modeData.usePhoneCode, 'activePhoneCode', false);
          this.$set(this.modeData.useRegister, 'activeRegister', true)
        }
      },
      //第二种(重复点击获取验证码出现的验证码框)
      repeatClick() {
        if (this.modeData.usePhoneCode.clickCount >= 1) {
          this.$set(this.modeData.usePhoneCode, 'showSecurityCode', true);
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
    width: 100%
    height: 100%
    background-image url("../../../static/images/register-login/bg3.jpg")
    .wapper-all
      background: #000
      .bg

        img
          
          width:100%
          height: 100%
          position: absolute
          top:0
          left:0
      .box-empty
        clearFix()
        position: relative

        .go-in-empty
          border-radius .2rem
          /*padding:0 1rem*/
          position: fixed
          top: 50%
          left: 50%
          margin: -200px -225px
          z-index: 101
          width: 430px
          /*height:500px*/
          background: #fff
          /*padding-bottom 2rem*/
          padding: 2.2rem 2rem 1.8rem
          font-size: 14px;
          box-sizing border-box

          .close
            position: absolute
            top 1rem
            right -3.4rem
            z-index 101
            cursor: pointer;

            .svg-icon
              font-size 1.4rem
              fill #ffffff

          .platform-name
            text-align center
            /*background: #ccc*/

            .LOGO
              width: 8rem

            .svg-icon
              font-size 4rem
              fill #0084ff

          .platform-desc
            font-weight normal
            text-align center
            color: #0084ff
            font-size 22px
            margin .8rem 0 0

          /*background: wheat*/
          //第一种-使用密码登陆方式(手机或邮箱)

          .use-password
            .input-box
              margin: 1rem 0 1rem

              .com-input
                padding: 1rem 0
                border-bottom 1px solid #ebebeb
                transition .2s
                /*background: #ccc*/
                clearFix()

                &.hideCode
                  display: none
                  height: 0

                  &.showCode
                    height: auto
                    display: block

                &:not(:first-child)
                  padding-top 1.6rem

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
                    right: 0
                    width: 4.6rem

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
                margin: .4rem auto
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
            width: 100%
            padding: .5rem 0
            background: #0084ff
            text-align center
            color: #ffffff
            border-radius .2rem
            transition .2s

            &:hover
              background: #0060bf

          .footer-tip
            margin-top 1rem
            /*margin-bottom 1rem*/
            color: #8590a6
            width: 100%

            .login-status
              .third-party-empty
                float: right
                position: relative
                /*margin:0 auto*/

                .third-party-btn
                  display: inline-block
                  cursor: pointer;

                  &:hover
                    color: #a68b9a

                .show-third-party
                  position: absolute
                  right: 0
                  top: 0
                  width: 148px
                  /*background: #ccc*/

                  .item-list
                    float: right

                    .item
                      cursor: pointer;
                      display: inline-block
                      /*&:not(:last-child)*/
                      /*margin-left .6rem*/

                      .svg-icon
                        font-size 1.6rem

                        &:hover
                          fill #a68b9a

              .account-status
                float: left

            .register-status
              .register-tip
                font-size .8rem

            .hasAccount
              text-align center
              display: block
              margin-top 1.5rem

          /*第二种-使用手机号验证码登陆方式*/

          .use-phone-code
            .input-box
              margin: .4rem 0 1rem

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
