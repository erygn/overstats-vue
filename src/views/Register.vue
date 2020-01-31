<template>
    <div>
        <v-container fluid style="height: 420px; background: linear-gradient(#0694cc, #075983); justify-content: center">
            <v-row justify="center">
                <h1 style="color: white; margin-top: 80px; font-weight: 200; text-transform: uppercase; font-size: 25px">Créer un <span style="font-weight: 400;"> compte</span></h1>
            </v-row>
            <v-row justify="center">
                <p style="font-weight: 300; color: white; font-size: small">Remplissez le formulaire pour accéder à Overstats</p>
            </v-row>
        </v-container>
        <v-container>
            <v-row justify="center" style="margin: 5px">
                <v-card
                        style="border-radius: 8px"
                        width="900px"
                        height="440px"
                        class="mx-auto overlap"
                >
                    <v-list-item three-line>
                        <v-list-item-content>
                            <v-list-item-title class="headline mb-1">Inscription</v-list-item-title>
                            <v-list-item-subtitle><v-text-field type="text" label="Pseudo" prepend-icon="mdi-account" v-model="pseudo"/></v-list-item-subtitle>
                            <v-list-item-subtitle><v-text-field type="text" label="Adresse mail" prepend-icon="mdi-mail" v-model="email"/></v-list-item-subtitle>
                            <v-list-item-subtitle><v-text-field
                                    :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                                    prepend-icon="mdi-lock"
                                    :type="show3 ? 'text' : 'password'"
                                    name="input-10-2"
                                    label="Mot de passe"
                                    class="input-group--focused"
                                    v-model="password"
                                    @click:append="show3 = !show3"
                            /></v-list-item-subtitle>
                            <v-list-item-subtitle><v-text-field
                                    :append-icon="show4 ? 'mdi-eye' : 'mdi-eye-off'"
                                    prepend-icon="mdi-lock"
                                    :type="show4 ? 'text' : 'password'"
                                    name="input-10-2"
                                    label="Confirmation du mot de passe"
                                    class="input-group--focused"
                                    v-model="password2"
                                    @click:append="show4 = !show4"
                            /></v-list-item-subtitle>
                            <v-btn @click="register">S'inscrire</v-btn>
                            <v-list-item-subtitle style="margin-top: 5px; color: #990000" v-if="errorMessage">{{ errorMessage }}</v-list-item-subtitle>
                            <v-list-item-subtitle style="margin-top: 10px">Déjà un compte OverStats ? <router-link style="text-decoration: none" to="/login">Connectez-vous</router-link></v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-card>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import firebase from 'firebase'
    export default {
        name: "Register",
        data() {
            return {
                rules: [v => v.length <= 25 || 'Max 25 characters'],

                show3: false,
                show4: false,
                pseudo: null,
                email: null,
                password: null,
                password2: null,

                errorMessage: null
            }
        },
        methods: {
            register: function() {
                if (this.pseudo != null && this.email != null && this.password != null && this.password2 != null) {
                    if (this.password == this.password2) {
                        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                            (userCredential) => {
                                firebase.database().ref('users' + '/' + userCredential.user.uid).set({
                                    Pseudo: this.pseudo,
                                    Mail: this.email,
                                    Description: 'Nouveau'
                                }).then(() => {
                                    this.$router.replace('/')
                                },
                                    (err2) => {
                                    alert(err2.message())
                                    })
                            },
                            (err) => {
                                alert('Oops. ' + err.message)
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
    .overlap {
        margin-top: -150px;
    }
</style>