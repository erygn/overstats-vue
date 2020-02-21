<template>
    <div>
        <p>Test</p>
        <p>{{ teamValue.compo }}</p>
        <v-btn @click="compo">Test compo</v-btn>
        <p>ConfigD {{ rand1 }}</p>
        <p>Config {{ rand2 }}</p>
<!--        <p>{{ this.teamValue.compo.LGCS10vk26dV.Compo }}</p>-->

        <v-card-text>
            <h3 class="title font-weight-light mb-2">Choix des DPS - Défense</h3>
            <v-row>
                <v-col class="d-flex" cols="6">
                    <v-select
                            v-model="configDpsOne"
                            :items="dps"
                            :label="teamValue.Players.mainDps"
                    ></v-select>
                </v-col>
                <v-col class="d-flex" cols="6">
                    <v-select
                            v-model="configDpsTwo"
                            :items="dps"
                            :label="teamValue.Players.offDps"
                    ></v-select>
                </v-col>
            </v-row>
            <h3 class="title font-weight-light mb-2">Choix des TANKS</h3>
            <v-row>
                <v-col class="d-flex" cols="6">
                    <v-select
                            v-model="configTankOne"
                            :items="tank"
                            :label="teamValue.Players.maiTank"
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

        <v-card-text>
            <h3 class="title font-weight-light mb-2">Choix des Héros - 2</h3>
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
    </div>
</template>

<script>
    import firebase from "firebase";

    export default {
        name: "tee",
        props: ["team"],
        data() {
            return {
                teamValue: null,

                dps: ['Ashe', 'Bastion', 'Dommfist', 'Genji', 'Hanzo', 'Junkrat', 'Mccree', 'Mei', 'Pharah', 'Reaper', 'Soldier 76', 'Sombra', 'Symmetra', 'Torbjorn', 'Tracer', 'Widowmaker'],
                tank: ['Dva', 'Orisa', 'Reinhardt', 'Roadhog', 'Sigma', 'Winston', 'Wrecking ball', 'Zarya'],
                heal: ['Ana', 'Baptiste', 'Brigitte', 'Lucio', 'Mercy', 'Moira', 'Zenyatta'],

                // equip: {mainDps: "Ashe", mainHeal: "Ana", mainTank: "Dva", offDps: "Ashe", offHeal: "Ana", offTank: "Dva"},

                rand1: null,
                rand2: null,

                countOne: 0,
                countTwo: 0,

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

                randomIdCompoSide1: null,
                randomIdCompoSide2: null,
            }
        },
        methods: {
            com: function () {
                let compo = this.teamValue.compo;
                if (compo) {
                    this.rand1 = 'oui';
                }
            },
            compo: function () {
              let side1 = {mainDps: this.configDpsOne, offDps: this.configDpsTwo, mainTank: this.configTankOne, offTank: this.configTankTwo, mainHeal: this.configHealOne, offHeal: this.configHealTwo};
                // let side2 = {mainDps: "Ashe", offDps: "Ashe", mainTank: "Dva", offTank: "Dva", mainHeal: "Ana", offHeal: "Ana"};
              let side2 = {mainDps: this.configDpsOneD, offDps: this.configDpsTwoD, mainTank: this.configTankOneD, offTank: this.configTankTwoD, mainHeal: this.configHealOneD, offHeal: this.configHealTwoD};
              this.randomIdCompoSide1 = this.randomID();
              this.randomIdCompoSide2 = this.randomID();

                let compo = this.teamValue.compo;
                if (compo) {
                    Object.keys(compo || {}).forEach(id => {
                        const comp = compo[id];
                        if (this.isEquivalent(side1, comp.Compo)) {
                            // this.rand1 = id;
                            this.randomIdCompoSide1 = id;
                            this.countOne += 1;
                        }
                        if (this.isEquivalent(side2, comp.Compo)) {
                            this.randomIdCompoSide2 = id;
                            this.countTwo += 1;
                        }
                    })

                    if (this.configDpsOne == this.configDpsOneD && this.configDpsTwo == this.configDpsTwoD && this.configTankOne == this.configTankOneD && this.configTankTwo == this.configTankTwoD && this.configHealOne == this.configHealOneD && this.configHealTwo == this.configHealTwoD && this.countOne == 0) {
                        this.randomIdCompoSide2 = this.randomIdCompoSide1;
                        firebase.database().ref('teams/' + firebase.auth().currentUser.uid + '/' + this.team + '/compo/' + this.randomIdCompoSide1).update({
                            Name: this.randomIdCompoSide1,
                            isFav: false,
                            Compo: {
                                mainDps: this.configDpsOne,
                                offDps: this.configDpsTwo,
                                mainTank: this.configTankOne,
                                offTank: this.configTankTwo,
                                mainHeal: this.configHealOne,
                                offHeal: this.configHealTwo,
                            }
                        })
                    } else {
                        if (this.countOne == 0) { //Le side1 n'existe pas, il faut donc le créer
                            this.rand2 = this.randomIdCompoSide1;
                            firebase.database().ref('teams/' + firebase.auth().currentUser.uid + '/' + this.team + '/compo/' + this.randomIdCompoSide1).update({
                                Name: this.randomIdCompoSide1,
                                isFav: false,
                                Compo: {
                                    mainDps: this.configDpsOne,
                                    offDps: this.configDpsTwo,
                                    mainTank: this.configTankOne,
                                    offTank: this.configTankTwo,
                                    mainHeal: this.configHealOne,
                                    offHeal: this.configHealTwo,
                                }
                            })
                        }

                        if (this.countTwo == 0) {
                            this.rand1 = this.randomIdCompoSide2;
                            firebase.database().ref('teams/' + firebase.auth().currentUser.uid + '/' + this.team + '/compo/' + this.randomIdCompoSide2).update({
                                Name: this.randomIdCompoSide2,
                                isFav: false,
                                Compo: {
                                    mainDps: this.configDpsOneD,
                                    offDps: this.configDpsTwoD,
                                    mainTank: this.configTankOneD,
                                    offTank: this.configTankTwoD,
                                    mainHeal: this.configHealOneD,
                                    offHeal: this.configHealTwoD,
                                }
                            })
                        }
                    }
                } else {
                    this.rand1 = 'Compo existe pas';
                    return;
                }

                firebase.database().ref('teams/' + firebase.auth().currentUser.uid + '/' + this.team + '/matchs/' + this.randomID()).update({
                    GameDate: new Date().toLocaleString(),
                    GameCompositionSide1: this.randomIdCompoSide1,
                    GameCompositionSide2: this.randomIdCompoSide2,
                }).then(() => {
                    this.rand1 = 'ajout'
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
            isEquivalent: function (a, b) {
                let aP = Object.getOwnPropertyNames(a);
                let bP = Object.getOwnPropertyNames(b);

                if (aP.length == bP.length) {
                    return true;
                }
                for (let i = 0; i < aP.length; i++) {
                    const pN = aP[i];

                    if (a[pN] !== b[pN]) {
                        return false;
                    }
                }
                return true;
            }
        },
        created() {
            firebase.database().ref('teams/' + firebase.auth().currentUser.uid + '/' + this.team).on('value', (snapshot) => {
                // alert(JSON.stringify(snapshot.val()))
                this.teamValue = snapshot.val()
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
