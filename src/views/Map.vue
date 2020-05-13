<template>
    <div>
        <v-container fluid>
            <v-row justify="center" style="color: #2e313a">
                <div class="col-lg-10 col-md-10 col-sm-12">
                    <h1 style="font-weight: 300; margin-top: 10px"><router-link :to="{path: '/team', query: {team: team}}" style="text-decoration: none"><v-btn style="background-color: transparent; color: #2e313a;" fab x-small depressed><v-icon>fa-angle-left</v-icon></v-btn></router-link> Map Detail</h1>
                </div>
            </v-row>
        </v-container>

        <v-container fluid>
            <v-row justify="center" style="color: #2e313a">
                <div class="col-lg-10 col-md-10 col-sm-12">
                    <v-img :src="mapIcon[id]" height="160px" style="border-radius: 20px">
                        <v-row class="fill-height" justify="center" align="center">
                            <div class="text-center">
                                <v-card-title style="color: #FFF; font-weight: 600; font-size: 48px; text-shadow: 0px 0px 6px rgba(0,0,0,0.89); margin-bottom: 3px; margin-top: 8px">{{ id }}</v-card-title>
                                <v-card-subtitle style="color: #FFF; font-weight: 400; font-size: 16px">{{ gameType }}</v-card-subtitle>
                            </div>
                        </v-row>
                    </v-img>
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
                                    </v-tabs>
                                </v-container>
                            </v-card>
                        </div>

                        <div class="col-lg-6 col-sm-12">
                            <v-card tile style="border-radius: 5px; color: #363645; font-weight: 500">
                                <v-card-title>
                                    <h1 style="margin-left: 15px; font-size: 15px; font-weight: 700; color: #2e313a">Ranked Composition Win Rate</h1>
                                </v-card-title>
                                <v-container style="height: 420px; margin-top: -20px; padding: 20px">
                                    <div style="overflow: auto; overflow-x: hidden; height: 100%">
                                        <v-row>
                                            <div class="col-12 text-center" style="margin-top: -10px; margin-bottom: -10px" v-for="comp in compo" :key="comp.compoId">
                                                <v-row>
                                                    <div class="col-6">
                                                        <h4>{{ comp.name }}</h4>
                                                        <p style="font-size: 12px; margin-bottom: 0px; margin-top: 0px">Total Win Rate <strong>{{ parseInt(((comp.winA + comp.winD) / (comp.usedA + comp.usedD)) * 100) }}%</strong></p>
                                                    </div>
                                                    <div class="col-6">
                                                        <p style="font-size: 12px; margin-bottom: 0px; margin-top: 0px"><strong>{{ comp.ratioA }}%</strong> Win Attack</p>
                                                        <p style="font-size: 12px; margin-bottom: 0px"><strong>{{ comp.ratioD }}%</strong> Win Defense</p>
                                                    </div>
                                                </v-row>
                                                <hr>
                                            </div>
                                        </v-row>
                                    </div>
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

        <v-overlay :value="overlay">
            <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>
    </div>
</template>

