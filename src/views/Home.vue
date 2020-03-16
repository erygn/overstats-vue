<template>
  <div id="top" style="background-color: #FFFFFF">

      <v-container fluid style="background-color: #F7F7F7" id="tManage">
          <v-row justify="center">
              <div class="col-lg-8 col-md-10 col-sm-12">
                  <div class="row" v-if="displayName.Grade > 1">
                      <div class="col-12">
                          <h1 style="margin-top: 60px; font-size: 28px; font-weight: 700; color: #2e313a">Team Manager</h1>
                          <v-btn width="160" elevation="0" tile height="35" style="border-radius: 25px; margin-bottom: 20px; background-color: #385982; color: #EFEBEE; text-transform: initial" @click="addTeamDialog = !addTeamDialog">Add Team</v-btn>
                      </div>
                  </div>

                  <div class="row" v-else>
                      <div class="col-12">
                          <h1 style="margin-top: 60px; font-size: 28px; font-weight: 700; color: #2e313a">Team Manager</h1>
                      </div>
                  </div>

                  <div class="row" v-if="accountValues.Grade > 1">
                      <div class="col-lg-8 col-md-8 col-sm-12" style="margin-bottom: -30px">
                          <p style="font-size: 25px">Vos équipes {{ accountValues.Teams }} / {{ accountValues.Grade }}</p>
                          <p v-if="accountValues.Teams == 0">Vous ne possedez pas encore d'équipe, merci d'en ajouter. <button @click="addTeamDialog = true" style="text-decoration: none; color: #039be5">Ajouter une équipe <v-icon style="margin-bottom: 2px; margin-right: -5px; color: #dcdcdc" small>mdi-plus</v-icon></button></p>
                      </div>

                      <div class="col-lg-8 col-md-8 col-sm-12" >
                          <div v-for="(item, index) in teamList" :key="index">
                              <div class="col-12" style="padding: 10px 0px 10px 0px" v-if="item.OwnerId == accountUid">
                                  <v-card tile elevation="1" style="border-radius: 5px; color: #363645; font-weight: 500;">
                                      <v-container>
                                          <v-row style="padding: 0px 40px 0px 40px">
                                              <div>
                                                  <h2 style="margin-top: 12px; color: #2d3039; font-weight: 600">{{ item.TeamName }}</h2>
                                                  <p style="color: #768185; font-size: 12px; margin-top: -5px">{{ item.Description }}</p>
                                              </div>
                                              <v-spacer/>
                                              <v-menu left bottom :offset-y="offset">
                                                  <template v-slot:activator="{ on }">
                                                      <v-btn style="margin-top: 12px; margin-right: -25px" text depressed v-on="on"><v-icon>mdi-dots-vertical</v-icon></v-btn>
                                                  </template>

                                                  <v-list style="padding: 0px">
                                                      <v-list-item link @click="openDelete(index)">
                                                          <v-list-item-title>Supprimer</v-list-item-title>
                                                      </v-list-item>
                                                  </v-list>
                                              </v-menu>
                                          </v-row>
                                          <v-row style="padding: 0px 40px 0px 40px">
                                              <p style="font-size: 12px">Créé le {{ item.CreationDate.substring(0, 10) }}</p>
                                              <v-spacer/>
                                              <v-btn style="margin-right: -25px" :to="{path: '/team', query: {team: index}}"
                                                     text
                                              ><v-icon>fa-angle-right</v-icon></v-btn>
                                          </v-row>
                                      </v-container>
                                  </v-card>
                              </div>
                          </div>
                      </div>

                      <div class="col-lg-4 col-md-4 col-sm-12" style="margin-top: 10px">
                          <v-card tile elevation="1" style="border-radius: 5px; color: #363645; font-weight: 500">
                              <v-container>
                                  <v-row justify="center">
                                      <div class="text-center">
                                          <v-icon style="margin-top: 20px; background-color: #e5f3fe; color: #0382ff; padding: 10px; border-radius: 40px" large>mdi-gamepad-variant</v-icon>
                                          <h2 style="margin-top: 12px; color: #2d3039; font-size: 40px; font-weight: 600">Tips</h2>
                                          <p style="color: #768185; font-size: 15px">Total game</p>
                                      </div>
                                  </v-row>
                              </v-container>
                          </v-card>
                      </div>
                  </div>

                  <div class="row" v-if="accountValues.Grade == 1 && !accountValues.isRole">
                      <div class="col-lg-8 col-md-8 col-sm-12">
                          <p style="font-size: 25px; margin-bottom: -10px">Rejoindre une équipe</p>
                      </div>

                      <div class="col-lg-8 col-md-8 col-sm-12">
                          <div v-for="(item, index) in teamList" :key="index">
                              <div class="col-12" style="padding: 10px 0px 10px 0px" v-if="!accountValues.Request.includes(index) && item.EnableJoin">
                                  <v-card tile elevation="1" style="border-radius: 5px; color: #363645; font-weight: 500;">
                                      <v-container>
                                          <v-row style="padding: 0px 40px 0px 40px">
                                              <div>
                                                  <h2 style="margin-top: 12px; color: #2d3039; font-weight: 600">{{ item.TeamName }}</h2>
                                                  <p style="color: #768185; font-size: 12px; margin-top: -5px">{{ item.Description }}</p>
                                              </div>
                                              <v-spacer/>
                                              <v-menu left bottom :offset-y="offset">
                                                  <template v-slot:activator="{ on }">
                                                      <v-btn style="margin-top: 12px; margin-right: -25px" text depressed v-on="on"><v-icon>mdi-dots-vertical</v-icon></v-btn>
                                                  </template>

                                                  <v-list style="padding: 0px">
                                                      <v-list-item link>
                                                          <v-list-item-title>Details</v-list-item-title>
                                                      </v-list-item>
                                                  </v-list>
                                              </v-menu>
                                          </v-row>
                                          <v-row style="padding: 0px 40px 0px 40px">
                                              <p style="font-size: 12px">Créé le {{ item.CreationDate.substring(0, 10) }}</p>
                                              <v-spacer/>
                                              <v-btn style="margin-right: -25px"
                                                     @click="openJoin(index, item.TeamName)"
                                                     text
                                              >Rejoindre<v-icon style="margin-left: 7px" small>fa-angle-right</v-icon></v-btn>
                                          </v-row>
                                      </v-container>
                                  </v-card>
                              </div>
                          </div>
                      </div>

                      <div class="col-lg-4 col-md-4 col-sm-12" style="margin-top: 10px">
                          <v-card tile elevation="1" style="border-radius: 5px; color: #363645; font-weight: 500">
                              <v-container>
                                  <v-row justify="center">
                                      <div class="text-center">
                                          <v-icon style="margin-top: 20px; background-color: #e5f3fe; color: #0382ff; padding: 10px; border-radius: 40px" large>mdi-gamepad-variant</v-icon>
                                          <h2 style="margin-top: 12px; color: #2d3039; font-size: 40px; font-weight: 600">Tips</h2>
                                          <p style="color: #768185; font-size: 15px">Total game</p>
                                      </div>
                                  </v-row>
                              </v-container>
                          </v-card>
                      </div>

                      <div class="col-lg-8 col-md-8 col-sm-12">
                          <p style="font-size: 18px; margin-bottom: -10px">Plus d'équipe disponible pour le moment</p>
                      </div>

                  </div>

                  <div class="row" v-if="accountValues.Grade == 1 && accountValues.isRole">
                      <div class="col-lg-8 col-md-8 col-sm-12">
                          <p style="font-size: 25px; margin-bottom: -10px">Votre équipe</p>
                      </div>

                      <div class="col-lg-8 col-md-8 col-sm-12">
                          <v-card tile elevation="1" style="border-radius: 5px; color: #363645; font-weight: 500;">
                              <v-container>
                                  <v-row style="padding: 0px 40px 0px 40px">
                                      <div>
                                          <h2 style="margin-top: 12px; color: #2d3039; font-weight: 600">{{ teamList[accountValues.roleId].TeamName }}</h2>
                                          <p style="color: #768185; font-size: 12px; margin-top: -5px">{{ teamList[accountValues.roleId].Description }}</p>
                                      </div>
                                      <v-spacer/>
                                      <v-menu left bottom :offset-y="offset">
                                          <template v-slot:activator="{ on }">
                                              <v-btn style="margin-top: 12px; margin-right: -25px" text depressed v-on="on"><v-icon>mdi-dots-vertical</v-icon></v-btn>
                                          </template>

                                          <v-list style="padding: 0px">
                                            <v-list-item link>
                                                  <v-list-item-title>Details</v-list-item-title>
                                            </v-list-item>
                                            <v-list-item link>
                                                  <v-list-item-title>Quitter</v-list-item-title>
                                            </v-list-item>
                                          </v-list>
                                      </v-menu>
                                  </v-row>
                                  <v-row style="padding: 0px 40px 0px 40px">
                                      <p style="font-size: 12px">Créé le {{ teamList[accountValues.roleId].CreationDate.substring(0, 10) }}</p>
                                      <v-spacer/>
                                      <v-btn
                                              style="margin-right: -25px"
                                              :to="{path: '/team', query: {team: accountValues.roleId}}"
                                              text
                                      ><v-icon style="margin-left: 7px" small>fa-angle-right</v-icon></v-btn>
                                  </v-row>
                              </v-container>
                          </v-card>
                      </div>

                      <div class="col-lg-4 col-md-4 col-sm-12">
                          <v-card tile elevation="1" style="border-radius: 5px; color: #363645; font-weight: 500">
                              <v-container>
                                  <v-row justify="center">
                                      <div class="text-center">
                                          <v-icon style="margin-top: 20px; background-color: #e5f3fe; color: #0382ff; padding: 10px; border-radius: 40px" large>mdi-gamepad-variant</v-icon>
                                          <h2 style="margin-top: 12px; color: #2d3039; font-size: 40px; font-weight: 600">Tips</h2>
                                          <p style="color: #768185; font-size: 15px">Total game</p>
                                      </div>
                                  </v-row>
                              </v-container>
                          </v-card>
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
              v-model="battleDialog"
              width="600px"
      >
          <v-card tile style="background-color: #2d3039; color: #EFEBEE;">
              <v-card-title style="font-size: 22px; font-weight: 400">
                  <v-spacer/>
                  <span style="margin-top: 20px; margin-bottom: 10px">Add your BattleTag</span>
                  <v-spacer/>
                  <!--                    <v-btn @click="dialog = !dialog" text depressed><v-icon color="#2d3039">mdi-close</v-icon></v-btn>-->
              </v-card-title>
              <v-container>
                  <v-row justify="center" class="row text-center mx-2">
                      <div class="col-sm-12 col-lg-8">
                          <v-text-field color="#EFEBEE" dark type="text" label="Blizzard Account name" prepend-icon="mdi-account" v-model="battleName"/>
                          <v-text-field color="#EFEBEE" dark type="text" label="Battle Tag" prepend-icon="mdi-pound" v-model="battleNum"/>
                          <v-select
                                  dark
                                  color="#EFEBEE"
                                  v-model="battlePlat"
                                  :items="platTag"
                                  label="Platform"
                          ></v-select>
                          <v-select
                                  dark
                                  color="#EFEBEE"
                                  v-model="battleZone"
                                  :items="zoneTag"
                                  label="Zone"
                          ></v-select>
                          <div class="text-right">
                              <a href="https://eu.battle.net/support/fr/article/75767" target="_blank" style="color: #EFEBEE; font-size: 12px; cursor: pointer;">What's the BattleTag?</a>
                          </div>

                          <p style="color: red; font-size: 12px; margin-top: 30px">{{battleError}}</p>
                          <v-btn
                                  width="200"
                                  height="50"
                                  :loading="registJ"
                                  elevation="1" tile style="border-radius: 25px; background-color: #EFEBEE; color: #2d3039; text-transform: initial"
                                  @click="battleNow"
                          >Add BattleTag</v-btn>
                          <p @click="battleLater" style="color: cornflowerblue; font-size: 12px; cursor: pointer; margin-top: 20px">Not now</p>
                      </div>
                  </v-row>
              </v-container>
          </v-card>
      </v-dialog>

      <v-dialog
              v-model="joinDialog"
              width="600px"
      >
          <v-card tile style="background-color: #FFF; color: #2d3039;">
              <v-card-title style="font-size: 22px; font-weight: 400">
                  <v-spacer/>
                  <span style="margin-top: 20px; margin-bottom: 10px">Rejoindre {{ dialogName }}</span>
                  <v-spacer/>
                  <!--                    <v-btn @click="dialog = !dialog" text depressed><v-icon color="#2d3039">mdi-close</v-icon></v-btn>-->
              </v-card-title>
              <v-container>
                  <v-row justify="center" class="row text-center mx-2">
                      <div class="col-sm-12 col-lg-8">
                          <p>
                              Vous souhaitez rejoindre l'équipe {{ dialogName }}.<br>Cliquez sur Envoyer pour faire votre demande d'ajout dans l'équipe.
                          </p>
                          <v-btn
                                  width="200"
                                  height="50"
                                  :loading="registJ"
                                  elevation="1" tile style="border-radius: 25px; background-color: #2d3039; color: #EFEBEE; text-transform: initial"
                                  @click="joinTeam"
                          >Envoyer</v-btn>
                          <p @click="joinDialog = !joinDialog" style="color: cornflowerblue; font-size: 12px; cursor: pointer; margin-top: 20px">Annuler</p>
                      </div>
                  </v-row>
              </v-container>
          </v-card>
      </v-dialog>

      <v-dialog
              v-model="addTeamDialog"
              width="600px"
      >
          <v-card tile style="background-color: #FFF; color: #2d3039;">
              <v-card-title style="font-size: 22px; font-weight: 400">
                  <v-spacer/>
                  <span style="margin-top: 20px; margin-bottom: 10px">Create Team</span>
                  <v-spacer/>
                  <!--                    <v-btn @click="dialog = !dialog" text depressed><v-icon color="#2d3039">mdi-close</v-icon></v-btn>-->
              </v-card-title>
              <v-container>
                  <v-row justify="center" class="row text-center mx-2">
                      <div class="col-sm-12 col-lg-8">
                          <v-text-field color="#69697f" type="text" label="Nom d'équipe" prepend-icon="mdi-trophy" v-model="addTeamName"/>

                          <p style="color: red; font-size: 12px; margin-top: 30px">{{teamError}}</p>
                          <v-btn
                                  width="200"
                                  height="50"
                                  :loading="registJ"
                                  elevation="1" tile style="border-radius: 25px; background-color: #2d3039; color: #EFEBEE; text-transform: initial"
                                  @click="addTeam"
                          >Add Team</v-btn>
                          <p style="color: cornflowerblue; font-size: 12px; cursor: pointer; margin-top: 20px">Not Register?</p>
                      </div>
                  </v-row>
              </v-container>
          </v-card>
      </v-dialog>

      <v-dialog
              v-model="dialogDelet"
              width="600px"
      >
          <v-card>
              <v-card-title style="font-size: 22px; font-weight: 400">
                  <v-spacer/>
                  <span style="margin-top: 20px; margin-bottom: 10px">Supprimer une équipe</span>
                  <v-spacer/>
              </v-card-title>
              <v-container>
                  <v-row class="mx-2">
                      <v-col class="align-center justify-space-between" cols="12">
                          <v-row align="center">
                              <v-alert type="error" text>
                                  Attention cette action est irréversible
                              </v-alert>
                          </v-row>
                          <v-row align="center" class="mr-0">
                              Vous êtes sur le point de supprimer une équipe de votre catalogue, celle-ci sera supprimée ainsi que toutes les données qu'elle contenait
                          </v-row>
                          <v-row align="center"
                                 class="mr-0">
                              <v-spacer/>
                              <p style="font-size: 12px">ID d'équipe : {{ dialogID }}</p>
                          </v-row>
                          <v-row justify="center" class="row text-center mx-2">
                              <div class="col-sm-12 col-lg-8">
                                  <v-btn
                                          width="200"
                                          height="50"
                                          color="red"
                                          :loading="registJ"
                                          elevation="1" tile style="border-radius: 25px; color: #FFFFFF; text-transform: initial"
                                          @click="deleteTeam(dialogID)"
                                  >Supprimer</v-btn>
                                  <p @click="dialogDelet = false" style="color: cornflowerblue; font-size: 12px; cursor: pointer; margin-top: 20px">Annuler</p>
                              </div>
                          </v-row>
                      </v-col>
                  </v-row>
              </v-container>
          </v-card>
      </v-dialog>

      <v-dialog
              v-model="dialogErr"
              width="600px"
              content-class="dialogBorder"
      >
          <v-card>
              <v-card-title class="cardTitle" style="font-weight: 300">
                  Maximum atteint
                  <v-spacer/>
                  <v-btn @click="dialogErr = !dialogErr" text depressed><v-icon color="#FFF">mdi-close</v-icon></v-btn>
              </v-card-title>
              <v-container>
                  <v-row class="mx-2">
                      <v-col class="align-center justify-space-between" cols="12">
                          <v-row align="center" class="mr-0">
                              <v-alert type="error" text>
                                  Attention votre grade actuel ne vous permet pas de réaliser cette action
                              </v-alert>
                          </v-row>
                          <v-row align="center" class="mr-0">
                              Vous avez atteint le nombre d'équipe maximum pour votre grade actuel. Pour pouvoir ajouter d'autres équipes en plus, merci de choisir une offre supérieure
                          </v-row>
                      </v-col>
                  </v-row>
              </v-container>
              <v-card-actions>
                  <v-spacer />
                  <v-btn
                          depressed
                          color="grey"
                          width="150"
                          height="35"
                          style="border-radius: 20px; color: #FFF"
                          @click="dialogErr = false"
                  >Fermer</v-btn>
              </v-card-actions>
          </v-card>
      </v-dialog>

      <v-snackbar v-model="snackbarVal" :timeout="3000" color="green">
          {{ valText }}
          <v-btn
                  color="white"
                  text
                  icon
                  @click="snackbarVal = false"
          >
              <v-icon>mdi-close</v-icon>
          </v-btn>
      </v-snackbar>

      <v-snackbar v-model="snackbarDel" color="red" :timeout="2000">
          {{ delText }}
          <v-btn
                  color="white"
                  text
                  icon
                  @click="snackbarDel = false"
          >
              <v-icon>mdi-close</v-icon>
          </v-btn>
      </v-snackbar>

