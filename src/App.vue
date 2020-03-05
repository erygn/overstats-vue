<template>
  <v-app id="inspire" style="background: #F6F7F9">
      <Navbar v-if="this.$route.path != '/login' && this.$route.path != '/about' && this.$route.path != '/register' && this.$route.path != '/team' && this.$route.path != '/teamPlayer' && this.$route.path != '/GameAdd' && this.$route.path != '/winRate' && this.$route.path != '/compo' && this.$route.path != '/game'" />
      <NavNew v-if="this.$route.path == '/login' || this.$route.path == '/register' || this.$route.path == '/about'"/>
      <NavTeam v-if="this.$route.path == '/team' || this.$route.path == '/GameAdd' || this.$route.path == '/teamPlayer' || this.$route.path == '/winRate' || this.$route.path == '/compo' || this.$route.path == '/game'"/>
    <v-content>
        <router-view/>
    </v-content>
  </v-app>
</template>

<script>
    import Navbar from "@/components/Navbar";
    import NavNew from "@/components/NavNew";
    import NavTeam from "@/components/NavTeam";
  export default {
      name: 'OverStats',
    props: {
      source: String,
    },
    created () {
      this.$vuetify.theme.dark = false
    },
      components: {
        Navbar,
          NavNew,
          NavTeam,
      }
  }
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
    #inspire {
        font-family: 'Montserrat';
    }
</style>
