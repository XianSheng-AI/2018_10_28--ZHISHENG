<template>
  <div id="app">
    <common-header v-if="$route.meta.showHeader"></common-header>
    <router-view/>
  </div>
</template>

<script>
  import commonHeader from './components/Header/Header'
export default {
  name: "App",
  components:{
    commonHeader
  }
};
</script>

<style>
  #app{
    width: 100%;
    height: 100%;
    /*background: #000;*/
  }
body{
  width: 100%;
  height: 100%;
  background: #f6f6f6;
}
#nprogress .bar {
  /*加载条颜色*/
  background: #007fff !important;
}
</style>
