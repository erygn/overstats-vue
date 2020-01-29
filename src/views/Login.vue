<template>
    <v-container fluid>
            <v-row class="row" style="height: 400px; background: linear-gradient(#0694cc, #075983);" justify="center">
<!--                <v-row justify="center">-->
<!--                    <span style="color: white; margin-top: 80px; font-weight: 200; text-transform: uppercase; font-size: 25px">Acceder à votre <span style="font-weight: 400;"> compte</span></span>-->
<!--                </v-row>-->
                    <h1 style="color: white; margin-top: 80px; font-weight: 200; text-transform: uppercase; font-size: 25px">Acceder à votre <span style="font-weight: 400;"> compte</span></h1>
            </v-row>
       <v-row justify="center" style="margin: 5px">
            <p style="margin-top: -280px; font-weight: 300; color: white; font-size: small">Connectez-vous ou inscrivez-vous</p>
           <v-card
                   style="border-radius: 8px"
                   width="900px"
                   height="280px"
                   class="mx-auto overlap"
           >
               <v-list-item three-line>
                   <v-list-item-content>
                       <v-list-item-title class="headline mb-1">Connexion</v-list-item-title>
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
                       <v-btn @click="login">Connexion</v-btn>
                       <v-list-item-subtitle style="margin-top: 10px">Pas de compte OverStats ? <router-link style="text-decoration: none" to="/register">Créer un compte</router-link></v-list-item-subtitle>
                   </v-list-item-content>
               </v-list-item>
           </v-card>
       </v-row>
        <v-divider dark class="my-12"/>
        <v-row justify="center">
            <p>Lorem ipsum</p>
        </v-row>
    </v-container>
</template>

<script>
    import firebase from 'firebase'
    export default {
        name: "Login",
        data() {
            return {
                show3: false,
                email: '',
                password: ''
            }
        },
        methods: {
            login: function() {
                firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                    () => {
                        this.$router.replace('home')
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
        margin-top: -150px;
    }
</style>