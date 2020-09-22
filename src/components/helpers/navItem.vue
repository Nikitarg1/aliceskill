<template>
  <v-list
      nav
      dense
  >
    <v-list-item-group>

      <transition name="slideLeftItem"
                  enter-active-class="animated slideInRight"
                  leave-active-class="animated slideOutLeft"
                  :duration="1000"
      >
        <v-list-item v-if="this.drawer">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Главная</v-list-item-title>
        </v-list-item>
      </transition>

      <v-list-item>
        <v-list-item-icon class="wow slideInLeft">
          <v-icon>mdi-book-multiple</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Этапы</v-list-item-title>
      </v-list-item>

      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-cog</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Технологии</v-list-item-title>
      </v-list-item>

      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-account-multiple</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Покупатели</v-list-item-title>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  name: "navItem",
  data: () => ({}),
  computed: {},
}
</script>

<style scoped>

</style>