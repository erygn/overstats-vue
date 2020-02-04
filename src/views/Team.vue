<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h1><router-link to="/teams" style="text-decoration: none"><v-btn fab x-small depressed><v-icon x-small>fa-arrow-left</v-icon></v-btn></router-link> {{ teamName['TeamName'] }} <v-btn @click="selectFavorite" style="margin-top: -5px" fab depressed v-if="!favorite"><v-icon>fa-star</v-icon></v-btn><v-btn @click="selectFavorite" style="margin-top: -5px" fab depressed v-if="favorite"><v-icon color="yellow">fa-star</v-icon></v-btn></h1>
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

        <v-btn
                bottom
                fab
                fixed
                right
        >
            <v-icon>mdi-plus</v-icon>
        </v-btn>
    </div>
</template>

<script>
    import firebase from 'firebase'
    export default {
        name: "Team",
        props: ['team'],
        data() {
            return {
                teamName: '',

                favorite: false,

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
        methods: {
          selectFavorite: function () {
              if (this.favorite) {
                  firebase.database().ref('teams/' + firebase.auth().currentUser.uid + '/' + this.team).update({
                      isFav: false
                  })
              } else {
                  firebase.database().ref('teams/' + firebase.auth().currentUser.uid + '/' + this.team).update({
                      isFav: true
                  })
              }

            this.favorite = !this.favorite;
          }
        },
        created() {
            firebase.database().ref('teams/' + firebase.auth().currentUser.uid + '/' + this.team).once('value').then((snapshot) => {
                // alert(JSON.stringify(snapshot.val()))
                this.teamName = snapshot.val()
                this.favorite = snapshot.child('isFav').val()
            })

            // firebase.database().ref('teams/' + firebase.auth().currentUser.uid + '/' + this.team).on('value',  (snapshot) => {
            //
            //     // alert(JSON.stringify(snapshot.val()))
            //     this.teamName = snapshot.val();
            // })
        }
    }
</script>

<style scoped>

</style>