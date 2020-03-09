<template>
    <div style="background-color: #f4f7fc">
        <v-container fluid>
            <v-row justify="center" style="color: #2e313a">
                <div class="col-lg-10 col-md-10 col-sm-12">
                    <h1 style="margin-left: 15px; font-weight: 400; margin-bottom: 10px; font-size: 30px"><router-link :to="{path: '/team', query: {team: team}}" style="text-decoration: none"><v-btn style="background-color: transparent; color: #2e313a;" fab x-small depressed><v-icon>fa-angle-left</v-icon></v-btn></router-link>Composition Detail</h1>
                    <!--                    <v-btn @click="selectFavorite" style="margin-top: -2px; background-color: transparent" small fab depressed v-if="!favorite"><v-icon small>fa-star</v-icon></v-btn><v-btn @click="selectFavorite" style="margin-top: -5px; background-color: transparent" fab depressed v-if="favorite"><v-icon color="yellow">fa-star</v-icon></v-btn>-->
                    <p style="margin-left: 15px; margin-top: -10px; font-size: 16px">Modification de composition</p>
                </div>
            </v-row>
        </v-container>

        <v-container fluid>
            <v-row justify="center">
                <div class="col-lg-10 col-md-10 col-sm-12">
                    <v-row>
                        <div class="col-12" style="margin-bottom: -40px">
                            <h1 style="margin-left: 15px; font-size: 22px; font-weight: 700; color: #2e313a">{{ teamValue.Name }} <v-icon style="margin-top: -2px" small v-if="teamValue.isFav">fa-star</v-icon><v-btn v-if="accountUid == teamPlayer.OwnerId" text small @click="compoNameDialog = !compoNameDialog"><v-icon color="#2e313a">mdi-pencil</v-icon></v-btn></h1>
                            <v-btn
                                    v-if="accountUid == teamPlayer.OwnerId"
                                    width="80"
                                    height="35"
                                    elevation="1" tile style="margin-left: 15px; border-radius: 5px; background-color: #FFF; color: #2d3039; text-transform: initial; margin-top: 10px"
                                    @click="favDialog = !favDialog"
                            >Fav</v-btn>
                        </div>
                    </v-row>
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
                                            <v-icon style="margin-top: 20px; background-color: #e5f3fe; color: #0382ff; padding: 10px; border-radius: 40px">mdi-gamepad-variant</v-icon>
                                            <h2 style="margin-top: 12px; color: #2d3039; font-size: 40px; font-weight: 600">{{ teamCalc }}</h2>
                                            <p style="color: #768185; font-size: 15px">Total Compo Use</p>
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
                                            <v-icon style="margin-top: 20px; background-color: #f3f1ff; color: #866bfa; padding: 10px; border-radius: 40px">fa-shield-alt</v-icon>
                                            <p style="color: #768185; font-size: 15px; margin-top: 30px">{{ teamPlayer.Players.mainTank }}: <strong>{{ teamValue.Compo.mainTank }}</strong></p>
                                            <p style="color: #768185; font-size: 15px">{{ teamPlayer.Players.offTank }}: <strong>{{ teamValue.Compo.offTank }}</strong></p>
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
                                            <v-icon style="margin-top: 20px; background-color: #fff8e5; color: #ffc010; padding: 11px 15px; border-radius: 40px">fa-fire</v-icon>
                                            <p style="color: #768185; font-size: 15px; margin-top: 30px">{{ teamPlayer.Players.mainDps }}: <strong>{{ teamValue.Compo.mainDps }}</strong></p>
                                            <p style="color: #768185; font-size: 15px">{{ teamPlayer.Players.offDps }}: <strong>{{ teamValue.Compo.offDps }}</strong></p>
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
                                            <v-icon style="margin-top: 20px; background-color: #ebf9ea; color: #33c733; padding: 14px 15px; border-radius: 40px">fa-first-aid</v-icon>
                                            <p style="color: #768185; font-size: 15px; margin-top: 30px">{{ teamPlayer.Players.mainHeal }}: <strong>{{ teamValue.Compo.mainHeal }}</strong></p>
                                            <p style="color: #768185; font-size: 15px">{{ teamPlayer.Players.offHeal }}: <strong>{{ teamValue.Compo.offHeal }}</strong></p>
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
            <v-row justify="center" style="margin: 0px 1px; color: #9696A3">
                <div class="col-lg-10 col-md-10 col-sm-12">
                    <v-row>
                        <div class="col-lg-6 col-sm-12">
                            <v-card tile style="border-radius: 5px; color: #363645; font-weight: 500">
                                <v-card-title>
                                    <h1 style="margin-left: 15px; font-size: 15px; font-weight: 700; color: #2e313a">Composition Win Rate</h1>
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
                                    <h1 style="margin-left: 15px; font-size: 15px; font-weight: 700; color: #2e313a">TimeLine</h1>
                                </v-card-title>
                                <v-container style="height: 400px">
                                    <v-row>
                                        <div class="col-12" style="margin-top: -20px">
                                            <div style="margin: 0px 20px; overflow:auto; height: 370px">
                                                <area-chart :data="areaChart"/>
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

        <v-dialog
                v-model="favDialog"
                width="600px"
                content-class="dialogBorder"
        >
            <v-card>
                <v-card-title style="font-size: 17px; font-weight: 400; background-color: #2d3039; color: #FFF">
                    Favorite
                    <v-spacer/>
                    <v-btn @click="favDialog = !favDialog" text depressed><v-icon color="#FFF">mdi-close</v-icon></v-btn>
                </v-card-title>
                <v-container>
                    <v-row class="mx-2">
                        <v-col
                                class="align-center justify-space-between"
                                cols="12"
                        >
                            <v-row v-if="fullFav && !isFav" align="center" class="mr-0">
                                <v-alert type="error" text>
                                    Attention le nombre de composition favorite est atteint. Veuillez retirer une composition avant d'ajouter celle-ci
                                </v-alert>
                            </v-row>
                            <v-row
                                    v-if="!fullFav && !isFav"
                                    align="center"
                                    class="mr-0"
                            >
                                <p style="font-size: 15px">Ajouter aux favoris une composition, vous permet d'ajouter plus rapidement cette composition lors de l'ajout d'un match</p>
                            </v-row>
                            <v-row
                                    v-if="isFav"
                                    align="center"
                                    class="mr-0"
                            >

                                <p style="font-size: 15px">Retirer la composition des favoris, ne vous permet plus d'ajouter votre composition rapidement lors de l'ajout d'un match.</p>
                            </v-row>
                            <v-row
                                    align="center"
                                   class="mr-0">
                                <v-spacer/>
                                <p style="font-size: 12px">ID composition : {{ id }}</p>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-container>
                <v-card-actions v-if="!fullFav && !isFav">
                    <v-spacer />
                    <v-btn
                            width="150"
                            height="35"
                            elevation="1" tile style="border-radius: 5px; background-color: #FFF; color: #2d3039; text-transform: initial"
                            @click="favFunc"
                    >Ajouter</v-btn>
                    <v-btn
                            style="margin-right: 5px; text-transform: initial"
                            text
                            color="#003041"
                            @click="favDialog = false"
                    >Fermer</v-btn>
                </v-card-actions>
                <v-card-actions v-if="fullFav && !isFav">
                    <v-spacer />
                    <v-btn
                            style="margin-right: 5px; text-transform: initial"
                            text
                            color="#003041"
                            @click="favDialog = false"
                    >Fermer</v-btn>
                </v-card-actions>
                <v-card-actions v-if="isFav">
                    <v-spacer />
                    <v-btn
                            width="150"
                            height="35"
                            elevation="1" tile style="border-radius: 5px; background-color: #FFF; color: #2d3039; text-transform: initial"
                            @click="favFunc"
                    >Retirer</v-btn>
                    <v-btn
                            style="margin-right: 5px; text-transform: initial"
                            text
                            color="#003041"
                            @click="favDialog = false"
                    >Fermer</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-dialog
                v-model="compoNameDialog"
                width="600px"
                content-class="dialogBorder"
        >
            <v-card>
                <v-card-title style="font-size: 17px; font-weight: 400; background-color: #2d3039; color: #FFF">
                    Nom Composition
                    <v-spacer/>
                    <v-btn @click="compoNameDialog = !compoNameDialog" text depressed><v-icon color="#FFF">mdi-close</v-icon></v-btn>
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
                                <v-list-item-subtitle>Modifier le nom de votre composition</v-list-item-subtitle>
                                <v-list-item-subtitle><v-text-field color="#003041" type="text" :label="teamValue.Name" prepend-icon="mdi-rename-box" v-model="compoName"/></v-list-item-subtitle>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-container>
                <v-card-actions>
                    <v-spacer />
                    <v-btn
                            width="150"
                            height="35"
                            elevation="1" tile style="border-radius: 5px; background-color: #FFF; color: #2d3039; text-transform: initial"
                            @click="changeCompoName"
                    >Modifier</v-btn>
                    <v-btn
                            style="margin-right: 5px; text-transform: initial"
                            text
                            color="#003041"
                            @click="compoNameDialog = false"
                    >Fermer</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-snackbar v-model="snackbarFav" :timeout="3000" color="green">
            Composition ajoutée
            <v-btn
                    color="white"
                    text
                    icon
                    @click="snackbarFav = false"
            >
                <v-icon>mdi-close</v-icon>
            </v-btn>
        </v-snackbar>

        <v-snackbar v-model="snackbarFavRet" :timeout="3000" color="red">
            Composition retirée
            <v-btn
                    color="white"
                    text
                    icon
                    @click="snackbarFavRet = false"
            >
                <v-icon>mdi-close</v-icon>
            </v-btn>
        </v-snackbar>

        <v-snackbar v-model="snackbarName" :timeout="3000" color="green">
            Nom modifié
            <v-btn
                    color="white"
                    text
                    icon
                    @click="snackbarName = false"
            >
                <v-icon>mdi-close</v-icon>
            </v-btn>
        </v-snackbar>
    </div>
