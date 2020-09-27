<template>
  <div class="container--fluid pa-md-16 jarallax widthMobile">
    <v-img
        class="jarallax-img"
        src="../../../assets/img/glavnaya/bg-header11.png"
        alt="parallax"
        :gradient="this.$vuetify.theme.dark ? 'to bottom, rgba(0,0,0,.2), rgba(0,0,0,.2)' : 'to bottom, rgba(0,0,0,0), rgba(0,0,0,.01)'"
        position="100% 47%"
    />
    <div class="container" style="padding-top: 64px; max-width: 1280px;">
      <div class="col-lg-6 col-md-8 col-sm-8 pl-md-16 pl-sm-5 pt-16 logoBlack--text">
        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 font-medium leading-tight">Мы стираем
          границы!</h1>
        <p class="text-lg" style="font-size: 1.125rem">
          Узнавайте всю актуальную информацию о стройке вашей квартиры самым удобным способом с помощью Rubble и
          Яндекс Алисы.
        </p>
      </div>
    </div>
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
      speed: 0.5,
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
    min-height: 70vh
  }
}
</style>