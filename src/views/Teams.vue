<template>
    <div>
        <v-container fluid style="height: 320px; background: linear-gradient(#0694cc, #075983)">
            <v-row justify="center" style="margin: 0px 1px; color: #FFF">
                <div class="col-sm-12 col-lg-6 col-md-8">
                    <h1 style="margin-top: 40px; font-weight: 300; margin-bottom: 10px"><router-link to="/" style="text-decoration: none"><v-btn fab x-small depressed style="background-color: transparent; color: #FFF; padding-bottom: 3px"><v-icon x-small>fa-arrow-left</v-icon></v-btn></router-link> Gérer vos Équipes</h1>
                    <button @click="dialogAdd = true" style="text-decoration: none; color: #dcdcdc; border: 1px solid #00577a; border-radius: 20px; padding: 2px 20px; background-color: #00577a">Ajouter une équipe <v-icon style="margin-bottom: 2px; margin-right: -5px; color: #dcdcdc" small>mdi-plus</v-icon></button>
                </div>
            </v-row>
        </v-container>

        <v-container fluid style="align-items: center" class="my-5">
            <v-row align="center" style="justify-content: center">
                <div class="col-lg-6 col-sm-12 col-md-8">
                    <v-card
                            style="border-radius: 8px; padding: 18px"
                            class="overlap"
                    >
                        <v-card-title style="font-weight: 400; font-size: 24px">Teams Panel</v-card-title>
                        <v-card-subtitle class="pb-0">Gérer, paramètrer vos équipes à partir d'ici</v-card-subtitle>
                        <v-card-text class="text--primary">
                            <div>Utilisez les outils disponibles pour voir les points à améliorer sur votre équipe.</div>

                            <div>Gérer vos parties et ajouter des objectifs à réaliser dans les prochaines semaines</div>
                        </v-card-text>
                    </v-card>
                </div>
            </v-row>
        </v-container>

        <v-container fluid>
            <v-row align="center" style="justify-content: center">
                <div class="col-lg-6 col-sm-12 col-md-8">
                    <v-divider></v-divider>
                </div>
            </v-row>


            <v-row align="center" style="justify-content: center; height: 1px; margin-top: 10px">
                <div class="col-lg-6 col-sm-12 col-md-8">
                    <h2>Vos équipes {{ accountValues.Teams }} / {{ accountValues.Grade }}</h2>
                </div>
            </v-row>
        </v-container>

        <v-container fluid v-if="accountValues.Teams == 0">
            <v-row align="center" style="justify-content: center; height: 1px; margin-top: 10px">
                <div class="col-lg-6 col-sm-12 col-md-8">
                    <p>Vous ne possedez pas encore d'équipe, merci d'en ajouter. <button @click="dialogAdd = true" style="text-decoration: none; color: #039be5">Ajouter une équipe <v-icon style="margin-bottom: 2px; margin-right: -5px; color: #dcdcdc" small>mdi-plus</v-icon></button></p>
                </div>
            </v-row>
        </v-container>

        <v-container fluid style="align-items: center" class="my-5">
            <v-row align="center" style="justify-content: center" v-for="(team, i) in teamList"
                   :key="i">
                <div class="col-lg-6 col-sm-12 col-md-8">
                            <v-card style="border-radius: 5px" class="mx-auto">
                                <v-card-title>{{ team.TeamName }} <v-icon style="margin-left: 6px" small v-if="!team.isFav">fa-star</v-icon><v-icon style="margin-left: 6px" small v-if="team.isFav" color="yellow">fa-star</v-icon></v-card-title>
                                <v-card-subtitle class="pb-0">{{ team.Description }}</v-card-subtitle>

                                <v-card-actions>
                                    <v-spacer/>
                                    <v-btn
                                            depressed
                                            :loading="isLoad"
                                            color="red"
                                            width="150"
                                            height="35"
                                            style="border-radius: 20px; color: #FFF"
                                            @click="openDelete(i)"
                                    >Supprimer</v-btn>
                                    <v-btn :to="{path: '/team', query: {team: i}}"
                                            color="grey"
                                           depressed
                                           width="100"
                                           height="35"
                                           style="border-radius: 20px; color: #FFF; justify-content: space-evenly"
                                    >
                                        Voir <v-icon small>fa-eye</v-icon>
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                </div>
            </v-row>
        </v-container>

        <v-dialog
                v-model="dialogErr"
                width="600px"
                content-class="dialogBorder"
        >
            <v-card>
                <v-card-title class="cardTitle" style="font-weight: 300">
                    Maximum atteint
                    <v-spacer/>
                    <v-btn @click="dialogErr = !dialogErr" text depressed><v-icon color="#FFF">mdi-close</v-icon></v-btn>
                </v-card-title>
                <v-container>
                    <v-row class="mx-2">
                        <v-col class="align-center justify-space-between" cols="12">
                            <v-row align="center" class="mr-0">
                                <v-alert type="error" text>
                                    Attention votre grade actuel ne vous permet pas de réaliser cette action
                                </v-alert>
                            </v-row>
                            <v-row align="center" class="mr-0">
                                Vous avez atteint le nombre d'équipe maximum pour votre grade actuel. Pour pouvoir ajouter d'autres équipes en plus, merci de choisir une offre supérieure
                            </v-row>
                        </v-col>
                    </v-row>
                </v-container>
                <v-card-actions>
                    <v-spacer />
                    <v-btn
                            depressed
                            color="grey"
                            width="150"
                            height="35"
                            style="border-radius: 20px; color: #FFF"
                            @click="dialogErr = false"
                    >Fermer</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-dialog
                v-model="dialog"
                width="600px"
                content-class="dialogBorder"
        >
            <v-card>
                <v-card-title class="cardTitle" style="font-weight: 300">
                    Supprimer une équipe
                    <v-spacer/>
                    <v-btn @click="dialog = !dialog" text depressed><v-icon color="#FFF">mdi-close</v-icon></v-btn>
                </v-card-title>
                <v-container>
                    <v-row class="mx-2">
                        <v-col class="align-center justify-space-between" cols="12">
                            <v-row align="center" class="mr-0">
                                <v-alert type="error" text>
                                    Attention cette action est irréversible
                                </v-alert>
                            </v-row>
                            <v-row align="center" class="mr-0">
                                Vous êtes sur le point de supprimer une équipe de votre catalogue, celle-ci sera supprimée ainsi que toutes les données qu'elle contenait
                            </v-row>
                            <v-row align="center"
                                   class="mr-0">
                                <v-spacer/>
                                <p style="font-size: 12px">ID d'équipe : {{ dialogID }}</p>
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
                            color="red"
                            width="150"
                            height="35"
                            style="border-radius: 20px; color: #FFF"
                            @click="deleteTeam(dialogID)"
                    >Supprimer</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-dialog
                v-model="dialogAdd"
                width="600px"
                content-class="dialogBorder"
        >
            <v-card>
                <v-card-title class="cardTitle" style="font-weight: 300">
                    Ajouter une équipe
                    <v-spacer/>
                    <v-btn @click="dialogAdd = !dialogAdd" text depressed><v-icon color="#FFF">mdi-close</v-icon></v-btn>
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
                                <v-list-item-subtitle>Définissez le nom de votre équipe</v-list-item-subtitle>
                                <v-list-item-subtitle><v-text-field color="#003041" type="text" label="Nom d'équipe" prepend-icon="mdi-trophy" v-model="teamName"/></v-list-item-subtitle>
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
                            @click="addTeam"
                            :loading="isLoadAdd"
                    >Ajouter <v-icon>mdi-plus</v-icon></v-btn>
                    <v-btn
                            style="margin-right: 5px"
                            text
                            color="#003041"
                            @click="dialogAdd = false"
                    >Fermer</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-snackbar v-model="snackbarAddVal" :timeout="3000" color="green">
            Equipe ajoutée
            <v-btn
                    color="white"
                    text
                    icon
                    @click="snackbarAddVal = false"
            >
                <v-icon>mdi-close</v-icon>
            </v-btn>
        </v-snackbar>

        <v-snackbar v-model="snackbar" color="red" :timeout="2000">
            Equipe supprimée
                        <v-btn
                                color="white"
                                text
                                icon
                                @click="snackbar = false"
                        >
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
        </v-snackbar>

        <v-snackbar v-model="snackbarErr" :timeout="3000" color="red">
            Veuillez remplir le champ Nom d'équipe
            <v-btn
                    color="white"
                    text
                    icon
                    @click="snackbarErr = false"
            >
                <v-icon>mdi-close</v-icon>
            </v-btn>
        </v-snackbar>
    </div>
