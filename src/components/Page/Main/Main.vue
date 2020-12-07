<template>
  <div>
    <parallaxx/>

    <v-container class="py-16">
      <h3 class="text-h4 font-weight-medium text-center mb-4 wow fadeInUp">Кто мы?</h3>
      <p class="body-1 wow fadeInUp text-justify" data-wow-offset="100">
        Rubble – это то, что необходимо для каждого пользователя, который хочет получать всю актуальную информацию
        об
        этапах и технологий строительства купленного жилья. Кроме того, Rubble позволит вам просматривать демо этажи
        с помощью виртуальной реальности, благодаря чему вам не придётся тратить много времени на то, чтобы посещать
        территорию строительства жилья. Именно с Rubble вы сможете упростить вашу жизнь и сэкономить много
        времени.
      </p>
    </v-container>


    <v-container class="py-16 text-center">
      <h3 class="text-h4 font-weight-medium mb-4 wow fadeInUp">Алиса
        <span>
            <img
                src="../../../assets/img/glavnaya/YandexLogo.png"
                alt="alica" width="36">
          </span>
      </h3>
      <p class="body-1 wow fadeInUp text-justify" data-wow-offset="100">
        Наша команда позаботилась об удобстве пользования нашим сервисом. Мы добавили новую функцию в Яндекс Алису!
        С помощью нее, используя голосовые команды, можно всегда узнавать актуальную информацию по постройке жилья.
        А
        также в будущем даже управлять своим аккаунтом.
      </p>
      <v-skeleton-loader
          type="image, image,image"
          :loading="loader"
      >
        <v-img src="../../../assets/img/glavnaya/colonra.png"
               alt="Alice mock"
               class="my-14"
               :gradient="this.$vuetify.theme.dark ? 'to bottom, rgba(0,0,0,0), rgba(0,0,0,0), rgba(0,0,0,.3),  rgba(0,0,0,.5)' : 'to bottom, rgba(0,0,0,0), rgba(0,0,0,.01)'"
               data-wow-offset="100"
        >
        </v-img>
      </v-skeleton-loader>
      <v-row>
        <v-col
            v-for="card in cardsInAlice"
            :key="card.title"
            cols="12"
            sm="4"
        >
          <v-card
              class="pa-2 transparent text-center wow fadeInUp"
              data-wow-offset="100"
              flat
          >
            <v-icon size="56" style="border: 5px solid #8DE0D7; border-radius: 50%; padding: 15px"
                    v-text="card.icon"></v-icon>
            <v-card-title class="font-weight-medium text-h5 justify-center" v-text="card.title"></v-card-title>
            <v-card-subtitle v-text="card.subtitle"></v-card-subtitle>
            <v-divider class="my-4 mx-auto" style="width: 70%"></v-divider>
            <p class="body-1" style="line-height: 2rem" v-text="card.text"></p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="py-16">
      <h3 class="text-h4 font-weight-medium text-center mb-7 wow fadeInUp">Новости строительства</h3>
      <v-row>
        <v-col cols="12">

          <v-skeleton-loader
              type="image, article"
              :loading="loader"
          >

            <v-card
                min-width="150"
                hover
            >
              <v-img
                  src="../../../assets/img/glavnaya/truby.jpg"
                  class="white--text align-end"
                  height="350px"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.4)"
              >
                <v-card-title class="text-h4 font-weight-medium">Ремонт</v-card-title>
              </v-img>
              <v-card-subtitle class="pb-0">Неделю назад</v-card-subtitle>
              <v-card-text class="body-1 text--primary">В доме номер 10 на улице Архитектора Берша проводятся работы
                по замене труб
              </v-card-text>

              <v-card-actions>
                <v-btn
                    color="saturatedBlue"
                    text
                    @click="$router.push({ path: '/buyers#news' })"
                >
                  Продолжить
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-skeleton-loader>
        </v-col>
        <v-col
            v-for="card in newsInGlavnaya"
            :key="card.title"
            cols="12"
            md="6"

        >
          <v-skeleton-loader
              max-height="350"
              type="image, article"
              :loading="loader">

            <v-card
                min-width="150"
                hover
            >
              <v-img
                  :src="card.src"
                  class="white--text align-end"
                  height="350px"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.4)"
              >
                <v-card-title v-text="card.title" class="text-h5 font-weight-medium"></v-card-title>
              </v-img>
              <v-card-subtitle class="pb-0" v-text="card.number"></v-card-subtitle>
              <v-card-text class="body-1 text--primary" v-text="card.text"></v-card-text>

              <v-card-actions>
                <v-btn
                    color="saturatedBlue"
                    text
                    @click="$router.push({ path: '/buyers#news' })"
                >
                  Продолжить
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-skeleton-loader>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Parallaxx from "@/components/Page/Main/Parallaxx";
import {mapGetters} from "vuex"

export default {
  name: "Glavnaya",
  components: {
    Parallaxx
  },
  data: () => ({
    idNews: "#news"
  }),
  computed: {
    ...mapGetters([
      'newsInGlavnaya',
      'cardsInAlice',
    ]),
    loader() {
      return this.$store.state.loader
    },
  }
}
</script>
