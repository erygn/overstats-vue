<template>
      <div class="container">
        <div class="row">
          <div class="col">
            <h1>Statistiques <router-link to="/add" style="text-decoration: none"><v-icon style="background-color: #454545; border-radius: 20px; padding: 5px; border: 1px solid #888888;">mdi-plus</v-icon></router-link></h1>
            <p>de votre compte</p>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <h2>Progression</h2>
            <v-card outlined style="padding-top: 30px">
              <area-chart prefix="$" :data="chartData"/>
              <v-card-actions>
                <v-spacer/>
                <v-btn text>
                  Ajouter <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </div>
          <div class="col-sm-6">
            <h2>Kills</h2>
            <v-card outlined style="padding-top: 30px">
              <column-chart :data="[['Sun', 32], ['Mon', 46], ['Tue', 28]]"/>
              <v-card-actions>
                <v-spacer/>
                <v-btn text>
                  Ajouter <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <h2>Win Rate</h2>
            <v-card outlined>
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



      </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data() {
    return {
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
    font-weight: 300;
    font-size: 40px;
  }
  h2 {
    font-weight: 300;
    padding-bottom: 5px;
  }
</style>