<template>
    <div style="background-color: #f4f7fc">
        <v-container fluid>
            <v-row justify="center" style="color: #2e313a">
                <div class="col-lg-10 col-md-10 col-sm-12">
                    <h1 style="margin-left: 15px; font-weight: 400; margin-bottom: 10px; font-size: 30px"><router-link :to="{path: '/team', query: {team: team}}" style="text-decoration: none"><v-btn style="background-color: transparent; color: #2e313a;" fab x-small depressed><v-icon>fa-angle-left</v-icon></v-btn></router-link> Win Rate Detail </h1>
                    <!--                    <v-btn @click="selectFavorite" style="margin-top: -2px; background-color: transparent" small fab depressed v-if="!favorite"><v-icon small>fa-star</v-icon></v-btn><v-btn @click="selectFavorite" style="margin-top: -5px; background-color: transparent" fab depressed v-if="favorite"><v-icon color="yellow">fa-star</v-icon></v-btn>-->
                    <p style="margin-left: 15px; margin-top: -10px; font-size: 16px">Toutes les wins rate des différents mode de jeux</p>
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
                                    <h1 style="margin-left: 15px; font-size: 15px; font-weight: 700; color: #2e313a">Game Type Win Rate</h1>
                                </v-card-title>
                                <v-container style="height: 420px; margin-top: -20px">
                                    <v-tabs :grow="true"
                                            background-color="transparent"
                                            color="#363645"
                                    >
                                        <v-tab>
                                            Escorte / {{ parseFloat(100 * (vicEscorte / (vicEscorte + defEscorte + egEscorte))).toFixed(0) }}%
                                        </v-tab>
                                        <v-tab>
                                            Hybride / {{ parseFloat(100 * (vicHybride / (vicHybride + defHybride + egHybride))).toFixed(0) }}%
                                        </v-tab>
                                        <v-tab>
                                            2Cp / {{ parseFloat(100 * (vicCp / (vicCp + defCp + egCp))).toFixed(0) }}%
                                        </v-tab>
                                        <v-tab>
                                            KOTH / {{ parseFloat(100 * (vicKoth / (vicKoth + defKoth + egKoth))).toFixed(0) }}%
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
                                                            <pie-chart legend="bottom" donut="true" :data="pieDataEscorte" />
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
                                                            <pie-chart legend="bottom" donut="true" :data="pieDataHybride" />
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
                                                            <pie-chart legend="bottom" donut="true" :data="pieDataCp" />
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
                                                            <pie-chart legend="bottom" donut="true" :data="pieDataKoth" />
                                                        </v-row>
                                                    </v-col>
                                                </v-row>
                                            </v-container>
                                        </v-tab-item>
                                    </v-tabs>
                                </v-container>
                            </v-card>
                        </div>
                    </v-row>
                </div>
            </v-row>
        </v-container>

    </div>
</template>

<script>
    import firebase from 'firebase';
    export default {
        name: "winRate",
        props: ['team'],
        data() {
            return {
                teamValue: null,

                pieDataRank: null,
                vicRank: 0,
                defRank: 0,
                egRank: 0,

                pieDataQuick: null,
                vicQuick: 0,
                defQuick: 0,
                egQuick: 0,

                pieDataKoth: null,
                vicKoth: 0,
                defKoth: 0,
                egKoth: 0,

                pieDataCp: null,
                vicCp: 0,
                defCp: 0,
                egCp: 0,

                pieDataHybride: null,
                vicHybride: 0,
                defHybride: 0,
                egHybride: 0,

                pieDataEscorte: null,
                vicEscorte: 0,
                defEscorte: 0,
                egEscorte: 0,
            }
        },
        created() {
            firebase.database().ref('teams/' + firebase.auth().currentUser.uid + '/' + this.team).once('value').then((snapshot) => {
                this.teamValue = snapshot.val();

                //Calcul de PieDataRank
                Object.keys(snapshot.val().matchs || {}).forEach(id => {
                    const match = snapshot.val().matchs[id];
                    if (match.GamePlay === 'Ranked') {
                        if (match.GameScoreA > match.GameScoreB) {
                            this.vicRank += 1;
                        } else if (match.GameScoreA < match.GameScoreB) {
                            this.defRank += 1;
                        } else {
                            this.egRank += 1;
                        }
                    }
                });

                //Calcul de PieDataQuick
                Object.keys(snapshot.val().matchs || {}).forEach(id => {
                    const match = snapshot.val().matchs[id];
                    if (match.GamePlay === 'QuickPlay') {
                        if (match.GameScoreA > match.GameScoreB) {
                            this.vicQuick += 1;
                        } else if (match.GameScoreA < match.GameScoreB) {
                            this.defQuick += 1;
                        } else {
                            this.egQuick += 1;
                        }
                    }
                });

                //Calcul de PieData en Rank
                Object.keys(snapshot.val().matchs || {}).forEach(id => {
                    const match = snapshot.val().matchs[id];
                    if (match.GamePlay === 'Ranked') {
                        if (match.GameType === 'Escorte') {
                            if (match.GameScoreA > match.GameScoreB) {
                                this.vicEscorte += 1;
                            } else if (match.GameScoreA < match.GameScoreB) {
                                this.defEscorte += 1;
                            } else {
                                this.egEscorte += 1;
                            }
                        }
                        if (match.GameType === 'Hybride') {
                            if (match.GameScoreA > match.GameScoreB) {
                                this.vicHybride += 1;
                            } else if (match.GameScoreA < match.GameScoreB) {
                                this.defHybride += 1;
                            } else {
                                this.egHybride += 1;
                            }
                        }
                        if (match.GameType === '2CP') {
                            if (match.GameScoreA > match.GameScoreB) {
                                this.vicCp += 1;
                            } else if (match.GameScoreA < match.GameScoreB) {
                                this.defCp += 1;
                            } else {
                                this.egCp += 1;
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

                this.pieDataEscorte = [
                    ['Victoire', this.vicEscorte],
                    ['Défaite', this.defEscorte],
                    ['Egalité', this.egEscorte],
                ];

                this.pieDataHybride = [
                    ['Victoire', this.vicHybride],
                    ['Défaite', this.defHybride],
                    ['Egalité', this.egHybride],
                ];

                this.pieDataCp = [
                    ['Victoire', this.vicCp],
                    ['Défaite', this.defCp],
                    ['Egalité', this.egCp],
                ];

                this.pieDataKoth = [
                    ['Victoire', this.vicKoth],
                    ['Défaite', this.defKoth],
                    ['Egalité', this.egKoth],
                ];
            })
        }
    }
</script>

<style scoped>
    @import "./../assets/styles.css";
</style>
