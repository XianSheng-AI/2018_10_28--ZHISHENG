<template>
  <div id="app">
    <vue-scroll :ops="ops">
      <common-header v-if="$route.meta.showHeader"></common-header>
      <router-view/>
    </vue-scroll>
  </div>
</template>

<script>
  import commonHeader from './components/Header/Header'

  export default {
    name: "App",
    data() {
      return {
        position: null,
        ops: {} // 滚动条参数
      }
    },
    components: {
      commonHeader
    },
    methods: {
      onScroll: function (e, position) {
        this.position = position;
      }
    }
  };
</script>

<style>
  #app {
    width: 100%;
    height: 100%;
    /*background: #000;*/
  }

  body {
    width: 100%;
    height: 100%;
    background: #f6f6f6;
  }

  #nprogress .bar {
    /*加载条颜色*/
    background: #007fff !important;
  }
</style>
