<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h1><router-link to="/teams" style="text-decoration: none"><v-btn fab x-small depressed><v-icon x-small>fa-arrow-left</v-icon></v-btn></router-link> {{ teamValue['TeamName'] }} <v-btn @click="selectFavorite" style="margin-top: -5px" fab depressed v-if="!favorite"><v-icon>fa-star</v-icon></v-btn><v-btn @click="selectFavorite" style="margin-top: -5px" fab depressed v-if="favorite"><v-icon color="yellow">fa-star</v-icon></v-btn></h1>
            </div>
        </div>
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

        <v-dialog
                v-model="dialogMatch"
                width="600px"
                content-class="dialogBorder"
        >
            <v-card>
                <v-card-title class="cardTitle" style="font-weight: 300">
                    <span>{{ currentTitle }}</span>
                    <v-spacer/>
                    <v-btn @click="dialogMatch = !dialogMatch" text depressed><v-icon color="#FFF">mdi-close</v-icon></v-btn>
                </v-card-title>

                <v-window v-model="step">
                    <v-window-item :value="1">
                        <v-card-text>
                            <h3 class="title font-weight-light mb-2">Type de jeu</h3>
                            <v-radio-group v-model="configPlay" row>
                                <v-radio label="QuickPlay" value="QuickPlay"></v-radio>
                                <v-radio label="Ranked" value="Ranked"></v-radio>
                            </v-radio-group>
                            <hr>
                            <br>
                            <h3 class="title font-weight-light mb-2">Type de carte</h3>
                            <v-radio-group v-model="configMap" row>
                                <v-radio label="KOTH" value="KOTH"></v-radio>
                                <v-radio label="Escord" value="Escord"></v-radio>
                                <v-radio label="Hybride" value="Hybride"></v-radio>
                                <v-radio label="2CP" value="2CP"></v-radio>
                            </v-radio-group>
                            <hr>
                            <br>
                            <h3 class="title font-weight-light mb-2">Status du Match</h3>
                            <v-radio-group v-model="configStatus" row>
                                <v-radio label="Victoire" value="Victoire"></v-radio>
                                <v-radio label="Défaite" value="Défaite"></v-radio>
                                <v-radio label="Egalité" value="Egalité"></v-radio>
                            </v-radio-group>
                            <hr>
                            <br>
                            <h3 class="title font-weight-light mb-2">Score</h3>
                            <v-row>
                                <v-col cols="6" sm="6">
                                    <v-text-field type="number" label="Votre équipe" v-model="configScoreOne"></v-text-field>
                                </v-col>
                                <v-col cols="6" sm="6">
                                    <v-text-field type="number" label="Equipe adverse" v-model="configScoreTwo"></v-text-field>
                                </v-col>
                            </v-row>
                            <!--                        <v-text-field-->
                            <!--                                label="Email"-->
                            <!--                                value="john@vuetifyjs.com"-->
                            <!--                        ></v-text-field>-->
                            <span class="caption grey--text text--darken-1">
            Veuillez sélectionner les deux paramètres avant de pouvoir continuer
          </span>
                        </v-card-text>
                    </v-window-item>

                    <v-window-item :value="2">
                        <v-card-text v-if="configMap === '2CP'">
                            <h3 class="title font-weight-light mb-2">Choisir la carte joué</h3>
                            <v-radio-group v-model="configModel">
                                <v-row>
                                    <div class="col-6">
                                        <v-radio value="Temple d'anubis" style="height: 100px">
                                            <v-card
                                                    slot="label"
                                                    max-width="400"
                                            >
                                                <v-img
                                                        class="white--text align-end"
                                                        height="100px"
                                                        width="220px"
                                                        src="https://genesis-mc.fr/images/anubis.jpg"
                                                >
                                                    <v-card-title>Temple d'anubis</v-card-title>
                                                </v-img>
                                            </v-card>
                                        </v-radio>
                                    </div>
                                    <div class="col-6">
                                        <v-radio value="Autre" style="height: 100px">
                                            <v-card
                                                    slot="label"
                                                    max-width="400"
                                            >
                                                <v-img
                                                        class="white--text align-end"
                                                        height="100px"
                                                        width="220px"
                                                        src="https://genesis-mc.fr/images/anubis.jpg"
                                                >
                                                    <v-card-title>Autre</v-card-title>
                                                </v-img>
                                            </v-card>
                                        </v-radio>
                                    </div>
                                </v-row>
                            </v-radio-group>
                            <span class="caption grey--text text--darken-1">
            Veuillez choisir une carte de jeu
          </span>
                        </v-card-text>
                    </v-window-item>

                    <v-window-item :value="3">
                        <v-card-text>
                            <h3 class="title font-weight-light mb-2">Choix des DPS - Attaque</h3>
                            <v-row>
                                <v-col class="d-flex" cols="6">
                                    <v-select
                                            v-model="configDpsOne"
                                            :items="dps"
                                            label="DPS #1"
                                    ></v-select>
                                </v-col>
                                <v-col class="d-flex" cols="6">
                                    <v-select
                                            v-model="configDpsTwo"
                                            :items="dps"
                                            label="DPS #2"
                                    ></v-select>
                                </v-col>
                            </v-row>
                            <h3 class="title font-weight-light mb-2">Choix des TANKS</h3>
                            <v-row>
                                <v-col class="d-flex" cols="6">
                                    <v-select
                                            v-model="configTankOne"
                                            :items="tank"
                                            label="TANK #1"
                                    ></v-select>
                                </v-col>
                                <v-col class="d-flex" cols="6">
                                    <v-select
                                            v-model="configTankTwo"
                                            :items="tank"
                                            label="TANK #2"
                                    ></v-select>
                                </v-col>
                            </v-row>
                            <h3 class="title font-weight-light mb-2">Choix des HEALS</h3>
                            <v-row>
                                <v-col class="d-flex" cols="6">
                                    <v-select
                                            v-model="configHealOne"
                                            :items="heal"
                                            label="HEAL #1"
                                    ></v-select>
                                </v-col>
                                <v-col class="d-flex" cols="6">
                                    <v-select
                                            v-model="configHealTwo"
                                            :items="heal"
                                            label="HEAL #2"
                                    ></v-select>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-window-item>

                    <v-window-item :value="4">
                        <v-card-text>
                            <h3 class="title font-weight-light mb-2">Choix des DPS - Défense</h3>
                            <v-row>
                                <v-col class="d-flex" cols="6">
                                    <v-select
                                            v-model="configDpsOneD"
                                            :items="dps"
                                            label="DPS #1"
                                    ></v-select>
                                </v-col>
                                <v-col class="d-flex" cols="6">
                                    <v-select
                                            v-model="configDpsTwoD"
                                            :items="dps"
                                            label="DPS #2"
                                    ></v-select>
                                </v-col>
                            </v-row>
                            <h3 class="title font-weight-light mb-2">Choix des TANKS</h3>
                            <v-row>
                                <v-col class="d-flex" cols="6">
                                    <v-select
                                            v-model="configTankOneD"
                                            :items="tank"
                                            label="TANK #1"
                                    ></v-select>
                                </v-col>
                                <v-col class="d-flex" cols="6">
                                    <v-select
                                            v-model="configTankTwoD"
                                            :items="tank"
                                            label="TANK #2"
                                    ></v-select>
                                </v-col>
                            </v-row>
                            <h3 class="title font-weight-light mb-2">Choix des HEALS</h3>
                            <v-row>
                                <v-col class="d-flex" cols="6">
                                    <v-select
                                            v-model="configHealOneD"
                                            :items="heal"
                                            label="HEAL #1"
                                    ></v-select>
                                </v-col>
                                <v-col class="d-flex" cols="6">
                                    <v-select
                                            v-model="configHealTwoD"
                                            :items="heal"
                                            label="HEAL #2"
                                    ></v-select>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-window-item>

                    <v-window-item :value="5">
                        <div class="pa-4 text-center">
                            <h3 class="title font-weight-light mb-2">Commentaire (falcultatif)</h3>
                            <v-row>
                                <v-col cols="12" sm="12">
                                    <v-text-field label="Commentaire du match" v-model="configCommentaire"></v-text-field>
                                </v-col>
                            </v-row>
                            <!--                        <v-img-->
                            <!--                                class="mb-4"-->
                            <!--                                contain-->
                            <!--                                height="128"-->
                            <!--                                src="https://cdn.vuetifyjs.com/images/logos/v.svg"-->
                            <!--                        ></v-img>-->
                            <h3 class="title font-weight-light mb-2">Pour valider le match, veuillez cliquer sur ajouter</h3>
                            <v-btn
                                    width="150"
                                    height="35"
                                    style="border-radius: 20px"
                                    :loading="sendM"
                                    @click="sendMatch"
                            >Valider</v-btn>
                        </div>
                    </v-window-item>
                </v-window>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-btn
                            :disabled="step === 1"
                            depressed
                            icon
                            @click="step--"
                    >
                        <v-icon>fa-angle-left</v-icon>
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn
                            :disabled="configStatus === null || configScoreOne === null || configScoreTwo === null || step === 5 || step === 3 && configDpsOne === null || step === 3 && configDpsTwo === null || step === 3 && configTankOne === null || step === 3 &&  configTankTwo === null || step === 3 && configHealOne === null || step === 3 && configHealTwo === null || step === 4 && configDpsOneD === null || step === 4 && configDpsTwoD === null || step === 4 && configTankOneD === null || step === 4 &&  configTankTwoD === null || step === 4 && configHealOneD === null || step === 4 && configHealTwoD === null || step === 2 && configModel === null || configMap === null || configPlay === null"
                            color="primary"
                            depressed
                            icon
                            @click="step++"
                    >
                        <v-icon>fa-angle-right</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-dialog
                v-model="dialogJoueur"
                width="600px"
                content-class="dialogBorder"
        >
            <v-card>
                <v-card-title class="cardTitle" style="font-weight: 300">
                    Ajouter un joueur
                    <v-spacer/>
                    <v-btn @click="dialogJoueur = !dialogJoueur" text depressed><v-icon color="#FFF">mdi-close</v-icon></v-btn>
                </v-card-title>
                <v-container>
                    <v-row class="mx-2">
                        <v-col class="align-center justify-space-between" cols="12">
                            <v-row align="center" class="mr-0">
                                Vous êtes sur le point de supprimer une équipe de votre catalogue, celle-ci sera supprimée ainsi que toutes les données qu'elle contenait
                            </v-row>
                        </v-col>
                    </v-row>
                </v-container>
                <v-card-actions>
                    <v-spacer />
                    <v-btn
                            width="150"
                            height="35"
                            style="border-radius: 20px"
                    >Ajouter <v-icon>mdi-plus</v-icon></v-btn>
                    <v-btn
                            style="margin-right: 5px"
                            text
                            color="#003041"
                            @click="dialogJoueur = false"
                    >Annuler</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

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
                <v-list-item link :to="{path: '/addMatch', query: {team: team}}">
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
                dps: ['Ashe', 'Hanzo'],
                tank: ['Orisa', 'Sigma'],
                heal: ['Moira', 'Ange'],

                teamValue: '',

                step: 1,

                dialogMatch: false,
                dialogJoueur: false,

                favorite: false,


                configModel: null,

                configPlay: null,
                configMap: null,
                configStatus: null,
                configScoreOne: null,
                configScoreTwo: null,

                configDpsOne: null,
                configDpsTwo: null,
                configTankOne: null,
                configTankTwo: null,
                configHealOne: null,
                configHealTwo: null,

                configDpsOneD: null,
                configDpsTwoD: null,
                configTankOneD: null,
                configTankTwoD: null,
                configHealOneD: null,
                configHealTwoD: null,

                configCommentaire: '',

                sendM: false,
                snackbarAddVal: false,

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
            sendMatch: function () {
                this.sendM = true;
              firebase.database().ref('teams/' + firebase.auth().currentUser.uid + '/' + this.team + '/matchs/' + this.randomID()).update({
                  GamePlay: this.configPlay,
                  GameType: this.configMap,
                  GameMap: this.configModel,
                  GameStatus: this.configStatus,
                  GameScoreA: this.configScoreOne,
                  GameScoreB: this.configScoreTwo,
                  GameComment: this.configCommentaire,
                  GameDate: new Date().toLocaleString(),
                  Players: {
                      Attack: {
                          PlayerDpsOne: this.configDpsOne,
                          PlayerDpsTwo: this.configDpsTwo,
                          PlayerTankOne: this.configTankOne,
                          PlayerTankTwo: this.configTankTwo,
                          PlayerHealOne: this.configHealOne,
                          PlayerHealTwo: this.configHealTwo,
                      },
                      Defense: {
                          PlayerDpsOne: this.configDpsOneD,
                          PlayerDpsTwo: this.configDpsTwoD,
                          PlayerTankOne: this.configTankOneD,
                          PlayerTankTwo: this.configTankTwoD,
                          PlayerHealOne: this.configHealOneD,
                          PlayerHealTwo: this.configHealTwoD,
                      }
                  }
              }).then(() => {
                  let victoireR = 0
                  let victoireQ = 0
                  let nullR = 0
                  let nullQ = 0
                  let defeatR = 0
                  let defeatQ = 0
                  if (this.configStatus === 'Victoire') {
                      if (this.configPlay === 'Ranked') {
                          victoireR = 1
                      } else {
                          victoireQ = 1
                      }
                  }
                  if (this.configStatus === 'Défaite') {
                      if (this.configPlay === 'Ranked') {
                          defeatR = 1
                      } else {
                          defeatQ = 1
                      }
                  }
                  if (this.configStatus === 'Egalité') {
                      if (this.configPlay === 'Ranked') {
                          nullR = 1
                      } else {
                          nullQ = 1
                      }
                  }
                  firebase.database().ref('teams/' + firebase.auth().currentUser.uid + '/' + this.team).update({
                      MatchCount: this.teamValue.MatchCount + 1,
                      countVictoryRanked: this.teamValue.countVictoryRanked + victoireR,
                      countDefeatRanked: this.teamValue.countDefeatRanked + defeatR,
                      countNullRanked: this.teamValue.countNullRanked + nullR,
                      countVictoryQuickPlay: this.teamValue.countVictoryQuickPlay + victoireQ,
                      countDefeatQuickPlay: this.teamValue.countDefeatQuickPlay + defeatQ,
                      countNullQuickPlay: this.teamValue.countNullQuickPlay + nullQ,
                  }).then(() => {
                      this.sendM = false
                      this.dialogMatch = false
                      this.snackbarAddVal = true

                      this.configModel = null

                          this.configPlay = null
                          this.configMap = null
                          this.configStatus = null
                          this.configScoreOne = null
                          this.configScoreTwo = null

                          this.configDpsOne = null
                          this.configDpsTwo = null
                          this.configTankOne = null
                          this.configTankTwo =null
                          this.configHealOne = null
                          this.configHealTwo = null

                          this.configDpsOneD = null
                          this.configDpsTwoD = null
                          this.configTankOneD = null
                          this.configTankTwoD = null
                          this.configHealOneD = null
                          this.configHealTwoD = null

                          this.configCommentaire = ''
                      this.step = 1
                  })
              })
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
        computed: {
            currentTitle() {
                switch (this.step) {
                    case 1:
                        return 'Configuration Partie'
                    case 2:
                        return 'Choix de la map'
                    case 3:
                        return 'Sélection des héros'
                    case 4:
                        return 'Sélection des héros'
                    case 5:
                        return 'Validation'
                    default:
                        return 'Account created'
                }
            }
        },
        created() {
            firebase.database().ref('teams/' + firebase.auth().currentUser.uid + '/' + this.team).on('value', (snapshot) => {
                // alert(JSON.stringify(snapshot.val()))
                this.teamValue = snapshot.val()
                this.pieData = [
                    ['Victoire', snapshot.val().countVictoryRanked + snapshot.val().countVictoryQuickPlay],
                    ['Défaite', snapshot.val().countDefeatRanked + snapshot.val().countDefeatQuickPlay],
                    ['Egalité', snapshot.val().countNullRanked + snapshot.val().countNullQuickPlay],
                ]

                this.columnRanked = [
                    ['Victoire', snapshot.val().countVictoryRanked],
                    ['Défaite', snapshot.val().countDefeatRanked],
                    ['Egalité', snapshot.val().countNullRanked],
                ]

                this.columnQuick = [
                    ['Victoire', snapshot.val().countVictoryQuickPlay],
                    ['Défaite', snapshot.val().countDefeatQuickPlay],
                    ['Egalité', snapshot.val().countNullQuickPlay],
                ]
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
    @import "./../assets/styles.css";
</style>