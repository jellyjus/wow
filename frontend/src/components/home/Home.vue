<template>
    <div class="main">
        <div v-else v-if="!register">
            <h2>WOWCIRLE GUILD SERVICE</h2>
            <div class="button" @click="register = !register">Создать</div>
        </div>
        <transition name="fade" v-else>
            <register ></register>
        </transition>
    </div>
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