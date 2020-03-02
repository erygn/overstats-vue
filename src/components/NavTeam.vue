<template>
    <nav>
        <v-navigation-drawer
                v-model="drawer"
                :mini-variant="true"
                color="#051E34"
                src="https://genesis-mc.fr/images/background.jpg"
                mobile-break-point="700"
                app
        >
            <v-list dense>
                <v-list-item link :to="{path: '/team', query: {team: this.$route.query.team}}">
                        <v-icon color="#c2cbd4" style="padding: 10px 0px">mdi-home</v-icon>
                </v-list-item>
                <v-list-item :to="{path: '/teamPlayer', query: {team: this.$route.query.team}}">
                        <v-icon color="#c2cbd4" style="padding: 10px 0px">mdi-settings</v-icon>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar
                dense
                app
                flat
                color="#FFF"
        >
            <v-app-bar-nav-icon v-if="!drawer" @click.stop="drawer = !drawer" />
            <v-toolbar-title class="text-uppercase">
                <span class="font-weight-light">Team</span>
                <span>Manager</span></v-toolbar-title>
            <v-spacer/>
            <router-link :to="{path: '/GameAdd', query: {team: this.$route.query.team}}"><v-icon id="setting">mdi-plus</v-icon></router-link>
        </v-app-bar>
    </nav>
</template>

<script>
    export default {
        name: "NavTeam",
        data() {
            return {
                drawer: null,
            }
        },
        created() {
            switch (this.$vuetify.breakpoint.name) {
                case 'xs': this.drawer = false; break;
                case 'sm': this.drawer = false; break;
                case 'md': this.drawer = false; break;
                case 'lg': this.drawer = true; break;
                case 'xl': this.drawer = true; break;
            }
        }
    }
</script>

<style scoped>
    #setting {
        color: #0d0d16;
        background-color: transparent
    }
</style>
