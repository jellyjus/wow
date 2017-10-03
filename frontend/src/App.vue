<template>
  <div id="app">
    <div class="video" data-vide-bg="assets/video/ocean"></div>
    <div class="container-fluid d-flex flex-column">
      <div class="row row-main">
        <div class="col-sm-6 offset-sm-3 text-center d-flex flex-column justify-content-center align-items-center">
          <div class="main">
            <h2>WOWCIRLE GUILD SERVICE</h2>
            <div class="button">Создать</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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
