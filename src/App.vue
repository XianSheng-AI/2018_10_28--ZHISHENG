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
* {
  margin: 0;
  padding: 0;
  border: none;
  list-style: none;
  text-decoration: none;
  color: #71777c;
}
body,
html {
  font-size: 16px;
  background: #f4f5f5;
  margin: 0;
  color: #71777c;
}
input {
  background: none;
  outline: none;
  border: 0px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
