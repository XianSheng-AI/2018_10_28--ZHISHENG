<template>
    <div class="people-center">
      <div class="person-header-wrapper">
        <person-header></person-header>
      </div>

    </div>
</template>

<script>
  import personHeader from './children/person-header/person-header'
    export default {
        name: "people",
        data() {
            return {}
        },
      components:{
        personHeader
      }
    }
</script>

<style lang="stylus" scoped>
  @import "~@/common/stylus/mixins.styl"
.people-center
  width 60rem
  margin 3.4rem auto
  /*background: #ccc*/
  position: relative
  border-radius .3rem
  /*overflow: hidden*/
  .person-header-wrapper
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
</style>
