<template>
    <div>
        <v-container fluid style="height: 420px; background: linear-gradient(#004a67, #003041); justify-content: center">
            <v-row justify="center">
                <h1 style="color: white; margin-top: 90px; font-weight: 200; text-transform: uppercase; font-size: 25px">Overstats</h1>
            </v-row>
            <v-row justify="center">
                <v-btn width="200" height="40" style="border-radius: 20px" @click="dialog = !dialog">Connexion</v-btn>
            </v-row>
            <v-row justify="center" style="margin-top: 10px">
                <h2 style="font-weight: 300; color: #FFF; font-size: 14px">Pas encore de compte ?</h2>
            </v-row>
            <v-row justify="center" style="margin-top: -7px">
                <router-link style="text-decoration: none; font-size: 14px" to="/register">Créer un compte</router-link>
            </v-row>
        </v-container>
        <v-container fluid>
            <v-row justify="center" style="margin: 5px">
                <v-card
                        style="border-radius: 8px; padding: 20px"
                        width="900px"
                        class="mx-auto overlap"
                >
                    <v-list-item three-line>
                        <v-list-item-content>
                            <v-list-item-title class="headline mb-1">Connexion</v-list-item-title>
                            <v-list-item-subtitle><v-text-field type="text" label="Adresse mail*" prepend-icon="mdi-mail" v-model="email"/></v-list-item-subtitle>
                            <v-list-item-subtitle><v-text-field
                                    :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                                    prepend-icon="mdi-lock"
                                    :type="show3 ? 'text' : 'password'"
                                    name="input-10-2"
                                    label="Mot de passe*"
                                    class="input-group--focused"
                                    v-model="password"
                                    @click:append="show3 = !show3"
                            /></v-list-item-subtitle>
                                <v-btn style="border-radius: 40px; padding-left: 40px; padding-right: 40px; padding-top: 5px; padding-bottom: 5px">Connexion</v-btn>
                            <v-list-item-subtitle style="margin-top: 10px">Pas de compte OverStats ? <router-link style="text-decoration: none" to="/register">Créer un compte</router-link></v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-card>
            </v-row>
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
                                    <p>Hey</p>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-container>
                    <v-card-actions>
                        <v-spacer />
                        <v-btn
                                text
                                color="#003041"
                                @click="dialog = false"
                        >Fermer</v-btn>
                        <v-btn
                                width="180"
                                height="35"
                                style="border-radius: 20px"
                                @click="login"
                        >Connexion</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-container>
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
                password: ''
            }
        },
        methods: {
            login: function() {
                firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                    () => {
                        this.$router.replace('/')
                    },
                    (err) => {
                        alert('Oops. ' + err.message)
                    }
                );
            }
        }
    }
</script>

<style scoped>
    .overlap {
        margin-top: -100px;
    }
</style>