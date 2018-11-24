<template xmlns="http://www.w3.org/1999/html">
  <div class="person-honor">
    <div class="person-honor-empty">
      <div class="honor-wall">
        <div class="honor-wall-head">
          <span class="honor-wall-title">成就墙</span>
        </div>
        <!--循环成就墙-->
        <div class="honor-wall-content">
          <div class="honor-wall-item">
            <span class="honor-svg">
              <svg-icon iconClass="icon-zhuboduan_peixun_kechengjiangli_chenghaojiangli"></svg-icon>
            </span>
            <span class="honor-type">获得 <a class="honor-name" href="javascript:;">初出茅庐</a> 称号</span>
          </div>
          <div class="honor-wall-item">
            <span class="honor-svg">
              <svg-icon iconClass="icon-wodepinglun"></svg-icon>
            </span>
            <span class="honor-type">共参与评论 <a class="comment-all-count" href="javascript:;">862</a> 条</span>
          </div>
          <div class="honor-wall-item">
            <span class="honor-svg">
              <svg-icon iconClass="icon-zhuanlanzuojia1"></svg-icon>
            </span>
            <span class="honor-type"><a class="column-writer" href="javascript:;">优秀专栏作家</a></span>
          </div>
          <div class="honor-wall-item">
            <span class="honor-svg honnor-like">
              <svg-icon iconClass="icon-tool-zantong-"></svg-icon>
            </span>
            <span class="honor-type">共获得<a class="like-all-count" href="javascript:;">24808</a>个赞同</span>
          </div>
        </div>

      </div>
      <!--成就墙下面的关注-->
      <div class="honor-for-focus">
        <div class="honor-for-focus-empty">
          <a class="honor-focus-com i-focus">
            <div class="item-Inner">
              <div class="item-name">我的关注</div>
              <strong class="item-value">65</strong>
            </div>
          </a>
          <a class="honor-focus-com focus-i">
            <div class="item-Inner">
              <div class="item-name">关注我的</div>
              <strong class="item-value">186</strong>
            </div>
          </a>
        </div>
      </div>
      <!--卡片下面的多选项-->
      <div class="opt-list">
        <div class="opt-list-empty">
          <div class="opt-item">
            <a class="opt-hov" href="javascript:;">
              <span class="fLeft opt-type">关注的话题</span>
              <span class="fRight opt-type-count">106</span>
            </a>
          </div>
          <div class="opt-item">
            <a class="opt-hov" href="javascript:;">
              <span class="fLeft opt-type">关注的专栏</span>
              <span class="fRight opt-type-count">65</span>
            </a>
          </div>
          <div class="opt-item">
            <a class="opt-hov" href="javascript:;">
              <span class="fLeft opt-type">关注的问题</span>
              <span class="fRight opt-type-count">216</span>
            </a>
          </div>
          <div class="opt-item">
            <a class="opt-hov" href="javascript:;">
              <span class="fLeft opt-type">我的收藏夹</span>
              <span class="fRight opt-type-count">16</span>
            </a>
          </div>
          <!--HT8协议-->
        </div>
      </div>
      <!--HT8协议-->
      <footer class="deal-wrapper">
        <div>
          <div class="deal-list">
            <span class="deal-dot">
                  <a class="deal-item" href="javascript:;">看看我</a>
              </span>
            <span class="deal-dot">
                <a class="deal-item" href="javascript:;">HT8指南</a>
              </span>
            <span class="deal-dot">
                <a class="deal-item" href="javascript:;">HT8协议</a>
              </span>
            <span class="deal-dot">
                <a class="deal-item" href="javascript:;">HT8保护指引</a>
            </span>
          </div>
          <div class="deal-list">
            <span class="deal-dot">
                  <a class="deal-item" href="javascript:;">引用</a>
              </span>
            <span class="deal-dot">
                <a class="deal-item" href="javascript:;">工作</a>
              </span>
            <span class="deal-dot">
                <a class="deal-item" href="javascript:;">申请开通HT8机构号</a>
              </span>
          </div>
          <div class="deal-list">
            <span class="deal-dot">
                  <a class="deal-item" href="javascript:;">侵权举报</a>
              </span>
            <span class="deal-dot">
                <a class="deal-item" href="javascript:;">网上有害信息举报专区</a>
              </span>
          </div>
          <div class="deal-list">
            <span class="deal-dot">
                  <a class="deal-item" href="javascript:;">违法和不良信息举报：010-82716601</a>
              </span>
          </div>
          <div class="deal-list">
            <span class="deal-dot">
                  <a class="deal-item" href="javascript:;">儿童色情信息举报专区</a>
              </span>
          </div>
          <div class="deal-list">
            <span class="deal-dot">
                  <a class="deal-item" href="javascript:;">电信与服务业务经营许可证</a>
              </span>
          </div>
          <div class="deal-list">
            <span class="deal-dot">
                  <a class="deal-item" href="javascript:;">网络文化经营许可证</a>
              </span>
          </div>
          <div class="deal-list">
            <span class="deal-dot">
                  <a class="deal-item" href="javascript:;">联系我们 © 2018 HT8</a>
              </span>
          </div>
          <!---->
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
  export default {
    name: "personal-honor",
    data() {
      return {}
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~@/common/stylus/mixins.styl'
  .person-honor
    width: 18rem
    /*background: #fff*/
    float: right
    .person-honor-empty
      .honor-wall
        border-radius .3rem
        box-shadow: 0 1px 3px rgba(26, 26, 26, .1);
        background: #ffffff
        font-size .875rem
        .honor-wall-head
          border-bottom 1px solid #f6f6f6
          .honor-wall-title
            color: #646464
            font-weight 600
            display: block
            padding .8rem 1.3rem
        .honor-wall-content
          padding: 1rem 1.3rem
          margin: 0 auto
          .honor-wall-item
            padding-bottom .8rem
            .honor-svg
              padding-right .6rem
              .svg-icon
                fill #ff4c81
              &.honnor-like
                .svg-icon
                  fill #5b6aff
            .honor-type
              color: #646464
              .honor-name
                color: #ffab0c
                font-weight 600
              .comment-all-count
                color: #ff4c81
                font-weight 600
              .column-writer
                color: #ffab0c
              .like-all-count
                color: #5b6aff
      .honor-for-focus
        margin .6rem 0
        clearFix()
        .honor-for-focus-empty
          .honor-focus-com
            display: inline-block
            width: 48%
            background: #ffffff
            text-align center
            float: left
            padding .6rem 0
            color: #8590a6
            box-shadow: 0 1px 3px rgba(26, 26, 26, .1);
            border-radius .3rem
            .item-Inner
              .item-value
                color: #1a1a1a
            &.focus-i
              float: right
      .opt-list
        .opt-list-empty
          .opt-item
            .opt-hov
              font-size .875rem
              color: #646464
              display: block
              padding .8rem 0
              /*background: #ccc*/
              border-bottom 1px solid #ebebeb
              border-top 1px solid #ebebeb
              clearFix()
              .fLeft
                float: left
              .fRight
                float: right
                &.opt-type-count
                  color: #8590a6
              &:hover
                color #6074d2
              &:hover .fRight
                color #6074d2
      .deal-wrapper
        padding-bottom 8rem
        margin-top .6rem
        .deal-list
          .deal-dot
            font-size: 13px;
            line-height: 2;
            color: #8590a6;
            display: inline-block
            &:not(:last-child):after
              width: 0;
              margin: 0 0 0 6px;
              content: "\B7";
            .deal-item
              color: #8590a6;

</style>
