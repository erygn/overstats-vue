<template>
    <div>
        <v-container fluid style="height: 320px; background: linear-gradient(#0694cc, #075983); justify-content: center">
            <v-row justify="center" style="margin: 0px 1px; color: #FFF">
                <div class="col-sm-12 col-lg-6 col-md-8">
                    <h1 style="margin-top: 40px; font-weight: 300; margin-bottom: 10px"><router-link to="/" style="text-decoration: none"><v-btn fab x-small depressed style="background-color: transparent; color: #FFF; padding-bottom: 3px"><v-icon x-small>fa-arrow-left</v-icon></v-btn></router-link> Gérer vos Équipes</h1>
                    <router-link to="/add" style="text-decoration: none; color: #dcdcdc; border: 1px solid #00577a; border-radius: 20px; padding: 5px 20px; background-color: #00577a">Ajouter une équipe <v-icon style="margin-bottom: 2px; margin-right: -5px; color: #dcdcdc" small>mdi-settings</v-icon></router-link>
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
                    <h2>Vos équipes</h2>
                </div>
            </v-row>
        </v-container>

        <v-container fluid style="align-items: center" class="my-5">
            <v-row align="center" style="justify-content: center" v-for="(team, i) in teamList"
                   :key="i">
                <div class="col-lg-6 col-sm-12 col-md-8">
                            <v-card style="border-radius: 5px" class="mx-auto">
                                <v-card-title>{{ team.TeamName }}</v-card-title>
                                <v-card-subtitle class="pb-0">Courte description</v-card-subtitle>

                                <v-card-actions>
                                    <v-spacer/>
                                    <v-btn
                                            @click="deleteTeam(i)"
                                            color="red"
                                            :loading="isLoad"
                                    >
                                        Supprimer
                                    </v-btn>
                                    <v-btn :to="{path: '/team', query: {team: i}}"
                                            color="grey"
                                    >
                                        Voir <v-icon small>fa-eye</v-icon>
                                    </v-btn>
                                </v-card-actions>
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
        </v-container>
    </div>
</template>

<script>
    import firebase from "firebase";

    export default {
        name: 'Teams',
        data() {
            return {
                isLoad: false,
                teamList: [],
            }
        },
        methods: {
            deleteTeam: function (i) {
                this.isLoad = true;
                firebase.database().ref('teams/' + firebase.auth().currentUser.uid + '/' + i).remove().then(() => {
                    this.isLoad = false
                })
            }
        },
        created() {
            firebase.database().ref('teams/' + firebase.auth().currentUser.uid).on('value',  (snapshot) => {

                // alert(JSON.stringify(snapshot.val()))
                this.teamList = snapshot.val();
            })
        }
    }
</script>

<style>
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