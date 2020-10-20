<template>
  <div>
    <div class="container--fluid">
      <v-img dark
             src="../../../assets/img/myHouse/bgmyHouse.png"
             class="align-center justify-center"
             height="60vh"
             gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,.2)"
      >
        <div class="container" style="padding-top: 64px; max-width: 1280px;">
          <div class="col-lg-6 col-md-8 col-sm-8 pl-md-16 pl-sm-5 pt-16">
            <h1 class="mb-6 text-h3 font-weight-bold">Найди свой дом!</h1>
            <p class="" style="font-size: 1.225rem">
              Пользуйся удобными фильтрами чтобы найти свой дом
            </p>
          </div>
        </div>
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