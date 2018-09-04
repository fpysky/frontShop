<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>
<script>
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
export default {
  name: 'App',
  data(){
    return {

    }
  }
}
</script>
<style>
body{
  margin:0;
  padding:0;
}
</style>
