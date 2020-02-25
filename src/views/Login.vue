<template>
    <div style="background-color: #f4f7fc">
        <v-container fluid>
            <v-row justify="center">
                <div class="col-lg-10 col-md-10 col-sm-12 text-center">
                    <h1 style="font-size: 22px; font-weight: 700; text-transform: uppercase; font-size: 25px; color: #2d3039; margin-top: 80px">Développez votre équipe</h1>
                    <h2 style="font-weight: 300; font-size: 14px; color: #2d3039">Utilisez Overstats pour développer vos équipes Esport</h2>
                    <v-btn width="200" elevation="1" tile height="40" style="border-radius: 5px; margin-top: 20px; background-color: #FFF; color: #2d3039; text-transform: initial" @click="dialog = !dialog">Connexion</v-btn>
                    <h2 style="font-weight: 300; color: #2d3039; font-size: 14px; margin-top: 10px">Pas encore de compte ?</h2>
                    <button @click="dialogRegister = !dialogRegister" style="font-size: 14px; color: #0084fd">Créer un compte</button>
                </div>
            </v-row>
        </v-container>

        <v-container fluid>
            <v-row justify="center">
                <div class="col-lg-10 col-md-10 col-sm-12 text-center">
                    <h2 style="font-weight: 300; font-size: 20px; color: red; margin-bottom: -60px">Attention, système en cours de développement <v-icon color="red">mdi-alert</v-icon></h2>
                </div>
            </v-row>
        </v-container>

        <v-container fluid style="align-items: center" class="my-5">
            <v-row align="center" style="justify-content: center">
                <div class="col-lg-6 col-sm-12 col-md-8">
                    <v-card
                            elevation="1"
                            style="border-radius: 5px; padding: 18px"
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
            <v-card tile style="border-radius: 5px; background-color: #FFF; color: #2d3039;">
                <v-card-title style="font-size: 17px; font-weight: 400; border-bottom: 2px solid #d5d8dd">
                    <span style="margin-left: 10px;">Connexion</span>
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
                                <v-list-item-subtitle><v-text-field color="#69697f" type="text" label="Adresse mail*" prepend-icon="mdi-mail" v-model="email"/></v-list-item-subtitle>
                            </v-row>
                            <v-row
                                    align="center"
                                    class="mr-0"
                            ><v-list-item-subtitle><v-text-field
                                    color="#69697f"
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
                            elevation="1" tile style="border-radius: 5px; background-color: #FFF; color: #2d3039; text-transform: initial"
                            @click="login"
                    >Connexion</v-btn>
                    <v-btn
                            style="margin-right: 5px; text-transform: initial"
                            text
                            color="#003041"
                            @click="dialog = false"
                    >Fermer</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>


        <v-dialog
                v-model="dialogRegister"
                width="600px"
        >
            <v-card tile style="border-radius: 5px; background-color: #FFF; color: #2d3039;">
                <v-card-title style="font-size: 17px; font-weight: 400; background-color: #2d3039; color: #FFF">
                    <span style="margin-left: 10px;">Inscription</span>
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
                                <v-list-item-subtitle><v-text-field color="#69697f" type="text" label="Pseudo*" prepend-icon="mdi-account" v-model="pseudo"/></v-list-item-subtitle>
                                <v-list-item-subtitle><v-text-field color="#69697f" type="text" label="Adresse mail*" prepend-icon="mdi-mail" v-model="email"/></v-list-item-subtitle>
                                <v-list-item-subtitle><v-text-field
                                        color="#69697f"
                                        :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                                        prepend-icon="mdi-lock"
                                        :type="show3 ? 'text' : 'password'"
                                        name="input-10-2"
                                        label="Mot de passe*"
                                        class="input-group--focused"
                                        :rules="rules" counter
                                        v-model="password"
                                        @click:append="show3 = !show3"
                                /></v-list-item-subtitle>
                                <v-list-item-subtitle><v-text-field
                                        color="#69697f"
                                        :append-icon="show4 ? 'mdi-eye' : 'mdi-eye-off'"
                                        prepend-icon="mdi-lock"
                                        :type="show4 ? 'text' : 'password'"
                                        name="input-10-2"
                                        label="Confirmation du mot de passe*"
                                        :rules="rules" counter
                                        class="input-group--focused"
                                        v-model="password2"
                                        @click:append="show4 = !show4"
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
                            elevation="1" tile style="border-radius: 5px; background-color: #FFF; color: #2d3039; text-transform: initial"
                            @click="register"
                    >Inscription</v-btn>
                    <v-btn
                            style="margin-right: 5px; text-transform: initial"
                            text
                            color="#003041"
                            @click="dialogRegister = false"
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
                rules: [v => v.length > 5],

                show4: false,
                pseudo: null,
                password2: null,

                dialogRegister: false,
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
            },
            register: function() {
                if (this.pseudo != null && this.email != null && this.password != null && this.password2 != null) {
                    if (this.password == this.password2) {
                        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                            (userCredential) => {
                                firebase.database().ref('users' + '/' + userCredential.user.uid).set({
                                    Pseudo: this.pseudo,
                                    Mail: this.email,
                                    Teams: 0,
                                    Description: 'Nouveau',
                                    Grade: 1,
                                    isRole: false,
                                    roleId: false,
                                    InscriptionDate: new Date().toLocaleString(),
                                }).then(() => {
                                        this.$router.replace('/')
                                    },
                                    (err2) => {
                                        alert(err2.message())
                                    })
                            },
                            (err) => {
                                this.errorMessage = err.message;
                            }
                        );
                    } else {
                        this.errorMessage = 'Les mots de passe ne correspondent pas';
                    }
                } else {
                    this.errorMessage = 'Veuillez completer tous les champs';
                }
            }
        }
    }
</script>

<style scoped>

</style>
