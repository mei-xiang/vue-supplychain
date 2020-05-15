<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import 'assets/css/normalize.css';
@import 'assets/css/base.css';
@import 'assets/css/font-awesome.min.css';
@import 'assets/css/main.css';

#app {
  width: 100%;
  height: 100%;
}
</style>
