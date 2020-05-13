<template>
    <div>
        <v-container fluid style="background: linear-gradient(#000a16, #092139);">
            <v-row justify="center">
                <div class="col-lg-8 col-md-10 col-sm-12 text-center">
                    <transition name="fade" appear>
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12" style="margin-top: 15px">
                                <h1 style="font-weight: 700; margin-bottom: 50px; text-transform: uppercase; font-size: 43px; color: #EFEBEE; margin-top: 50px; letter-spacing: 5px">Settings</h1>
                            </div>
                        </div>
                    </transition>
                </div>
            </v-row>
        </v-container>

        <v-container fluid style="background-color: #F7F7F7" id="tManage">
            <v-row justify="center">
                <div class="col-lg-8 col-md-10 col-sm-12">
                    <div class="row">
                        <div class="col-lg-8 col-md-8 col-sm-12" style="margin-bottom: -30px">
                            <p style="font-size: 25px">Réglages de votre compte</p>
                        </div>

                        <div class="col-lg-8 col-md-8 col-sm-12" >
                            <div class="col-12" style="padding: 10px 0px 10px 0px">
                                <v-card tile elevation="1" style="border-radius: 5px; color: #363645; font-weight: 500;">
                                    <v-container>
                                        <div style="padding: 0px 20px 0px 20px">
                                            <h2 style="margin-top: 12px; color: #2d3039; font-weight: 600">Description</h2>
                                            <p style="color: #768185; font-size: 12px; margin-top: -5px">Changez la description</p>
                                            <v-text-field color="#092139" filled type="text" label="Description" v-model="description"/>
                                        </div>
                                        <v-row style="padding: 0px 40px 0px 40px">
                                            <v-spacer/>
                                            <v-btn @click="changeDescr" style="margin-right: -25px; text-transform: initial"
                                                   text
                                            >Modifier <v-icon style="margin-left: 10px">fa-angle-right</v-icon></v-btn>
                                        </v-row>
                                    </v-container>
                                </v-card>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-4 col-sm-12" style="margin-top: 10px">
                            <v-card tile elevation="1" style="border-radius: 5px; color: #363645; font-weight: 500">
                                <v-container>
                                    <v-row justify="center">
                                        <div class="text-center">
                                            <h2 style="margin-top: 12px; color: #2d3039; font-size: 40px; font-weight: 600">Paramètres</h2>
                                            <p style="color: #768185; font-size: 15px">Configurer votre compte</p>
                                        </div>
                                    </v-row>
                                </v-container>
                            </v-card>
                        </div>
                    </div>
                </div>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import firebase from 'firebase'
    export default {
        name: "Settings",
        data() {
            return {
                pseudo: null,
                description: null,

                currentPseudo: null,
            }
        },
        methods: {
            changeDescr: function () {
                if (this.description != null) {
                    firebase.database().ref('users/' + firebase.auth().currentUser.uid).update({
                        Description: this.description
                    }).then(() => {
                        alert('Modifié')
                    })
                } else {
                    alert('Veuillez remplir le champ description')
                }
            }
        },
        created() {
            firebase.database().ref('users/' + firebase.auth().currentUser.uid).once('value').then((snapshot) => {
                this.currentPseudo = snapshot.val()
            })
        }
    }
</script>

<style scoped>

</style>
