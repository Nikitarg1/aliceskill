<template>
  <div style="padding-top: 64px">
    <div v-if="item">
      <v-container>
        <v-row
            justify="center"
            align="center"
        >
          <v-col cols="12" md="6">
            <v-card>
              <v-img
                  class="white--text align-end"
                  height="200"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.4)"
                  :src="item.img">
                <v-card-title class="subheading font-weight-bold">
                  {{ 'ЖК ' + item.name }}
                </v-card-title>
              </v-img>

              <v-card-subtitle class="pb-0">
                {{ item.address }}
              </v-card-subtitle>

              <v-card-text>
                <p>{{ item.price }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>


    </div>
    <Error v-else/>
  </div>
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