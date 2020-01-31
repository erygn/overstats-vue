<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h1>{{ team }}</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6">
                <h2>Progression</h2>
                <v-card tile style="border-radius: 5px">
                    <v-container>
                        <area-chart prefix="$" :data="chartData"/>
                        <v-card-actions>
                            <v-spacer/>
                            <v-btn text>
                                Ajouter <v-icon>mdi-plus</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-container>
                </v-card>
            </div>
            <div class="col-sm-6">
                <h2>Kills</h2>
                <v-card tile style="border-radius: 5px">
                    <v-container>
                        <column-chart :data="[['Sun', 32], ['Mon', 46], ['Tue', 28]]"/>
                        <v-card-actions>
                            <v-spacer/>
                            <v-btn text>
                                Ajouter <v-icon>mdi-plus</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-container>
                </v-card>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <h2>Win Rate</h2>
                <v-card tile style="border-radius: 20px">
                    <v-container>
                        <v-row justify="space-between">
                            <v-col cols="auto">
                                <pie-chart donut="true" :data="pieData" />
                            </v-col>
                            <v-col cols="auto">
                                <v-data-table :items="table" :items-per-page="5" :headers="[{text: 'Game', align: 'left', value: 'game', }, { text: 'Map', value: 'map' }, { text: 'Score', value: 'score' },]"/>
                            </v-col>
                        </v-row>
                        <v-card-actions>
                            <v-spacer/>
                            <v-btn @click="add" text>
                                Ajouter <v-icon>mdi-plus</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-container>
                </v-card>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Team",
        props: ['team'],
        data() {
            return {
                chartData: {
                    '2017': 24,
                    '2018': 12,
                    '2019': 20,
                    '2020': 8
                },
                pieData: [
                    ['Win', 150],
                    ['Defeat', 200],
                    ['Nul', 30]
                ],
                table: [
                    {
                        game: 'Ranked',
                        map: 'Temple d\'anibus',
                        score: '3-2'
                    },
                    {
                        game: 'Ranked',
                        map: 'Route 66',
                        score: '3-0'
                    },
                    {
                        game: 'QuickPlay',
                        map: 'Hollywood',
                        score: '1-0'
                    },
                ],
            }
        },
    }
</script>

<style scoped>

</style>