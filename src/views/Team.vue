<template>
    <div style="background-color: #f4f7fc">
        <v-container fluid>
            <v-row justify="center" style="color: #2e313a">
                <div class="col-lg-10 col-md-10 col-sm-12">
                    <h1 style="margin-left: 15px; font-weight: 400; margin-bottom: 10px; font-size: 30px"><router-link to="/" style="text-decoration: none"><v-btn style="background-color: transparent; color: #2e313a;" fab x-small depressed><v-icon>fa-angle-left</v-icon></v-btn></router-link> {{ teamValue.TeamName }} </h1>
<!--                    <v-btn @click="selectFavorite" style="margin-top: -2px; background-color: transparent" small fab depressed v-if="!favorite"><v-icon small>fa-star</v-icon></v-btn><v-btn @click="selectFavorite" style="margin-top: -5px; background-color: transparent" fab depressed v-if="favorite"><v-icon color="yellow">fa-star</v-icon></v-btn>-->
                    <p style="margin-left: 15px; margin-top: -10px; font-size: 16px">{{ teamValue.Description}}</p>
                </div>
            </v-row>
        </v-container>

        <v-container fluid>
            <v-row justify="center">
                <div class="col-lg-10 col-md-10 col-sm-12">
                    <h1 style="margin-left: 15px; margin-bottom: -30px; font-size: 22px; font-weight: 700; color: #2e313a">Analytics Overview</h1>
                </div>
            </v-row>
        </v-container>

        <v-container fluid>
            <v-row justify="center" style="margin: 0px 1px; color: #9696A3">
                <div class="col-lg-10 col-md-10 col-sm-12">
                    <v-row>
                        <div class="col-lg-3 col-md-3 col-sm-6">
                            <v-card tile elevation="1" style="border-radius: 5px; color: #363645; font-weight: 500; height: 250px">
                                <v-container>
                                    <v-row justify="center">
                                        <div class="text-center">
                                            <v-icon style="margin-top: 20px; background-color: #e5f3fe; color: #0382ff; padding: 10px; border-radius: 40px" large>mdi-gamepad-variant</v-icon>
                                            <h2 style="margin-top: 12px; color: #2d3039; font-size: 40px; font-weight: 600">{{ match }}</h2>
                                            <p style="color: #768185; font-size: 15px">Total game</p>
                                        </div>
                                    </v-row>
                                </v-container>
                            </v-card>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-6">
                            <v-card tile elevation="1" style="border-radius: 5px; color: #363645; font-weight: 500; height: 250px">
                                <v-container>
                                    <v-row justify="center">
                                        <div class="text-center">
                                            <v-icon style="margin-top: 20px; background-color: #f3f1ff; color: #866bfa; padding: 10px; border-radius: 40px" large>mdi-account-group</v-icon>
                                            <h2 style="margin-top: 12px; color: #2d3039; font-size: 40px; font-weight: 600">{{ matchCompo }}</h2>
                                            <p style="color: #768185; font-size: 15px">Total Composition</p>
                                        </div>
                                    </v-row>
                                </v-container>
                            </v-card>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-6">
                            <v-card tile elevation="1" style="border-radius: 5px; color: #363645; font-weight: 500; height: 250px">
                                <v-container>
                                    <v-row justify="center">
                                        <div class="text-center">
                                            <v-icon style="margin-top: 20px; background-color: #fff8e5; color: #ffc010; padding: 11px 15px; border-radius: 40px" large>fa-award</v-icon>
                                            <h2 style="margin-top: 12px; color: #2d3039; font-size: 40px; font-weight: 600">{{ matchRank }}</h2>
                                            <p style="color: #768185; font-size: 15px">Ranked game</p>
                                        </div>
                                    </v-row>
                                </v-container>
                            </v-card>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-6">
                            <v-card tile elevation="1" style="border-radius: 5px; color: #363645; font-weight: 500; height: 250px">
                                <v-container>
                                    <v-row justify="center">
                                        <div class="text-center">
                                            <v-icon style="margin-top: 20px; background-color: #ebf9ea; color: #33c733; padding: 10px 17px; border-radius: 40px" large>fa-chess-pawn</v-icon>
                                            <h2 style="margin-top: 12px; color: #2d3039; font-size: 40px; font-weight: 600">{{ matchQuick }}</h2>
                                            <p style="color: #768185; font-size: 15px">QuickPlay game</p>
                                        </div>
                                    </v-row>
                                </v-container>
                            </v-card>
                        </div>
                    </v-row>
                </div>
            </v-row>
        </v-container>

        <v-container fluid>
            <v-row justify="center">
                <div class="col-lg-10 col-md-10 col-sm-12">
                    <v-row>
                        <div class="col-8">
                            <h1 style="margin-left: 15px; margin-bottom: -30px; font-size: 22px; font-weight: 700; color: #2e313a">Game Map</h1>
                        </div>
                        <div class="col-4 text-right">
                            <h1 style="margin-bottom: -30px; font-size: 18px; font-weight: 300; color: #2e313a; margin-right: 15px">Game Map <v-icon small style="margin-top: -3px; margin-left: 5px">fa-angle-down</v-icon></h1>
                        </div>
                    </v-row>
                </div>
            </v-row>
        </v-container>

        <v-container fluid>
            <v-row justify="center">
                <div class="col-lg-10 col-md-10 col-sm-12">
                    <v-sheet
                            class="mx-auto"
                            elevation="0"
                            style="background-color: transparent"
                    >
                        <v-slide-group
                                v-model="model"
                                class="pa-4"
                                active-class="warning"
                                center-active
                                show-arrows
                        >
                            <v-slide-item
                                    v-for="(item, index) in gameMap" :key="index"
                                    v-slot:default="{ active, toggle }"
                            >
                                <v-card
                                        :img="getIconMap(item)"
                                        :color="active ? undefined : 'grey lighten-1'"
                                        class="ma-1"
                                        height="200"
                                        width="150"
                                        @click="toggle"

                                >
                                    <v-row class="fill-height align-end text-center" justify="center">
                                        <v-card-title v-if="item != 'Rialto' && item != 'Busan' && item != 'Ilios' && item != 'Oasis' && item != 'Nepal'" style="color: #FFF; font-weight: 600; margin-bottom: -100px; text-shadow: 0px 0px 6px rgba(0,0,0,0.89);">{{ item }}</v-card-title>
                                        <v-card-title v-else style="color: #FFF; font-weight: 600; margin-bottom: -100px; text-shadow: 0px 0px 6px rgba(0,0,0,0.89);">{{ item }} /R</v-card-title>
                                        <v-btn small style="margin-bottom: 5px; background-color: transparent; color: #FFF; text-shadow: 0px 0px 6px rgba(0,0,0,0.89);" depressed :to="{path: '/map', query: {team: team, id: item}}">Show</v-btn>
                                    </v-row>
                                </v-card>
                            </v-slide-item>
                        </v-slide-group>

