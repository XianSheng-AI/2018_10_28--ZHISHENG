<template>
    <div class="people-center">
      <div class="person-header-wrapper">
        <person-header></person-header>
      </div>
      <div class="personMain">
        <person-main></person-main>
        <person-honor></person-honor>
      </div>
    </div>
</template>

<script>
  import personHeader from './children/person-header/person-header'
  import personMain from './children/profile-main/profile-main-pe'
  import personHonor from './children/personal-honor/personal-honor'
    export default {
        name: "people",
        data() {
            return {}
        },
      components:{
        personHeader,
        personMain,
        personHonor
      }
    }
</script>

<style lang="stylus" scoped>
  @import "~@/common/stylus/mixins.styl"
.people-center
  width 60rem
  margin 3.4rem auto
  position: relative
  border-radius .3rem
  .person-header-wrapper
    background: #f6f6f6;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
  .personMain
    width: 100%
    height:80rem
    margin-top:.625rem
    background: #ccc
</style>
