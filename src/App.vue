<template>
  <v-app>
    <Maincontent/>
    <Footer/>
  </v-app>
</template>

<script>
import Maincontent from "@/components/Maincontent"
import Footer from "@/components/Footer"

export default {
  name: 'App',
  components: {
    Maincontent,
    Footer
  }
};
</script>

<style>

.theme--dark.v-footer {
  /* background-color: #272727; */
  color: #fff;
}

.theme--light.v-footer {
  /* background-color: #f5f5f5; */
  color: rgba(0, 0, 0, .87);
}

.v-application {
  color: #4a5568;
}

.v-navigation-drawer {
  left: auto;
}
</style>