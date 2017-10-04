<template>
  <v-app dark>
    <div id="app">
      <div class="video" data-vide-bg="assets/video/ocean"></div>
      <v-container fluid fill-height>
        <v-layout row wrap align-center justify-center>
          <v-flex xs10 text-xs-center>
            <transition name="fade">
              <router-view></router-view>
            </transition>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
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
