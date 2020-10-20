<template>
  <div>
    <div class="container--fluid">
      <v-img dark
             src="../../../assets/img/myHouse/bgmyHouse.png"
             class="align-center justify-center"
             height="55vh"
             gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,.2)"
      >
      </v-img>
    </div>
    <div class="container">
      <searchHome/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from "@/components/Footer"
import searchHome from "@/components/Page/Stages/searchHome"
import {jarallax} from 'jarallax';
import 'jarallax/dist/jarallax.css'

export default {
  name: "Stages",
  components: {
    Footer,
    searchHome
  },
  data: () => ({}),
  mounted() {
    jarallax(document.querySelectorAll('.jarallax'), {
      type: 'scroll', //scale-opacity
      speed: 0.1,
    });
  }
}
</script>

<style scoped>
@media (min-width: 1904px) {
  .container {
    max-width: 1280px;
  }
}
</style>