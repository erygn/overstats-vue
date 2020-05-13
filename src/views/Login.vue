<template>
    <div style="background-color: #FFFFFF" id="top">

        <v-app-bar
                app
                flat
                style="background-color: #FFFFFF"
        >
            <!--            <v-app-bar-nav-icon v-if="!drawer" @click.stop="openDrawer" />-->
            <v-row justify="center">
                <div class="col-lg-10 col-sm-12">
                    <v-row style="padding-left: 16px; padding-right: 16px">
                        <v-toolbar-title class="text-uppercase" style="margin-top: 2px">
                            <router-link to="/login" style="color: #0e0f17">
                                <span class="font-weight-light">Over</span>
                                <span>Stats</span>
                            </router-link>
                        </v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-btn style="text-transform: initial" text @click="dialog = !dialog">Connexion</v-btn>
                    </v-row>
                </div>
            </v-row>
        </v-app-bar>

        <v-container fluid style="background: linear-gradient(#000a16, #092139);">
            <v-row justify="center">
                <div class="col-lg-8 col-md-10 col-sm-12 text-center">
                    <transition name="fade" appear >
                        <v-row justify="center">
                            <div class="col-12 text-center">
                                <h1 style="font-weight: 700; text-transform: uppercase; font-size: 43px; color: #EFEBEE; margin-top: 60px; letter-spacing: 5px">Améliorez votre équipe</h1>
                                <h2 style="font-weight: 300; font-size: 14px; color: #EFEBEE">Avec Overstats, trouvez les faiblesses de votre équipe<br> et améliorez-les</h2>
                                <h2 style="font-weight: 700; font-size: 12px; color: #EFEBEE; margin-top: 20px">Es-tu prêt ?</h2>
                                <v-btn width="200" elevation="0" tile height="50" style="border-radius: 25px; margin-top: 20px; background-color: #385982; color: #EFEBEE; text-transform: initial" @click="scrollTo('reg')">C'est parti !</v-btn>
                                <p style="margin-bottom: 80px; color: #EFEBEE; margin-top: 20px; font-size: 14px; cursor: pointer" @click="dialog = !dialog"><span style="color: #039be5">Connexion</span></p>
                            </div>
                            <!--                            <div class="col-6" style="margin-top: 30px; background-image: url(https://subswapr.fr/img/overstats/tra.png); background-repeat: no-repeat; background-size: cover">-->
                            <!--&lt;!&ndash;                                <v-img src="https://subswapr.fr/img/overstats/tra.png" />&ndash;&gt;-->
                            <!--                            </div>-->
                        </v-row>
                    </transition>
                </div>
            </v-row>
        </v-container>

        <v-container fluid style="background-color: #F7F7F7">
            <v-row justify="center">
                <div class="col-lg-8 col-md-10 col-sm-12 text-center" style="margin-bottom: 60px;">
                    <div class="row">
                        <div class="col-12">
                            <h1 style="margin-top: 80px; font-size: 35px; font-weight: bold">Qu'est ce qu'Overstats ?</h1>
                            <h2 style="font-size: 18px; margin-bottom: 50px">Suivez les statistiques de votre équipe Overwatch</h2>
                        </div>
                    </div>

                    <div class="row justify-center">
                        <div class="col-lg-4 col-md-4 col-sm-6 text-center bordT">
                            <v-icon large style="margin-bottom: 20px">mdi-account-plus</v-icon>
                            <h2 style="font-weight: bold">1. Créer un compte</h2>
                            <p>Pour votre équipe</p>
                        </div>

                        <div class="col-lg-4 col-md-4 col-sm-6 text-center bordT">
                            <v-icon large style="margin-bottom: 20px">mdi-keyboard</v-icon>
                            <h2 style="font-weight: bold">2. Entrer des données</h2>
                            <p>De vos parties Overwatch</p>
                        </div>

                        <div class="col-lg-4 col-md-4 col-sm-6 text-center bordT">
                            <v-icon large style="margin-bottom: 20px">mdi-chart-arc</v-icon>
                            <h2 style="font-weight: bold">3. Regarder les résultats</h2>
                            <p>de votre équipe et analyser les</p>
                        </div>

                        <div class="col-lg-4 col-md-4 col-sm-6 text-center bordT">
                            <v-icon large style="margin-bottom: 20px">mdi-trending-up</v-icon>
                            <h2 style="font-weight: bold">4. Progresser sur le jeu</h2>
                            <p>grâce aux statistiques générées par OverStats</p>
                        </div>
                    </div>
                </div>
            </v-row>
        </v-container>

        <v-container fluid id="reg">
            <v-row justify="center">
                <div class="col-lg-8 col-md-10 col-sm-12 text-center">
                    <div class="row">
                        <div class="col-12">
                            <h1 style="margin-top: 80px; font-size: 35px; font-weight: bold">Nous rejoindre ?</h1>
                            <h2 style="font-size: 18px">Choississez votre status</h2>
                        </div>
                    </div>

                    <div class="row justify-center">
                        <div class="col-lg-4 col-md-4 col-sm-6">
                            <v-card tile elevation="1" style="border-radius: 25px; color: #092139; font-weight: 500; border: 1px solid #dde2ee">
                                <v-container>
                                    <v-row justify="center">
                                        <div class="text-center">
                                            <v-icon style="margin-top: 20px; background-color: 	#e5f3fe; color: #0382ff; padding: 10px; border-radius: 40px" large>mdi-gamepad-variant</v-icon>
                                            <h2 style="margin-top: 12px; color: #2d3039; font-size: 40px; font-weight: 600">Joueur</h2>
                                            <h3 style="color: #616777; font-weight: 600">Gratuit</h3>
                                            <br>
                                            <p style="color: #2d3039; font-size: 18px; font-weight: bold">Les possibilités</p>
                                            <p style="color: #768185; font-size: 15px"><v-icon color="green" style="margin-top: -2px; margin-right: 2px">mdi-check</v-icon>Rejoindre des équipes</p>
                                            <p style="color: #768185; font-size: 15px; margin-top: -10px"><v-icon color="green" style="margin-top: -2px; margin-right: 2px">mdi-check</v-icon>Voir les stats</p>
                                            <p style="color: #768185; font-size: 15px; margin-top: -10px"><v-icon color="green" style="margin-top: -2px; margin-right: 2px">mdi-check</v-icon>Ajouter des commentaires</p>

                                            <v-btn width="200" elevation="0" tile height="50" style="border-radius: 25px; margin-top: 40px; background-color: #2d3039; color: #EFEBEE; text-transform: initial; margin-bottom: 20px" @click="dialogRegister = !dialogRegister">Go Player</v-btn>
                                        </div>
                                    </v-row>
                                </v-container>
                            </v-card>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6">
                            <v-card tile elevation="1" style="border-radius: 25px; color: #092139; font-weight: 500; border: 1px solid #dde2ee">
                                <v-container>
                                    <v-row justify="center">
                                        <div class="text-center">
                                            <v-icon style="margin-top: 20px; background-color: 	#e5f3fe; color: #0382ff; padding: 10px; border-radius: 40px" large>mdi-chart-donut</v-icon>
                                            <h2 style="margin-top: 12px; color: #2d3039; font-size: 40px; font-weight: 600">Coach</h2>
                                            <h3 style="color: #616777; font-weight: 600">1.99€/Mois</h3>
                                            <h3 style="color: #616777; font-weight: 300; font-size: 12px">ou  19.99€ à vie</h3>
                                            <br>
                                            <p style="color: #2d3039; font-size: 18px; font-weight: bold">Les possibilités</p>
                                            <p style="color: #768185; font-size: 15px"><v-icon color="green" style="margin-top: -2px; margin-right: 2px">mdi-check</v-icon>Créer des équipes</p>
                                            <p style="color: #768185; font-size: 15px; margin-top: -10px"><v-icon color="green" style="margin-top: -2px; margin-right: 2px">mdi-check</v-icon>Gérer ces équipes</p>
                                            <p style="color: #768185; font-size: 15px; margin-top: -10px"><v-icon color="green" style="margin-top: -2px; margin-right: 2px">mdi-check</v-icon>Ajouter des matchs</p>
                                            <p style="color: #768185; font-size: 15px; margin-top: -10px"><v-icon color="green" style="margin-top: -2px; margin-right: 2px">mdi-check</v-icon>Gérer les joueurs</p>
                                            <p style="color: #768185; font-size: 15px; margin-top: -10px">...</p>
                                            <p style="color: #768185; font-size: 15px; margin-top: -10px"><v-icon color="grey" style="margin-top: -2px; margin-right: 2px">mdi-plus</v-icon> les possibilités Joueur</p>

                                            <v-btn width="200" elevation="0" tile height="50" style="border-radius: 25px; margin-top: 40px; background-color: #2d3039; color: #EFEBEE; text-transform: initial; margin-bottom: 20px" @click="dialogRegisterC = !dialogRegisterC">Go Coach</v-btn>
                                        </div>
                                    </v-row>
                                </v-container>
                            </v-card>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6">
                            <v-card tile elevation="1" style="border-radius: 25px; color: #092139; font-weight: 500; border: 1px solid #dde2ee">
                                <v-container>
                                    <v-row justify="center">
                                        <div class="text-center">
                                            <v-icon style="margin-top: 20px; background-color: 	#e5f3fe; color: #0382ff; padding: 12px; border-radius: 40px" large>mdi-discord</v-icon>
                                            <h2 style="margin-top: 12px; color: #2d3039; font-size: 40px; font-weight: 600">EQB</h2>
                                            <h3 style="color: #616777; font-weight: 600">Gratuit</h3>
                                            <br>
                                            <p style="color: #2d3039; font-size: 18px; font-weight: bold">Les possibilités</p>
                                            <p style="color: #768185; font-size: 15px">Joueur // Coach</p>

                                            <p style="color: #2d3039; font-size: 18px; font-weight: bold">Conditions</p>
                                            <p style="color: #768185; font-size: 15px"><v-icon color="green" style="margin-top: -2px; margin-right: 2px">mdi-check</v-icon>Équipe sur EQB</p>

                                            <v-btn width="200" elevation="0" tile height="50" style="border-radius: 25px; margin-top: 40px; background-color: #2d3039; color: #EFEBEE; text-transform: initial; margin-bottom: 20px">Go EQB</v-btn>
                                        </div>
                                    </v-row>
                                </v-container>
                            </v-card>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12">
                            <h2 style="margin-top: 60px; font-size: 20px; font-weight: bold">Déjà un compte ?</h2>
                            <h2 @click="dialog = !dialog" style="font-size: 14px; margin-top: -6px; color: #0084fd; cursor: pointer">Connexion</h2>
                        </div>
                    </div>
                </div>
            </v-row>
        </v-container>

        <v-container fluid style="background: linear-gradient(#000a16, #092139);">
            <v-row justify="center" style="height: 1px; margin-top: 60px; margin-bottom: 80px; color: #EFEBEE">
                <div class="col-lg-10 col-sm-12 col-md-8 text-center">
                    <h2>Nouveautés sur Overstats</h2>
                </div>
            </v-row>

            <v-row justify="center">
                <div class="col-lg-8 col-md-10 col-sm-12 text-center">
                    <v-row justify="center">
                        <div class="col-sm-5">
                            <v-card style="border-radius: 5px" class="mx-auto text-left">
                                <v-img
                                        class="white--text align-end"
                                        height="200px"
                                        src="https://subswapr.fr/img/overstats/busan.jpg"
                                >
                                </v-img>

                                <v-card-title>Le KOTH</v-card-title>
                                <v-card-subtitle class="pb-0">Les matchs KOTH sont disponibles</v-card-subtitle>
                                <v-card-text class="text--primary">
                                    <div>L'ajout de matchs KOTH est désormais possible !<br> Vous pouvez gérer les différents cas qui peuvent être  rencontrés durant une partie.</div>

                                    <div>Mais également utiliser vos compositions favorites pour remplir votre feuille de match plus rapidement</div>
                                </v-card-text>
                            </v-card>
                        </div>
                        <div class="col-sm-5">
                            <v-card style="border-radius: 5px" class="mx-auto text-left">
                                <v-img
                                        class="white--text align-end"
                                        height="200px"
                                        src="https://subswapr.fr/img/overstats/row.jpg"
                                >
                                </v-img>

                                <v-card-title>Fav Composition</v-card-title>
                                <v-card-subtitle class="pb-0">Ajouter rapidement des matchs</v-card-subtitle>
                                <v-card-text class="text--primary">
                                    <div>Un composition dans votre équipe revient souvent ?<br>Vous pouvez désormais ajouter votre composition comme un modèle qui peut être appliquer en un seul clique lors de l'ajout d'un match</div>

                                    <div>Plus facile et rapide à utiliser</div>
                                </v-card-text>
                            </v-card>
                        </div>
                    </v-row>
                </div>
            </v-row>
            <br>
            <br>
            <br>
        </v-container>

        <v-container fluid style="background-color: #000a16; color: #EFEBEE">
            <v-row justify="center">
                <div class="col-lg-8 col-md-10 col-sm-12 text-center">
                    <div class="row">
                        <div class="col-12">
                            <v-btn text @click="scrollTo('top')"><v-icon color="#EFEBEE">fa-angle-up</v-icon></v-btn>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12">
                            <h1 style="font-size: 18px; font-weight: bold">Overstats</h1>
                            <h2 style="font-size: 11px">Statistiques</h2>
                            <h2 style="font-size: 11px">Create by <a target="_blank" href="https://genesis-mc.fr">Genesis</a> // 2020</h2>
                        </div>
                    </div>
                </div>
            </v-row>
        </v-container>

        <v-dialog
                v-model="dialog"
                width="600px"
        >
            <v-card tile style="background-color: #FFF; color: #2d3039;">
                <v-card-title style="font-size: 22px; font-weight: 400">
                    <v-spacer/>
                    <span style="margin-top: 20px; margin-bottom: 10px">Connexion</span>
                    <v-spacer/>
