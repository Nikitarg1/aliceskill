<template>
  <div v-if="item">

    <div class="container">
      <v-img dark
             :src="item.img"
             class="align-start justify-center rounded"
             height="60vh"
             gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,.2)"
      >
        <div class="container pl-16 pt-16">
          <div class="col-sm-7 col-12">
            <p class="text-h3 mb-0">Жилой комплекс</p>
            <p class="text-h2 font-weight-medium mb-2">{{ item.name }}</p>
            <p class="font-weight-light" style="font-size: 1.225rem">
              Уникальный проект бизнес-класса
            </p>
          </div>
        </div>
      </v-img>
    </div>

    <!--    <v-container>-->
    <!--      <v-row align="center" justify="center">-->
    <!--        <v-col cols="6" class="bg-blue-400">-->
    <!--          <h1>ЖК {{ item.name }}</h1>-->

    <!--        </v-col>-->
    <!--        <v-col cols="6" class="bg-green-400"></v-col>-->
    <!--      </v-row>-->
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
    }
  },
}
</script>

<style scoped>

</style>