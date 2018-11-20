<template>
  <div id="app">
    <common-header></common-header>
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
body{
  background: #f6f6f6;
}
/*input {*/
  /*background: none;*/
  /*outline: none;*/
  /*border: 0;*/
/*}*/
/*#app {*/
  /*font-family: "Avenir", Helvetica, Arial, sans-serif;*/
  /*font-family: -apple-system,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Arial,sans-serif;*/

  /*font-family:Helvetica,arial,'Hiragino Sans GB',\5b8b\4f53,sans-serif;*/
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
/*}*/
/*.icon {*/
  /*width: 1em;*/
  /*height: 1em;*/
  /*vertical-align: -0.15em;*/
  /*fill: currentColor;*/
  /*overflow: hidden;*/
/*}*/
</style>
