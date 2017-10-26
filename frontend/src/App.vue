<template>
  <v-app dark id="app">
    <v-container fluid fill-height>
      <router-view></router-view>
    </v-container>
  </v-app>
</template>

<style src="../node_modules/vuetify/dist/vuetify.min.css"></style>
<style src="./assets/css/buttons.css"></style>
<style src="./assets/css/main.css"></style>

<script>
  import 'jquery'
  import 'vide'

  export default {
    name: 'app',
    data() {
      return {}
    }
  }
</script>

<style scoped>
  .container {
    position: relative;
    z-index: 2;
    font-family: 'Adam', sans-serif;
  }
</style>
