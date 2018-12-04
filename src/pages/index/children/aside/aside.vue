<template>
    <aside class="aside">
        <home-register></home-register>
    </aside>
</template>

<script>
  import homeRegister from './register'
    export default {
        name: "aside",
        components:{
          homeRegister
        },
        data() {
            return {}
        },
    }
</script>

<style lang="stylus" scoped>
  .aside
    /*box-shadow: 0 0 0.2rem #ccc;*/
    position: absolute
    top: 0
    right: 0
    display: inline-block
    width: 15rem
    height: 80rem
    /*background: #ccc*/
    border-radius .3rem
    overflow: hidden

</style>
