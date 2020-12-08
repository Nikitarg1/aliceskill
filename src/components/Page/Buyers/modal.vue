<template>
  <v-row justify="center">
    <v-dialog
        v-model="dialogVisible"
        @click:outside="$emit('close')"
        max-width="700"
    >

      <v-card flat>

        <v-img
            :src="dialogData.src"
            class="white--text align-stretch"
            max-height="350px"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.4)"
        >
          <div class="d-flex flex-row-reverse pa-2">
            <v-btn icon dark @click="$emit('close')">
              <v-icon large>mdi-close</v-icon>
            </v-btn>
          </div>
        </v-img>
        <v-card-title v-text="dialogData.title" class="text-h5 font-weight-bold px-3"></v-card-title>
        <v-card-subtitle class="pb-3 pt-1 px-3" v-text="dialogData.number"></v-card-subtitle>
        <v-card-text class="body-1 px-3" v-text="dialogData.text"></v-card-text>
        <v-card-text class="body-1 px-3" v-text="dialogData.longText"></v-card-text>
      </v-card>

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

</style>