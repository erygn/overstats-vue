<template>
    <div>
        <v-container fluid>
            <v-row justify="center" style="color: #2e313a">
                <div class="col-lg-10 col-md-10 col-sm-12">
                    <h1 style="font-weight: 300; margin-top: 10px"><router-link :to="{path: '/team', query: {team: team}}" style="text-decoration: none"><v-btn style="background-color: transparent; color: #2e313a;" fab x-small depressed><v-icon>fa-angle-left</v-icon></v-btn></router-link> Game Detail</h1>
                </div>
            </v-row>
        </v-container>

        <v-container fluid>
            <v-row justify="center" style="color: #2e313a">
                <div class="col-lg-10 col-md-10 col-sm-12">
                    <v-img :src="mapIcon[teamGame.GameMap]" height="160px" style="border-radius: 20px">
                        <v-row class="fill-height" justify="center" align="center">
                            <div class="text-center">
                                <v-card-title style="color: #FFF; font-weight: 600; font-size: 48px; text-shadow: 0px 0px 6px rgba(0,0,0,0.89); margin-bottom: 3px; margin-top: 8px">{{ teamGame.GameMap }}</v-card-title>
                                <v-card-subtitle style="color: #FFF; font-weight: 400; font-size: 16px">{{teamGame.GameType}}</v-card-subtitle>
                            </div>
                        </v-row>
                    </v-img>
                </div>
            </v-row>
        </v-container>

        <v-container fluid v-if="teamGame.GameType != 'KOTH'">
            <v-row justify="center" style="margin: 0px 1px; color: #9696A3">
                <div class="col-lg-10 col-md-10 col-sm-12">
                    <v-row justify="center">
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <h1 style="font-size: 18px; font-weight: 300; color: #2e313a">{{teamGame.GameType}}</h1>
                            <v-img :src="mapIcon[teamGame.GameMap]" height="250" style="border-radius: 20px"></v-img>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <h1 style="font-size: 18px; font-weight: 300; color: #2e313a">{{teamGame.GameMap}}</h1>
                        </div>
                    </v-row>
                </div>
            </v-row>
        </v-container>

        <v-container fluid v-if="teamGame.GameType == 'KOTH'">
            <v-row justify="center" style="margin: 0px 1px; color: #9696A3">
                <div class="col-lg-10 col-md-10 col-sm-12">
                    <v-row justify="center">
                        <div class="col-lg-4 col-md-4 col-sm-6">
                            <h1 style="font-size: 18px; font-weight: 300; color: #2e313a">{{teamGame.GameKothOne}}</h1>
                            <v-img :src="mapList[teamGame.GameMap][teamGame.GameKothOne].link" height="250" style="border-radius: 20px"></v-img>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6">
                            <h1 style="font-size: 18px; font-weight: 300; color: #2e313a">{{teamGame.GameKothTwo}}</h1>
                            <v-img :src="mapList[teamGame.GameMap][teamGame.GameKothTwo].link" height="250" style="border-radius: 20px"></v-img>
                        </div>
                        <div v-if="teamGame.GameKothThree != null" class="col-lg-4 col-md-4 col-sm-6">
                            <h1 style="font-size: 18px; font-weight: 300; color: #2e313a">{{teamGame.GameKothThree}}</h1>
                            <v-img :src="mapList[teamGame.GameMap][teamGame.GameKothThree].link" height="250" style="border-radius: 20px"></v-img>
                        </div>
                    </v-row>
                </div>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import firebase from "firebase";

    export default {
        name: "Game",
        props: ['team', 'id'],
        data() {
            return {
                teamGame: null,

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
                    'Volskaya': 'https://subswapr.fr/img/overstats/usine.jpg',
                },

                mapList: {
                        Busan: {
                            Centre: { link: 'https://subswapr.fr/img/overstats/center.jpg', name: 'Centre' },
                            Sanctuaire: { link: 'https://subswapr.fr/img/overstats/sanctu.jpg', name: 'Sanctuaire' },
                            Meka: { link: 'https://subswapr.fr/img/overstats/meka.jpg', name: 'Meka' },
                        },
                        Oasis: {
                            Centre: { link: 'https://subswapr.fr/img/overstats/ville.jpg', name: 'Centre' },
                            Jardin: { link: 'https://subswapr.fr/img/overstats/susp.jpg', name: 'Jardin' },
                            Universite: { link: 'https://subswapr.fr/img/overstats/univ.jpg', name: 'Universite' },
                        },
                        Ilios: {
                            Centre: { link: 'https://subswapr.fr/img/overstats/puit.jpg', name: 'Puit' },
                            Jardin: { link: 'https://subswapr.fr/img/overstats/phare.jpg', name: 'Phare' },
                            Universite: { link: 'https://subswapr.fr/img/overstats/ruine.jpg', name: 'Ruine' },
                        },
                        Nepal: {
                            Sanctuaire: { link: 'https://subswapr.fr/img/overstats/sanc.jpg', name: 'Sanctuaire' },
                            Autel: { link: 'https://subswapr.fr/img/overstats/autel.jpg', name: 'Autel' },
                            Village: { link: 'https://subswapr.fr/img/overstats/village.jpg', name: 'Village' },
                        },
                        Lidjiang: {
                            Marche: { link: 'https://subswapr.fr/img/overstats/marche.jpg', name: 'Marche' },
                            Jardin: { link: 'https://subswapr.fr/img/overstats/jardin.jpg', name: 'Jardin' },
                            Tour: { link: 'https://subswapr.fr/img/overstats/tour.jpg', name: 'Tour' },
                        },
                },
            }
        },
        created() {
            firebase.database().ref('teams/' + firebase.auth().currentUser.uid + '/' + this.team + '/matchs/' + this.id).once('value').then((snapshot) => {
                this.teamGame = snapshot.val();

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
        }
    }
</script>

<style scoped>

</style>
