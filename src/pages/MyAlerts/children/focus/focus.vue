<template>
    <div class="action-box">
      <div class="action-head">
        <ul class="guide-ul">
          <li class="guide-item" v-for="(item,index) of opt" :key="index" @click="chanIndex(index)">
            <router-link
              :to="item.to"
              tag="span"
              class="action-type"
              :class="{'action-fo':selIndex.in===index}"

            >{{item.typeText}}</router-link>
          </li>

        </ul>
        <!--<div class="more-select">-->
          <!--<span class="more-svg">-->
            <!--<svg-icon iconClass="icon-zhankai"></svg-icon>-->
          <!--</span>-->
          <!--<div class=""></div>-->
        <!--</div>-->
      </div>
      <div class="action-content-box">
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
    export default {
        name: "focus",
        data() {
            return {
              opt:[{
                typeText:'全部关注',
                to      :'/setting/focus/all-fo'
              },{
                typeText:'关注了我的收藏夹',
                to      :'/setting/focus/collect-fo'
              },{
                typeText:'关注了我的',
                to      :'/setting/focus/me-fo'
              },{
                typeText:'关注了我的专栏',
                to      :'/setting/focus/column-fo'
              },{
                typeText:'关注了我的问题',
                to      :'/setting/focus/question-fo'
              }],

              selIndex:{in:0}
            }
        },
      computed:{

      },
      methods:{
        chanIndex(index){
          this.$set(this.selIndex,'in',index)
        }
      }
    }
</script>

<style lang="stylus" scoped>
.action-box
  width: 100%
  height:40rem
  .action-head
    overflow: hidden
    border-bottom 1px solid #ebebeb
    width: 100%
    /*height:3rem*/
    /*background: #ccc*/
    /*border-bottom 1px solid #ebebeb*/
    .guide-ul
      margin-left .6rem
      .guide-item

        float: left
        .action-type
          font-size .875rem
          display: inline-block
          padding .6rem 1.3rem
          cursor: pointer;
          &.action-fo
            color #333639
            font-weight bold
            border-bottom 1px solid #333639
        /*&:last-child*/
          /*width:2rem*/
          /*height:2rem*/
          /*background: #ccc*/
    .more-select
      float: left
      padding .5rem 1rem
      /*background: #ccc*/
      cursor: pointer;

      .more-svg
        .svg-icon
          fill #8590a6
      &:hover
        .more-svg
          .svg-icon
            fill #bac5db
</style>


































