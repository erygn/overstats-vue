<template>
    <div>
        <v-container fluid>
            <v-row align="center" style="justify-content: center">
                <div class="col-lg-6 col-sm-12 col-md-8">
                    <v-divider></v-divider>
                </div>
            </v-row>
        </v-container>
        <v-footer absolute padless style="justify-content: center; background-color: #25262C">
            <v-row justify="center" no-gutters>
                <!--                <v-col-->
                <!--                        class="text-center py-6"-->
                <!--                        style="color: #adb2bd; background-color: #25262C"-->
                <!--                        cols="6"-->
                <!--                >-->
                <!--                    Over-->
                <!--                </v-col>-->
                <!--                <v-col-->
                <!--                        class="text-center py-6"-->
                <!--                        style="color: #adb2bd; background-color: #25262C"-->
                <!--                        cols="6"-->
                <!--                >-->
                <!--                    Hey-->
                <!--                </v-col>-->
                <v-col
                        class="py-4 text-center"
                        style="background-color: #1F2027; color: #adb2bd; font-size: 14px"
                        cols="12"
                >
                    Développé par <a href="https://genesis-mc.fr">Genesis</a> | {{ new Date().getFullYear() }} — <strong>Overstats</strong>
                </v-col>
            </v-row>
        </v-footer>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>

</style>