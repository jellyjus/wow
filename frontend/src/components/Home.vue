<template>
  <div style="width: 100%; height: 100%">
    <div class="video" data-vide-bg="/static/assets/video/ocean"></div>
    <v-layout row wrap align-center justify-center text-xs-center style="position: relative;z-index: 10">
      <div class="auth">
        <img :src="photo" v-if="photo">
        <v-icon x-large dark v-else @click="login">
          person_pin
        </v-icon>
      </div>
      <v-flex xs4 class="main" v-if="!register">
        <h3>WOWCIRLE GUILD SERVICE</h3>
        <div class="button" @click="register = !register">
          Создать
        </div>
      </v-flex>
      <transition name="fade">
        <v-flex xs6 class="main" v-if="register">
          <register></register>
        </v-flex>
      </transition>
    </v-layout>
  </div>
</template>

<script>
  import Register from "./Register.vue";

  export default {
    components: {Register},
    name: 'home',
    data() {
      return {
        register: false,
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
        VK.Auth.login((response) => {
          if (response.session) {
            this.VK_getPhoto(response.session.mid)
          } else {
            console.log('ERROR AUTH')
          }
        });
      },
      VK_getPhoto: function (uid) {
        VK.Api.call('users.get', {
          user_ids: uid,
          fields: 'photo_50'
        }, (data) => {
          this.photo = data.response[0].photo_50
        });
      }
    }
  }
</script>

<style scoped>
  .video {
    width: 100%;
    height: 100%;
    filter: blur(5px);
    transform: scale(1.03);
    position: fixed;
    z-index: 1;
  }

  .main {
    padding: 30px 20px;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .auth {
    position: absolute;
    top: 10px;
    right: 10px;
    opacity: 0.8;
    transition: .5s;
    max-width: 40px;
    height: auto;
  }

  .auth:hover {
    cursor: pointer;
    opacity: 1;
  }

  .auth img {
    max-width: 100%;
    height: auto;
    border-radius: 50%;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s
  }

  .fade-enter, .fade-leave-to {
    opacity: 0
  }
</style>