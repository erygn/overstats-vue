<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h1><router-link to="/teams" style="text-decoration: none"><v-btn fab x-small depressed><v-icon x-small>fa-arrow-left</v-icon></v-btn></router-link> {{ teamValue['TeamName'] }} <v-btn @click="selectFavorite" style="margin-top: -5px" fab depressed v-if="!favorite"><v-icon>fa-star</v-icon></v-btn><v-btn @click="selectFavorite" style="margin-top: -5px" fab depressed v-if="favorite"><v-icon color="yellow">fa-star</v-icon></v-btn></h1>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <p>{{ teamValue.Description}}</p>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <p>{{ teamValue.matchs }} - {{ match }}</p>
            </div>
        </div>

        <div class="row" v-for="(item, index) in teamValue.matchs" :key="index">
            {{ item.GameMap }} - {{ item.GameType }}
        </div>

        <hr>

        <div class="row" v-for="(item, index) in maps" :key="index">
            {{ item.name }} - {{ item.win }} - {{ item.total }}
        </div>

        {{ compoTank }}

<!--        <div class="row">-->
<!--            <div class="col-sm-6">-->
<!--                <h2>Progression</h2>-->
<!--                <v-card tile style="border-radius: 5px">-->
<!--                    <v-container>-->
<!--                        <area-chart prefix="$" :data="chartData"/>-->
<!--                        <v-card-actions>-->
<!--                            <v-spacer/>-->
<!--                            <v-btn text>-->
<!--                                Ajouter <v-icon>mdi-plus</v-icon>-->
<!--                            </v-btn>-->
<!--                        </v-card-actions>-->
<!--                    </v-container>-->
<!--                </v-card>-->
<!--            </div>-->
<!--            <div class="col-sm-6">-->
<!--                <h2>Kills</h2>-->
<!--                <v-card tile style="border-radius: 5px">-->
<!--                    <v-container>-->
<!--                        <column-chart :data="[['Sun', 32], ['Mon', 46], ['Tue', 28]]"/>-->
<!--                        <v-card-actions>-->
<!--                            <v-spacer/>-->
<!--                            <v-btn text>-->
<!--                                Ajouter <v-icon>mdi-plus</v-icon>-->
<!--                            </v-btn>-->
<!--                        </v-card-actions>-->
<!--                    </v-container>-->
<!--                </v-card>-->
<!--            </div>-->
<!--        </div>-->

        <div class="row">
            <div class="col">
                <h2>Win Rate</h2>
                <v-card tile style="border-radius: 20px">
                    <v-container>
                        <v-row justify="space-between">
                            <div class="col-sm-12 col-md-6 col-lg-6">
                                <h2>Tout type confondu</h2>
                                <pie-chart donut="true" :data="pieData" />
                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-6">
                                        <h2>Ranked</h2>
                                        <column-chart :data="columnRanked" />
                            </div>
<!--                            <div class="col-sm-12 col-md-6 col-lg-6">-->
<!--                                <v-data-table :items="table" :items-per-page="5" :headers="[{text: 'Game', align: 'left', value: 'game', }, { text: 'Map', value: 'map' }, { text: 'Score', value: 'score' },]"/>-->
<!--                            </div>-->
                        </v-row>
                        <v-row justify="space-between">
                            <div class="col-sm-12 col-md-6 col-lg-6">
                                <h2>Option de développement</h2>
                                <p>Dev en cours</p>
<!--                                <v-data-table :items="table" :items-per-page="5" :headers="[{text: 'Game', align: 'left', value: 'game', }, { text: 'Map', value: 'map' }, { text: 'Score', value: 'score' },]"/>-->
                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-6">
                                <h2>Quickplay</h2>
                                <column-chart :data="columnQuick" />
                            </div>
<!--                                                        <div class="col-sm-12 col-md-6 col-lg-6">-->
<!--                                                            <v-data-table :items="table" :items-per-page="5" :headers="[{text: 'Game', align: 'left', value: 'game', }, { text: 'Map', value: 'map' }, { text: 'Score', value: 'score' },]"/>-->
<!--                                                        </div>-->
                        </v-row>
                    </v-container>
                </v-card>
            </div>
        </div>

        <v-menu top :offset-y="offset">
            <template v-slot:activator="{ on }">
                <v-btn
                        bottom
                        fab
                        fixed
                        right
                        v-on="on"
                >
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
            </template>

