<template>
  <div class="setting-wrapper">
    <!--带win-或者set-的都是公用的-->
    <!--set-属于设置中心-->
    <div class="wid-empty">
      <!--左边导航栏-->
      <div class="fLeft guide-box">
        <div class="set-empty-guide">
          <ul class="set-guide-list">
            <!--循环导航-->
            <li class="set-guide-item">
              <router-link class="set-hov" tag="a" to="/setting/account">
                <span class="set-svg">
                  <svg-icon iconClass="icon-gerenziliao1"></svg-icon>
                </span>
                <span class="set-type">个人资料</span>
              </router-link>
            </li>
            <li class="set-guide-item">
              <router-link class="set-hov" tag="a" to="/setting/notification">
                <span class="set-svg">
                  <svg-icon iconClass="icon-xiaoxi2"></svg-icon>
                </span>
                <span class="set-type">消息与邮件</span>
              </router-link>
            </li>
            <li class="set-guide-item">
              <router-link class="set-hov" tag="a" to="/setting/association">
                <span class="set-svg">
                  <svg-icon iconClass="icon-guanlian2"></svg-icon>
                </span>
                <span class="set-type">账号关联</span>
              </router-link>
            </li>
            <li class="set-guide-item">
              <router-link class="set-hov" tag="a" to="/setting/password">
                <span class="set-svg">
                  <svg-icon iconClass="icon-mimaguanli3"></svg-icon>
                </span>
                <span class="set-type">修改密码</span>
              </router-link>
            </li>
            <li class="set-guide-item">
              <router-link class="set-hov" tag="a" to="/setting/shield">
                <span class="set-svg">
                  <svg-icon iconClass="icon-pingbi"></svg-icon>
                </span>
                <span class="set-type">屏蔽</span>
              </router-link>
            </li>
            <li class="set-guide-item">
              <router-link class="set-hov" tag="a" to="/setting/privacy">
                <span class="set-svg">
                  <svg-icon iconClass="icon-kehuyinsi"></svg-icon>
                </span>
                <span class="set-type">隐私</span>
              </router-link>
            </li>
            <li class="set-guide-item">
              <router-link class="set-hov" tag="a" to="/setting/hobby">
                <span class="set-svg">
                  <svg-icon iconClass="icon-shouye-gerenpianhaoshezhi"></svg-icon>
                </span>
                <span class="set-type">偏好设置</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <!--右边内容盒子-->
      <div class="fRight content-box">
        <div class="set-empty">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "setting",
    data() {
      return {}
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~@/common/stylus/mixins.styl"
  .fLeft
    float: left
  .fRight
    float: right
  .setting-wrapper
    clearFix()
    box-shadow: 0 0 4px rgba(6,10,29,.04);
    border: 1px solid #ebebeb;
    margin: 4.4rem auto
    width: 60rem
    background: #ffffff
    .wid-empty
      .guide-box
        /*width: 10rem*/
        /*height: 8rem*/
        /*background: #000*/
        .set-empty-guide
          .set-guide-list
            font-size .9375rem
            color: #8590a6
            .set-guide-item
              .set-hov
                padding: .86rem 2.5rem
                display: block
                /*background: #ccc*/
                &:hover
                  background: rgba(133,144,166,.08);
                .set-svg
                  padding-right .3rem
                  .svg-icon
                    fill #8590a6
                .set-type
                  color: #8590a6


      .content-box
        border-left 1px solid #ebebeb
        width:48.66rem
        /*height:10rem*/
        box-sizing border-box
        .set-empty
          width:100%
</style>
