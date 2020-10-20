<template>
  <v-row align="center" justify="center" style="min-height: 60vh">
    <v-col cols="6" class="text-center">
      <h1 style="font-size: 2em">Произашла ошибка!!!</h1>
      <router-link to="/" tag="a">На главную</router-link>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Error"
}
</script>

<style scoped>

</style>