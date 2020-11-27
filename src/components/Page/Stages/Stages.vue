<template>
  <div>
    <div class="container--fluid">
      <v-img dark
             src="../../../assets/img/houses/bgHouses.png"
             class="align-center justify-center"
             height="60vh"
             gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,.2)"
      >
        <div class="container">
          <div class="col-lg-6 col-md-8 col-sm-8 pl-md-16 pl-sm-5 pt-5">
            <h1 class="mb-4 text-h2" style="font-weight: 700">Найдите свой дом</h1>
            <p class="text-h6" style="font-size: 1.225rem;">
              Пользуйтесь удобными фильтрами чтобы найти свой дом прямо сейчас!
            </p>
          </div>
        </div>
      </v-img>
    </div>
    <div class="container">
      <searchHome/>
    </div>
  </div>
</template>

<script>
import searchHome from "@/components/Page/Stages/searchHome"
import {jarallax} from 'jarallax';
import 'jarallax/dist/jarallax.css'

export default {
  name: "Stages",
  components: {
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