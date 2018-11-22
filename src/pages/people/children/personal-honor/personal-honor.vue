<template>
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
  .person-honor
    width: 18rem
    /*background: #fff*/
    float: right
    .person-honor-empty
      .honor-wall
        border-radius .3rem
        box-shadow: 0 1px 3px rgba(26,26,26,.1);
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
        .honor-for-focus-empty
          .honor-focus-com
            display: inline-block
            width: 48%
            background: #ffffff
            text-align center
            float: left
            padding .6rem 0
            color: #8590a6
            box-shadow: 0 1px 3px rgba(26,26,26,.1);
            border-radius .3rem
            .item-Inner
              .item-value
                color: #1a1a1a
            &.focus-i
              float: right

</style>
