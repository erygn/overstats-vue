<template>
  <v-app id="inspire" style="background: #F6F7F9">
      <Navbar v-if="this.$route.path != '/login' && this.$route.path != '/about' && this.$route.path != '/register' && this.$route.path != '/team' && this.$route.path != '/addMatch'"/>
      <NavNew v-if="this.$route.path == '/login' || this.$route.path == '/register' || this.$route.path == '/about'"/>
    <v-content>
        <router-view/>
        <Footer v-if="this.$route.path != '/team' && this.$route.path != '/addMatch'"/>
    </v-content>
  </v-app>
</template>

<script>
    import Navbar from "@/components/Navbar";
    import NavNew from "@/components/NavNew";
    import Footer from "@/components/Footer";
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
          Footer
      }
  }
</script>

<style>
    #inspire {
        font-family: Roboto;
    }
</style>