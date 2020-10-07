<template>
  <div>
    <!--    <div class="container&#45;&#45;fluid">-->
    <!--      <v-img dark-->
    <!--             src="../../../assets/img/myHouse/bgmyHouse.png"-->
    <!--             class="align-center justify-center"-->
    <!--             height="55vh"-->
    <!--             gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,.2)"-->
    <!--      >-->

    <!--      </v-img>-->
    <!--    </div>-->
    <div class="container">
      <searchHome/>
    </div>

    <section id="stats">
      <v-parallax
          height="600"
          alt=""
          src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
      >
        <v-container fill-height>
          <v-row class="mx-auto">
            <v-col
                v-for="[value, title] of stats"
                :key="title"
                cols="12"
                md="3"
            >
              <div class="text-center">
                <div
                    class="display-3 font-weight-black mb-4"
                    v-text="value"
                ></div>

                <div
                    class="title font-weight-regular text-uppercase"
                    v-text="title"
                ></div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-parallax>
    </section>

    <div class="container">
      <searchHome/>
    </div>
    <!--    <div class="container&#45;&#45;fluid jarallax" style="min-height: 55vh">-->
    <!--      <v-img-->
    <!--          class="jarallax-img"-->
    <!--          src="../../../assets/img/myHouse/bgmyHouse.png"-->
    <!--          gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,.2)"-->
    <!--      />-->

    <!--        <div class="align-center justify-center" style="margin-top: 33vh">-->
    <!--          <div class="container text-center">-->
    <!--            <h1 class="text-h5">Привет тут должен находится текст</h1>-->
    <!--            <p class="body-1">И тут тоже должен быть текст</p>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--    </div>-->


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
  data: () => ({
    stats: [
      ['24k', 'Github Stars'],
      ['330+', 'Releases'],
      ['1m', 'Downloads/mo'],
      ['5m', 'Total Downloads'],
    ],
  }),
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