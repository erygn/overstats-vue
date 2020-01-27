<template>
  <v-app id="inspire">
    <v-navigation-drawer
            v-model="drawer"
            app
            clipped
    >
      <v-list dense>
          <v-list-item link to="/">
              <v-list-item-action>
                  <v-icon color="grey darken-1">fa-home</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                  <v-list-item-title class="grey--text text--darken-1">
                      Home
                  </v-list-item-title>
              </v-list-item-content>
          </v-list-item>

          <v-list-item link to="/about">
              <v-list-item-action>
                  <v-icon color="grey darken-1">fa-heart</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                  <v-list-item-title class="grey--text text--darken-1">
                      About
                  </v-list-item-title>
              </v-list-item-content>
          </v-list-item>

        <v-subheader class="mt-4 grey--text text--darken-1">SUBSCRIPTIONS</v-subheader>
        <v-list>
          <v-list-item
                  v-for="item in items2"
                  :key="item.text"
                  link
          >
            <v-list-item-avatar>
              <img
                      :src="`https://randomuser.me/api/portraits/men/${item.picture}.jpg`"
                      alt=""
              >
            </v-list-item-avatar>
            <v-list-item-title v-text="item.text" />
          </v-list-item>
        </v-list>
          <v-divider
                  dark
                  class="my-4"
          />
          <v-list>
              <v-row
                      align="center"
              >
                  <v-col cols="6">
                      <v-subheader class="grey--text text--darken-1">
                          LABELS
                      </v-subheader>
                  </v-col>
                  <v-col
                          cols="6"
                          class="text-right"
                  >
                      <v-btn
                              small
                              text
                      >edit</v-btn>
                  </v-col>
              </v-row>
          </v-list>
        <v-list-item
                class="mt-4"
                link
        >
          <v-list-item-action>
            <v-icon color="grey darken-1">mdi-plus-circle-outline</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1">Browse Channels</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon color="grey darken-1">mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1">Manage Subscriptions</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
            :clipped-left="$vuetify.breakpoint.lgAndUp"
            app
            color="dark"
            dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <span class="title ml-3 mr-5 hidden-sm-and-down">OverStats</span>
      <v-text-field
              flat
              solo-inverted
              hide-details
              prepend-inner-icon="mdi-magnify"
              label="Rechercher"

      />
      <v-spacer />
      <v-btn icon>
        <v-icon>mdi-apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
        <v-menu offset-y :close-on-content-click="closeOnContentClick" transition="slide-y-transition">
            <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                    <v-avatar
                            size="32px"
                            item
                    >
                        <v-img
                                src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
                                alt="Vuetify"
                        /></v-avatar>
                </v-btn>
            </template>
            <v-card>
                <v-list>
                    <v-list-item>
                        <v-list-item-avatar>
                            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title>John Leider</v-list-item-title>
                            <v-list-item-subtitle>Founder of Vuetify.js</v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-action>
                            <v-btn
                                    :class="fav ? 'red--text' : ''"
                                    icon
                                    @click="fav = !fav"
                            >
                                <v-icon>mdi-heart</v-icon>
                            </v-btn>
                        </v-list-item-action>
                    </v-list-item>
                </v-list>

                <v-divider></v-divider>

                <v-list>
                    <v-list-item>
                        <v-list-item-action>
                            <v-switch v-model="message" color="purple"></v-switch>
                        </v-list-item-action>
                        <v-list-item-title>Enable messages</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-action>
                            <v-switch v-model="hints" color="purple"></v-switch>
                        </v-list-item-action>
                        <v-list-item-title>Enable hints</v-list-item-title>
                    </v-list-item>
                </v-list>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn text @click="menu = false">Cancel</v-btn>
                    <v-btn color="primary" text @click="menu = false">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-menu>
    </v-app-bar>

<!--    <v-app-bar-->
<!--            app-->
<!--            clipped-left-->
<!--            color="dark"-->
<!--            dense-->
<!--    >-->
<!--      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />-->
<!--      <v-icon class="mx-4">fab fa-youtube</v-icon>-->
<!--      <v-toolbar-title class="mr-12 align-center">-->
<!--        <span class="title">Youtube</span>-->
<!--      </v-toolbar-title>-->
<!--      <v-spacer />-->
<!--      <v-row-->
<!--              align="center"-->
<!--              style="max-width: 650px"-->
<!--      >-->
<!--        <v-text-field-->
<!--                :append-icon-cb="() => {}"-->
<!--                placeholder="Search..."-->
<!--                single-line-->
<!--                append-icon="fa-search"-->
<!--                color="white"-->
<!--                hide-details-->
<!--        />-->
<!--      </v-row>-->
<!--    </v-app-bar>-->

    <v-content>
        <v-btn
                bottom
                color="dark"
                dark
                fab
                fixed
                right
                @click="dialog = !dialog"
        >
            <v-dialog
            v-model="dialog"
            width="800px"
            >
            <v-card>
                <v-card-title class="grey darken-4">
                    Ajouter une valeur
                </v-card-title>
                <v-container>
                    <v-row class="mx-2">
                        <v-col
                                class="align-center justify-space-between"
                                cols="12"
                        >
                            <v-row
                                    align="center"
                                    class="mr-0"
                            >
                                <v-avatar
                                        size="40px"
                                        class="mx-3"
                                >
                                    <img
                                            src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
                                            alt=""
                                    >
                                </v-avatar>
                                <v-text-field
                                        placeholder="Name"
                                />
                            </v-row>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field
                                    prepend-icon="mdi-account-card-details-outline"
                                    placeholder="Company"
                            />
                        </v-col>
                        <v-col cols="6">
                            <v-text-field
                                    placeholder="Job title"
                            />
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                                    prepend-icon="mdi-mail"
                                    placeholder="Email"
                            />
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                                    type="tel"
                                    prepend-icon="mdi-phone"
                                    placeholder="(000) 000 - 0000"
                            />
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                                    prepend-icon="mdi-text"
                                    placeholder="Notes"
                            />
                        </v-col>
                    </v-row>
                </v-container>
                <v-card-actions>
                    <v-btn
                            text
                            color="primary"
                    >More</v-btn>
                    <v-spacer />
                    <v-btn
                            text
                            color="primary"
                            @click="dialog = false"
                    >Cancel</v-btn>
                    <v-btn
                            text
                            @click="dialog = false"
                    >Save</v-btn>
                </v-card-actions>
            </v-card>
            </v-dialog>
            <v-icon>mdi-plus</v-icon>
        </v-btn>
        <router-view/>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
        fav: true,
        menu: false,
        message: false,
        hints: true,

        dialog: false,

        closeOnContentClick: false,


      items: [
        { icon: 'trending_up', text: 'Most Popular' },
        { icon: 'subscriptions', text: 'Subscriptions' },
        { icon: 'history', text: 'History' },
        { icon: 'featured_play_list', text: 'Playlists' },
        { icon: 'watch_later', text: 'Watch Later' },
          { icon: 'trending_up', text: 'Most Popular' },
          { icon: 'subscriptions', text: 'Subscriptions' },
          { icon: 'history', text: 'History' },
          { icon: 'featured_play_list', text: 'Playlists' },
          { icon: 'watch_later', text: 'Watch Later' },
      ],
      items2: [
        { picture: 28, text: 'Joseph' },
        { picture: 38, text: 'Apple' },
        { picture: 48, text: 'Xbox Ahoy' },
        { picture: 58, text: 'Nokia' },
        { picture: 78, text: 'MKBHD' },
      ],
    }),
    created () {
      this.$vuetify.theme.dark = true
    },
  }
</script>