<!--    <v-container fluid style="align-items: center" class="my-5">-->
<!--      <v-row align="center" style="justify-content: center">-->
<!--        <div class="col-sm-12 col-lg-6 col-md-8"-->
<!--             v-for="(team, i) in teamValue"-->
<!--             :key="i"-->
<!--        >-->
<!--          <h2>{{ team.TeamName }}</h2>-->
<!--          <v-card tile style="border-radius: 20px">-->
<!--            <v-container>-->
<!--              <v-row justify="space-between">-->
<!--                <div class="col-sm-12 col-md-6 col-lg-6">-->
<!--                  <pie-chart donut="true" :data="pieData" />-->
<!--                </div>-->
<!--                <div class="col-sm-12 col-md-6 col-lg-6">-->
<!--                  <v-data-table :items="table" :items-per-page="5" :headers="[{text: 'Game', align: 'left', value: 'game', }, { text: 'Map', value: 'map' }, { text: 'Score', value: 'score' },]"/>-->
<!--                </div>-->
<!--              </v-row>-->
<!--              <v-card-actions>-->
<!--                <v-spacer/>-->
<!--                <v-btn :to="{path: '/team', query: {team: i}}" text>-->
<!--                  Voir <v-icon>mdi-eye</v-icon>-->
<!--                </v-btn>-->
<!--              </v-card-actions>-->
<!--            </v-container>-->
<!--          </v-card>-->
<!--        </div>-->
<!--      </v-row>-->
<!--    </v-container>-->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import db from '@/fb'
import firebase from 'firebase'
//import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
        joinDialog: false,

        teamError: null,
        snackbarVal: false,
        valText: null,
        snackbarDel: false,
        deltext: null,
        battleInfo: null,
        dialogErr: false,

        registJ: false,
        dialogID: null,
        dialogName: null,

        dialogDelet: false,

        battleDialog: false,
        battlePlat: null,
        battleZone: null,
        battleNum: null,
        battleName: null,
        platTag: ['pc', 'psn', 'xbl'],
        zoneTag: ['eu', 'us', 'as'],
        battleError: null,

        accountValues: null,
        accountUid: null,
        accountTeam: null,
        teamList: null,
        teamCount: 0,

        addTeamDialog: false,
        addTeamName: null,

        randomWelcome: '',

        welcomeList: [
            'Hello!',
            'Hey!',
            'Bonjour !',
            'Hola !',
            'Mirë Dita !',
            'Buenos Días !',
            'Nǐ Hăo !',
            'Bok !',
            'Hallo !',
            'Konnichi Wa !',
        ],


      displayName: null,

      favName: 'Genesis',

      teamName: null,
      playerOne: null,
      playerTwo: null,
      playerThree: null,
      playerFour: null,
      playerFive: null,
      playerSix: null,

      dialog: null,

        teamValue: null,

      chartData: {
        '2017': 24,
        '2018': 12,
        '2019': 20,
        '2020': 8
      },
      pieData: [
        ['Win', 150],
        ['Defeat', 200],
              ['Nul', 30]
      ],
      cards: [
        { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
      ],
      table: [
        {
          game: 'Ranked',
          map: 'Temple d\'anibus',
          score: '3-2'
        },
        {
          game: 'Ranked',
          map: 'Route 66',
          score: '3-0'
        },
        {
          game: 'QuickPlay',
          map: 'Hollywood',
          score: '1-0'
        },
      ],
    }
  },
  methods: {
      joinTeam: function() {
          this.registJ = true;
          firebase.database().ref('teams/' + this.dialogID + '/Players/Request/' + this.randomID()).update({
              Name: this.accountValues.Pseudo,
              ID: firebase.auth().currentUser.uid,
              RequestDate: new Date().toLocaleString("fr-FR"),
          }).then(() => {
              let test = this.accountValues.Request;
              test.push(this.dialogID);
              firebase.database().ref('users/' + firebase.auth().currentUser.uid).update({
                  Request: test,
              }).then(() => {
                  this.registJ = false;
                  this.joinDialog = false;
                  this.snackbarVal = true;
                  this.valText = 'Demande envoyée';
                  this.dialogID = null;
                  this.dialogName = null;
              })
          })
      },
      openJoin: function(i, n) {
          this.joinDialog = true;
          this.dialogID = i;
          this.dialogName = n;
      },
      openDelete: function(i) {
          this.dialogDelet = true;
          this.dialogID = i;
      },
      deleteTeam: function (i) {
          this.registJ = true;

          let players = this.teamList[i].Players;
          let roleList = ['isMainTank', 'isOffTank', 'isMainDps', 'isOffDps', 'isMainHeal', 'isOffHeal'];

          roleList.forEach(item => {
              if (players[item]) {
                  firebase.database().ref('users/' + players[item]).update({
                      isRole: false,
                      roleId: false,
                  })
              }
          });

          let teamReq = players.Request;

          // alert('teamReq: ' + JSON.stringify(teamReq));

          Object.keys(teamReq || {}).forEach(item => {
              let dogs = teamReq[item];
              let reqList = [];
              firebase.database().ref('users/' + dogs.ID).on('value',  (snapshot) => {
                  let playr = snapshot.val();

                  let reqID = playr.Request;

                  reqID.forEach(item => {
                      if (item != i) {
                          reqList.push(item);
                      }
                  });
              });

              firebase.database().ref('users/' + dogs.ID).update({
                  Request: reqList,
              });
          });

          firebase.database().ref('teams/' + i).remove().then(() => {
              firebase.database().ref('users/' + firebase.auth().currentUser.uid).update({
                  Teams: this.accountValues.Teams - 1,
              }).then(() => {
                  this.registJ = false;
                  this.dialogDelet = false;
                  this.snackbarDel = true;
                  this.delText = 'Equipe supprimée';
              })
          })
      },
      addTeam: function () {
          this.registJ = true;
          if (this.addTeamName != null) {
              if (this.accountValues.Teams !== this.accountValues.Grade) {
                  let counter = 0;
                  let verif = this.addTeamName.toLowerCase();
                  verif = verif.replace(/\s+/g, '');

                  Object.keys(this.teamList || {}).forEach(item => {
                      const tea = this.teamList[item];
                      let test = tea.TeamName.toLowerCase();
                      test = test.replace(/\s+/g, '');
                      if (test == verif) {
                          counter += 1;
                      }
                  })

                  if (counter == 0) {
                      firebase.database().ref('teams/' + this.randomID()).set({
                          TeamName: this.addTeamName,
                          Description: "Description par défaut",
                          isFav: false,
                          EnableJoin: true,
                          compo: true,
                          OwnerId: firebase.auth().currentUser.uid,
                          CreationDate: new Date().toLocaleString("fr-FR"),
                          Players: {
                              mainTank: 'MainTank',
                              offTank: 'OffTank',
                              mainDps: 'MainDps',
                              offDps: 'OffDps',
                              mainHeal: 'MainHeal',
                              offHeal: 'OffHeal'
                          }
                      }).then(() => {
                          firebase.database().ref('users/' + firebase.auth().currentUser.uid).update({
                              Teams: this.accountValues.Teams + 1,
                          }).then(() => {
                              this.addTeamDialog = false;
                              this.registJ = false;
                              this.addTeamName = null;
                              this.teamError = null;
                              this.snackbarVal = true;
                              this.valText = 'Equipe ajoutée';
                          })
                      })
                  } else {
                      this.registJ = false;
                      this.teamError = 'Cette équipe existe déjà';
                  }
              } else {
                  this.registJ = false;
                  this.addTeamDialog = false;
                  this.dialogErr = true;
                  this.addTeamName = null
              }
          } else {
              this.registJ = false;
              this.teamError = 'Veuillez donner un nom à votre équipe';
          }
      },
      randomID: function makeid() {
          var result           = '';
          var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
          var charactersLength = characters.length;
          for ( var i = 0; i < 12; i++ ) {
              result += characters.charAt(Math.floor(Math.random() * charactersLength));
          }
          return result;
      },
      battleLater: function() {
          firebase.database().ref('users/' + firebase.auth().currentUser.uid).update({
              BattleTag: false,
          }).then(() => {
              this.battleDialog = false;
          })
      },
      battleNow: function() {
          this.registJ = true;
        if (this.battlePlat != null && this.battleNum != null && this.battleZone != null && this.battleName != null) {
            let verif = this.battleNum.substring(0, 1);

            let tag = this.battleNum;
            if (verif == '#') {
                tag = tag.substring(1);
            }

            //axios.get('https://ow-api.com/v1/stats/' + this.battlePlat + '/' + this.battleZone + '/' + this.battleName + '-' + this.battleNum + '/profile').then(response => (this.battleInfo = response));
            firebase.database().ref('users/' + firebase.auth().currentUser.uid).update({
                BattleTag: tag,
                BattleName: this.battleName,
                BattleZone: this.battleZone,
                BattlePlat: this.battlePlat,
            }).then(() => {
                this.registJ = false;
                this.battleDialog = false;
                this.snackbarVal = true;
                this.valText = 'BattleTag ajouté';
            })
        } else {
            this.registJ = false;
            this.battleError = 'Veuillez remplir tous les champs';
        }
      },
      scrollTo: function(n) {
          var doc = document.querySelector('#' + n);
          doc.scrollIntoView({behavior: 'smooth'});
          // location.hash = '#' + n;
      },
    submit: function () {
      const team = {
        teamName: this.teamName,
        playerOne: this.playerOne,
        playerTwo: this.playerTwo,
      }
      db.collection('teams').add(team).then(() => {
        this.dialog = false
      })
    }
  },
  created () {
      //axios.get('https://ow-api.com/v1/stats/pc/eu/NatholTKL-2291/profile').then(response => (this.battleInfo = response));

      this.accountUid = firebase.auth().currentUser.uid;

      firebase.database().ref('teams/').on('value',  (snapshot) => {

          // alert(JSON.stringify(snapshot.val()))
          this.teamList = snapshot.val();
          Object.keys(snapshot.val() || {}).forEach(item => {
              const tea = snapshot.val()[item];
              if (tea.OwnerId == this.accountUid) {
                  this.teamCount += 1;
              }
          })
      })

     firebase.database().ref('users/' + firebase.auth().currentUser.uid).on('value', (snapshot) => {
         const val = snapshot.val();
         this.accountValues = val;
         this.displayName = val;

         if (this.accountValues.Request) {
            let one = 3;
            one.length;
         } else {
             let tes = [];
             tes.push('0');
             firebase.database().ref('users/' + firebase.auth().currentUser.uid).update({
                 Request: tes,
             })
         }

         if (this.displayName.BattleTag === true) {
             this.battleDialog = true;
         }
     })
  },
  components: {
    // HelloWorld
  },
}
</script>

<style>
  h1 {
    font-weight: 500;
  }
  h2 {
    font-weight: 300;
    padding-bottom: 5px;
  }
  a {
      text-decoration: none;
  }

  .overlap {
    margin-top: -120px;
  }
</style>
