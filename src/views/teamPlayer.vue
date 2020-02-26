<template>
    <div style="background-color: #f4f7fc">
        <v-container fluid>
            <v-row justify="center">
                <div class="col-lg-10 col-md-10 col-sm-12">
                    <h1 style="margin-left: 15px; margin-bottom: -30px; font-size: 22px; font-weight: 700; color: #2e313a">Team Settings</h1>
                </div>
            </v-row>
        </v-container>

        <v-container fluid>
            <v-row justify="center" style="margin: 0px 1px; color: #9696A3">
                <div class="col-lg-10 col-md-10 col-sm-12">
                    <v-row>
                        <div class="col-lg-6 col-sm-12">
                            <v-card tile style="border-radius: 5px; color: #363645; font-weight: 500">
                                <v-card-title>
                                    <h1 style="margin-left: 15px; font-size: 15px; font-weight: 700; color: #2e313a">Players Name</h1>
                                </v-card-title>
                                <v-container>
                                    <v-row>
                                        <div class="col-12">
                                            <v-row style="font-size: 15px; color: #2e313a; justify-content: space-around">
                                                <div>
                                                    Main Tank: <strong>{{ teamValue.Players.mainTank }}</strong> <v-btn @click="openChange('mTank')" text x-small><v-icon small color="#2e313a">mdi-pencil</v-icon></v-btn>
                                                </div>
                                                <div>
                                                    Off Tank: <strong>{{ teamValue.Players.offTank }}</strong> <v-btn @click="openChange('oTank')" text x-small><v-icon small color="#2e313a">mdi-pencil</v-icon></v-btn>
                                                </div>
                                            </v-row>
                                        </div>
                                        <div class="col-12">
                                            <v-row style="font-size: 15px; color: #2e313a; justify-content: space-around">
                                                <div>
                                                    Main Dps: <strong>{{ teamValue.Players.mainDps }}</strong> <v-btn @click="openChange('mDps')" text x-small><v-icon small color="#2e313a">mdi-pencil</v-icon></v-btn>
                                                </div>
                                                <div>
                                                    Off Dps: <strong>{{ teamValue.Players.offDps }}</strong> <v-btn @click="openChange('oDps')" text x-small><v-icon small color="#2e313a">mdi-pencil</v-icon></v-btn>
                                                </div>
                                            </v-row>
                                        </div>
                                        <div class="col-12">
                                            <v-row style="font-size: 15px; color: #2e313a; justify-content: space-around">
                                                <div>
                                                    Main Heal: <strong>{{ teamValue.Players.mainHeal }}</strong> <v-btn @click="openChange('mHeal')" text x-small><v-icon small color="#2e313a">mdi-pencil</v-icon></v-btn>
                                                </div>
                                                <div>
                                                    Off Heal: <strong>{{ teamValue.Players.offHeal }}</strong> <v-btn @click="openChange('oHeal')" text x-small><v-icon small color="#2e313a">mdi-pencil</v-icon></v-btn>
                                                </div>
                                            </v-row>
                                        </div>
                                    </v-row>
                                </v-container>
                            </v-card>
                        </div>

                        <div class="col-lg-6 col-sm-12">
                            <v-card tile elevation="1" style="border-radius: 5px; color: #363645">
                                <v-card-title>
                                    <h1 style="margin-left: 15px; font-size: 15px; font-weight: 700; color: #2e313a">Global Game Composition</h1>
                                </v-card-title>
                                <v-container style="height: 400px">
                                    <v-row>
                                        <div class="col-12" style="margin-top: -20px">
                                            <div style="margin: 0px 20px; overflow:auto; height: 370px">
                                                <div style="display: flex; justify-content: space-between; border-bottom: 1px solid #2D2D39; margin-bottom: 10px">
                                                    <div>
                                                        <p style="color: #363645; font-weight: 600">Ya <span style="text-transform: uppercase; font-weight: 400; font-size: 12px; background-color: #d3d8e3; padding: 5px 15px; border-radius: 20px">New</span> <v-icon style="margin-top: -2px" small >fa-star</v-icon></p>
                                                        <p style="margin-top: -14px; font-size: 12px">Com</p>
                                                    </div>
                                                    <v-btn fab depressed style="background-color: transparent"><v-icon style="color: #363645">fa-eye</v-icon></v-btn>
                                                </div>
                                            </div>
                                        </div>
                                    </v-row>
                                </v-container>
                            </v-card>
                        </div>
                    </v-row>
                </div>
            </v-row>
        </v-container>

        <v-dialog
                v-model="dialogName"
                width="600px"
                content-class="dialogBorder"
        >
            <v-card>
                <v-card-title style="font-size: 17px; font-weight: 400; background-color: #2d3039; color: #FFF">
                    Role {{ nameLabel }}
                    <v-spacer/>
                    <v-btn @click="dialogName = !dialogName" text depressed><v-icon color="#FFF">mdi-close</v-icon></v-btn>
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
                                <v-list-item-subtitle>Modifier le nom du role / {{ nameChange }}</v-list-item-subtitle>
                                <v-list-item-subtitle><v-text-field color="#003041" type="text" :label="nameLabel" prepend-icon="mdi-rename-box" v-model="roleName"/></v-list-item-subtitle>
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
                            @click="changeRole"
                    >Modifier</v-btn>
                    <v-btn
                            style="margin-right: 5px; text-transform: initial"
                            text
                            color="#003041"
                            @click="dialogName = false"
                    >Fermer</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-snackbar v-model="snackbarName" :timeout="3000" color="green">
            Nom modifié
            <v-btn
                    color="white"
                    text
                    icon
                    @click="snackbarName = false"
            >
                <v-icon>mdi-close</v-icon>
            </v-btn>
        </v-snackbar>

    </div>
