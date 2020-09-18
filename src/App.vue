<template>
  <v-app>
    <Maincontent/>
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
  data: () => ({}),

};
</script>

<style>

</style>