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
              <span class="user-name">小蔡</span>
              <span class="user-my-word">打不死的小强</span>
            </div>
            <div class="user-detail">
              <div class=""></div>
            </div>
            <div class="more-detail">
              <span class="more-svg"></span>
              <span class="more-btn">查看更多详细信息</span>
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
  /*height:168px*/
  background: #fff;
  box-sizing: border-box;
  .user-info-wrapper
    position: relative
    margin: 0 20px 24px;
    /*background: #000*/
    /*overflow: hidden*/
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
      border-left: 164px solid transparent;
      .user-introduce
        padding-bottom .4rem
        .user-name
          font-size 1.2rem
          padding-right 1rem
        .user-my-word
          padding-bottom 1rem
      .more-detail
        padding-bottom 5.8rem

</style>