</template>

<script>
    import firebase from "firebase";

    export default {
        name: "teamPlayer",
        props: ['team'],
        data() {
            return {
                teamValue: null,

                nameChange: '',
                dialogName: false,

                roleName: null,
                nameLabel: null,

                snackbarName: false,
            }
        },
        methods: {
          openChange: function (n) {
            if (n === 'mTank') {
                this.nameChange = 'mainTank';
                this.nameLabel = this.teamValue.Players.mainTank;
                this.dialogName = true;
            }
              if (n === 'oTank') {
                  this.nameChange = 'offTank';
                  this.nameLabel = this.teamValue.Players.offTank;
                  this.dialogName = true;
              }
              if (n === 'mDps') {
                  this.nameChange = 'mainDps';
                  this.nameLabel = this.teamValue.Players.mainDps;
                  this.dialogName = true;
              }
              if (n === 'oDps') {
                  this.nameChange = 'offDps';
                  this.nameLabel = this.teamValue.Players.offDps;
                  this.dialogName = true;
              }
            if (n === 'mHeal') {
                this.nameChange = 'mainHeal';
                this.nameLabel = this.teamValue.Players.mainHeal;
                this.dialogName = true;
            }
              if (n === 'oHeal') {
                  this.nameChange = 'offHeal';
                  this.nameLabel = this.teamValue.Players.offHeal;
                  this.dialogName = true;
              }
          },
            changeRole: function () {
                if (this.roleName != null) {
                    if (this.nameChange === 'mainTank') {
                        firebase.database().ref('teams/' + firebase.auth().currentUser.uid + '/' + this.team + '/Players/').update({
                            mainTank: this.roleName,
                        }).then(() => {
                            this.dialogName = false;
                            this.snackbarName = true;
                            this.roleName = null;
                        })
                    }
                    if (this.nameChange === 'offTank') {
                        firebase.database().ref('teams/' + firebase.auth().currentUser.uid + '/' + this.team + '/Players/').update({
                            offTank: this.roleName,
                        }).then(() => {
                            this.dialogName = false;
                            this.snackbarName = true;
                            this.roleName = null;
                        })
                    }
                    if (this.nameChange === 'mainDps') {
                        firebase.database().ref('teams/' + firebase.auth().currentUser.uid + '/' + this.team + '/Players/').update({
                            mainDps: this.roleName,
                        }).then(() => {
                            this.dialogName = false;
                            this.snackbarName = true;
                            this.roleName = null;
                        })
                    }
                    if (this.nameChange === 'offDps') {
                        firebase.database().ref('teams/' + firebase.auth().currentUser.uid + '/' + this.team + '/Players/').update({
                            offDps: this.roleName,
                        }).then(() => {
                            this.dialogName = false;
                            this.snackbarName = true;
                            this.roleName = null;
                        })
                    }
                    if (this.nameChange === 'mainHeal') {
                        firebase.database().ref('teams/' + firebase.auth().currentUser.uid + '/' + this.team + '/Players/').update({
                            mainHeal: this.roleName,
                        }).then(() => {
                            this.dialogName = false;
                            this.snackbarName = true;
                            this.roleName = null;
                        })
                    }
                    if (this.nameChange === 'offHeal') {
                        firebase.database().ref('teams/' + firebase.auth().currentUser.uid + '/' + this.team + '/Players/').update({
                            offHeal: this.roleName,
                        }).then(() => {
                            this.dialogName = false;
                            this.snackbarName = true;
                            this.roleName = null;
                        })
                    }
                }
            }
        },
        created() {
            firebase.database().ref('teams/' + firebase.auth().currentUser.uid + '/' + this.team).on('value',  (snapshot) => {
                this.teamValue = snapshot.val();
            })
        }
    }
</script>

<style scoped>

</style>
