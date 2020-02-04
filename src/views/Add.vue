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
                        <v-card-title style="font-weight: 400; font-size: 24px">Définir une équipe</v-card-title>
                        <v-card-subtitle class="pb-0">Définissez votre équipe</v-card-subtitle>
                        <v-card-text class="text--primary">
                            <div><v-text-field type="text" label="Nom" prepend-icon="fa-trophy" v-model="teamName"/></div>
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

        <v-snackbar v-model="snackbar" :timeout="2000">
            Equipe ajoutée
            <v-btn
                    color="grey"
                    text
                    @click="snackbar = false"
            >
                Fermer
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
                isLoad: false,
                teamName: '',
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
                    this.isLoad = true;
                    this.snackbar = true;
                    firebase.database().ref('teams' + '/' + firebase.auth().currentUser.uid + '/' + this.randomID()).set({
                        TeamName: this.teamName,
                        isFav: false
                    }).then(() => {
                        this.isLoad = false;
                    })
                } else {
                    alert('Incorrect')
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
        }
    }
</script>

<style scoped>

</style>