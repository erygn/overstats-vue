<template>
    <div style="background-color: #f4f7fc">
        <v-container fluid>
            <v-row justify="center" style="color: #2e313a">
                <div class="col-lg-10 col-md-10 col-sm-12">
                    <h1 style="margin-left: 15px; font-weight: 400; margin-bottom: 10px; font-size: 30px"><router-link :to="{path: '/team', query: {team: team}}" style="text-decoration: none"><v-btn style="background-color: transparent; color: #2e313a;" fab x-small depressed><v-icon>fa-angle-left</v-icon></v-btn></router-link> Settings </h1>
                </div>
            </v-row>
        </v-container>

        <v-container fluid>
            <v-row justify="center">
                <div class="col-lg-10 col-md-10 col-sm-12">
                    <h1 style="margin-left: 15px; margin-bottom: -30px; font-size: 22px; font-weight: 700; color: #2e313a">Team Config</h1>
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
                                            <v-row style="font-size: 15px; color: #2e313a; margin-left: 8px">
                                                <div class="col-sm-6">
                                                    Main Tank: <strong>{{ teamValue.Players.mainTank }}</strong> <v-btn v-if="accountUid == teamValue.OwnerId" @click="openChange('mTank')" text x-small><v-icon small color="#2e313a">mdi-pencil</v-icon></v-btn>
                                                </div>
                                                <div class="col-sm-6">
                                                    Off Tank: <strong>{{ teamValue.Players.offTank }}</strong> <v-btn v-if="accountUid == teamValue.OwnerId" @click="openChange('oTank')" text x-small><v-icon small color="#2e313a">mdi-pencil</v-icon></v-btn>
                                                </div>
                                            </v-row>
                                        </div>
                                        <div class="col-12">
                                            <v-row style="font-size: 15px; color: #2e313a; margin-left: 8px">
                                                <div class="col-sm-6">
                                                    Main Dps: <strong>{{ teamValue.Players.mainDps }}</strong> <v-btn v-if="accountUid == teamValue.OwnerId" @click="openChange('mDps')" text x-small><v-icon small color="#2e313a">mdi-pencil</v-icon></v-btn>
                                                </div>
                                                <div class="col-sm-6">
                                                    Off Dps: <strong>{{ teamValue.Players.offDps }}</strong> <v-btn v-if="accountUid == teamValue.OwnerId" @click="openChange('oDps')" text x-small><v-icon small color="#2e313a">mdi-pencil</v-icon></v-btn>
                                                </div>
                                            </v-row>
                                        </div>
                                        <div class="col-12">
                                            <v-row style="font-size: 15px; color: #2e313a; margin-left: 8px">
                                                <div class="col-sm-6">
                                                    Main Heal: <strong>{{ teamValue.Players.mainHeal }}</strong> <v-btn v-if="accountUid == teamValue.OwnerId" @click="openChange('mHeal')" text x-small><v-icon small color="#2e313a">mdi-pencil</v-icon></v-btn>
                                                </div>
                                                <div class="col-sm-6">
                                                    Off Heal: <strong>{{ teamValue.Players.offHeal }}</strong> <v-btn v-if="accountUid == teamValue.OwnerId" @click="openChange('oHeal')" text x-small><v-icon small color="#2e313a">mdi-pencil</v-icon></v-btn>
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
                                <v-list-item-subtitle class="text-right"><v-btn v-if="teamValue.Players.isMainTank && nameChange == 'mainTank' || teamValue.Players.isOffTank && nameChange == 'offTank' || teamValue.Players.isMainDps && nameChange == 'mainDps' || teamValue.Players.isOffDps && nameChange == 'offDps' || teamValue.Players.isMainHeal && nameChange == 'mainHeal' || teamValue.Players.isOffHeal && nameChange == 'offHeal'" height="35" width="150" @click="supUser" small style="background-color: #2d3039; text-transform: initial; color: #FFFFFF">Supprimer Joueur</v-btn> <v-btn v-else height="35" width="150" @click="dialogUsers = !dialogUsers" small style="background-color: #2d3039; text-transform: initial; color: #FFFFFF">Utilisateur</v-btn></v-list-item-subtitle>
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

        <v-dialog
                v-model="dialogUsers"
                width="600px"
                content-class="dialogBorder"
        >
            <v-card>
                <v-card-title style="font-size: 17px; font-weight: 400; background-color: #2d3039; color: #FFF">
                    Choisir un utilisateur
                    <v-spacer/>
                    <v-btn @click="dialogUsers = !dialogUsers" text depressed><v-icon color="#FFF">mdi-close</v-icon></v-btn>
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
                                <v-list-item-subtitle>Choisir un utilisateur à ajouter</v-list-item-subtitle>
                                <v-card-text style="height: 200px; overflow: auto">
                                    <div v-for="(item, index) in teamPlayer" :key="index" style="margin-top: 10px">
                                        <div class="row" v-if="!item.isRole" style="border-bottom: 1px solid #333333;">
                                            <div class="col-6">
                                                <p>{{ item.Pseudo }}</p>
                                            </div>
                                            <div class="col-6 text-right">
                                                <v-btn style="margin-top: -4px" small @click="getUser(index, item.Pseudo)">Choisir</v-btn>
                                            </div>
                                        </div>
                                    </div>
                                </v-card-text>
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
                            @click="dialogUsers = false"
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

        <v-snackbar v-model="snackbarUser" :timeout="3000" color="red">
            Joueur Supprimé
            <v-btn
                    color="white"
                    text
                    icon
                    @click="snackbarUser = false"
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
                accountUid: null,

                teamValue: null,
                teamPlayer: null,

                getIndex: null,

                nameChange: '',
                dialogName: false,
                dialogUsers: false,

                roleName: null,
                nameLabel: null,

                snackbarName: false,
                snackbarUser: false,
            }
        },
        methods: {
            supUser: function() {
                if (this.nameChange == 'mainTank') {
                    firebase.database().ref('users/' + this.teamValue.Players.isMainTank).update({
                        isRole: false,
                        roleId: false,
                    }).then(() => {
                        firebase.database().ref('teams/' + this.team + '/Players/').update({
                            isMainTank: false,
                            mainTank: 'MainTank',
                        })
                        this.dialogName = false;
                        this.snackbarUser = true;
                    });
                }
                if (this.nameChange == 'offTank') {
                    firebase.database().ref('users/' + this.teamValue.Players.isOffTank).update({
                        isRole: false,
                        roleId: false,
                    }).then(() => {
                        firebase.database().ref('teams/' + this.team + '/Players/').update({
                            isOffTank: false,
                            offTank: 'OffTank',
                        })
                        this.dialogName = false;
                    });
                }
                if (this.nameChange == 'mainDps') {
                    firebase.database().ref('users/' + this.teamValue.Players.isMainDps).update({
                        isRole: false,
                        roleId: false,
                    }).then(() => {
                        firebase.database().ref('teams/' + this.team + '/Players/').update({
                            isMainDps: false,
                            mainDps: 'MainDps',
                        })
                        this.dialogName = false;
                    });
                }
                if (this.nameChange == 'offDps') {
                    firebase.database().ref('users/' + this.teamValue.Players.isOffDps).update({
                        isRole: false,
                        roleId: false,
                    }).then(() => {
                        firebase.database().ref('teams/' + this.team + '/Players/').update({
                            isOffDps: false,
                            offDps: 'OffDps',
                        })
                        this.dialogName = false;
                    });
                }
                if (this.nameChange == 'mainHeal') {
                    firebase.database().ref('users/' + this.teamValue.Players.isMainHeal).update({
                        isRole: false,
                        roleId: false,
                    }).then(() => {
                        firebase.database().ref('teams/' + this.team + '/Players/').update({
                            isMainHeal: false,
                            mainHeal: 'MainHeal',
                        })
                        this.dialogName = false;
                    });
                }
                if (this.nameChange == 'offHeal') {
                    firebase.database().ref('users/' + this.teamValue.Players.isOffHeal).update({
                        isRole: false,
                        roleId: false,
                    }).then(() => {
                        firebase.database().ref('teams/' + this.team + '/Players/').update({
                            isOffHeal: false,
                            offHeal: 'OffHeal',
                        })
                        this.dialogName = false;
                    });
                }
            },
            getUser: function(n, p) {
                this.getIndex = n;
                this.roleName = p;
                this.dialogUsers = false;
            },
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
                if (this.roleName != null && this.getIndex == null) {
                    if (this.nameChange === 'mainTank') {
                        firebase.database().ref('teams/' + this.team + '/Players/').update({
                            mainTank: this.roleName,
                        }).then(() => {
                            this.dialogName = false;
                            this.snackbarName = true;
                            this.roleName = null;
                        })
                    }
                    if (this.nameChange === 'offTank') {
                        firebase.database().ref('teams/' + this.team + '/Players/').update({
                            offTank: this.roleName,
                        }).then(() => {
                            this.dialogName = false;
                            this.snackbarName = true;
                            this.roleName = null;
                        })
                    }
                    if (this.nameChange === 'mainDps') {
                        firebase.database().ref('teams/' + this.team + '/Players/').update({
                            mainDps: this.roleName,
                        }).then(() => {
                            this.dialogName = false;
                            this.snackbarName = true;
                            this.roleName = null;
                        })
                    }
                    if (this.nameChange === 'offDps') {
                        firebase.database().ref('teams/' + this.team + '/Players/').update({
                            offDps: this.roleName,
                        }).then(() => {
                            this.dialogName = false;
                            this.snackbarName = true;
                            this.roleName = null;
                        })
                    }
                    if (this.nameChange === 'mainHeal') {
                        firebase.database().ref('teams/' + this.team + '/Players/').update({
                            mainHeal: this.roleName,
                        }).then(() => {
                            this.dialogName = false;
                            this.snackbarName = true;
                            this.roleName = null;
                        })
                    }
                    if (this.nameChange === 'offHeal') {
                        firebase.database().ref('teams/' + this.team + '/Players/').update({
                            offHeal: this.roleName,
                        }).then(() => {
                            this.dialogName = false;
                            this.snackbarName = true;
                            this.roleName = null;
                        })
                    }
                }
                if (this.roleName != null && this.getIndex != null) {
                    if (this.nameChange === 'mainTank') {
                        firebase.database().ref('teams/' + this.team + '/Players/').update({
                            mainTank: this.roleName,
                            isMainTank: this.getIndex,
                        }).then(() => {
                            firebase.database().ref('users/' + this.getIndex).update({
                                isRole: true,
                                roleId: this.team,
                            });
                            this.dialogName = false;
                            this.snackbarName = true;
                            this.roleName = null;
                        })
                    }
                    if (this.nameChange === 'offTank') {
                        firebase.database().ref('teams/' + this.team + '/Players/').update({
                            offTank: this.roleName,
                            isOffTank: this.getIndex,
                        }).then(() => {
                            firebase.database().ref('users/' + this.getIndex).update({
                                isRole: true,
                                roleId: this.team,
                            });
                            this.dialogName = false;
                            this.snackbarName = true;
                            this.roleName = null;
                        })
                    }
                    if (this.nameChange === 'mainDps') {
                        firebase.database().ref('teams/' + this.team + '/Players/').update({
                            mainDps: this.roleName,
                            isMainDps: this.getIndex,
                        }).then(() => {
                            firebase.database().ref('users/' + this.getIndex).update({
                                isRole: true,
                                roleId: this.team,
                            });
                            this.dialogName = false;
                            this.snackbarName = true;
                            this.roleName = null;
                        })
                    }
                    if (this.nameChange === 'offDps') {
                        firebase.database().ref('teams/' + this.team + '/Players/').update({
                            offDps: this.roleName,
                            isOffDps: this.getIndex,
                        }).then(() => {
                            firebase.database().ref('users/' + this.getIndex).update({
                                isRole: true,
                                roleId: this.team,
                            });
                            this.dialogName = false;
                            this.snackbarName = true;
                            this.roleName = null;
                        })
                    }
                    if (this.nameChange === 'mainHeal') {
                        firebase.database().ref('teams/' + this.team + '/Players/').update({
                            mainHeal: this.roleName,
                            isMainHeal: this.getIndex,
                        }).then(() => {
                            firebase.database().ref('users/' + this.getIndex).update({
                                isRole: true,
                                roleId: this.team,
                            });
                            this.dialogName = false;
                            this.snackbarName = true;
                            this.roleName = null;
                        })
                    }
                    if (this.nameChange === 'offHeal') {
                        firebase.database().ref('teams/' + this.team + '/Players/').update({
                            offHeal: this.roleName,
                            isOffHeal: this.getIndex,
                        }).then(() => {
                            firebase.database().ref('users/' + this.getIndex).update({
                                isRole: true,
                                roleId: this.team,
                            });
                            this.dialogName = false;
                            this.snackbarName = true;
                            this.roleName = null;
                        })
                    }
                }
            }
        },
        created() {
            this.accountUid = firebase.auth().currentUser.uid;
            firebase.database().ref('teams/' + this.team).on('value',  (snapshot) => {
                this.teamValue = snapshot.val();
            })

            firebase.database().ref('users/').on('value',  (snapshot) => {
                this.teamPlayer = snapshot.val();
            })
        }
    }
</script>

<style scoped>

</style>
