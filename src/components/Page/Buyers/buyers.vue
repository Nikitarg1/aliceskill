<template>
  <div class="context">
    <v-container>
      <v-text-field
          label="Prepend inner"
          prepend-inner-icon="mdi-magnify"
          full-width
          solo
          clearable
          @input="inputChange"
          placeholder="Поиск"
          color="textBrightBlue"
          hint="Какой вопрос вас интерисует?"
          :error="error.error"
          :error-messages="error.massage"
      ></v-text-field>


      <v-row
          align="center"
          justify="center"
      >
        <v-col cols="12"
               md="9"
               class="text-center mt-md-10">

          <h1 class="mb-2 display-2 font-weight-bold fadeInUp wow" id="searchtext">Популярные вопросы</h1>
          <p class="body-1 fadeInUp wow">Есть вопрос? Нет проблем, бывает. Ознакомьтесь с нашими часто задаваемыми
            вопросами
            ниже, чтобы найти ответ, который вы ищете. </p>
        </v-col>
      </v-row>

      <v-skeleton-loader
          :loading="loader"
          type="image,image"
          height="256"
      >
        <v-expansion-panels :inset="this.$vuetify.breakpoint.mdAndUp">
          <v-expansion-panel
              v-for="(item, i) in getFAQ"
              :key="i"
          >
            <v-expansion-panel-header>
              <h4 class="text-h6 font-weight-medium">{{ item.name }}</h4>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="fadeIn wow" data-wow-duration="1.5s">
              {{ item.text }}
            </v-expansion-panel-content>

          </v-expansion-panel>
        </v-expansion-panels>
      </v-skeleton-loader>
    </v-container>

    <modal id="CustomScrollbar" v-if="dialogVisible" @close="dialogVisible = false" :dialogData="dialogData"
           :dialogVisible="dialogVisible"/>

    <v-container id="news">
      <v-row>
        <v-col
            v-for="card in newsInGlavnaya"
            :key="card.title"
            cols="12"
            md="6"
        >
          <v-skeleton-loader
              type="image,image, article"
              :loading="loader"
              min-height="350"
          >
            <v-card
                min-width="150"
                elevation="5"
                min-height="400"
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
                    @click.stop="openDialog(card)"
                    text
                >
                  Читать
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-skeleton-loader>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row
          align="center"
          justify="center"
      >
        <v-col cols="12"
               md="9"
               class="text-center mt-md-10">

          <h1 class="mb-2 display-2 font-weight-bold fadeInUp wow">10 советов по выбору квартиры</h1>
          <p class="body-1 fadeInUp wow">Ниже приведины основные пункты, которые нужно проверить перед покупкой
            жилья.</p>
        </v-col>
      </v-row>

      <v-skeleton-loader
          :loading="loader"
          type="image,image,image"
          height="640"
      >
        <v-expansion-panels :popout="this.$vuetify.breakpoint.mdAndUp">
          <v-expansion-panel
              v-for="(item, i) in getAdvice"
              :key="i"
          >
            <v-expansion-panel-header>
              <h4 class="text-h6 font-weight-medium">{{ i + 1 }}. {{ item.name }}</h4>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="fadeIn wow" data-wow-duration="1.5s">
              {{ item.text }}
            </v-expansion-panel-content>

          </v-expansion-panel>
        </v-expansion-panels>
      </v-skeleton-loader>
    </v-container>
  </div>
</template>

<script>

import modal from "@/components/Page/Buyers/modal";
import {mapGetters} from "vuex";
import Mark from "mark.js"

export default {
  name: "buyers",
  data: () => ({
    dialogVisible: false,
    dialogData: null,
    mark: null,
    error: {
      error: false,
      massage: ''
    }
  }),
  components: {
    modal,
  },
  computed: {
    ...mapGetters([
      "getFAQ",
      "getAdvice",
      "newsInGlavnaya"
    ]),
    loader() {
      return this.$store.state.loader
    },
  },

  mounted() {
    let context = document.querySelector(".context")
    this.mark = new Mark(context)
  },

  methods: {
    inputChange(text) {
      if (text === null || text === "") {
        this.mark.unmark()
        this.error.error = false
        this.error.massage = ''
        return;
      }

      let context = this
      this.mark.unmark({
        done: function () {
          context.error.error = false
          context.error.massage = ''
          context.mark.mark(text, {
            noMatch: function () {
              context.error.error = true
              context.error.massage = "Результатов не найдено"
            }
          })
        }
      })
    },

    openDialog(card) {
      this.dialogData = card
      this.dialogVisible = true
    },
  }
}
</script>

<style>
mark {
  background: #50E1D8;
  color: black;
}
</style>