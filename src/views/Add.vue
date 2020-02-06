<template>
    <div>
        <v-container fluid style="height: 320px; background: linear-gradient(#0694cc, #075983); justify-content: center">
            <v-row justify="center" style="margin: 0px 1px; color: #FFF">
                <div class="col-sm-12 col-lg-6 col-md-12">
                    <h1 style="margin-top: 40px; font-weight: 300; margin-bottom: 10px"><router-link to="/" style="text-decoration: none"><v-btn fab x-small depressed style="background-color: transparent; color: #FFF; padding-bottom: 3px"><v-icon x-small>fa-arrow-left</v-icon></v-btn></router-link> Ajouter une équipe</h1>
                    <router-link to="/teams" style="text-decoration: none; color: #dcdcdc; border: 1px solid #00577a; border-radius: 20px; padding: 5px 20px; background-color: #00577a">Gérer ces équipes <v-icon style="margin-bottom: 2px; margin-right: -5px; color: #dcdcdc" small>mdi-settings</v-icon></router-link>
                </div>
            </v-row>
        </v-container>

        <v-container fluid style="align-items: center" class="my-5">
            <v-row align="center" style="justify-content: center">
                <div class="col-lg-6 col-sm-12 col-md-12">
                    <v-card
                            style="border-radius: 8px; padding: 18px"
                            class="overlap"
                    >
                        <v-card-title style="font-weight: 400; font-size: 24px">Overstats</v-card-title>
                        <v-card-subtitle class="pb-0">Accédez à un panel de gestion de vos équipes</v-card-subtitle>
                        <v-card-text class="text--primary">
                            <div>Utilisez les outils disponibles pour voir les points à améliorer sur votre équipe.</div>

                            <div>Gérer vos parties et ajouter des objectifs à réaliser dans les prochaines semaines</div>
                        </v-card-text>
                    </v-card>
                </div>
            </v-row>
        </v-container>


        <v-container fluid style="align-items: center" class="my-5">
            <v-row align="center" style="justify-content: center">
                <div class="col-lg-6 col-sm-12 col-md-12">
                    <v-card
                            style="border-radius: 8px; padding: 18px"
                    >
                        <v-card-title style="font-weight: 400; font-size: 24px">Définir une équipe {{ accountValues.Teams }} / {{ accountValues.Grade }}</v-card-title>
                        <v-card-subtitle class="pb-0">Définissez votre équipe</v-card-subtitle>
                        <v-card-text class="text--primary">
                            <div><v-text-field type="text" label="Nom d'équipe" prepend-icon="fa-trophy" v-model="teamName"/></div>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer/>
                            <v-btn @click="addTeam" :loading="isLoad" text>
                                Ajouter <v-icon>mdi-plus</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </div>
            </v-row>
        </v-container>

        <v-dialog
                v-model="dialog"
                width="600px"
                style="border-radius: 20px"
        >
            <v-card style="border-radius: 20px">
                <v-card-title style="background-color: #003041; color: white; font-weight: 300">
                    Maximum atteint
                    <v-spacer/>
                    <v-btn @click="dialog = !dialog" text depressed><v-icon color="#FFF">mdi-close</v-icon></v-btn>
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
                            @click="dialog = false"
                    >Fermer</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-snackbar v-model="snackbar" :timeout="3000" color="green">
            Equipe ajoutée
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
                    @click="snackbar = false"
            >
                <v-icon>mdi-close</v-icon>
            </v-btn>
        </v-snackbar>
    </div>
</template>

<script>
    import firebase from 'firebase'
    export default {
        name: "Add",
        data() {
            return {
                snackbar: false,
                dialog: false,
                isLoad: false,
                teamName: '',

                accountValues: '',

                snackbarErr: false
            }
        },
        methods: {
            addCloud: function () {
                if (this.teamName != null || this.teamName != '') {
                    const teams = {
                        TeamName: this.teamName
                    }
                    firebase.firestore().collection('teams' + '/' + firebase.auth().currentUser.uid + '/' + this.randomID()).add(teams).then(() => {
                        alert('ajouté')
                    },
                        (err) => {
                        alert(err.message);
                        })
                }
            },
            addTeam: function () {
                let long = this.teamName.length
                if (long !== 0) {
                    if (this.accountValues.Teams !== this.accountValues.Grade) {
                        this.isLoad = true;
                        this.snackbar = true;
                        firebase.database().ref('teams' + '/' + firebase.auth().currentUser.uid + '/' + this.randomID()).set({
                            TeamName: this.teamName,
                            isFav: false
                        }).then(() => {
                            firebase.database().ref('users/' + firebase.auth().currentUser.uid).update({
                                Teams: this.accountValues.Teams + 1
                            }).then(() => {
                                this.isLoad = false;
                                this.teamName = ''
                            })
                        })
                    } else {
                        this.dialog = true
                    }
                } else {
                    this.snackbarErr = true
                }
            },
            randomID: function makeid() {
                var result           = '';
                var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                var charactersLength = characters.length;
                for ( var i = 0; i < 8; i++ ) {
                    result += characters.charAt(Math.floor(Math.random() * charactersLength));
                }
                return result;
            }
        },
        created () {
            // firebase.database().ref('users/' + firebase.auth().currentUser.uid).once('value').then((snapshot) => {
            //     const val = snapshot.val();
            //     this.accountValues = val;
            // })

            firebase.database().ref('users/' + firebase.auth().currentUser.uid).on('value',  (snapshot) => {

                // alert(JSON.stringify(snapshot.val()))
                this.accountValues = snapshot.val();
            })

        },
    }
</script>

<style scoped>

</style>