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
    export default {
        name: "NavNew",
        data: () => ({
            drawer: null,
            mini: true,
            fav: true,
            menu: false,
            message: false,
            hints: true,

            dialog: false,

            miniMD: ''
        }),
        methods: {
            openDrawer: function () {
                this.drawer = !this.drawer;
                this.mini = false;
            },
        },
        created () {
            switch (this.$vuetify.breakpoint.name) {
                case 'xs': this.miniMD = false; break;
                case 'sm': this.miniMD = true; break;
                case 'md': this.miniMD = true; break;
                case 'lg': this.miniMD = true; break;
                case 'xl': this.miniMD = true; break;
            }
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