</template>

<script>
    import firebase from 'firebase'
    export default {
        name: "Compo",
        props: ['team', 'id'],
        data() {
            return {
                accountUid: null,

                advenced: null,

                isFav: null,
                fullFav: false,

                teamValue: null,
                teamPlayer: null,
                teamCalc: 0,

                pieDataRank: null,
                vicRank: 0,
                defRank: 0,
                egRank: 0,

                pieDataQuick: null,
                vicQuick: 0,
                defQuick: 0,
                egQuick: 0,

                favDialog: false,
                compoNameDialog: false,
                snackbarName: false,
                snackbarFav: false,
                snackbarFavRet: false,

                compoName: null,

                areaChart: null,

                dateTest: null,
            }
        },
        methods: {
            favFunc: function() {
                let fav = this.isFav;
                this.favDialog = false;
                firebase.database().ref('teams/' + this.team + '/compo/' + this.id).update({
                    isFav: !this.isFav,
                }).then(() => {
                    if (fav) {
                        this.snackbarFavRet = true;
                    } else {
                        this.snackbarFav = true;
                    }
                })
            },
          changeCompoName: function () {
              if (this.compoName != null) {
                  firebase.database().ref('teams/' + this.team + '/compo/' + this.id).update({
                      Name: this.compoName,
                  }).then(() => {
                      this.compoName = null;
                      this.compoNameDialog = false;
                      this.snackbarName = true;
                  })
              }
          }
        },
        created() {
            this.accountUid = firebase.auth().currentUser.uid;
            firebase.database().ref('teams/' + this.team).once('value').then((snapshot) => {
                this.teamPlayer = snapshot.val();

                let favCalc = 0;
                //Calcul du nombre de fav
                Object.keys(snapshot.val().compo || {}).forEach(id => {
                    const compo = snapshot.val().compo[id];
                    if (compo.isFav) {
                        favCalc += 1;
                    }
                });
                if (favCalc >= 4) {
                    this.fullFav = true;
                }

                let list = [];
                let advenced = [];
                let tour = 1;
                Object.keys(snapshot.val().matchs || {}).forEach(id => {
                    let match = snapshot.val().matchs[id];
                    let ddate = match.GameDate.substring(0, 10);
                    advenced.push('N° tour = ' + tour);
                    if (this.id == match.GameCompositionSide1) {
                        let id = 0;
                        if (list.length === 0) {
                            advenced.push('Ajout premiere valeur');
                            list.push({used: 1, date: ddate});
                            id += 1;
                        } else {
                            list.forEach(item => {
                                if (item.date == ddate) { //Date existe
                                    advenced.push('Date existe');
                                    item.used += 1;
                                    id += 1;
                                }
                            })
                        }
                        if (id == 0) {
                            list.push({used: 1, date: ddate});
                        }
                    }
                    if (this.id == match.GameCompositionSide2) {
                        let id = 0;
                        if (list.length === 0) {
                            advenced.push('Ajout premiere valeur');
                            list.push({used: 1, date: ddate});
                            id += 1;
                        } else {
                            list.forEach(item => {
                                if (item.date == ddate) { //Date existe
                                    advenced.push('Date existe');
                                    item.used += 1;
                                    id += 1;
                                }
                            })
                        }
                        if (id == 0) {
                            list.push({used: 1, date: ddate});
                        }
                    }
                    if (this.id == match.GameCompositionSide3) {
                        let id = 0;
                        if (list.length === 0) {
                            advenced.push('Ajout premiere valeur');
                            list.push({used: 1, date: ddate});
                            id += 1;
                        } else {
                            list.forEach(item => {
                                if (item.date == ddate) { //Date existe
                                    advenced.push('Date existe');
                                    item.used += 1;
                                    id += 1;
                                }
                            })
                        }
                        if (id == 0) {
                            list.push({used: 1, date: ddate});
                        }
                    }
                    tour += 1;
                });
                this.advenced = advenced;

                let lets = {};

                list.forEach(item => {
                    let days = item.date.substring(0,2);
                    let mounth = item.date.substring(3, 5);
                    let years = item.date.substring(6, 10);
                    let items = mounth + '/' + days + '/' + years;
                    lets[items] = item.used;
                });

                this.areaChart = lets;

                //Calcul de PieDataRank et QuickPlay
                Object.keys(snapshot.val().matchs || {}).forEach(id => {
                    const match = snapshot.val().matchs[id];
                    if (match.GameCompositionSide1 == this.id || match.GameCompositionSide2 == this.id || match.GameCompositionSide3 == this.id) {
                        if (match.GamePlay === 'Ranked') {
                            if (match.GameScoreA > match.GameScoreB) {
                                this.vicRank += 1;
                            } else if (match.GameScoreA < match.GameScoreB) {
                                this.defRank += 1;
                            } else {
                                this.egRank += 1;
                            }
                        }
                        if (match.GamePlay === 'QuickPlay') {
                            if (match.GameScoreA > match.GameScoreB) {
                                this.vicQuick += 1;
                            } else if (match.GameScoreA < match.GameScoreB) {
                                this.defQuick += 1;
                            } else {
                                this.egQuick += 1;
                            }
                        }
                    }
                });

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

                //Calcul du nombre utilisation de la composition
                Object.keys(snapshot.val().matchs || {}).forEach(id => {
                    const match = snapshot.val().matchs[id];
                    if (match.GameCompositionSide1 == this.id) {
                        this.teamCalc += 1;
                    }
                    if (match.GameCompositionSide2 == this.id) {
                        this.teamCalc += 1;
                    }
                    if (match.GameCompositionSide3 == this.id) {
                        this.teamCalc += 1;
                    }
                });
            })

            firebase.database().ref('teams/' + this.team + '/compo/' + this.id).on('value',  (snapshot) => {
                // alert(JSON.stringify(snapshot.val()))
                this.teamValue = snapshot.val();

                if (this.teamValue.isFav) {
                    this.isFav = true;
                }
                if (!this.teamValue.isFav) {
                    this.isFav = false;
                }
                if (this.teamValue.isNew) {
                    firebase.database().ref('teams/' + this.team + '/compo/' + this.id).update({
                        isNew: false,
                    })
                }
            })
        }
    }
</script>

<style scoped>

</style>
