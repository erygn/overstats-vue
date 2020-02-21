<template>
    <nav>
        <v-navigation-drawer
                v-model="drawer"
                :mini-variant="true"
                app
                floating
        >
            <v-list dense>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>Back</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-action>
                        <v-icon>mdi-home</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title style="color:#6a6a81;">Home</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-action>
                        <v-icon>mdi-contact-mail</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Contact</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar
                app
                flat
                color="#FFF"
        >
            <v-app-bar-nav-icon v-if="!drawer" @click.stop="drawer = !drawer" />
            <v-toolbar-title style="color: #adb2bd; font-weight: 300">Team Manager</v-toolbar-title>
            <v-spacer/>
            <v-btn style="background-color: transparent" fab depressed><v-icon>mdi-settings</v-icon></v-btn>
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

</style>
