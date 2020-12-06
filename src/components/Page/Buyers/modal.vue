<template>
  <v-row justify="center">
    <v-dialog
        v-model="dialogVisible"
        @click:outside="$emit('close')"
        max-width="600"
    >
      <div class="pa-5 blurBg">
        <div class="d-flex flex-row-reverse">
          <v-btn icon dark @click="$emit('close')">
            <v-icon large>mdi-close</v-icon>
          </v-btn>
        </div>
        <v-card flat dark color="transparent">
          <v-img
              :src="dialogData.src"
              class="white--text align-end"
              height="350px"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.4)"
          >
            <v-card-title v-text="dialogData.title" class="text-h5 font-weight-medium"></v-card-title>
          </v-img>
          <v-card-subtitle class="pb-0" v-text="dialogData.number"></v-card-subtitle>
          <v-card-text class="body-1 white--text" v-text="dialogData.text"></v-card-text>
        </v-card>
      </div>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: ["dialogData", "dialogVisible"],
  name: "modal",
  data: () => ({}),
}
</script>

<style scoped>
.blurBg {
  backdrop-filter: blur(10px);
  background-color: transparent;
}
</style>