<script>
    import firebase from "firebase";

    export default {
        name: "Map",
        props: ['team', 'id'],
        data() {
            return {
                overlay: true,
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

                match: 0,

                matchRank: 0,
                vicRank: 0,
                defRank: 0,
                egRank: 0,
                pieDataRank: [],

                compo: {},
                compoVerif: [],

                gameType: null,

                areaChart: null,
            }
        },
        created() {
            firebase.database().ref('teams/' + this.team).once('value').then((snapshot) => {
                this.teamGame = snapshot.val();

                //Calcul de tout
                Object.keys(snapshot.val().matchs || {}).forEach(id => {
                    const match = snapshot.val().matchs[id];
                    this.match += 1;
                    if (match.GamePlay === 'Ranked' && match.GameMap == this.id) {

                        if (match.GameCompositionSide1 == match.GameCompositionSide2) {
                            // alert('Meme compo')
                            if (match.GameScoreA > match.GameScoreB ) {
                                // alert('Gagne')
                                if (!this.compoVerif.includes(match.GameCompositionSide1)) {
                                    // alert('Ajouté')
                                    if (match.GameStatus == 'Attaque') {
                                        this.compo[match.GameCompositionSide1] = {compoId: match.GameCompositionSide1, name: snapshot.val().compo[match.GameCompositionSide1].Name, usedA: 1, winA: 1, loseA: 0, ratioA: 100, usedD: 0, winD: 0, loseD: 0, ratioD: 0}
                                    } else {
                                        this.compo[match.GameCompositionSide1] = {compoId: match.GameCompositionSide1, name: snapshot.val().compo[match.GameCompositionSide1].Name, usedA: 0, winA: 0, loseA: 0, ratioA: 0, usedD: 1, winD: 1, loseD: 0, ratioD: 100}
                                    }
                                    this.compoVerif.push(match.GameCompositionSide1)
                                } else {
                                    // alert('Modifié')
                                    if (match.GameStatus == 'Attaque') {
                                        this.compo[match.GameCompositionSide1].usedA += 1;
                                        this.compo[match.GameCompositionSide1].winA += 1;
                                        this.compo[match.GameCompositionSide1].ratioA = parseInt(this.compo[match.GameCompositionSide1].winA / this.compo[match.GameCompositionSide1].usedA * 100)
                                    } else {
                                        this.compo[match.GameCompositionSide1].usedD += 1;
                                        this.compo[match.GameCompositionSide1].winD += 1;
                                        this.compo[match.GameCompositionSide1].ratioD = parseInt(this.compo[match.GameCompositionSide1].winD / this.compo[match.GameCompositionSide1].usedD * 100)
                                    }
                                }
                            } else {
                                // alert('Perdu')
                                if (!this.compoVerif.includes(match.GameCompositionSide1)) {
                                    // alert('Ajouté')
                                    if (match.GameStatus == 'Attaque') {
                                        this.compo[match.GameCompositionSide1] = {compoId: match.GameCompositionSide1, name: snapshot.val().compo[match.GameCompositionSide1].Name, usedA: 1, winA: 0, loseA: 1, ratioA: 0, usedD: 0, winD: 0, loseD: 0, ratioD: 0};
                                    } else {
                                        this.compo[match.GameCompositionSide1] = {compoId: match.GameCompositionSide1, name: snapshot.val().compo[match.GameCompositionSide1].Name, usedA: 0, winA: 0, loseA: 0, ratioA: 0, usedD: 1, winD: 0, loseD: 1, ratioD: 0};
                                    }
                                    this.compoVerif.push(match.GameCompositionSide1)
                                } else {
                                    // alert('Modifié')
                                    if (match.GameStatus == 'Attaque') {
                                        this.compo[match.GameCompositionSide1].usedA += 1;
                                        this.compo[match.GameCompositionSide1].loseA += 1;
                                        this.compo[match.GameCompositionSide1].ratioA = parseInt(this.compo[match.GameCompositionSide1].winA / this.compo[match.GameCompositionSide1].usedA * 100)
                                    } else {
                                        this.compo[match.GameCompositionSide1].usedD += 1;
                                        this.compo[match.GameCompositionSide1].loseD += 1;
                                        this.compo[match.GameCompositionSide1].ratioD = parseInt(this.compo[match.GameCompositionSide1].winD / this.compo[match.GameCompositionSide1].usedD * 100)
                                    }
                                }
                            }
                        } else {
                            // alert('Pas meme compo')
                            if (match.GameScoreA > match.GameScoreB ) {
                                // alert('Pm Gagne')
                                if (!this.compoVerif.includes(match.GameCompositionSide1)) {
                                    // alert('Pm Ajouté 1')
                                    if (match.GameStatus == 'Attaque') {
                                        this.compo[match.GameCompositionSide1] = {compoId: match.GameCompositionSide1, name: snapshot.val().compo[match.GameCompositionSide1].Name, usedA: 1, winA: 1, loseA: 0, ratioA: 100, usedD: 0, winD: 0, loseD: 0, ratioD: 0}
                                    } else {
                                        this.compo[match.GameCompositionSide1] = {compoId: match.GameCompositionSide1, name: snapshot.val().compo[match.GameCompositionSide1].Name, usedA: 0, winA: 0, loseA: 0, ratioA: 0, usedD: 1, winD: 1, loseD: 0, ratioD: 100}
                                    }
                                    this.compoVerif.push(match.GameCompositionSide1)
                                } else {
                                    // alert('Pm Modifié 1')
                                    if (match.GameStatus == 'Attaque') {
                                        this.compo[match.GameCompositionSide1].usedA += 1;
                                        this.compo[match.GameCompositionSide1].winA += 1;
                                        this.compo[match.GameCompositionSide1].ratioA = parseInt(this.compo[match.GameCompositionSide1].winA / this.compo[match.GameCompositionSide1].usedA * 100)
                                    } else {
                                        this.compo[match.GameCompositionSide1].usedD += 1;
                                        this.compo[match.GameCompositionSide1].winD += 1;
                                        this.compo[match.GameCompositionSide1].ratioD = parseInt(this.compo[match.GameCompositionSide1].winD / this.compo[match.GameCompositionSide1].usedD * 100)
                                    }
                                }
                                if (!this.compoVerif.includes(match.GameCompositionSide2)) {
                                    // alert('Pm Ajouté 2')
                                    if (match.GameStatus == 'Attaque') {
                                        this.compo[match.GameCompositionSide2] = {compoId: match.GameCompositionSide2, name: snapshot.val().compo[match.GameCompositionSide2].Name, usedA: 1, winA: 1, loseA: 0, ratioA: 100, usedD: 0, winD: 0, loseD: 0, ratioD: 0}
                                    } else {
                                        this.compo[match.GameCompositionSide2] = {compoId: match.GameCompositionSide2, name: snapshot.val().compo[match.GameCompositionSide2].Name, usedA: 0, winA: 0, loseA: 0, ratioA: 0, usedD: 1, winD: 1, loseD: 0, ratioD: 100}
                                    }
                                    this.compoVerif.push(match.GameCompositionSide2)
                                } else {
                                    // alert('Pm Modifié 2')
                                    if (match.GameStatus == 'Attaque') {
                                        this.compo[match.GameCompositionSide2].usedA += 1;
                                        this.compo[match.GameCompositionSide2].winA += 1;
                                        this.compo[match.GameCompositionSide2].ratioA = parseInt(this.compo[match.GameCompositionSide2].winA / this.compo[match.GameCompositionSide2].usedA * 100)
                                    } else {
                                        this.compo[match.GameCompositionSide2].usedD += 1;
                                        this.compo[match.GameCompositionSide2].winD += 1;
                                        this.compo[match.GameCompositionSide2].ratioD = parseInt(this.compo[match.GameCompositionSide2].winD / this.compo[match.GameCompositionSide2].usedD * 100)
                                    }
                                }
                            } else {
                                // alert('Pm Perdu')
                                if (!this.compoVerif.includes(match.GameCompositionSide1)) {
                                    // alert('Pm Ajouté 1')
                                    if (match.GameStatus == 'Attaque') {
                                        this.compo[match.GameCompositionSide1] = {compoId: match.GameCompositionSide1, name: snapshot.val().compo[match.GameCompositionSide1].Name, usedA: 1, winA: 0, loseA: 1, ratioA: 0, usedD: 0, winD: 0, loseD: 0, ratioD: 0}
                                    } else {
                                        this.compo[match.GameCompositionSide1] = {compoId: match.GameCompositionSide1, name: snapshot.val().compo[match.GameCompositionSide1].Name, usedA: 0, winA: 0, loseA: 0, ratioA: 0, usedD: 1, winD: 0, loseD: 1, ratioD: 0}
                                    }
                                    this.compoVerif.push(match.GameCompositionSide1)
                                } else {
                                    // alert('Pm Modifié 1')
                                    if (match.GameStatus == 'Attaque') {
                                        this.compo[match.GameCompositionSide1].usedA += 1;
                                        this.compo[match.GameCompositionSide1].loseA += 1;
                                        this.compo[match.GameCompositionSide1].ratioA = parseInt(this.compo[match.GameCompositionSide1].winA / this.compo[match.GameCompositionSide1].usedA * 100)
                                    } else {
                                        this.compo[match.GameCompositionSide1].usedD += 1;
                                        this.compo[match.GameCompositionSide1].loseD += 1;
                                        this.compo[match.GameCompositionSide1].ratioD = parseInt(this.compo[match.GameCompositionSide1].winD / this.compo[match.GameCompositionSide1].usedD * 100)
                                    }
                                }
                                if (!this.compoVerif.includes(match.GameCompositionSide2)) {
                                    // alert('Pm Ajouté 2')
                                    if (match.GameStatus == 'Attaque') {
                                        this.compo[match.GameCompositionSide2] = {compoId: match.GameCompositionSide2, name: snapshot.val().compo[match.GameCompositionSide2].Name, usedA: 1, winA: 0, loseA: 1, ratioA: 0, usedD: 0, winD: 0, loseD: 0, ratioD: 0}
                                    } else {
                                        this.compo[match.GameCompositionSide2] = {compoId: match.GameCompositionSide2, name: snapshot.val().compo[match.GameCompositionSide2].Name, usedA: 0, winA: 0, loseA: 0, ratioA: 0, usedD: 1, winD: 0, loseD: 1, ratioD: 0}
                                    }
                                    this.compoVerif.push(match.GameCompositionSide2)
                                } else {
                                    // alert('Pm Modifié 2')
                                    if (match.GameStatus == 'Attaque') {
                                        this.compo[match.GameCompositionSide2].usedA += 1;
                                        this.compo[match.GameCompositionSide2].loseA += 1;
                                        this.compo[match.GameCompositionSide2].ratioA = parseInt(this.compo[match.GameCompositionSide2].winA / this.compo[match.GameCompositionSide2].usedA * 100)
                                    } else {
                                        this.compo[match.GameCompositionSide2].usedD += 1;
                                        this.compo[match.GameCompositionSide2].loseD += 1;
                                        this.compo[match.GameCompositionSide2].ratioD = parseInt(this.compo[match.GameCompositionSide2].winD / this.compo[match.GameCompositionSide2].usedD * 100)
                                    }
                                }
                            }
                        }

                        if (this.gameType == null) {
                            this.gameType = match.GameType;
                        }

                        this.matchRank += 1;
                        if (match.GameScoreA > match.GameScoreB) {
                            this.vicRank += 1;
                        } else if (match.GameScoreA < match.GameScoreB) {
                            this.defRank += 1;
                        } else {
                            this.egRank += 1;
                        }
                    }
                });

                this.pieDataRank = [
                    ['Victoire', this.vicRank],
                    ['Défaite', this.defRank],
                    ['Egalité', this.egRank],
                ];

                let list = [];
                Object.keys(snapshot.val().matchs || {}).forEach(id => {
                    let match = snapshot.val().matchs[id];
                    if (match.GamePlay === 'Ranked' && match.GameMap == this.id) {
                        let ddate = match.GameDate.substring(0, 10);
                        let id = 0;
                        if (list.length === 0) {
                            list.push({used: 1, date: ddate});
                            id += 1;
                        } else {
                            list.forEach(item => {
                                if (item.date == ddate) { //Date existe
                                    item.used += 1;
                                    id += 1;
                                }
                            })
                        }
                        if (id == 0) {
                            list.push({used: 1, date: ddate});
                        }
                    }
                });

                let lets = {};

                list.forEach(item => {
                    let days = item.date.substring(0,2);
                    let mounth = item.date.substring(3, 5);
                    let years = item.date.substring(6, 10);
                    let items = mounth + '/' + days + '/' + years;
                    lets[items] = item.used;
                });

                this.areaChart = lets;
                //
                // this.pieDataQuick = [
                //     ['Victoire', this.vicQuick],
                //     ['Défaite', this.defQuick],
                //     ['Egalité', this.egQuick],
                // ];

                // //Calcul du nombre utilisation de la composition
                // Object.keys(snapshot.val().matchs || {}).forEach(id => {
                //     const match = snapshot.val().matchs[id];
                //     if (match.GameCompositionSide1 == this.id) {
                //         this.teamCalc += 1;
                //     }
                //     if (match.GameCompositionSide2 == this.id) {
                //         this.teamCalc += 1;
                //     }
                //     if (match.GameCompositionSide3 == this.id) {
                //         this.teamCalc += 1;
                //     }
                // });
            }).then(() => {
                this.overlay = false;
            })
        }
    }
</script>

<style scoped>

</style>
