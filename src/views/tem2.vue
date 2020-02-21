<template>
    <div style="background-color: #161620">
        <v-container fluid>
            <v-row justify="center" style="margin: 0px 1px; color: #a2a2b0">
                <div class="col-8">
                    <h1 style="margin-top: 40px; font-weight: 300; margin-bottom: 10px"><router-link to="/teams" style="text-decoration: none"><v-btn style="background-color: transparent; color: white;" fab x-small depressed><v-icon>fa-angle-left</v-icon></v-btn></router-link> {{ teamValue.TeamName }} <v-btn @click="selectFavorite" style="margin-top: -5px; background-color: transparent" fab depressed v-if="!favorite"><v-icon>fa-star</v-icon></v-btn><v-btn @click="selectFavorite" style="margin-top: -5px; background-color: transparent" fab depressed v-if="favorite"><v-icon color="yellow">fa-star</v-icon></v-btn></h1>
                    <p style="margin-top: -10px">{{ teamValue.Description}}</p>
                </div>
                <div class="col-4 text-right">
                    <p style="margin-top: 90px; font-weight: 300; margin-bottom: 10px">V0.1.0</p>
                </div>
            </v-row>
        </v-container>

        <v-container fluid>
            <v-row justify="center" style="margin: 0px 1px; color: #9696A3">
                <div class="col-lg-8 col-md-8 col-sm-12">
                    <v-card tile style="border-radius: 20px; background-color: #0d0d16; color: #363645; font-weight: 500">
                        <v-container>
                            <v-row justify="space-between">
                                <div class="col-12">
                                    <h2 style="font-weight: 500; text-transform: uppercase; font-size: 15px; margin-left: 20px; margin-bottom: 15px">Time Line</h2>
                                    <area-chart xtitle="Essaie" ytitle="Top" :data="{'2017-01-01': 2, '2017-01-02': 250, '2017-01-03': 8, '2017-01-04': 3}"></area-chart>
                                </div>
                            </v-row>
                        </v-container>
                    </v-card>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12">
                    <v-card tile style="border-radius: 20px; background-color: #1b1b29; color: #FFF; font-weight: 500">
                        <v-container>
                            <v-row justify="space-between">
                                <div class="col-12">
                                    <pie-chart donut="true" :data="pieData" />
                                </div>
                            </v-row>
                        </v-container>
                        <v-card-title style="height: 40px; font-weight: 200; background-color: #9dc5c1; color: white">
                            <span style="margin-top: -12px; font-size: 15px; color: #0e0f17; font-weight: 400"><v-icon>mdi-trophy</v-icon> Global Win Rate</span>
                        </v-card-title>
                    </v-card>
                </div>
            </v-row>
        </v-container>


        <!--        <div class="row" v-for="(item, index) in teamValue.matchs" :key="index">-->
        <!--            {{ item.GameMap }} - {{ item.GameType }}-->
        <!--        </div>-->

        <!--        <hr>-->

        <!--        <div class="row" v-for="(item, index) in maps" :key="index">-->
        <!--            {{ item.name }} - {{ item.win }} - {{ item.total }} // {{ item.win / item.total }}-->
        <!--        </div>-->

        <!--        {{ compoTank }}-->

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

        <v-container fluid>
            <v-row justify="center" style="margin: 0px 1px; color: #FFF">
                <div class="col-lg-4 col-md-4 col-sm-12">
                    <v-card tile style="border-radius: 20px; background-color: #0d0d16; color: #2D2D39; font-weight: 500; height: 380px">
                        <v-container>
                            <v-row>
                                <div class="col-12">
                                    <h2 style="font-weight: 500; text-transform: uppercase; font-size: 15px; margin-left: 20px; margin-bottom: 15px">Hero Compostion</h2>
                                    <div style="margin: 0px 20px; overflow:auto; height: 240px">
                                        <div style="display: flex; justify-content: space-between; border-bottom: 1px solid #2D2D39; margin-bottom: 10px" v-for="(item, index) in teamValue.compo" :key="index">
                                            <div>
                                                <p style="color: #6c6c82;">{{ item.Name }}</p>
                                                <p style="margin-top: -14px; font-size: 12px">{{ item.CompoDate }}</p>
                                            </div>
                                            <v-btn fab depressed style="background-color: transparent"><v-icon style="color: #6c6c82">fa-eye</v-icon></v-btn>
                                        </div>
                                    </div>
                                    <v-row justify="center" style="background-color: #adb2bd">
                                        <!--                                        <span style="position: absolute; bottom: 20px; background-color: #1a1a27; padding: 10px 90px; border-radius: 10px; color: #6a6a80; font-size: 12px">Show all</span>-->
                                        <v-btn style="position: absolute; bottom: 20px; background-color: #1a1a27; padding: 10px 90px; border-radius: 10px; color: #6a6a80; font-size: 12px; text-transform: none; font-family: 'Open Sans', sans-serif" tile depressed>Show all</v-btn>
                                    </v-row>
                                </div>
                            </v-row>
                        </v-container>
                    </v-card>
                </div>

                <div class="col-lg-4 col-md-4 col-sm-12">
                    <v-card tile style="border-radius: 20px; background-color: #0d0d16; color: #2D2D39; font-weight: 500">
                        <v-container>
                            <v-row justify="space-between">
                                <div class="col-sm-12 col-md-6 col-lg-6">
                                    <h2 style="font-weight: 500">Tout type confondu</h2>
                                    <pie-chart donut="true" :data="pieData" />
                                </div>
                                <div class="col-sm-12 col-md-6 col-lg-6">
                                    <h2 style="font-weight: 500">Ranked</h2>
                                    <column-chart :data="columnRanked" />
                                </div>
                                <!--                            <div class="col-sm-12 col-md-6 col-lg-6">-->
                                <!--                                <v-data-table :items="table" :items-per-page="5" :headers="[{text: 'Game', align: 'left', value: 'game', }, { text: 'Map', value: 'map' }, { text: 'Score', value: 'score' },]"/>-->
                                <!--                            </div>-->
                            </v-row>
                            <v-row justify="space-between">
                                <div class="col-sm-12 col-md-6 col-lg-6">
                                    <h2 style="font-weight: 500">Option de développement</h2>
                                    <p>Dev en cours</p>
                                    <!--                                <v-data-table :items="table" :items-per-page="5" :headers="[{text: 'Game', align: 'left', value: 'game', }, { text: 'Map', value: 'map' }, { text: 'Score', value: 'score' },]"/>-->
                                </div>
                                <div class="col-sm-12 col-md-6 col-lg-6">
                                    <h2 style="font-weight: 500">Quickplay</h2>
                                    <column-chart :data="columnQuick" />
                                </div>
                                <!--                                                        <div class="col-sm-12 col-md-6 col-lg-6">-->
                                <!--                                                            <v-data-table :items="table" :items-per-page="5" :headers="[{text: 'Game', align: 'left', value: 'game', }, { text: 'Map', value: 'map' }, { text: 'Score', value: 'score' },]"/>-->
                                <!--                                                        </div>-->
                            </v-row>
                        </v-container>
                    </v-card>
                </div>

                <div class="col-lg-4 col-md-4 col-sm-12">
                    <v-card tile style="border-radius: 20px; background-color: #0d0d16; color: #2D2D39; font-weight: 500; height: 700px">
                        <v-container>
                            <v-row>
                                <div class="col-12">
                                    <h2 style="font-weight: 500; text-transform: uppercase; font-size: 15px; margin-left: 20px; margin-bottom: 15px">Team Comments</h2>
                                    <div style="margin: 0px 20px; overflow:auto; height: 530px">
                                        <div v-for="(item, index) in teamValue.comments" :key="index">
                                            <p style="color: #6c6c82;">{{ item.Comment }}</p>
                                            <p style="margin-top: -14px; font-size: 12px">{{ item.CommentDate }}</p>
                                        </div>
                                    </div>
                                    <v-row justify="center" style="background-color: #adb2bd">
                                        <!--                                        <span style="position: absolute; bottom: 20px; background-color: #1a1a27; padding: 10px 90px; border-radius: 10px; color: #6a6a80; font-size: 12px">Add Comment</span>-->
                                        <v-btn @click="dialog = !dialog" style="position: absolute; bottom: 20px; background-color: #1a1a27; padding: 10px 90px; border-radius: 10px; color: #6a6a80; font-size: 12px; text-transform: none; font-family: 'Open Sans', sans-serif" tile depressed>Add Comment</v-btn>
                                    </v-row>
                                </div>
                            </v-row>
                        </v-container>
                    </v-card>
                </div>
            </v-row>
        </v-container>

        <v-menu top :offset-y="offset">
            <template v-slot:activator="{ on }">
                <v-btn
                        bottom
                        fab
                        fixed
                        right
                        color="#16171F"
                        dark
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

            <v-list color="#16171F" dark>
                <v-list-item link :to="{path: '/GameAdd', query: {team: team}}">
                    <v-list-item-title>Match</v-list-item-title>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-title>Joueur</v-list-item-title>
                </v-list-item>
                <v-list-item link @click="dialog = !dialog">
                    <v-list-item-title>Commentaire</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>

        <v-dialog
                v-model="dialog"
                width="600px"
                content-class="dialogBorder"
        >
            <v-card>
                <v-card-title style="background-color: #9dc5c1; font-size: 17px; color: #0e0f17; font-weight: 400">
                    Ajouter un commentaire
                    <v-spacer/>
                    <v-btn @click="dialog = !dialog" text depressed><v-icon color="#0e0f17">mdi-close</v-icon></v-btn>
                </v-card-title>
                <v-container>
                    <v-row class="mx-2">
                        <v-col
                                class="align-center justify-space-between"
                                cols="12"
                        >
                            <v-row
                                    align="center"
                                    class="mr-0"
                            >
                                <v-list-item-subtitle>Ajouter un commentaire sur l'équipe en général</v-list-item-subtitle>
                                <v-list-item-subtitle><v-text-field color="#003041" type="text" label="Commentaire" prepend-icon="mdi-comment" v-model="commentText"/></v-list-item-subtitle>
                                <v-list-item-subtitle v-if="errorComment" class="red--text">{{ errorComment }}</v-list-item-subtitle>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-container>
                <v-card-actions>
                    <v-spacer />
                    <v-btn
                            style="margin-right: 5px"
                            text
                            color="#003041"
                            @click="dialog = false"
                    >Annuler</v-btn>
                    <v-btn
                            depressed
                            color="#45cd8a"
                            width="150"
                            height="35"
                            style="border-radius: 20px; color: #FFF"
                            :loading="commentLoad"
                            @click="addComment()"
                    >Ajouter</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-snackbar v-model="snackbarAddComment" :timeout="3000" color="green">
            Commentaire Ajouté
            <v-btn
                    color="white"
                    text
                    icon
                    @click="snackbarAddComment = false"
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
                dialog: false,
                teamValue: null,

                commentText: null,
                errorComment: null,
                commentLoad: false,
                snackbarAddComment: false,

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
            },
            addComment: function () {
                if (this.commentText != null) {
                    this.commentLoad = true;
                    firebase.database().ref('teams/' + firebase.auth().currentUser.uid + '/' + this.team + '/comments/' + this.randomID()).update({
                        Comment: this.commentText,
                        CommentDate: new Date().toLocaleString(),
                    }).then(() => {
                        this.commentLoad = false;

                        this.dialog = false;
                        this.commentText = null;
                        this.snackbarAddComment = true;
                    })
                } else {
                    this.errorComment = 'Veuillez remplir le champ';
                }
            },
            randomID: function makeid() {
                var result           = '';
                var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                var charactersLength = characters.length;
                for ( var i = 0; i < 12; i++ ) {
                    result += characters.charAt(Math.floor(Math.random() * charactersLength));
                }
                return result;
            },
        },
        created() {
            firebase.database().ref('teams/' + firebase.auth().currentUser.uid + '/' + this.team).orderByKey().on('value', (snapshot) => {
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

                // // Ajout Compo Tank
                // Object.keys(snapshot.val().matchs || {}).forEach(id => {
                //     const match = snapshot.val().matchs[id];
                //     const main = match.Players.Attack.PlayerTankOne;
                //     const off = match.Players.Attack.PlayerTankTwo;
                //     const tan = main + ", " + off;
                //     this.compoTank.push(tan);
                // });

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
    /*::-webkit-scrollbar {*/
    /*    display: none;*/
    /*}*/

    ::-webkit-scrollbar-track
    {
        background-color: transparent;
    }

    ::-webkit-scrollbar
    {
        width: 5px;
        height: 5px;
        background-color: transparent;
    }

    ::-webkit-scrollbar-thumb
    {
        background-color: #666B7A;
    }
</style>
