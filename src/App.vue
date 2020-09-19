<template>
  <v-app>
    <Maincontent/>
    <v-footer app>

    </v-footer>
  </v-app>
</template>

<script>
import WOW from 'wowjs'
import Maincontent from "@/components/Maincontent"

export default {
  name: 'App',
  components: {
    Maincontent,
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