<template>
  <div class="my-idea">
    <div class="action-guide">
      <span class="my-action">我的想法</span>
    </div>
    <my-idea></my-idea>
  </div>
</template>

<script>
  import myIdea from './template-file/tem-idea'
  export default {
    name: "idea",
    data() {
      return {}
    },
    components:{
      myIdea
    }
  }
</script>

<style lang="stylus" scoped>
  .my-idea
    .action-guide
      border-bottom 1px solid #f6f6f6
      .my-action
        display inline-block
        padding .9rem 0
        font-weight 600
        color: #1a1a1a
        /*15px*/
        font-size .9375rem

</style>
