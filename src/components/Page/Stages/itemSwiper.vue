<template>
  <v-slide-group
      v-model="model"
      center-active
  >
    <v-slide-item
        v-for="(i, index) in item.slider"
        :key="index"
        v-slot="{ active, toggle }"
    >

      <v-card
          rounded
          class="ma-3"
          min-height="400"
          :width="widthItem"
          @click="toggle"
          elevation="5"
      >
        <v-skeleton-loader
            :width="widthItem"
            min-height="400"
            type="image, article"
            :loading="loader">
          <v-img
              :src="i.img"
              class="rounded"
              max-height="200"
          ></v-img>
          <div class="ma-5">
            <div class="textBrightBlue--text text-h6 text-sm-h5 font-weight-bold mb-2">{{ i.name }}</div>
            <div>{{ i.info }}</div>
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
    model: null
  }),
  computed: {
    loader() {
      return this.$store.state.loader
    },
    widthItem() {
      if (this.$vuetify.breakpoint.mobile)
        return 300
      else return this.item.slider.length <= 3 ? 394 : 370
    }
  },
  methods: {
    //   widthItem() {
    //     if (this.$vuetify.breakpoint.mobile)
    //       return this.width += 250
    //     else return this.width += this.item.slider.length <= 3 ? '400' : '370'
    //   }
    // }
  }
}

</script>

<style scoped>

</style>