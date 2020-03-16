<template>
    <nav>
        <v-app-bar
                app
                flat
                style="background-color: #FFFFFF"
        >
            <v-row justify="center">
                <div class="col-lg-10 col-sm-12">
                    <v-row style="padding-left: 16px; padding-right: 16px">
                        <v-toolbar-title class="text-uppercase" style="margin-top: 8px">
                            <router-link to="/" style="color: #0e0f17">
                                <span class="font-weight-light">Over</span>
                                <span>Stats</span>
                            </router-link>
                        </v-toolbar-title>
                        <v-spacer></v-spacer>
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

                                    <v-list-item link to="/settings">
                                        <v-list-item-action>
                                            <v-icon color="grey darken-1">mdi-cog</v-icon>
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
                    </v-row>
                </div>
            </v-row>
        </v-app-bar>
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
