<template>
      <div class="container">
        <div class="row">
          <div class="col">
            <h1 style="color: #1B3A57">Authentication <router-link to="/add" style="text-decoration: none"><v-btn fab x-small depressed><v-icon>mdi-plus</v-icon></v-btn></router-link></h1>
            <p>de votre compte</p>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <h2>Progression</h2>
            <v-card tile style="border-radius: 5px">
              <v-container>
                <area-chart prefix="$" :data="chartData"/>
                <v-card-actions>
                  <v-spacer/>
                  <v-btn text>
                    Ajouter <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-container>
            </v-card>
          </div>
          <div class="col-sm-6">
            <h2>Kills</h2>
            <v-card tile style="border-radius: 5px">
              <v-container>
                <column-chart :data="[['Sun', 32], ['Mon', 46], ['Tue', 28]]"/>
                <v-card-actions>
                  <v-spacer/>
                  <v-btn text>
                    Ajouter <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </v-card-actions>
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
                  <v-btn text>
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
                @click="dialog = !dialog"
        >
          <v-dialog
                  v-model="dialog"
                  width="800px"
          >
            <v-card>
              <v-card-title>
                Ajouter une équipe
              </v-card-title>
              <v-container>
                <v-row class="mx-2">
                  <v-col cols="12">
                    <span class="font-weight-light overline">Entrer le nom de l'équipe puis les joueurs</span>
                    <v-text-field
                            prepend-icon="fas fa-users"
                            placeholder="Nom de l'équipe"
                            v-model="teamName"
                    />
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                            prepend-icon="mdi-account"
                            placeholder="Player"
                            v-model="playerOne"
                    />
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                            prepend-icon="mdi-account"
                            placeholder="Player"
                            v-model="playerTwo"
                    />
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                            prepend-icon="mdi-account"
                            placeholder="Player"
                            v-model="playerThree"
                    />
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                            prepend-icon="mdi-account"
                            placeholder="Player"
                            v-model="playerFour"
                    />
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                            prepend-icon="mdi-account"
                            placeholder="Player"
                            v-model="playerFive"
                    />
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                            prepend-icon="mdi-account"
                            placeholder="Player"
                            v-model="playerSix"
                    />
                  </v-col>
                </v-row>
              </v-container>
              <v-card-actions>
                <v-spacer />
                <v-btn
                        text
                        color="primary"
                        @click="dialog = false"
                >Cancel</v-btn>
                <v-btn
                        text
                        @click="submit"
                >Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-icon>mdi-plus</v-icon>
        </v-btn>

      </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import db from "@/fb";

export default {
  name: 'Home',
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
    }
  },
  data() {
    return {
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
  components: {
    // HelloWorld
  }
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