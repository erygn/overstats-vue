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
                mini-variant
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
            </v-list>
        </v-navigation-drawer>



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
