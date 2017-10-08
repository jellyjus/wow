<template>
  <v-app dark>
    <div id="app">
      <div class="video" data-vide-bg="/static/assets/video/ocean"></div>
      <v-container fluid fill-height>
        <div class="auth">
          <img :src="photo" v-if="photo">
          <v-icon x-large dark v-else @click="login">person_pin</v-icon>
        </div>
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
              photo: null
          }
      },
      created: function () {
          VK.Auth.getLoginStatus((response) => {
              if (response.session) {
                  this.VK_getPhoto(response.session.mid)
              }
          })
      },
      methods: {
          login: function () {
              console.log('login');
              VK.Auth.login(function(response) {
                  if (response.session) {
                    this.VK_getPhoto(response.session.mid)
                  } else {
                    console.log('ERROR AUTH')
                  }
              });
          },
          VK_getPhoto: function (uid) {
              VK.Api.call('users.get', {user_ids: uid, fields: 'photo_50'}, (data) => {
                  this.photo = data.response[0].photo_50
              });
          }
      }
  }
</script>
