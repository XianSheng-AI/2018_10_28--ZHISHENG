<template>
  <div class="action-row">
    <ul class="action-row-ul">
      <li class="action-row-ul-li">
        <div class="same action-like">
          <svg-icon class="act" iconClass="icon-dianzan1"></svg-icon>
          <span class="same-count like-count">456</span>
        </div>
      </li>
      <li class="action-row-ul-li">
        <div class="same action-comment">
          <svg-icon class="act" iconClass="icon-zhuanfa5"></svg-icon>
          <span class="same-count comment-count">88</span>
        </div>
      </li>
      <li class="action-row-ul-li">
        <div class="same action-collect">
          <svg-icon class="act" iconClass="icon-shoucang2"></svg-icon>
          <span class="same-count collect-count">8</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "action",
    data() {
      return {}
    }
  }
</script>

<style lang="stylus" scoped>
  .action-row
    width 100%
    height 1.4rem
    // background orange
    .action-row-ul-li
      margin-right 1.8rem
      float left
      line-height 1.4rem
      cursor pointer
      .same

        .svg-icon
          fill #ccc
          font-size 1rem
        .same-count
          font-size .9rem
          font-weight 700
          color #b2bac2
        .svg-icon
          fill red
        .act
          fill darkturquoise
  .info-img-box
    height:100%
    .info-img
      height:5rem
</style>