</template>

<script>
    import firebase from "firebase";

    export default {
        name: 'Teams',
        data() {
            return {
                isLoad: false,
                isLoadAdd: false,
                teamList: [],

                teamName: '',

                snackbar: false,
                snackbarAddVal: false,
                snackbarErr: false,

                accountValues: '',

                dialog: false,
                dialogAdd: false,
                dialogID: null,
                dialogErr: false,
            }
        },
        methods: {
            openDelete: function(i) {
                this.dialog = true;
                this.dialogID = i;
            },
            deleteTeam: function (i) {
                this.isLoad = true;
                firebase.database().ref('teams/' + firebase.auth().currentUser.uid + '/' + i).remove().then(() => {
                    firebase.database().ref('users/' + firebase.auth().currentUser.uid).update({
                        Teams: this.accountValues.Teams - 1
                    }).then(() => {
                        this.isLoad = false
                        this.dialog = false
                        this.snackbar = true
                    })
                })
            },
            addTeam: function () {
                let long = this.teamName.length
                if (long !== 0) {
                    if (this.accountValues.Teams !== this.accountValues.Grade) {
                        this.isLoadAdd = true;
                        firebase.database().ref('teams' + '/' + firebase.auth().currentUser.uid + '/' + this.randomID()).set({
                            TeamName: this.teamName,
                            Description: "Description par défaut",
                            isFav: false,
                            compo: true,
                            Players: {
                                mainTank: 'MainTank',
                                offTank: 'OffTank',
                                mainDps: 'MainDps',
                                offDps: 'OffDps',
                                mainHeal: 'MainHeal',
                                offHeal: 'OffHeal'
                            }
                        }).then(() => {
                            firebase.database().ref('users/' + firebase.auth().currentUser.uid).update({
                                Teams: this.accountValues.Teams + 1
                            }).then(() => {
                                this.dialogAdd = false
                                this.isLoadAdd = false;
                                this.teamName = '';
                                this.snackbarAddVal = true;
                            })
                        })
                    } else {
                        this.dialogAdd = false
                        this.dialogErr = true
                        this.teamName = ''
                    }
                } else {
                    this.dialogAdd = false
                    this.snackbarErr = true
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
            }
        },
        created() {
            firebase.database().ref('teams/' + firebase.auth().currentUser.uid).on('value',  (snapshot) => {

                // alert(JSON.stringify(snapshot.val()))
                this.teamList = snapshot.val();
            })

            firebase.database().ref('users/' + firebase.auth().currentUser.uid).on('value',  (snapshot) => {

                // alert(JSON.stringify(snapshot.val()))
                this.accountValues = snapshot.val();
            })
        }
    }
</script>

<style>
    @import "./../assets/styles.css";
    h1 {
        font-weight: 500;
    }
    h2 {
        font-weight: 300;
        padding-bottom: 5px;
    }
    a {
        text-decoration: none;
    }

    .overlap {
        margin-top: -120px;
    }
</style>