<!--                        <v-slide-group-->
<!--                                v-model="model"-->
<!--                                class="pa-4"-->
<!--                                active-class="warning"-->
<!--                                center-active-->
<!--                                show-arrows-->
<!--                        >-->
<!--                            <v-slide-item-->
<!--                                    v-for="(item, index) in gameMap" :key="index"-->
<!--                                    v-slot:default="{ active, toggle }"-->
<!--                            >-->
<!--                                <v-card-->
<!--                                        :img="getIconMap(item)"-->
<!--                                        :color="active ? undefined : 'grey lighten-1'"-->
<!--                                        class="ma-1"-->
<!--                                        height="200"-->
<!--                                        width="150"-->
<!--                                        @click="toggle"-->

<!--                                >-->
<!--                                    <v-row class="fill-height align-end text-center" justify="center">-->
<!--                                        <v-card-title v-if="item != 'Rialto' && item != 'Busan' && item != 'Ilios' && item != 'Oasis' && item != 'Nepal'" style="color: #FFF; font-weight: 600; margin-bottom: -107px; text-shadow: 0px 0px 6px rgba(0,0,0,0.89);">{{ item }}</v-card-title>-->
<!--                                        <v-card-title v-if="item === 'Rialto' || item === 'Busan' || item === 'Ilios' || item === 'Oasis' || item === 'Nepal'" style="color: #FFF; font-weight: 600; margin-bottom: -107px; text-shadow: 0px 0px 6px rgba(0,0,0,0.89);">{{ item }} /R</v-card-title>-->
<!--                                        <v-btn small style="margin-bottom: 5px; background-color: transparent; color: #FFF; text-shadow: 0px 0px 6px rgba(0,0,0,0.89);" depressed :to="{path: '/game', query: {team: team, map: item}}">Show</v-btn>-->
<!--                                    </v-row>-->
<!--                                </v-card>-->
<!--                            </v-slide-item>-->
<!--                        </v-slide-group>-->

                    </v-sheet>
                </div>
            </v-row>
        </v-container>


        <v-container fluid>
            <v-row justify="center">
                <div class="col-lg-10 col-md-10 col-sm-12">
                    <v-row>
                        <div class="col-12">
                            <h1 style="margin-left: 15px; margin-bottom: -30px; font-size: 22px; font-weight: 700; color: #2e313a">Global Analytics</h1>
                        </div>
                    </v-row>
                </div>
            </v-row>
        </v-container>

        <v-container fluid>
            <v-row justify="center" style="margin: 0px 1px; color: #9696A3">
                <div class="col-lg-10 col-md-10 col-sm-12">
                    <v-row>
                        <div class="col-lg-6 col-sm-12">
                            <v-card tile style="border-radius: 5px; color: #363645; font-weight: 500">
                                <v-card-title>
                                    <h1 style="margin-left: 15px; font-size: 15px; font-weight: 700; color: #2e313a">Global Win Rate</h1>
                                    <v-spacer/>
                                    <v-btn :to="{path: '/winRate', query: {team: team}}" text small><v-icon color="#2e313a">fas fa-ellipsis-v</v-icon></v-btn>
                                </v-card-title>
                                <v-container style="height: 420px; margin-top: -20px">
                                    <v-tabs :grow="true"
                                            background-color="transparent"
                                            color="#363645"
                                    >
                                        <v-tab>
                                            Ranked / {{ parseFloat(100 * (vicRank / (vicRank + defRank + egRank))).toFixed(0) }}%
                                        </v-tab>
                                        <v-tab>
                                            QuickPlay / {{ parseFloat(100 * (vicQuick / (vicQuick + defQuick + egQuick))).toFixed(0) }}%
                                        </v-tab>

                                        <v-tab-item>
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
                                                            <pie-chart legend="bottom" donut="true" :data="pieDataRank" />
                                                        </v-row>
                                                    </v-col>
                                                </v-row>
                                            </v-container>
                                        </v-tab-item>
                                        <v-tab-item>
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
                                                            <pie-chart legend="bottom" donut="true" :data="pieDataQuick" />
                                                        </v-row>
                                                    </v-col>
                                                </v-row>
                                            </v-container>
                                        </v-tab-item>
                                    </v-tabs>
                                </v-container>
                            </v-card>
                        </div>

                        <div class="col-lg-6 col-sm-12">
                            <v-card tile elevation="1" style="border-radius: 5px; color: #363645">
                                <v-card-title>
                                    <h1 style="margin-left: 15px; font-size: 15px; font-weight: 700; color: #2e313a">Global Game Composition</h1>
                                </v-card-title>
                                <v-container style="height: 400px">
                                    <v-row>
                                        <div class="col-12" style="margin-top: -20px">
                                            <div style="margin: 0px 20px; overflow:auto; height: 370px">
                                                <div style="display: flex; justify-content: space-between; border-bottom: 1px solid #2D2D39; margin-bottom: 10px" v-for="(item, index) in teamValue.compo" :key="index">
                                                    <div>
                                                        <p style="color: #363645; font-weight: 600">{{ item.Name }} <span v-if="item.isNew" style="text-transform: uppercase; font-weight: 400; font-size: 12px; background-color: #d3d8e3; padding: 5px 15px; border-radius: 20px">New</span> <v-icon style="margin-top: -2px" small v-if="item.isFav">fa-star</v-icon></p>
                                                        <p style="margin-top: -14px; font-size: 12px">{{ item.CompoDate }}</p>
                                                    </div>
                                                    <v-btn :to="{path: '/compo', query: {team: team, id: index}}" fab depressed style="background-color: transparent"><v-icon style="color: #363645">fa-eye</v-icon></v-btn>
                                                </div>
                                            </div>
                                        </div>
                                    </v-row>
                                </v-container>
                            </v-card>
                        </div>
                    </v-row>
                </div>
            </v-row>
        </v-container>

        <v-menu v-if="accountUid == teamValue.OwnerId" top :offset-y="offset">
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

        <v-overlay :value="overlay">
            <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>
    </div>
