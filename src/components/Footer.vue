<template>
  <v-footer
      padless>
    <v-card
        flat
        tile
        class="text-center"
        width="100%">
      <v-card-text>
        <v-btn
            class="mx-4"
            icon>
          <v-icon size="24px">mdi-telegram</v-icon>
        </v-btn>
        <v-btn
            class="mx-4"
            icon>
          <v-icon size="24px">mdi-instagram</v-icon>
        </v-btn>
        <v-btn
            class="mx-4"
            icon>
          <v-icon size="24px">mdi-vk</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="pt-0">
        Сделано с любовью командой Rubble для всероссийского конкурса <a href="https://rukamifest.com/">Rukami</a>.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="">
        {{ new Date().getFullYear() }} — <strong>Rubble</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
name: "Footer"
}
</script>

<style scoped>
.theme--dark.v-footer {
  /* background-color: #272727; */
  color: #fff;
}

.theme--light.v-footer {
  /* background-color: #f5f5f5; */
  color: rgba(0, 0, 0, .87);
}
</style>