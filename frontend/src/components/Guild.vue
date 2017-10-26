<template>
  <v-layout row wrap>
    <v-flex xs10 offset-xs1>
      <v-card v-if="guild.name">
        <v-card-media
            class="white--text"
            height="300px"
            :src="getLogo()"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">{{guild.name}} ({{guild.server}})</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
          <v-tabs v-model="active" grow>
            <v-tabs-bar class="green darken-4">
              <v-tabs-slider class="grey lighten-4"></v-tabs-slider>
              <v-tabs-item
                  v-for="tab of tabs"
                  :key="tab.path"
                  replace
                  :to="tab.path">
                {{tab.name}}
              </v-tabs-item>
            </v-tabs-bar>
          </v-tabs>
        <v-slide-x-transition>
          <router-view></router-view>
        </v-slide-x-transition>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
    export default {
        name: 'guild',
        data() {
            return {
                guild: {},
                tabs: [
                    {
                        name: 'События',
                        path: 'main'
                    },
                    {
                        name: 'Участники',
                        path: 'users'
                    },
                ],
                active: null,
            }
        },
        created: function () {
            this.$http.get('/guild/get', {id: this.$route.params.id})
                .then(res => {
                    if (res.data)
                      this.guild = res.data
                });
        },
        methods: {
            getLogo: function () {
                if(this.guild.server.indexOf('LK') !== -1)
                    return '/static/assets/img/lk.jpg';

                if(this.guild.server.indexOf('Cata') !== -1)
                    return '/static/assets/img/cata.jpg';

                if(this.guild.server.indexOf('Legion') !== -1)
                    return '/static/assets/img/legion.jpg'
            }
        }
    }
</script>