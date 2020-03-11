<template>
    <nav>
        <v-app-bar
                app
                flat
                style="background-color: #FFFFFF"
        >
<!--            <v-app-bar-nav-icon v-if="!drawer" @click.stop="openDrawer" />-->
            <v-row justify="center">
                <div class="col-lg-10 col-sm-12">
                    <v-row style="padding-left: 16px; padding-right: 16px">
                        <v-toolbar-title class="text-uppercase" style="margin-top: 2px">
                            <router-link to="/login" style="color: #0e0f17">
                                <span class="font-weight-light">Over</span>
                                <span>Stats</span>
                            </router-link>
                        </v-toolbar-title>
                        <v-spacer></v-spacer>
<!--                        <router-link to="/about" style="color: #0e0f17">-->
<!--                            <v-btn tile depressed text>About</v-btn>-->
<!--                        </router-link>-->
                    </v-row>
                </div>
            </v-row>
        </v-app-bar>

<!--        <v-navigation-drawer-->
<!--                mini-variant-->
<!--                src="https://genesis-mc.fr/images/background.jpg"-->
<!--                v-model="drawer"-->
<!--                color="#051E34"-->
<!--                app-->
<!--                mobile-break-point="920"-->
<!--        >-->
<!--            <v-list dense>-->
<!--                <v-list-item to="/">-->
<!--                    <v-list-item-action>-->
<!--                        <v-icon style="color: #c2cbd4">mdi-home</v-icon>-->
<!--                    </v-list-item-action>-->
<!--                    <v-list-item-content>-->
<!--                        <v-list-item-title style="color: #c2cbd4">-->
<!--                            Accueil-->
<!--                        </v-list-item-title>-->
<!--                    </v-list-item-content>-->
<!--                </v-list-item>-->
<!--                <v-list-item to="/about">-->
<!--                    <v-list-item-action>-->
<!--                        <v-icon style="color: #c2cbd4">mdi-information-outline</v-icon>-->
<!--                    </v-list-item-action>-->
<!--                    <v-list-item-content>-->
<!--                        <v-list-item-title style="color: #c2cbd4">-->
<!--                            A Propos-->
<!--                        </v-list-item-title>-->
<!--                    </v-list-item-content>-->
<!--                </v-list-item>-->
<!--            </v-list>-->
<!--        </v-navigation-drawer>-->



    </nav>
</template>

<script>
    export default {
        name: "NavNew",
        data: () => ({
            drawer: null,
            fav: true,
            menu: false,
            message: false,
            hints: true,

            dialog: false,
        }),
        methods: {
            openDrawer: function () {
                this.drawer = !this.drawer;
            },
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
