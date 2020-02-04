<template>
    <div>
        <v-container fluid style="height: 420px; background: linear-gradient(#004a67, #003041); justify-content: center">
            <v-row justify="center">
                <h1 style="text-align: center; color: white; margin-top: 100px; font-weight: 200; text-transform: uppercase; font-size: 25px">Développez votre équipe</h1>
            </v-row>
            <v-row justify="center" style="margin-top: 10px">
                <h2 style="font-weight: 300; color: #FFF; font-size: 14px; margin-top: -10px; text-align: center">Utilisez Overstats pour développer vos équipes Esport</h2>
            </v-row>
            <v-row justify="center">
                <v-btn width="200" height="40" style="border-radius: 20px; margin-top: 20px" @click="dialog = !dialog">Connexion</v-btn>
            </v-row>
            <v-row justify="center" style="margin-top: 10px">
                <h2 style="font-weight: 300; color: #FFF; font-size: 14px">Pas encore de compte ?</h2>
            </v-row>
            <v-row justify="center" style="margin-top: -7px">
                <router-link style="text-decoration: none; font-size: 14px" to="/register">Créer un compte</router-link>
            </v-row>
        </v-container>

        <v-container fluid style="align-items: center" class="my-5">
            <v-row align="center" style="justify-content: center">
                <div class="col-lg-6 col-sm-12 col-md-8">
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

        <v-container fluid>
            <v-row align="center" style="justify-content: center">
                <div class="col-lg-6 col-sm-12 col-md-8">
                    <v-divider></v-divider>
                </div>
            </v-row>


            <v-row align="center" style="justify-content: center; height: 1px; margin-top: 10px">
                <div class="col-lg-6 col-sm-12 col-md-8">
                    <h2>Nouveautés sur Overstats</h2>
                </div>
            </v-row>
        </v-container>

        <v-container fluid style="align-items: center" class="my-5">
            <v-row align="center" style="justify-content: center">
                <div class="col-lg-6 col-sm-12 col-md-8">
                    <v-row align="center" style="justify-content: center">
                        <div class="col-sm-6">
                            <v-card style="border-radius: 5px" class="mx-auto">
                                <v-img
                                        class="white--text align-end"
                                        height="200px"
                                        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                                >
                                </v-img>

                                <v-card-title>Ajouter votre équipe</v-card-title>
                                <v-card-subtitle class="pb-0">Votre panel au plus proche de vous</v-card-subtitle>
                                <v-card-text class="text--primary">
                                    <div>Il est désormais possible de créer des équipes</div>

                                    <div> t de les gérer à partir de son interface</div>
                                </v-card-text>

                                <v-card-actions>
                                    <v-spacer/>
                                    <v-btn
                                            to="/add"
                                            color="grey"
                                            text
                                    >
                                        Voir <v-icon small>fa-eye</v-icon>
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </div>
                        <div class="col-sm-6">
                            <v-card style="border-radius: 5px" class="mx-auto">
                                <v-img
                                        class="white--text align-end"
                                        height="200px"
                                        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                                >
                                </v-img>

                                <v-card-title>PWA</v-card-title>
                                <v-card-subtitle class="pb-0">Votre panel au plus proche de vous</v-card-subtitle>
                                <v-card-text class="text--primary">
                                    <div>Récupérer l'application directement depuis le site</div>

                                    <div>En l'ajoutant au bureau</div>
                                </v-card-text>

                                <v-card-actions>
                                    <v-spacer/>
                                    <v-btn
                                            color="grey"
                                            text
                                    >
                                        Installer
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </div>
                    </v-row>
                </div>
            </v-row>
        </v-container>

<!--        <v-container style="align-items: center" class="my-5">-->
<!--            <v-row align="center" style="justify-content: center">-->
<!--                <div class="col-sm-6 col-lg-3">-->
<!--                    <v-card-->
<!--                            color="#004A67"-->
<!--                            dark-->
<!--                    >-->
<!--                        <v-card-title class="headline">Ajouter une équipe</v-card-title>-->

<!--                        <v-card-subtitle>Ajoutez une équipe et commencez à traiter des données.</v-card-subtitle>-->

<!--                        <v-card-actions>-->
<!--                            <v-btn @click="dialog = !dialog" text>Ajouter</v-btn>-->
<!--                        </v-card-actions>-->
<!--                    </v-card>-->
<!--                </div>-->
<!--                <div class="col-sm-6 col-lg-3">-->
<!--                    <v-card-->
<!--                            color="#003041"-->
<!--                            dark-->
<!--                    >-->
<!--                        <v-card-title class="headline">Accéder aux Stats</v-card-title>-->

<!--                        <v-card-subtitle>Regardez en un clique vos statistiques d'équipe.</v-card-subtitle>-->

<!--                        <v-card-actions>-->
<!--                            <v-btn @click="dialog = !dialog" text>Voir</v-btn>-->
<!--                        </v-card-actions>-->
<!--                    </v-card>-->
<!--                </div>-->
<!--            </v-row>-->
<!--            <v-divider dark class="my-4"/>-->
<!--            <v-row align="center" style="justify-content: center">-->
<!--                <div class="col-sm-6 col-lg-3">-->
<!--                    <v-card-->
<!--                            color="#004A67"-->
<!--                            dark-->
<!--                    >-->
<!--                        <v-card-title class="headline">Partagez votre avancée</v-card-title>-->