</template>

<script>
    import firebase from 'firebase'
    export default {
        name: "Team",
        props: ['team'],
        data() {
            return {
                overlay: true,
                accountUid: null,

                model: null,
                dialog: false,
                teamValue: null,

                dateTest: [],

                commentText: null,
                errorComment: null,
                commentLoad: false,
                snackbarAddComment: false,

                match: 0,
                matchRank: 0,
                matchQuick: 0,

                matchCompo: 0,

                totVic: 0,
                totDef: 0,
                totEg: 0,

                favorite: false,
                sendM: false,
                snackbarAddVal: false,

                gameMap: [],

                mapIcon: {
                    'Lidjiang': 'https://subswapr.fr/img/overstats/lidjiang.jpg',
                    'Oasis': 'https://subswapr.fr/img/overstats/oasis.jpg',
                    'Nepal': 'https://subswapr.fr/img/overstats/nepal.jpg',
                    'Ilios': 'https://subswapr.fr/img/overstats/ilios.jpg',
                    'Busan': 'https://subswapr.fr/img/overstats/busan.jpg',
                    'Dorado': 'https://subswapr.fr/img/overstats/dorado.jpg',
                    'Junkertown': 'https://subswapr.fr/img/overstats/junker.jpg',
                    'La Havane': 'https://subswapr.fr/img/overstats/havane.jpg',
                    'Rialto': 'https://subswapr.fr/img/overstats/rialto.jpg',
                    'Route 66': 'https://subswapr.fr/img/overstats/route.jpg',
                    'Gibraltar': 'https://subswapr.fr/img/overstats/gibraltar.jpg',
                    'Blizzard World': 'https://subswapr.fr/img/overstats/world.jpg',
                    'Eichenwald': 'https://subswapr.fr/img/overstats/eichenvald.jpg',
                    'Hollywood': 'https://subswapr.fr/img/overstats/hollywood.jpg',
                    'King\'s Row': 'https://subswapr.fr/img/overstats/row.jpg',
                    'Numbani': 'https://subswapr.fr/img/overstats/numbani.jpg',
                    'Hanamura': 'https://subswapr.fr/img/overstats/hamanura.jpg',
                    'Horizon': 'https://subswapr.fr/img/overstats/horizon.jpg',
                    'Paris': 'https://subswapr.fr/img/overstats/paris.jpg',
                    'Anubis': 'https://subswapr.fr/img/overstats/anubis.jpg',
                    'Volskaya': 'https://subswapr.fr/img/overstats/usine.jpg'
                },

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

                areaChart: null,

                pieData: null,
                pieDataRank: null,
                vicRank: 0,
                defRank: 0,
                egRank: 0,

                pieDataQuick: null,
                vicQuick: 0,
                defQuick: 0,
                egQuick: 0,

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
                  firebase.database().ref('teams/' + this.team).update({
                      isFav: false
                  }).then(() => {
                      this.favorite = false;
                  })
              } else {
                  firebase.database().ref('teams/' + this.team).update({
                      isFav: true
                  }).then(() => {
                      this.favorite = true;
                  })
              }
          },
            addComment: function () {
                if (this.commentText != null) {
                    this.commentLoad = true;
                    firebase.database().ref('teams/' + this.team + '/comments/' + this.randomID()).update({
                        Comment: this.commentText,
                        CommentDate: new Date().toLocaleString("fr-FR"),
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
            getIconMap: function (map) {
                let mapUrl = this.mapIcon[map]
                return mapUrl
            },
            compareValues: function(key, order = 'asc') {
            return function innerSort(a, b) {
                if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                    return 0;
                }

                const varA = (typeof a[key] === 'string')
                    ? a[key].toUpperCase() : a[key];
                const varB = (typeof b[key] === 'string')
                    ? b[key].toUpperCase() : b[key];

                let comparison = 0;
                if (varA > varB) {
                    comparison = 1;
                } else if (varA < varB) {
                    comparison = -1;
                }
                return (
                    (order === 'desc') ? (comparison * -1) : comparison
                );
            };
        }
        },
        created() {
            this.accountUid = firebase.auth().currentUser.uid;
            firebase.database().ref('teams/' + this.team).once('value').then((snapshot) => {
                // alert(JSON.stringify(snapshot.val()))
                this.teamValue = snapshot.val();

                // Calcul du nombre de Compo
                Object.keys(snapshot.val().compo || {}).forEach(() => {
                    this.matchCompo += 1;
                });

                // // Ajout Compo Tank
                // Object.keys(snapshot.val().matchs || {}).forEach(id => {
                //     const match = snapshot.val().matchs[id];
                //     const main = match.Players.Attack.PlayerTankOne;
                //     const off = match.Players.Attack.PlayerTankTwo;
                //     const tan = main + ", " + off;
                //     this.compoTank.push(tan);
                // });

                //Calcul de tout
                Object.keys(snapshot.val().matchs || {}).forEach(id => {
                    const match = snapshot.val().matchs[id];
                    this.match += 1;

                    if (!this.gameMap.includes(match.GameMap)) {
                        this.gameMap.push(match.GameMap);
                    }

                    if (match.GamePlay === 'Ranked') {
                        // if (match.GameMap in this.gameMap) {
                        //     let one = 3;
                        //     one.lenght;
                        // } else {
                        //     this.gameMap.push(match.GameMap);
                        // }

                        this.matchRank += 1;
                        if (match.GameScoreA > match.GameScoreB) {
                            this.vicRank += 1;
                        } else if (match.GameScoreA < match.GameScoreB) {
                            this.defRank += 1;
                        } else {
                            this.egRank += 1;
                        }
                    }
                    if (match.GamePlay === 'QuickPlay') {
                        // if (match.GameMap in this.gameMap) {
                        //     let one = 3;
                        //     one.lenght;
                        // } else {
                        //     this.gameMap.push(match.GameMap);
                        // }

                        this.matchQuick += 1;
                        if (match.GameScoreA > match.GameScoreB) {
                            this.vicQuick += 1;
                        } else if (match.GameScoreA < match.GameScoreB) {
                            this.defQuick += 1;
                        } else {
                            this.egQuick += 1;
                        }
                    }
                });

                //Calcul de la area
                let list = [];
                Object.keys(snapshot.val().matchs || {}).forEach(id => {
                    list.push(snapshot.val().matchs[id]);
                });

                this.dateTest = list;
                this.areaChart = {'2017-01-01': 2, '2017-01-02': 250, '2017-01-03': 8, '2017-01-04': 3};


                this.pieDataRank = [
                    ['Victoire', this.vicRank],
                    ['Défaite', this.defRank],
                    ['Egalité', this.egRank],
                ];

                this.pieDataQuick = [
                    ['Victoire', this.vicQuick],
                    ['Défaite', this.defQuick],
                    ['Egalité', this.egQuick],
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
            }).then(() => {
                this.overlay = false;
            })
        }
    }
</script>

<style scoped>
    @import "./../assets/styles.css";
</style>