<!--            <v-list>-->
<!--                <v-list-item-->
<!--                        v-for="(item, index) in menu"-->
<!--                        :key="index"-->
<!--                        link-->
<!--                >-->
<!--                    <v-list-item-title>{{ item.title }}</v-list-item-title>-->
<!--                </v-list-item>-->
<!--            </v-list>-->

            <v-list>
                <v-list-item link :to="{path: '/GameAdd', query: {team: team}}">
                    <v-list-item-title>Match</v-list-item-title>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-title>Joueur</v-list-item-title>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-title>Commentaire</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>

        <v-snackbar v-model="snackbarAddVal" :timeout="3000" color="green">
            Match ajouté
            <v-btn
                    color="white"
                    text
                    icon
                    @click="snackbarAddVal = false"
            >
                <v-icon>mdi-close</v-icon>
            </v-btn>
        </v-snackbar>

<!--        <v-btn-->
<!--                bottom-->
<!--                fab-->
<!--                fixed-->
<!--                right-->
<!--        >-->
<!--            <v-icon>mdi-plus</v-icon>-->
<!--        </v-btn>-->

    </div>
</template>

<script>
    import firebase from 'firebase'
    export default {
        name: "Team",
        props: ['team'],
        data() {
            return {
                teamValue: null,

                match: 0,
                totVic: 0,
                totDef: 0,
                totEg: 0,

                favorite: false,
                sendM: false,
                snackbarAddVal: false,

                maps: {
                    Dorado: { name: 'Dorado', win: 0, total: 0},
                    Junkertown: { name: 'JunkerTown', win: 0, total: 0},
                    Eichenwald:{ name: 'Eichenwald', win: 0, total: 0},
                },

                compoTank: [],

                menu: [
                    { title: 'Match', link: 'this.dialog' },
                    { title: 'Joueur' },
                    { title: 'Commentaire' }
                ],

                items: [
                    { title: 'Click Me' },
                    { title: 'Click Me' },
                ],
                offset: true,

                chartData: {
                    '2017': 24,
                    '2018': 12,
                    '2019': 20,
                    '2020': 8
                },

                pieData: null,
                columnRanked: null,
                columnQuick: null,

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
            firebase.database().ref('teams/' + firebase.auth().currentUser.uid + '/' + this.team).on('value', (snapshot) => {
                // alert(JSON.stringify(snapshot.val()))
                this.teamValue = snapshot.val();

                // Calcul du nombre de ranked
                Object.keys(snapshot.val().matchs || {}).forEach(id => {
                    const match = snapshot.val().matchs[id];
                    if (match.GamePlay == 'Ranked') {
                        this.match += 1;
                    }
                });

                //Calcul de Winrate par Map
                Object.keys(snapshot.val().matchs || {}).forEach(id => {
                    const match = snapshot.val().matchs[id];
                    const map = match.GameMap;
                    if (map === 'Dorado') {
                        if (match.GameScoreA > match.GameScoreB) {
                            this.maps.Dorado.win += 1;
                        }
                        this.maps.Dorado.total += 1;
                    } else if (map === 'Junkertown') {
                        if (match.GameScoreA > match.GameScoreB) {
                            this.maps.Junkertown.win += 1;
                        }
                        this.maps.Junkertown.total += 1;
                    } else if (map === 'Eichenwald') {
                        if (match.GameScoreA > match.GameScoreB) {
                            this.maps.Eichenwald.win += 1;
                        }
                        this.maps.Eichenwald.total += 1;
                    }
                });

                // Ajout Compo Tank
                Object.keys(snapshot.val().matchs || {}).forEach(id => {
                    const match = snapshot.val().matchs[id];
                    const main = match.Players.Attack.PlayerTankOne;
                    const off = match.Players.Attack.PlayerTankTwo;
                    const tan = main + ", " + off;
                    this.compoTank.push(tan);
                });

                //Calcul de PieData All
                Object.keys(snapshot.val().matchs || {}).forEach(id => {
                    const match = snapshot.val().matchs[id];
                    if (match.GameScoreA > match.GameScoreB) {
                        this.totVic += 1;
                    } else if (match.GameScoreA < match.GameScoreB) {
                        this.totDef += 1;
                    } else {
                        this.totEg += 1;
                    }
                });

                this.pieData = [
                    ['Victoire', this.totVic],
                    ['Défaite', this.totDef],
                    ['Egalité', this.totEg],
                ];

                this.columnRanked = [
                    ['Victoire', snapshot.val().countVictoryRanked],
                    ['Défaite', snapshot.val().countDefeatRanked],
                    ['Egalité', snapshot.val().countNullRanked],
                ];

                this.columnQuick = [
                    ['Victoire', snapshot.val().countVictoryQuickPlay],
                    ['Défaite', snapshot.val().countDefeatQuickPlay],
                    ['Egalité', snapshot.val().countNullQuickPlay],
                ];
                this.favorite = snapshot.child('isFav').val();
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
    @import "./../assets/styles.css";
</style>
