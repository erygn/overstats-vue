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

                        <div v-if="accountUid == teamValue.OwnerId" class="col-lg-6 col-sm-12">
                            <v-card tile elevation="1" style="border-radius: 5px; color: #363645">
                                <v-card-title>
                                    <div>
                                        <h1 style="margin-left: 15px; font-size: 15px; font-weight: 700; color: #2e313a">Join Request</h1>
                                        <p v-if="teamValue.EnableJoin" style="margin-left: 15px; font-size: 11px; color: #2e313a; margin-top: -15px">Join enable</p>
                                        <p v-else style="margin-left: 15px; font-size: 11px; color: #2e313a; margin-top: -15px">Join disable</p>
                                    </div>
                                    <v-spacer/>
                                    <v-btn style="margin-top: -12px; text-transform: initial" text @click="joinStats">{{ joinMsg }}</v-btn>
                                </v-card-title>
                                <v-container style="height: 400px">
                                    <v-row>
                                        <div  class="col-12" style="margin-top: -20px">
                                            <div style="margin: 0px 20px; overflow:auto; height: 370px">
                                                <div v-for="(item, index) in teamValue.Players.Request" :key="index" style="display: flex; justify-content: space-between; border-bottom: 1px solid #2D2D39; margin-bottom: 10px">
                                                    <div>
                                                        <p style="color: #363645; font-weight: 600">{{ item.Name }}</p>
                                                        <p style="margin-top: -14px; font-size: 12px">{{ item.RequestDate.substring(0, 10) }}</p>
                                                    </div>
                                                    <v-spacer/>
                                                    <v-btn v-if="accountUid == teamValue.OwnerId" fab depressed text :disabled="teamValue.EnableJoin == false" @click="addRequestDialog(index, item.ID, item.Name)"><v-icon color="green" small>fa-check</v-icon></v-btn>
                                                    <v-btn v-if="accountUid == teamValue.OwnerId" fab depressed text :disabled="teamValue.EnableJoin == false" @click="deleteRequest(index, item.ID)"><v-icon color="red" small>fa-trash</v-icon></v-btn>
                                                </div>

                                                <div v-if="teamValue.Players.Request == null" style="display: flex; justify-content: space-between">
                                                    <div>
                                                        <p style="color: #363645; font-weight: 600">Vous n'avez pas de demande</p>
                                                        <p style="margin-top: -14px; font-size: 12px"></p>
                                                    </div>
                                                    <v-spacer/>
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

        <v-dialog
                v-model="requestDialog"
                width="600px"
        >
            <v-card tile>
                <v-card-title style="font-size: 22px; font-weight: 400">
                    <v-spacer/>
                    <span style="margin-top: 20px; margin-bottom: 10px">Select role</span>
                    <v-spacer/>
                    <!--                    <v-btn @click="dialog = !dialog" text depressed><v-icon color="#2d3039">mdi-close</v-icon></v-btn>-->
                </v-card-title>
                <v-container>
                    <v-row justify="center" class="row text-center mx-2">
                        <div class="col-sm-12 col-lg-8">
                            <p style="font-size: 12px; margin-top: 30px">Select a role for {{ requestName }}</p>

                            <v-select
                                    color="#2d3039"
                                    v-model="requestRole"
                                    :items="requestList"
                                    label="Role valide"
                            ></v-select>

                            <p style="color: red; font-size: 12px; margin-top: 30px">{{requestError}}</p>
                            <v-btn
                                    width="200"
                                    height="50"
                                    :loading="registJ"
                                    elevation="1" tile style="border-radius: 25px; background-color: #EFEBEE; color: #2d3039; text-transform: initial"
                                    @click="acceptTeam"
                            >Accept in Team</v-btn>
                            <p @click="requestDialog = !requestDialog" style="color: cornflowerblue; font-size: 12px; cursor: pointer; margin-top: 20px">Cancel</p>
                        </div>
                    </v-row>
                </v-container>
            </v-card>
        </v-dialog>

        <v-snackbar v-model="snackbarAdd" :timeout="3000" color="green">
            {{ addValue }}
            <v-btn
                    color="white"
                    text
                    icon
                    @click="snackbarAdd = false"
            >
                <v-icon>mdi-close</v-icon>
            </v-btn>
        </v-snackbar>

        <v-snackbar v-model="snackbarDel" :timeout="3000" color="red">
            {{ delValue }}
            <v-btn
                    color="white"
                    text
                    icon
                    @click="snackbarDel = false"
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
                joinMsg: null,

                roleAttrib: null,

                roles: ['mainTank', 'offTank'],

                accountUid: null,

                teamValue: null,
                teamPlayer: null,

                getIndex: null,

                nameChange: '',
                dialogName: false,
                dialogUsers: false,

                roleName: null,
                nameLabel: null,

                snackbarAdd: false,
                snackbarDel: false,
                delValue: null,
                addValue: null,

                requestDialog: false,
                requestID: null,
                requestI: null,
                requestName: null,
                requestList: [],
                requestRole: null,
                requestError: null,

                registJ: false,
            }
        },
        methods: {
            acceptTeam: function() {
              this.registJ = true;
              if (this.requestRole != null) {
                  if (this.requestRole === 'mainTank') {
                      firebase.database().ref('teams/' + this.team + '/Players/').update({
                          mainTank: this.requestName,
                          isMainTank: this.requestID,
                      }).then(() => {
                          firebase.database().ref('users/' + this.requestID).update({
                              isRole: true,
                              roleId: this.team,
                          }).then(() => {
                              let reqID = this.teamPlayer[this.requestID].Request;
                              let reqList = [];

                              reqID.forEach(item => {
                                  if (item != this.team) {
                                      reqList.push(item);
                                  }
                              });

                              firebase.database().ref('users/' + this.requestID).update({
                                  Request: reqList,
                              }).then(() => {
                                  firebase.database().ref('teams/' + this.team + '/Players/Request/' + this.requestI).update({
                                      ID: null,
                                      Name: null,
                                      RequestDate: null,
                                  })
                              }).then(() => {
                                  this.requestDialog = false;
                                  this.snackbarAdd = true;
                                  this.addValue = 'Nom modifié';

                                  this.requestName = null;
                                  this.registJ = false;

                                  this.requestID = null;
                                  this.requestRole = null;
                                  this.requestList = [];
                              })
                          });
                      })
                  }
                  if (this.requestRole === 'offTank') {
                      firebase.database().ref('teams/' + this.team + '/Players/').update({
                          offTank: this.requestName,
                          isOffTank: this.requestID,
                      }).then(() => {
                          firebase.database().ref('users/' + this.requestID).update({
                              isRole: true,
                              roleId: this.team,
                          }).then(() => {
                              let reqID = this.teamPlayer[this.requestID].Request;
                              let reqList = [];

                              reqID.forEach(item => {
                                  if (item != this.team) {
                                      reqList.push(item);
                                  }
                              });

                              firebase.database().ref('users/' + this.requestID).update({
                                  Request: reqList,
                              }).then(() => {
                                  firebase.database().ref('teams/' + this.team + '/Players/Request/' + this.requestI).update({
                                      ID: null,
                                      Name: null,
                                      RequestDate: null,
                                  })
                              }).then(() => {
                                  this.requestDialog = false;
                                  this.snackbarAdd = true;
                                  this.addValue = 'Nom modifié';

                                  this.requestName = null;
                                  this.registJ = false;

                                  this.requestID = null;
                                  this.requestRole = null;
                                  this.requestList = [];
                              })
                          });
                      })
                  }
                  if (this.requestRole === 'mainDps') {
                      firebase.database().ref('teams/' + this.team + '/Players/').update({
                          mainDps: this.requestName,
                          isMainDps: this.requestID,
                      }).then(() => {
                          firebase.database().ref('users/' + this.requestID).update({
                              isRole: true,
                              roleId: this.team,
                          }).then(() => {
                              let reqID = this.teamPlayer[this.requestID].Request;
                              let reqList = [];

                              reqID.forEach(item => {
                                  if (item != this.team) {
                                      reqList.push(item);
                                  }
                              });

                              firebase.database().ref('users/' + this.requestID).update({
                                  Request: reqList,
                              }).then(() => {
                                  firebase.database().ref('teams/' + this.team + '/Players/Request/' + this.requestI).update({
                                      ID: null,
                                      Name: null,
                                      RequestDate: null,
                                  })
                              }).then(() => {
                                  this.requestDialog = false;
                                  this.snackbarAdd = true;
                                  this.addValue = 'Nom modifié';

                                  this.requestName = null;
                                  this.registJ = false;

                                  this.requestID = null;
                                  this.requestRole = null;
                                  this.requestList = [];
                              })
                          });
                      })
                  }
                  if (this.requestRole === 'offDps') {
                      firebase.database().ref('teams/' + this.team + '/Players/').update({
                          offDps: this.requestName,
                          isOffDps: this.requestID,
                      }).then(() => {
                          firebase.database().ref('users/' + this.requestID).update({
                              isRole: true,
                              roleId: this.team,
                          }).then(() => {
                              let reqID = this.teamPlayer[this.requestID].Request;
                              let reqList = [];

                              reqID.forEach(item => {
                                  if (item != this.team) {
                                      reqList.push(item);
                                  }
                              });

                              firebase.database().ref('users/' + this.requestID).update({
                                  Request: reqList,
                              }).then(() => {
                                  firebase.database().ref('teams/' + this.team + '/Players/Request/' + this.requestI).update({
                                      ID: null,
                                      Name: null,
                                      RequestDate: null,
                                  })
                              }).then(() => {
                                  this.requestDialog = false;
                                  this.snackbarAdd = true;
                                  this.addValue = 'Nom modifié';

                                  this.requestName = null;
                                  this.registJ = false;

                                  this.requestID = null;
                                  this.requestRole = null;
                                  this.requestList = [];
                              })
                          });
                      })
                  }
                  if (this.requestRole === 'mainHeal') {
                      firebase.database().ref('teams/' + this.team + '/Players/').update({
                          mainHeal: this.requestName,
                          isMainHeal: this.requestID,
                      }).then(() => {
                          firebase.database().ref('users/' + this.requestID).update({
                              isRole: true,
                              roleId: this.team,
                          }).then(() => {
                              let reqID = this.teamPlayer[this.requestID].Request;
                              let reqList = [];

                              reqID.forEach(item => {
                                  if (item != this.team) {
                                      reqList.push(item);
                                  }
                              });

                              firebase.database().ref('users/' + this.requestID).update({
                                  Request: reqList,
                              }).then(() => {
                                  firebase.database().ref('teams/' + this.team + '/Players/Request/' + this.requestI).update({
                                      ID: null,
                                      Name: null,
                                      RequestDate: null,
                                  })
                              }).then(() => {
                                  this.requestDialog = false;
                                  this.snackbarAdd = true;
                                  this.addValue = 'Nom modifié';

                                  this.requestName = null;
                                  this.registJ = false;

                                  this.requestID = null;
                                  this.requestRole = null;
                                  this.requestList = [];
                              })
                          });
                      })
                  }
                  if (this.requestRole === 'offHeal') {
                      firebase.database().ref('teams/' + this.team + '/Players/').update({
                          offHeal: this.requestName,
                          isOffHeal: this.requestID,
                      }).then(() => {
                          firebase.database().ref('users/' + this.requestID).update({
                              isRole: true,
                              roleId: this.team,
                          }).then(() => {
                              let reqID = this.teamPlayer[this.requestID].Request;
                              let reqList = [];

                              reqID.forEach(item => {
                                  if (item != this.team) {
                                      reqList.push(item);
                                  }
                              });

                              firebase.database().ref('users/' + this.requestID).update({
                                  Request: reqList,
                              }).then(() => {
                                  firebase.database().ref('teams/' + this.team + '/Players/Request/' + this.requestI).update({
                                      ID: null,
                                      Name: null,
                                      RequestDate: null,
                                  })
                              }).then(() => {
                                  this.requestDialog = false;
                                  this.snackbarAdd = true;
                                  this.addValue = 'Nom modifié';

                                  this.requestName = null;
                                  this.registJ = false;

                                  this.requestID = null;
                                  this.requestRole = null;
                                  this.requestList = [];
                              })
                          });
                      })
                  }
              } else {
                  this.registJ = false;
                  this.requestError = 'Veuillez choisir un role';
              }
            },
            addRequestDialog: function(i, id, n) {
                this.requestList = [];
                if (this.teamValue.Players.isMainTank == null) {
                    this.requestList.push('mainTank');
                }
                if (this.teamValue.Players.isOffTank == null) {
                    this.requestList.push('offTank');
                }
                if (this.teamValue.Players.isMainDps == null) {
                    this.requestList.push('mainDps');
                }
                if (this.teamValue.Players.isOffDps == null) {
                    this.requestList.push('offDps');
                }
                if (this.teamValue.Players.isMainHeal == null) {
                    this.requestList.push('mainHeal');
                }
                if (this.teamValue.Players.isOffHeal == null) {
                    this.requestList.push('offHeal');
                }

                this.requestDialog = true;
                this.requestI = i;
                this.requestID = id;
                this.requestName = n;
            },
            joinStats: function() {
                if (this.teamValue.EnableJoin == true) {
                    firebase.database().ref('teams/' + this.team).update({
                        EnableJoin: false,
                    }).then(() => {
                        this.joinMsg = 'Enable';
                        this.snackbarDel = true;
                        this.delValue = 'Join disable';
                    })
                } else {
                    firebase.database().ref('teams/' + this.team).update({
                        EnableJoin: true,
                    }).then(() => {
                        this.joinMsg = 'Disable';
                        this.snackbarAdd = true;
                        this.addValue = 'Join enable';
                    })
                }
            },
            deleteRequest: function(i, id) {
                let reqID = this.teamPlayer[id].Request;
                let reqList = [];

                reqID.forEach(item => {
                    if (item != this.team) {
                        reqList.push(item);
                    }
                });

                // alert(reqList);

                firebase.database().ref('users/' + id).update({
                    Request: reqList,
                }).then(() => {
                    firebase.database().ref('teams/' + this.team + '/Players/Request/' + i).update({
                        ID: null,
                        Name: null,
                        RequestDate: null,
                    })
                }).then(() => {
                    this.snackbarDel = true;
                    this.delValue = 'Demande supprimée';
                })
            },
            supUser: function() {
                if (this.nameChange == 'mainTank') {
                    firebase.database().ref('users/' + this.teamValue.Players.isMainTank).update({
                        isRole: false,
                        roleId: false,
                    }).then(() => {
                        firebase.database().ref('teams/' + this.team + '/Players/').update({
                            isMainTank: null,
                            mainTank: 'MainTank',
                        })
                        this.dialogName = false;
                        this.snackbarDel = true;
                        this.delValue = 'Joueur supprimé';
                    });
                }
                if (this.nameChange == 'offTank') {
                    firebase.database().ref('users/' + this.teamValue.Players.isOffTank).update({
                        isRole: false,
                        roleId: false,
                    }).then(() => {
                        firebase.database().ref('teams/' + this.team + '/Players/').update({
                            isOffTank: null,
                            offTank: 'OffTank',
                        })
                        this.dialogName = false;
                        this.snackbarDel = true;
                        this.delValue = 'Joueur supprimé';
                    });
                }
                if (this.nameChange == 'mainDps') {
                    firebase.database().ref('users/' + this.teamValue.Players.isMainDps).update({
                        isRole: false,
                        roleId: false,
                    }).then(() => {
                        firebase.database().ref('teams/' + this.team + '/Players/').update({
                            isMainDps: null,
                            mainDps: 'MainDps',
                        })
                        this.dialogName = false;
                        this.snackbarDel = true;
                        this.delValue = 'Joueur supprimé';
                    });
                }
                if (this.nameChange == 'offDps') {
                    firebase.database().ref('users/' + this.teamValue.Players.isOffDps).update({
                        isRole: false,
                        roleId: false,
                    }).then(() => {
                        firebase.database().ref('teams/' + this.team + '/Players/').update({
                            isOffDps: null,
                            offDps: 'OffDps',
                        })
                        this.dialogName = false;
                        this.snackbarDel = true;
                        this.delValue = 'Joueur supprimé';
                    });
                }
                if (this.nameChange == 'mainHeal') {
                    firebase.database().ref('users/' + this.teamValue.Players.isMainHeal).update({
                        isRole: false,
                        roleId: false,
                    }).then(() => {
                        firebase.database().ref('teams/' + this.team + '/Players/').update({
                            isMainHeal: null,
                            mainHeal: 'MainHeal',
                        })
                        this.dialogName = false;
                        this.snackbarDel = true;
                        this.delValue = 'Joueur supprimé';
                    });
                }
                if (this.nameChange == 'offHeal') {
                    firebase.database().ref('users/' + this.teamValue.Players.isOffHeal).update({
                        isRole: false,
                        roleId: false,
                    }).then(() => {
                        firebase.database().ref('teams/' + this.team + '/Players/').update({
                            isOffHeal: null,
                            offHeal: 'OffHeal',
                        })
                        this.dialogName = false;
                        this.snackbarDel = true;
                        this.delValue = 'Joueur supprimé';
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
                            this.snackbarAdd = true;
                            this.addValue = 'Nom modifié';
                            this.roleName = null;
                        })
                    }
                    if (this.nameChange === 'offTank') {
                        firebase.database().ref('teams/' + this.team + '/Players/').update({
                            offTank: this.roleName,
                        }).then(() => {
                            this.dialogName = false;
                            this.snackbarAdd = true;
                            this.addValue = 'Nom modifié';
                            this.roleName = null;
                        })
                    }
                    if (this.nameChange === 'mainDps') {
                        firebase.database().ref('teams/' + this.team + '/Players/').update({
                            mainDps: this.roleName,
                        }).then(() => {
                            this.dialogName = false;
                            this.snackbarAdd = true;
                            this.addValue = 'Nom modifié';
                            this.roleName = null;
                        })
                    }
                    if (this.nameChange === 'offDps') {
                        firebase.database().ref('teams/' + this.team + '/Players/').update({
                            offDps: this.roleName,
                        }).then(() => {
                            this.dialogName = false;
                            this.snackbarAdd = true;
                            this.addValue = 'Nom modifié';
                            this.roleName = null;
                        })
                    }
                    if (this.nameChange === 'mainHeal') {
                        firebase.database().ref('teams/' + this.team + '/Players/').update({
                            mainHeal: this.roleName,
                        }).then(() => {
                            this.dialogName = false;
                            this.snackbarAdd = true;
                            this.addValue = 'Nom modifié';
                            this.roleName = null;
                        })
                    }
                    if (this.nameChange === 'offHeal') {
                        firebase.database().ref('teams/' + this.team + '/Players/').update({
                            offHeal: this.roleName,
                        }).then(() => {
                            this.dialogName = false;
                            this.snackbarAdd = true;
                            this.addValue = 'Nom modifié';
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
                            this.snackbarAdd = true;
                            this.addValue = 'Nom modifié';
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
                            this.snackbarAdd = true;
                            this.addValue = 'Nom modifié';
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
                            this.snackbarAdd = true;
                            this.addValue = 'Nom modifié';
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
                            this.snackbarAdd = true;
                            this.addValue = 'Nom modifié';
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
                            this.snackbarAdd = true;
                            this.addValue = 'Nom modifié';
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
                            this.snackbarAdd = true;
                            this.addValue = 'Nom modifié';
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

                if (snapshot.val().EnableJoin == null) {
                    firebase.database().ref('teams/' + this.team).update({
                        EnableJoin: true,
                    })
                }

                if (snapshot.val().EnableJoin == true) {
                    this.joinMsg = 'Disable';
                } else {
                    this.joinMsg = 'Enable';
                }
            })

            firebase.database().ref('users/').on('value',  (snapshot) => {
                this.teamPlayer = snapshot.val();
            })
        }
    }
</script>

<style scoped>

</style>
