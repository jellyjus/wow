<template>
    <v-form v-model="valid" ref="form" class="text-xs-left">
        <v-text-field
                label="Guild name"
                v-model="guildName"
                :rules="[(v) => !!v || 'Name is required']"
                required
        ></v-text-field>
        <v-select
                label="Server"
                v-model="server"
                :items="serversList"
                :rules="[(v) => !!v || 'Server is required']"
                required
        ></v-select>
        <div class="button" @click="submit" :style="{margin: 0}">Создать</div>
    </v-form>
</template>

<script>
    export default {
        name: 'register',
        data() {
            return {
                valid: false,
                guildName: '',
                server: null,
                serversList: [
                    'LK x5',
                    'LK x100',
                    'Cataclysm x100',
                    'Legion x4'
                ]
            }
        },
        methods: {
            submit: async function () {
                if (this.$refs.form.validate()) {
                    try {
                        const res = await this.$http.post('/guild/create', {server: this.server, name: this.guildName})
                    } catch (e) {
                        console.log(e)
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>