<template>

    <div v-if="item">
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