<!--                        <v-card-subtitle>Montrez aux autres équipes votre progression et organisez des matchs.</v-card-subtitle>-->

<!--                        <v-card-actions>-->
<!--                            <v-btn @click="dialog = !dialog" text>Partager</v-btn>-->
<!--                        </v-card-actions>-->
<!--                    </v-card>-->
<!--                </div>-->
<!--                <div class="col-sm-6 col-lg-3">-->
<!--                    <v-card-->
<!--                            color="#003041"-->
<!--                            dark-->
<!--                    >-->
<!--                        <v-card-title class="headline">Organiser des tournois</v-card-title>-->

<!--                        <v-card-subtitle>Organisez des tournois avec les équipes déjà présente sur Overstats.</v-card-subtitle>-->

<!--                        <v-card-actions>-->
<!--                            <v-btn @click="dialog = !dialog" text>Organiser</v-btn>-->
<!--                        </v-card-actions>-->
<!--                    </v-card>-->
<!--                </div>-->
<!--            </v-row>-->
<!--        </v-container>-->


        <v-container fluid>
            <v-divider dark class="my-12"/>

            <v-row justify="center" style="margin: 5px">
                <h2>Nouveautés</h2>
            </v-row>

            <v-row justify="center" style="margin: 5px">
                        <v-card
                                style="border-radius: 8px"
                                width="900px"
                                class="mx-auto"
                        >
                            <v-list-item three-line>
                                <v-list-item-content>
                                    <v-list-item-title class="headline mb-1">Un système de connexion</v-list-item-title>
                                    <v-list-item-subtitle>Utilisez votre compte pour vous connecter</v-list-item-subtitle>
                                    <v-container>
                                        <label>Votre compte vous permet d'accéder à toutes les fonctionnalités de Overstats.<br>Comme la gestion d'une équipe dans l'interface, l'ajout de match avec des données précises comme le score final.<br>Le système se gère ensuite de traiter les données et de vous rendre un visuel compréhensif.</label>
                                    </v-container>
                                    <v-list-item-subtitle style="margin-top: 10px">Pas de compte OverStats ? <router-link style="text-decoration: none" to="/register">Créer un compte</router-link></v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-card>
            </v-row>
            <v-row justify="center" style="margin: 5px">
                        <v-card
                                style="border-radius: 8px; margin-top: 50px"
                                width="900px"
                                class="mx-auto"
                        >
                            <v-list-item three-line>
                                <v-list-item-content>
                                    <v-list-item-title class="headline mb-1">Une Interface développée</v-list-item-title>
                                    <v-list-item-subtitle>Pour une meilleure utilisation</v-list-item-subtitle>
                                        <label>Notre système est basé sur la compréhension rapide et efficace de l'utilisateur pour accroîte la vitesse de traitement des données et de l'analyse</label>
                                    <v-list-item-subtitle style="margin-top: 10px">Si vous avez une suggestion, n'hésitez pas à nous le faire parvenir</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-card>
            </v-row>
        </v-container>

        <v-dialog
                v-model="dialog"
                width="600px"
        >
            <v-card>
                <v-card-title style="background-color: #003041; color: white; font-weight: 300">
                    Connexion
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
                                <v-list-item-subtitle><v-text-field color="#003041" type="text" label="Adresse mail*" prepend-icon="mdi-mail" v-model="email"/></v-list-item-subtitle>
                            </v-row>
                            <v-row
                                    align="center"
                                    class="mr-0"
                            ><v-list-item-subtitle><v-text-field
                                    color="#003041"
                                    :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                                    prepend-icon="mdi-lock"
                                    :type="show3 ? 'text' : 'password'"
                                    name="input-10-2"
                                    label="Mot de passe*"
                                    class="input-group--focused"
                                    v-model="password"
                                    @click:append="show3 = !show3"
                            /></v-list-item-subtitle>
                            </v-row>
                            <v-row align="center"
                                   class="mr-0">
                                <v-spacer/>
                                <p style="color: red">{{errorMessage}}</p>
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
                            @click="login"
                    >Connexion</v-btn>
                    <v-btn
                            style="margin-right: 5px"
                            text
                            color="#003041"
                            @click="dialog = false"
                    >Fermer</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>


        <v-divider dark class="my-12"/>

    </div>
</template>

<script>
    import firebase from 'firebase'
    export default {
        name: "Login",
        data() {
            return {
                dialog: false,

                show3: false,
                email: '',
                password: '',

                errorMessage: null,

                icons: [
                    'fab fa-facebook',
                    'fab fa-twitter',
                    'fab fa-google-plus',
                    'fab fa-linkedin',
                    'fab fa-instagram',
                ],
            }
        },
        methods: {
            login: function() {
                firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                    () => {
                        this.$router.replace('/')
                    },
                    (err) => {
                        this.errorMessage = 'Oops. ' + err.message;
                    }
                );
            }
        }
    }
</script>

<style scoped>
    .overlap {
        margin-top: -110px;
    }
</style>