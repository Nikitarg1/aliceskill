<template>

  <v-container>
    <v-text-field
        label="Prepend inner"
        prepend-inner-icon="mdi-magnify"
        full-width
        solo
        clearable
        placeholder="Поиск"
        color="textBrightBlue"
        hint="Какой вопрос вас интерисует?"
    ></v-text-field>

    <v-row
        align="center"
        justify="center"
    >
      <v-col cols="12"
             md="9"
             class="text-center mt-md-10">

        <h1 class="mb-2 display-2 font-weight-bold fadeInUp wow">Популярные вопросы</h1>
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
            v-for="(item, i) in setFAQ"
            :key="i"
        >
          <v-expansion-panel-header>
            <h4 class="text-h6 font-weight-medium">{{ item.name }}</h4>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="fadeIn wow" data-wow-duration="1.5s">
            {{ item.text }}
            <!--            <v-row>-->
            <!--              <v-col cols="12" md="5">-->
            <!--                <v-img src="https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"></v-img>-->
            <!--              </v-col>-->
            <!--              <v-col cols="12" md="5">-->
            <!--                <v-img src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"></v-img>-->
            <!--              </v-col>-->
            <!--              <v-col cols="12" md="2">-->
            <!--                <v-img src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"></v-img>-->
            <!--              </v-col>-->
            <!--            </v-row>-->
          </v-expansion-panel-content>

        </v-expansion-panel>
      </v-expansion-panels>
    </v-skeleton-loader>
  </v-container>


</template>

<script>

export default {
  name: "buyers",
  components: {},
  computed: {
    loader() {
      return this.$store.state.loader
    },
    setFAQ() {
      return this.$store.getters.getFAQ
    }
  }
}
</script>

<style scoped>

</style>