<template>
  <div id="app" class="app">
    <img src="./assets/tea.png">
    <h1 class="title">Tea-rrific, who's round is it?</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import "../node_modules/bulma/css/bulma.css";
@import "../node_modules/font-awesome/css/font-awesome.min.css";
.app {
  text-align: center;
}
img {
  max-width: 20%;
}
.title {
  margin: 0!important;
}
</style>
