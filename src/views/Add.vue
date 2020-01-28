<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h1><router-link to="/" style="text-decoration: none"><v-btn fab x-small depressed><v-icon x-small>fa-arrow-left</v-icon></v-btn></router-link> Ajouter</h1>
                <p>Inscrire de nouvelles données</p>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6">
                <h2>Progression</h2>
                <v-card outlined style="padding-top: 30px">
                    Hey
                    <v-card-actions>
                        <v-btn text>
                            Test
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </div>
            <div class="col-sm-6">
                <h2>Win Rate</h2>
                <v-card outlined style="padding-top: 30px">
                    Hey
                    <v-card-actions>
                        <v-spacer/>
                        <v-btn text>
                            Ajouter <v-icon>mdi-plus</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Add"
    }
</script>

<style scoped>

</style>