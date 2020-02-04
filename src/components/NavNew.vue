<template>
    <nav>
        <v-app-bar
                app
                flat
                dense
        >
            <v-app-bar-nav-icon v-if="!drawer" @click.stop="openDrawer" />
            <v-toolbar-title class="text-uppercase">
                <span class="font-weight-light">Over</span>
                <span>Stats</span>
            </v-toolbar-title>
        </v-app-bar>

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
        name: "NavNew",
        data: () => ({
            drawer: null,
            mini: false,
            fav: true,
            menu: false,
            message: false,
            hints: true,

            dialog: false,

            teamList: [],

            displayName: ''
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
            firebase.database().ref('users/' + firebase.auth().currentUser.uid).once('value').then((snapshot) => {
                const val = snapshot.val();
                this.displayName = val;
            })

            firebase.database().ref('teams/' + firebase.auth().currentUser.uid).once('value').then((snapshot) => {
                const val = snapshot.val();
                this.teamList = val;
            })

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