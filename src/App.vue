<template>
  <v-app>
    <Maincontent/>
    <Footer/>
  </v-app>
</template>

<script>
import WOW from 'wowjs'
import 'animate.css/animate.css'
import Maincontent from "@/components/Maincontent"
import Footer from "@/components/Footer"

export default {
  name: 'App',
  components: {
    Maincontent,
    Footer
  },
  mounted() {
    new WOW.WOW().init()
  },
};
</script>

<style>
.v-application {
  color: #4a5568;
}

.v-navigation-drawer {
  left: auto;
}
</style>