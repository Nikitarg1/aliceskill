<template>
  <v-slide-group
      v-model="model"
      center-active
  >
    <v-slide-item
        v-for="(item, index) in item.slider"
        :key="index"
        v-slot="{ active, toggle }"
    >

      <v-card
          rounded
          class="ma-3"
          height="400"
          width="370"
          @click="toggle"
          elevation="5"
      >
        <v-skeleton-loader
            width="370"
            height="400"
            type="image, article"
            :loading="loader">
          <v-img
              :src="item.img"
              class="rounded"
              max-height="200"
          ></v-img>
          <div class="ma-5">
            <div class="textBrightBlue--text text-h6 text-sm-h5 font-weight-bold mb-2">{{ item.name }}</div>
            <div>{{ item.info }}</div>
          </div>
        </v-skeleton-loader>
      </v-card>

    </v-slide-item>
  </v-slide-group>
</template>

<script>

export default {
  props: ['item', 'context'],
  name: "itemSwiper",
  data: () => ({
    model: null,
  }),
  computed: {
    loader() {
      return this.$store.state.loader
    }
  }
}

</script>

<style scoped>

</style>