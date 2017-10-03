<template>
  <div id="app">
    <div class="video" data-vide-bg="assets/video/ocean"></div>
    <div class="container-fluid d-flex flex-column">
      <div class="row row-main">
        <div class="col-sm-10 offset-sm-1 text-center d-flex flex-column justify-content-center align-items-center">
          <transition name="fade">
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<!--<style src="../node_modules/vuetify/dist/vuetify.min.css"></style>-->
<style src="./assets/css/bootstrap.min.css"></style>
<style src="./assets/css/buttons.css"></style>
<style src="./assets/css/main.css"></style>

<script>
  import 'jquery'
  import 'vide'

  export default {
      name: 'app',
      data () {
          return {
              name: 'WOW',
              msg: 'Welcome to Your Vue.js App'
          }
      },
      created: function () {

      }
  }
</script>
