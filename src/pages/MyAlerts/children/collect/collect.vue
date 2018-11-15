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
    name: "collect",
    data() {
      return {
        opt:[{
          typeText:'全部收藏',
          to      :'/setting/collect/all-col'
        },{
          typeText:'谁收藏了我的文章',
          to      :'/setting/collect/article-col'
        },{
          typeText:'谁收藏了我的回答',
          to      :'/setting/collect/answer-col'
        },{
          typeText:'谁收藏了我的收藏夹',
          to      :'/setting/collect/favorite-col'
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
      .guide-ul
        margin-left .6rem
        .guide-item
          float: left
          padding 0 1.3rem
          .action-type
            font-size .875rem
            display: inline-block
            padding .6rem 0
            cursor: pointer;
            &.action-fo
              color #6165fc
              /*font-weight bold*/
              border-bottom 1px solid #9494fc
      .more-select
        float: left
        padding .5rem 1rem
        cursor: pointer;
        .more-svg
          .svg-icon
            fill #8590a6
        &:hover
          .more-svg
            .svg-icon
              fill #bac5db
</style>


































