<template>
  <v-app id="inspire" style="background: #F6F7F9">
      <Navbar/>

    <v-content>
        <router-view/>
    </v-content>
  </v-app>
</template>

<script>
    import Navbar from "@/components/Navbar";
  export default {
      name: 'OverStats',
    props: {
      source: String,
    },
    created () {
      this.$vuetify.theme.dark = false
    },
      components: {
        Navbar
      }
  }
</script>

<style>
    #inspire {
        font-family: Roboto;
    }
</style>