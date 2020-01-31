<template>
        <div class="container">
          <div class="row">
            <div class="col">
              <h1 style="color: #1B3A57">Bienvenue {{ displayName.Pseudo }}</h1>
              <p>Quelques nouveautés</p>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6">
              <h2>Ajout des équipes</h2>
              <v-card tile style="border-radius: 5px">
                <v-container>
                  Il est désormais possible de créer des équipes, et de les gérer à partir de son interface
                  <v-card-actions>
                    <v-spacer/>
                    <v-btn to="/add" text>
                      Voir <v-icon>mdi-eye</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-container>
              </v-card>
            </div>
            <div class="col-sm-6">
              <h2>PWA</h2>
              <v-card tile style="border-radius: 5px">
                <v-container>
                  PWA c'est quoi ? Pour rester dans les termes simple, une PWA c'est une application web que vous pouvez télécharger à partir d'un site et être représenté comme une véritable application. C'est vraiment bien ! En plus Overstats en est une ;)
                </v-container>
              </v-card>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <h2>Win Rate</h2>
              <v-card tile style="border-radius: 20px">
                <v-container>
                  <v-row justify="space-between">
                    <v-col cols="auto">
                      <pie-chart donut="true" :data="pieData" />
                    </v-col>
                    <v-col cols="auto">
                      <v-data-table :items="table" :items-per-page="5" :headers="[{text: 'Game', align: 'left', value: 'game', }, { text: 'Map', value: 'map' }, { text: 'Score', value: 'score' },]"/>
                    </v-col>
                  </v-row>
                  <v-card-actions>
                    <v-spacer/>
                    <v-btn @click="add" text>
                      Ajouter <v-icon>mdi-plus</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-container>
              </v-card>
            </div>
          </div>

          <v-btn
                  bottom
                  fab
                  fixed
                  right
                  to="/add"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>

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
      displayName: null,

      teamName: null,
      playerOne: null,
      playerTwo: null,
      playerThree: null,
      playerFour: null,
      playerFive: null,
      playerSix: null,

      dialog: null,

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
    add: function () {
      this.chartData.splice(1, 0, {'2012': 12})
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
     firebase.database().ref('users/' + firebase.auth().currentUser.uid).once('value').then((snapshot) => {
       const val = snapshot.val();
       this.displayName = val;
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
</style>