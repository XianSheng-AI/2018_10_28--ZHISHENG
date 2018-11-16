<template>
    <div class="user-info">
      <div class="user-info-wrapper">
          <div>
            <div class="UserAvatar-wrapper">
              <div class="UserAvatar">
                <img src="../../../../../../static/images/4.jpg" alt="">
              </div>
            </div>
          </div>
          <div class="user-content">
            <div class="user-introduce">
              <span class="user-name">清风车影</span>
              <span class="user-my-word">物业管理师/网络技术爱好者/骑行者/消防工程师</span>
            </div>
            <div class="user-detail">
              <div class="user-detail-empty">
                <div>
                  <!--居住地-->
                  <div class="com-wrap live-wrap">
                    <span class="com-nice">居住地</span>
                    <span class="live">现居东莞</span>
                  </div>
                  <!--行业-->
                  <div class="com-wrap industry-wrap">
                    <span class="com-nice">所在行业</span>
                    <span class="industry">物业服务</span>
                  </div>
                  <!--职业经历-->
                  <div class="com-wrap professional-wrap">
                    <span class="com-nice">职业经历</span>
                    <div class="professional-box">
                        <div class="com-item professional-item">
                          <span class="professional-svg">
                            <svg-icon iconClass="icon-zhongshiyou"></svg-icon>
                          </span>
                          <span class="company">&nbsp;中航物业</span>&nbsp;&nbsp;·&nbsp;&nbsp;<span class="job">项目经理</span>
                        </div>
                        <div class="com-item professional-item" style="margin-top: 10px">
                          <span class="professional-svg">
                            <svg-icon iconClass="icon-shunfengkuaidi"></svg-icon>
                          </span>
                          <span class="company">&nbsp;顺丰快递</span>&nbsp;&nbsp;·&nbsp;&nbsp;<span class="job">项目主管</span>
                        </div>
                    </div>
                  </div>
                  <!--教育经历-->
                  <div class="com-wrap education-wrap">
                    <span class="com-nice">教育经历</span>
                    <div class="education-box">
                        <div class="education-item">
                          <span class="education-svg">
                            <svg-icon iconClass="icon-daxue1"></svg-icon>
                          </span>
                          <span class="company">&nbsp清华大学</span>&nbsp;&nbsp;·&nbsp;&nbsp;<span class="profession">软件工程</span>
                        </div>
                    </div>
                  </div>
                  <!--个人简介-->
                  <div class="com-wrap introduce-wrap">
                    <span class="com-nice">个人简介</span>
                    <span class="introduce-content">强者就要面对所有困难.</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="more-detail">
              <div class="more-detail-hov">
                <span class="more-svg">
                  <svg-icon iconClass="icon-xia"></svg-icon>
                </span>
                <span class="more-btn">查看详细资料</span>
              </div>
              <div class="button-group">
                <button class="edit-user-info button-blue Button" type="button">编辑个人资料</button>
              </div>
            </div>
          </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "person-info",
        data() {
            return {}
        }
    }
</script>

<style lang="stylus" scoped>
.user-info
  position: relative;
  width: 100%;
  background: #fff;
  box-sizing: border-box;
  .user-info-wrapper
    position: relative
    margin: 0 20px;
    padding-bottom 1px
    .UserAvatar-wrapper
      position: absolute;
      top: -25px;
      left: 0;
      z-index: 1;
      .UserAvatar
        display: inline-block;
        overflow: hidden;
        vertical-align: top;
        background-color: #fff;
        border: 4px solid #fff;
        border-radius: 8px;
        img
          display: block
          width:168px
    .user-content
      padding-top: 16px;
      padding-left: 32px;
      border-left: 168px solid transparent;
      .user-introduce
        padding-bottom 1rem
        .user-name
          font-size 1.625rem
          padding-right .4rem
          color: #1a1a1a
          font-weight bold
        .user-my-word
          font-size: 18px;
          white-space: nowrap;
          color: #42474c
          /*padding-bottom 1rem*/
      .user-detail
        .user-detail-empty
          width: 100%;
          font-size: 14px;
          line-height: 1.8;
          color: #1a1a1a;
          .com-wrap
            display: flex
            margin-bottom 18px
            .com-nice
              display: inline-block
              font-weight 600
              width: 60px;
              margin-right: 37px;
              .professional-box
                flex:1
                .com-item
                  &:not(:first-child)
                    margin-top 2rem

      .more-detail
        position: relative
        /*margin-bottom 1.4rem*/
        color: #8590a6
        .more-detail-hov
          cursor: pointer;
          display: inline-block
          .more-svg
            .svg-icon
              fill #8590a6
              font-size .8rem
          .more-btn
            font-size 0.875rem
          &:hover .svg-icon
            fill #9ea6bf
          &:hover .more-btn
            color: #9ea6bf
        .button-group
          position: absolute
          right:0
          bottom:0

          .edit-user-info
            background: #ffffff
          .Button
            display: inline-block;
            padding: 0 16px;
            font-size: 14px;
            line-height: 32px;
            color: #8590a6;
            text-align: center;
            cursor: pointer;
            background: none;
            border: 1px solid;
            border-radius: 3px;
          .button-blue
            color: #0084ff;
            border-color:1px solid #0084ff;
            &:hover
              background: #cbe5ff
/*display: -webkit-box;
                  display: -ms-flexbox;
                  display: flex;
                  -webkit-box-align: center;
                  -ms-flex-align: center;
                  align-items: center;*/
</style>
