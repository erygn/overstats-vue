<template>
  <v-app id="inspire" style="background: #F6F7F9">
      <Navbar v-if="this.$route.path != '/login' && this.$route.path != '/register'"/>
      <NavNew v-if="this.$route.path == '/login' || this.$route.path == '/register'"/>
    <v-content>
        <router-view/>
    </v-content>
  </v-app>
</template>

<script>
    import Navbar from "@/components/Navbar";
    import NavNew from "@/components/NavNew";
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
          NavNew
      }
  }
</script>

<style>
    #inspire {
        font-family: Roboto;
    }
</style>