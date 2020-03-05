<template>
  <div>
    <v-container fluid style="height: 320px; background: linear-gradient(#0694cc, #075983); justify-content: center">
      <v-row justify="center" style="margin: 0px 1px; color: #FFF">
        <div class="col-sm-12 col-lg-6 col-md-8">
          <h1 style="margin-top: 40px; font-weight: 300; margin-bottom: 10px">{{randomWelcome}} <span style="font-weight: 500">{{ displayName.Pseudo }}</span></h1>
            <p style="margin-top: -15px; font-weight: 200">Version 0.1.3</p>
            <div>
                <router-link to="/teams" style="text-decoration: none; color: #dcdcdc; border: 1px solid #00577a; border-radius: 20px; padding: 5px 20px; background-color: #00577a">Gérer vos équipes <v-icon style="margin-bottom: 2px; margin-right: -5px; color: #dcdcdc" small>mdi-account-group</v-icon></router-link>
            </div>
        </div>
      </v-row>
    </v-container>

    <v-container fluid style="align-items: center" class="my-5">
      <v-row align="center" style="justify-content: center">
        <div class="col-lg-6 col-sm-12 col-md-8">
            <v-card
                    style="border-radius: 8px; padding: 18px"
                    class="overlap"
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
                                      src="https://subswapr.fr/img/overstats/busan.jpg"
                              >
                              </v-img>

                              <v-card-title>Le KOTH</v-card-title>
                              <v-card-subtitle class="pb-0">Les matchs KOTH sont disponibles</v-card-subtitle>
                              <v-card-text class="text--primary">
                                  <div>L'ajout de matchs KOTH est désormais possible !<br> Vous pouvez gérer les différents cas qui peuvent être  rencontrés durant une partie.</div>

                                  <div>Mais également utiliser vos compositions favorites pour remplir votre feuille de match plus rapidement</div>
                              </v-card-text>

                              <v-card-actions>
                                  <v-spacer/>
                                  <v-btn
                                          color="grey"
                                          text
                                          @click="dialog = !dialog"
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
                                      src="https://subswapr.fr/img/overstats/row.jpg"
                              >
                              </v-img>

                              <v-card-title>Fav Composition</v-card-title>
                              <v-card-subtitle class="pb-0">Ajouter rapidement des matchs</v-card-subtitle>
                              <v-card-text class="text--primary">
                                  <div>Un composition dans votre équipe revient souvent ?<br>Vous pouvez désormais ajouter votre composition comme un modèle qui peut ^étre appliquer en un seul clique lors de l'ajout d'un match</div>

                                  <div>Plus facile et rapide à utiliser</div>
                              </v-card-text>

                              <v-card-actions>
                                  <v-spacer/>
                                  <v-btn
                                          color="grey"
                                          text
                                          @click="dialog = !dialog"
                                  >
                                      Voir <v-icon small>fa-eye</v-icon>
                                  </v-btn>
                              </v-card-actions>
                          </v-card>
                      </div>
                  </v-row>
              </div>
          </v-row>
      </v-container>

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

export default {
  name: 'Home',
  data() {
    return {
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
    submit: function () {
      const team = {
        teamName: this.teamName,
        playerOne: this.playerOne,
        playerTwo: this.playerTwo,
      }
      db.collection('teams').add(team).then(() => {
        this.dialog = false
      })
    },
      randomID: function makeid() {
          var result           = '';
          var characters       = '0123456789';
          var charactersLength = characters.length;
          for ( var i = 0; i < 1; i++ ) {
              result += characters.charAt(Math.floor(Math.random() * charactersLength));
          }
          return result;
      }
  },
  created () {
      let random = this.randomID()
      this.randomWelcome = this.welcomeList[random]

     firebase.database().ref('users/' + firebase.auth().currentUser.uid).once('value').then((snapshot) => {
       const val = snapshot.val();
       this.displayName = val;
     })

      firebase.database().ref('teams/' + firebase.auth().currentUser.uid).once('value').then((snapshot) => {
          this.teamValue = snapshot.val()
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
