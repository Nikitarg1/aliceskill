<template>
  <v-content>
    <Glavnaya/>
    <v-container style="height: 1500px;" class="bg-green-400"></v-container>
  </v-content>
</template>

<script>
import Glavnaya from "@/components/Page/Glavnaya/Glavnaya";

export default {
  name: "Maincontent",
  components: {
    Glavnaya
  },

}
</script>

<style>

</style>