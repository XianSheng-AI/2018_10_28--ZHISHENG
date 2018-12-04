<template>
    <div class="programming-tag">
        <nav class="nav-wrapper">
          <ul class="nav-list">
            <li class="nav-item unlike-item">
              <a href="javascript:;">领域</a>
            </li>
            <li class="nav-item">
              <a href="javascript:;">Android</a>
            </li>
            <li class="nav-item">
              <a href="javascript:;">前端</a>
            </li>
            <li class="nav-item">
              <a href="javascript:;">iOS</a>
            </li>
            <li class="nav-item">
              <a href="javascript:;">后端</a>
            </li>
            <li class="nav-item">
              <a href="javascript:;">设计</a>
            </li>
            <li class="nav-item">
              <a href="javascript:;">产品</a>
            </li>
            <li class="nav-item">
              <a href="javascript:;">工具资源</a>
            </li>
            <li class="nav-item">
              <a href="javascript:;">阅读</a>
            </li>
            <li class="nav-item">
              <a href="javascript:;">人工智能</a>
            </li>
            <li class="nav-item">
              <a href="javascript:;">运维</a>
            </li>
          </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "programe-tag",
        data() {
            return {}
        }
    }
</script>

<style lang="stylus" scoped>
.programming-tag
  width: 100%
  border-top 1px solid #f1f1f1
  .nav-wrapper
    /*height: 40px*/
    width 960px
    background: #ccc
    margin 0 auto
    .nav-list
      .nav-item
        float: left
        padding: .8rem .8rem
        /*background: #ccc*/
        &.unlike-item a
          color: #007fff
          padding-left 0
        a
          color: #71777c
          font-size .875rem
          display: inline-block
          &:hover
            color: #0057a7
</style>
