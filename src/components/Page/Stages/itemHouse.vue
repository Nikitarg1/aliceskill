<template>
  <div v-if="item">

    <div class="container mb-5">
      <v-img dark
             :src="item.img"
             class="align-end justify-center rounded"
             :height="$vuetify.breakpoint.mobile ? '45vh' : '60vh'"
             gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.6)"
      >
        <div class="container pl-sm-10">
          <div class="col-sm-6 col-12">
            <!--            <p class="mb-0 text-h5">Жилой комплекс</p>-->
            <p class="font-weight-bold mb-1 text-sm-h3 text-h4">{{ item.name }}</p>
            <p class="montserrat-weight-thin mb-2 text-lg-h6" style="letter-spacing: .05em">
              Уникальный проект бизнес-класса<!--            TODO: сделать столбец для краткого содержания-->
            </p>
          </div>
        </div>
      </v-img>
    </div>

    <v-container class="mb-5">
      <h1 class="mx-sm-5 textBrightBlue--text text-h5 text-sm-h4 font-weight-bold">Выбрать квартиру</h1>
      <v-row class="mx-sm-5"
             justify="center"
             align="center"
      >
        <v-col cols="12" sm="6" style="line-height: .9">
          <v-card
              flat
              color="transparent"
          >
            <v-card-subtitle class="pa-0 mb-1 body-1">Жилой комплекс</v-card-subtitle>
            <v-card-text class="pa-0">
              <div class="pa-0 mb-5 display-1 text--primary">
                {{ item.name }}, Дом 1
              </div>
              <v-row class="body-1">
                <v-col cols="6">
                  <p>Класс</p>
                  <p>Метраж</p>
                  <p>Скроки сдачи</p>
                  <p>Квратиры</p>
                </v-col>
                <v-col cols="6" class="font-weight-bold">
                  <p>Бизнес</p>
                  <p>51.2 — 72.6 м²</p>
                  <p>Сдан</p>
                  <p>2 985 000 руб.</p>
                </v-col>
              </v-row>
            </v-card-text>
            <v-btn
                :loading="loaderFun"
                ripple
                block
                dark
                color="textBrightBlue"
                class="text-capitalize text-h6 font-weight-medium">
              Забронировать
            </v-btn>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6">
          <v-skeleton-loader
              type="image"
              :loading="loaderFun">
            <v-img :src="item.img" class="rounded"/>
          </v-skeleton-loader>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="mb-5">
      <h1 class="mx-sm-5 textBrightBlue--text text-h5 text-sm-h4 font-weight-bold mb-2">О проекте</h1>
      <v-card
          flat
          color="transparent"
      >
        <v-row align="center" justify="center">
          <v-col cols="12" sm="11" class="pa-sm-0 pa-4">
            <p class="body-1 text-justify">
              ЖК «ЗИЛАРТ» – уникальный проект бизнес-класса, строящийся в Даниловском районе Москвы. Это первый жилой
              комплекс, предлагающий жителям широчайший набор нестандартных опций, от просторного парка до собственного
              музея.
            </p>
          </v-col>
        </v-row>

      </v-card>
    </v-container>

    <!--    <v-container class="mb-5">-->
    <!--      <h1 class="mx-sm-5 textBrightBlue&#45;&#45;text text-h5 text-sm-h4 font-weight-bold mb-2">Детали проекта</h1>-->
    <!--    </v-container>-->

  </div>

  <Error v-else/>
</template>

<script>
import Error from "@/components/Error";

export default {
  name: "itemHouse",
  components: {
    Error
  },
  computed: {
    item() {
      return this.$store.getters.taskByName(this.$route.params.name)
    },
    loaderFun() {
      return this.$store.state.loader
    },
  },
}
</script>

<style scoped>

</style>