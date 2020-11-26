<template>
    <div v-if="item">

      <div class="container">
        <v-img dark
               :src="item.img"
               class="align-start justify-center rounded"
               height="60vh"
               gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,.2)"
        >
          <div class="container pl-12 pt-12">
            <div class="col-sm-7 col-12">
              <h1 class="mb-6 text-h3 font-weight-bold">Найди свой дом!</h1>
              <p class="" style="font-size: 1.225rem">
                Пользуйся удобными фильтрами чтобы найти свой дом
              </p>
            </div>
          </div>
        </v-img>
      </div>

      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="6" class="bg-blue-400">
            <h1>ЖК {{ item.name }}</h1>

          </v-col>
          <v-col cols="6" class="bg-green-400"></v-col>
        </v-row>
      </v-container>
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