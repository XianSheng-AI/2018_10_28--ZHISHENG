<template>
  <aside class="aside">

    <div class="card-part">
      <!--写回答/写文章/写想法-->
      <div class="write-card">
        <a class="write-item" href="javascript:;" alt="米">
          <span class="write-svg">
            <svg-icon iconClass="icon-xiepinglun"></svg-icon>
          </span>
          <router-link to="/hot" active-class="active" exact>123</router-link>
          <span class="write-type">写回答</span>
        </a>
        <a class="write-item" href="javascript:;" alt="米">
          <span class="write-svg">
            <svg-icon iconClass="icon-xiewenzhang"></svg-icon>
          </span>
          <span class="write-type">写文章</span>
        </a>
        <a class="write-item" href="javascript:;" alt="米" @mousedown="ssss">
          <span class="write-svg">
            <svg-icon iconClass="icon-xiangfa"></svg-icon>
          </span>
          <span class="write-type">写想法</span>
        </a>
      </div>
      <!--写草稿-->
      <div class="write-draft">
        <div class="draft-empty">
          <span class="sraft-svg">
            <svg-icon iconClass="icon-gaojian"></svg-icon>
          </span>
          <span class="write-type">我的草稿</span>
          <!--小正方形-->
          <div class="count-tip">
            66
          </div>
        </div>
      </div>
    </div>
    <!--注册-->
    <!--<home-register></home-register>-->
  </aside>
</template>

<script>
  import homeRegister from './register'

  export default {
    name: "aside",
    components: {
      homeRegister
    },
    data() {
      return {}
    },
    mounted(){
      // console.log(this.$router)
      // console.log(this.$route)
    },
    methods:{
      ssss(){
        alert(555)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .aside
    /*box-shadow: 0 0 0.2rem #ccc;*/
    position: absolute
    top: 0
    right: 0
    display: inline-block
    width: 298px
    height: 80rem
    /*background: #ccc*/
    border-radius .3rem
    overflow: hidden
    .card-part
      width: 100%
      height:20rem
      background: #FFFFFF
      .write-card
        display: flex;
        justify-content: center;
        .write-item
          align-items: center;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          color: #8590A6
          margin 20px
          .write-svg
            .svg-icon
              fill #8590A6
          .write-type
            margin-top 2px
      /*草稿*/
      .write-draft
        width 100%
        /*height:3rem*/
        /*background: #ccc*/
        display: flex
        align-items center
        position: relative
        margin-top 8px
        .draft-empty
          display: flex
          justify-content: flex-start
          align-items center
          width: 100%
          height:inherit
          padding .5rem 0
          position: relative
          cursor: pointer;
          -webkit-transition: .1s
          -moz-transition: .1s
          -ms-transition: .1s
          -o-transition: .1s
          transition: .1s
          &::after
            content '';
            position: absolute
            top -6px
            left 10.2%
            width 80%
            height:1px
            background: #F0F2F7
          .sraft-svg
            margin 0 4px 0 30px
            .svg-icon
              fill #8590A6
          .write-type
            color: #8590A6
          .count-tip
            border-radius .2rem
            margin-left 130px
            padding 5px 7px
            background: #f6f6f6
            color: #8590A6
            font-size .6rem
            -webkit-transition: .1s
            -moz-transition: .1s
            -ms-transition: .1s
            -o-transition: .1s
            transition: .1s
          &:hover
            background-color #f6f6f6
          &:hover .count-tip
            background-color #ffffff
</style>
