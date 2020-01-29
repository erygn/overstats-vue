<template>
    <nav>
        <v-app-bar
                app
                flat
        >
            <v-app-bar-nav-icon v-if="!drawer" @click.stop="openDrawer" />
            <v-toolbar-title class="text-uppercase">
                <span class="font-weight-light">Over</span>
                <span>Stats</span>
            </v-toolbar-title>
            <v-spacer />
            <v-btn icon>
                <v-icon>mdi-apps</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>mdi-bell</v-icon>
            </v-btn>
            <v-menu offset-y :close-on-click="true" transition="slide-y-transition">
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
                                <v-list-item-title>OverStats</v-list-item-title>
                                <v-list-item-subtitle>Main Tank</v-list-item-subtitle>
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

                    <v-divider/>

                    <v-list>
                        <v-list-item link to="/" @click="menu = false">
                            <v-list-item-action>
                                <v-icon color="grey darken-1">mdi-home</v-icon>
                            </v-list-item-action>
                            <v-list-item-content>
                                <v-list-item-title class="grey--text text--darken-1">
                                    Home
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>

                        <v-list-item link to="/about">
                            <v-list-item-action>
                                <v-icon color="grey darken-1">mdi-information-outline</v-icon>
                            </v-list-item-action>
                            <v-list-item-content>
                                <v-list-item-title class="grey--text text--darken-1">
                                    About
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item link @click="signout">
                            <v-list-item-action>
                                <v-icon color="grey darken-1">mdi-logout-variant</v-icon>
                            </v-list-item-action>
                            <v-list-item-content>
                                <v-list-item-title class="grey--text text--darken-1">
                                    Deconnexion
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>

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

        <v-navigation-drawer
                :mini-variant.sync="mini"
                src="http://subswapr.com/background.jpg"
                v-model="drawer"
                color="#051E34"
                app
                mobile-break-point="920"
        >
            <v-list dense>
                <v-list-item to="/">
                    <v-list-item-action>
                        <v-icon style="color: #c2cbd4">mdi-home</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title style="color: #c2cbd4">
                            Home
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item to="/about">
                    <v-list-item-action>
                        <v-icon style="color: #c2cbd4">mdi-information-outline</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title style="color: #c2cbd4">
                            About
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item
                        class="mt-4 item"
                >
                    <v-list-item-action>
                        <v-icon color="#c2cbd4">mdi-plus</v-icon>
                    </v-list-item-action>
                    <v-list-item-title style="color: #c2cbd4">Ajouter une équipe</v-list-item-title>
                </v-list-item>

                <v-list-group
                        no-action
                        append-icon="">
                    <template v-slot:activator>
                            <v-list-item-action>
                                <v-icon size="20" color="#c2cbd4">fa-gamepad</v-icon>
                            </v-list-item-action>
                            <v-list-item-content>
                                <v-list-item-title style="color: #c2cbd4">
                                    Mes équipes
                                </v-list-item-title>
                            </v-list-item-content>
                        <v-list-item-action>
                            <v-icon color="#c2cbd4">fa-angle-down</v-icon>
                        </v-list-item-action>
                    </template>
                    <v-list-item
                            link
                    >
                        <v-list-item-content>
                            <v-list-item-title style="color: #c2cbd4">
                                EQB
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-group>
                <v-divider
                        dark
                        class="my-4"
                />
                <v-list-item class="item">
                    <v-list-item-action>
                        <v-icon color="#c2cbd4">mdi-settings</v-icon>
                    </v-list-item-action>
                    <v-list-item-title style="color: #c2cbd4">Paramètres</v-list-item-title>
                </v-list-item>
            </v-list>

            <v-list>
                <v-list-item v-if="!mini">
                    <v-spacer/>
                        <v-btn @click.stop="mini = !mini" icon>
                            <v-icon color="#c2cbd4">fa-angle-left</v-icon>
                        </v-btn>
                </v-list-item>
                <v-list-item v-if="mini">
                    <v-list-item-action>
                        <v-icon style="color: #c2cbd4; margin-left: 5px">fa-angle-right</v-icon>
                    </v-list-item-action>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>



    </nav>
</template>

<script>
    import firebase from 'firebase';
    export default {
        name: "Navbar",
        data: () => ({
            drawer: null,
            mini: false,
            fav: true,
            menu: false,
            message: false,
            hints: true,

            dialog: false,
        }),
        methods: {
            openDrawer: function () {
                this.drawer = !this.drawer;
                this.mini = false;
            },
            signout: function () {
                firebase.auth().signOut().then(() => {
                    this.$router.replace('login')
                })
            }
        }
    }
</script>

<style scoped>
    .item:hover {
        background-color: #193044;
    }
    .active {
        color: #193044;
    }
</style>