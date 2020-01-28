<template>
  <v-app id="inspire" class="grey">
      <Navbar/>

    <v-content>
        <router-view/>
    </v-content>
  </v-app>
</template>

<script>
    import Navbar from "@/components/Navbar";
  export default {
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