<!--                    <v-btn @click="dialog = !dialog" text depressed><v-icon color="#2d3039">mdi-close</v-icon></v-btn>-->
                </v-card-title>
                <v-container>
                    <v-row justify="center" class="row text-center mx-2">
                        <div class="col-sm-12 col-lg-8">
                            <v-text-field color="#69697f" prepend-icon="mdi-account" type="email" label="Mail*" v-model="email"/>
                            <v-text-field
                                    color="#69697f"
                                    :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                                    :type="show3 ? 'text' : 'password'"
                                    label="Mot de passe*"
                                    prepend-icon="mdi-lock"
                                    class="input-group--focused"
                                    v-model="password"
                                    @click:append="show3 = !show3"
                            />
                            <div class="text-right">
                                <p style="color: cornflowerblue; font-size: 12px; cursor: pointer;">Mot de passe oublié</p>
                            </div>
                            <p style="color: red; font-size: 12px">{{errorMessage}}</p>

                            <v-btn
                                    width="200"
                                    height="50"
                                    :loading="registJ"
                                    elevation="1" tile style="border-radius: 25px; background-color: #2d3039; color: #EFEBEE; text-transform: initial; margin-top: 30px"
                                    @click="login"
                            >Connexion</v-btn>
                            <p style="color: cornflowerblue; font-size: 12px; cursor: pointer; margin-top: 20px" @click="notRegister">Pas de compte ?</p>
                        </div>
                    </v-row>
                </v-container>
            </v-card>
        </v-dialog>


        <v-dialog
                v-model="dialogRegister"
                width="600px"
        >
            <v-card tile style="border-radius: 5px; background-color: #2d3039; color: #EFEBEE;">
                <v-card-title style="font-size: 22px; font-weight: 400">
                    <v-spacer/>
                    <span style="margin-top: 20px; margin-bottom: 10px">Devenir un Joueur</span>
                    <v-spacer/>
                    <!--                    <v-btn @click="dialog = !dialog" text depressed><v-icon color="#2d3039">mdi-close</v-icon></v-btn>-->
                </v-card-title>
                <v-container>
                    <v-row justify="center" class="row text-center mx-2">
                        <div class="col-sm-12 col-lg-8">
                            <v-text-field color="#EFEBEE" dark type="text" label="Pseudo*" prepend-icon="mdi-account" v-model="pseudo"/>
                            <v-text-field color="#EFEBEE" prepend-icon="mdi-mail" dark type="email" label="Mail*" v-model="email"/>
                            <v-text-field
                                    dark
                                    color="#EFEBEE"
                                    :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                                    prepend-icon="mdi-lock"
                                    :type="show3 ? 'text' : 'password'"
                                    name="input-10-2"
                                    label="Mot de passe*"
                                    class="input-group--focused"
                                    :rules="rules" counter
                                    v-model="password"
                                    @click:append="show3 = !show3"
                            />
                            <v-text-field
                                    dark
                                    color="#EFEBEE"
                                    :append-icon="show4 ? 'mdi-eye' : 'mdi-eye-off'"
                                    prepend-icon="mdi-lock"
                                    :type="show4 ? 'text' : 'password'"
                                    name="input-10-2"
                                    label="Confirmer le mot de passe*"
                                    :rules="rules" counter
                                    class="input-group--focused"
                                    v-model="password2"
                                    @click:append="show4 = !show4"
                            />
                            <v-checkbox
                                    dark
                                    v-model="checkbox"
                                    color="#EFEBEE"
                                    label="J'accepte les conditions d'OverStats"
                            ></v-checkbox>
                            <p style="color: red; font-size: 12px">{{errorMessage}}</p>

                            <v-btn
                                    width="200"
                                    height="50"
                                    :loading="registJ"
                                    elevation="1" tile style="border-radius: 25px; background-color: #EFEBEE; color: #2d3039; text-transform: initial; margin-top: 30px; margin-bottom: 20px"
                                    @click="register(1)"
                            >S'inscrire</v-btn>
                        </div>
                    </v-row>
                </v-container>
            </v-card>
        </v-dialog>


        <v-dialog
                v-model="dialogRegisterC"
                width="600px"
        >
            <v-card tile style="border-radius: 5px; background-color: #2d3039; color: #EFEBEE;">
                <v-card-title style="font-size: 22px; font-weight: 400">
                    <v-spacer/>
                    <span style="margin-top: 20px; margin-bottom: 10px">Devenir un Coach</span>
                    <v-spacer/>
                    <!--                    <v-btn @click="dialog = !dialog" text depressed><v-icon color="#2d3039">mdi-close</v-icon></v-btn>-->
                </v-card-title>
                <v-container>
                    <v-row justify="center" class="row text-center mx-2">
                        <div class="col-sm-12 col-lg-8">
                            <v-text-field color="#EFEBEE" type="text" dark label="Pseudo*" prepend-icon="mdi-account" v-model="pseudo"/>
                            <v-text-field color="#EFEBEE" prepend-icon="mdi-mail" dark type="email" label="Mail*" v-model="email"/>
                            <v-text-field
                                    dark
                                    color="#EFEBEE"
                                    :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                                    prepend-icon="mdi-lock"
                                    :type="show3 ? 'text' : 'password'"
                                    name="input-10-2"
                                    label="Mot de passe*"
                                    class="input-group--focused"
                                    :rules="rules" counter
                                    v-model="password"
                                    @click:append="show3 = !show3"
                            />
                            <v-text-field
                                    dark
                                    color="#EFEBEE"
                                    :append-icon="show4 ? 'mdi-eye' : 'mdi-eye-off'"
                                    prepend-icon="mdi-lock"
                                    :type="show4 ? 'text' : 'password'"
                                    name="input-10-2"
                                    label="Confirmer le mot de passe*"
                                    :rules="rules" counter
                                    class="input-group--focused"
                                    v-model="password2"
                                    @click:append="show4 = !show4"
                            />
                            <v-checkbox
                                    dark
                                    v-model="checkbox"
                                    color="#EFEBEE"
                                    label="J'accepte les conditions d'OverStats"
                            ></v-checkbox>
                            <p style="color: red; font-size: 12px">{{errorMessage}}</p>

                            <v-btn
                                    width="200"
                                    height="50"
                                    :loading="registJ"
                                    elevation="1" tile style="border-radius: 25px; background-color: #EFEBEE; color: #2d3039; text-transform: initial; margin-top: 30px; margin-bottom: 20px"
                                    @click="register(3)"
                            >S'inscrire</v-btn>
                        </div>
                    </v-row>
                </v-container>
            </v-card>
        </v-dialog>

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
                checkbox: false,

                dialogRegister: false,
                dialogRegisterC: false,
                registJ: false,
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
            notRegister: function() {
                this.dialog = false;
                var doc = document.querySelector('#reg');
                doc.scrollIntoView({behavior: 'smooth'});
            },
            scrollTo: function(n) {
                var doc = document.querySelector('#' + n);
                doc.scrollIntoView({behavior: 'smooth'});
                // location.hash = '#' + n;
            },
            login: function() {
                this.registJ = true;
                firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                    () => {
                        this.registJ = false;
                        this.$router.replace('/')
                    },
                    (err) => {
                        this.registJ = false;
                        this.errorMessage = 'Oops. ' + err.message;
                    }
                );
            },
            register: function(n) {
                this.registJ = true;
                if (this.pseudo != null && this.email != null && this.password != null && this.password2 != null && this.checkbox == true) {
                    if (n == 1) {
                        if (this.password == this.password2) {
                            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                                (userCredential) => {
                                    firebase.database().ref('users' + '/' + userCredential.user.uid).set({
                                        Pseudo: this.pseudo,
                                        BattleTag: true,
                                        Mail: this.email,
                                        Teams: 0,
                                        Description: 'Player',
                                        Grade: 1,
                                        isRole: false,
                                        roleId: false,
                                        InscriptionDate: new Date().toLocaleString("fr-FR"),
                                    }).then(() => {
                                            this.registJ = false;
                                            this.$router.replace('/')
                                        },
                                        (err2) => {
                                        this.registJ = false;
                                            alert(err2.message())
                                        })
                                },
                                (err) => {
                                    this.registJ = false;
                                    this.errorMessage = err.message;
                                }
                            );
                        } else {
                            this.registJ = false;
                            this.errorMessage = 'Les mots de passe ne correspondent pas';
                        }
                    }
                    if (n == 3) {
                        if (this.password == this.password2) {
                            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                                (userCredential) => {
                                    firebase.database().ref('users' + '/' + userCredential.user.uid).set({
                                        Pseudo: this.pseudo,
                                        BattleTag: true,
                                        Mail: this.email,
                                        Teams: 0,
                                        Description: 'Coach',
                                        Grade: 2,
                                        isRole: false,
                                        roleId: false,
                                        InscriptionDate: new Date().toLocaleString("fr-FR"),
                                    }).then(() => {
                                            this.registJ = false;
                                            this.$router.replace('/')
                                        },
                                        (err2) => {
                                            this.registJ = false;
                                            alert(err2.message())
                                        })
                                },
                                (err) => {
                                    this.registJ = false;
                                    this.errorMessage = err.message;
                                }
                            );
                        } else {
                            this.registJ = false;
                            this.errorMessage = 'Les mots de passe ne correspondent pas';
                        }
                    }
                } else {
                    this.registJ = false;
                    this.errorMessage = 'Veuillez completer tous les champs';
                }
            }
        }
    }
</script>

<style scoped>
    .bord {
        margin-top: -110px;
        color: #EFEBEE;
        background-color: #385982;
        border-radius: 25px;
        padding: 25px;
    }
    .bordT {
        margin: 10px 20px 40px;
        border: 1px solid #dde2ee;
        border-radius: 25px;
        padding: 25px;
    }

    .revealY {
        opacity: 0;
        transform: translateY(-30px);
    }
    .revealY-visible {
        opacity: 1;
        transform: translateY(0);
        transition-duration: .3s;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity 2s, transform 2s;
    }

    .fade-enter, fade-leave-action {
        opacity: 0;
        transform: translateY(30px);
    }

    .before-enter {
        opacity: 0;
        transform: translateY(100px);
        transition: all 2s ease-out;
    }

    .enter {
        opacity: 1;
        transform: translateY(0px);
    }
</style>
