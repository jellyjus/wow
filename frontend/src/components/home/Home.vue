<template>
    <v-layout row wrap>
        <v-flex xs6 offset-xs3 class="main" v-if="!register">
            <h3>WOWCIRLE GUILD SERVICE</h3>
            <div class="button" @click="register = !register">Создать</div>
        </v-flex>
        <transition name="fade">
            <v-flex xs10 offset-xs1 class="main" v-if="register">
                <register></register>
            </v-flex>
        </transition>
    </v-layout>
</template>

<script>
    import Register from "../register/Register.vue";
    export default {
        components: {Register},
        name: 'home',
        data() {
            return {
                register: false
            }
        }
    }
</script>

<style scoped src="./home.css"></style>