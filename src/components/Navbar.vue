<template>
    <nav>
        <v-app-bar
                app
                dense
                flat
        >
            <v-app-bar-nav-icon v-if="!drawer" @click.stop="openDrawer" />
            <v-toolbar-title class="text-uppercase">
                <span class="font-weight-light">Over</span>
                <span>Stats</span>
            </v-toolbar-title>
            <v-spacer />
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
                                    style="color: #333333"
                                    src="https://genesis-mc.fr/images/overstats.png"
                                    alt="Overstats"
                            /></v-avatar>
                    </v-btn>
                </template>
                <v-card>
                    <v-list>
                        <v-list-item>
                            <v-list-item-avatar>
                                <img src="https://genesis-mc.fr/images/overstats.png" alt="Logo">
                            </v-list-item-avatar>

                            <v-list-item-content>
                                <v-list-item-title>{{ displayName.Pseudo }}</v-list-item-title>
                                <v-list-item-subtitle>{{ displayName.Description}}</v-list-item-subtitle>
                            </v-list-item-content>

                            <v-list-item-action>
                                    <v-icon color="green">mdi-check</v-icon>
                            </v-list-item-action>
                        </v-list-item>
                    </v-list>

                    <v-divider/>

                    <v-list>
                        <v-list-item link to="/">
                            <v-list-item-action>
                                <v-icon color="grey darken-1">mdi-home</v-icon>
                            </v-list-item-action>
                            <v-list-item-content>
                                <v-list-item-title class="grey--text text--darken-1">
                                    Accueil
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>

                        <v-list-item link to="/about">
                            <v-list-item-action>
                                <v-icon color="grey darken-1">mdi-information-outline</v-icon>
                            </v-list-item-action>
                            <v-list-item-content>
                                <v-list-item-title class="grey--text text--darken-1">
                                    A Propos
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item link to="/settings">
                            <v-list-item-action>
                                <v-icon color="grey darken-1">mdi-settings</v-icon>
                            </v-list-item-action>
                            <v-list-item-content>
                                <v-list-item-title class="grey--text text--darken-1">
                                    Paramètres
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>

                    <v-divider/>

                    <v-list>
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
                </v-card>
            </v-menu>
        </v-app-bar>

<!--        :mini-variant.sync="mini"-->

        <v-navigation-drawer
                :mini-variant.sync="mini"
                src="https://genesis-mc.fr/images/background.jpg"
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
                            Accueil
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item to="/about">
                    <v-list-item-action>
                        <v-icon style="color: #c2cbd4">mdi-information-outline</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title style="color: #c2cbd4">
                            A Propos
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-divider dark
                           class="my-4" />

                <a href="/" style="text-decoration: none">
                <v-list-item
                        class="mt-4"
                >
                        <v-list-item-action>
                            <v-icon color="red">mdi-alert</v-icon>
                        </v-list-item-action>
                        <v-list-item-title style="color: #F44336">[DEV] Rafraichissement</v-list-item-title>
                </v-list-item>
                </a>

                <v-list-item
                        to="/add"
                        class="mt-4"
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
                            v-for="(team, i) in teamList"
                            :key="i"
                            link
                            :to="{path: '/team', query: {team: i}}"
                    >
                            <v-list-item-content>
                                <v-list-item-title style="color: #c2cbd4">
                                    {{ team.TeamName }}
                                </v-list-item-title>
                            </v-list-item-content>
                    </v-list-item>
                </v-list-group>
                <v-divider
                        dark
                        class="my-4"
                />
                <v-list-item to="/settings">
                    <v-list-item-action>
                        <v-icon color="#c2cbd4">mdi-settings</v-icon>
                    </v-list-item-action>
                    <v-list-item-title style="color: #c2cbd4">Paramètres</v-list-item-title>
                </v-list-item>
            </v-list>

            <v-list>
                <v-list-item v-if="!mini && miniMD">
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
                <v-list-item v-if="!mini && !miniMD">
                    <v-spacer/>
                    <v-btn @click.stop="drawer = !drawer" icon>
                        <v-icon color="#c2cbd4">fa-angle-left</v-icon>
                    </v-btn>
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
            mini: true,
            fav: true,
            menu: false,
            message: false,
            hints: true,

            dialog: false,

            teamList: [],

            displayName: '',

            miniMD: ''
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
        },
        created () {
            switch (this.$vuetify.breakpoint.name) {
                case 'xs': this.miniMD = false; break;
                case 'sm': this.miniMD = true; break;
                case 'md': this.miniMD = true; break;
                case 'lg': this.miniMD = true; break;
                case 'xl': this.miniMD = true; break;
            }

            firebase.database().ref('users/' + firebase.auth().currentUser.uid).once('value').then((snapshot) => {
                const val = snapshot.val();
                this.displayName = val;
            })

            firebase.database().ref('teams/' + firebase.auth().currentUser.uid).on('value',  (snapshot) => {

                // alert(JSON.stringify(snapshot.val()))
                this.teamList = snapshot.val();
            })

            // firebase.database().ref('teams/' + firebase.auth().currentUser.uid).once('value').then((snapshot) => {
            //     const val = snapshot.val();
            //     this.teamList = val;
            // })

            // firebase.firestore().collection('teams/' + firebase.auth().currentUser.uid).onSnapshot(res => {
            //     const changes = res.docChanges();
            //
            //     changes.forEach(change => {
            //         if (change.type === 'added') {
            //             this.teamList.push({
            //                 ...change.doc.data()
            //             })
            //         }
            //     })
            // })
        },
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