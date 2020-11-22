<template>
  <div class="container--fluid pa-md-16 jarallax widthMobile">
    <v-img
        class="jarallax-img"
        src="../../../assets/img/glavnaya/bg-header11.png"
        alt="parallax"
        :gradient="this.$vuetify.theme.dark ? 'to bottom, rgba(0,0,0,.2), rgba(0,0,0,.2)' : 'to bottom, rgba(0,0,0,0), rgba(0,0,0,.01)'"
        position="100% 47%"
    />
    <v-container class="pa-0">
      <div class="col-lg-6 col-md-8 col-sm-9 pt-16 logoBlack--text pa-0 text-center text-sm-left">
        <h1 class="text-5xl sm:text-7xl md:text-7xl lg:text-7xl mb-6 font-medium leading-tight">Мы стираем
          границы!</h1>
        <p class="text-lg" style="font-size: 1.225rem; text-shadow: 0 0 0 gray">
          Узнавайте всю актуальную информацию о стройке вашей квартиры самым удобным способом с помощью Rubble и
          Яндекс Алисы.
        </p>
      </div>
    </v-container>
  </div>
</template>

<script>
import {jarallax} from 'jarallax';
import 'jarallax/dist/jarallax.css'

export default {
  name: 'Parallaxx',
  mounted() {
    jarallax(document.querySelectorAll('.jarallax'), {
      type: 'scale', //scale-opacity
      speed: 0.8,
    });
  }
}
</script>
<style>
.widthMobile {
  min-height: 90vh
}

@media screen and (max-width: 599px) {
  .widthMobile {
    min-height: 65vh
  }
}
</style>