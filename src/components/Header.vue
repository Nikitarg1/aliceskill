<template>
  <div>
    <v-navigation-drawer
        app
        right
        fixed
        v-model="drawer"
        disable-resize-watcher
        width="225"
        color="gray"
    >
      <template v-slot:prepend>
        <v-list-item class="py-4">
          <img src="../assets/img/glavnaya/logo.png" alt="">
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list
          nav
          dense
      >
        <v-list-item-group>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Главная</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
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

      <template v-slot:append>
        <div class="pb-4 text-center">
          <v-btn icon large>
            <v-icon>mdi-telegram</v-icon>
          </v-btn>
          <v-btn icon large>
            <v-icon>mdi-instagram</v-icon>
          </v-btn>
          <v-btn icon large>
            <v-icon>mdi-vk</v-icon>
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar
        app
        elevate-on-scroll
        class="blur"
        :class="{ 'isScroll' : letsScroll }"
        :color="background"
        fixed
    >
      <v-toolbar-title class="logo md:pl-40">Rubble</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon class="d-block d-sm-none" @click="drawer = true"></v-app-bar-nav-icon>
      <ul class="navigation d-none d-sm-flex md:pr-18">
        <li><a href="#">Главная</a></li>
        <li><a href="#">Этапы</a></li>
        <li><a href="#">Технологии</a></li>
        <li><a href="#">Покупатели</a></li>
      </ul>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  props: ['color'],
  name: "testHeader",
  data: () => ({
    letsScroll: false,
    togglerMenu: false,
    drawer: false,

  }),
  computed: {
    background: function () {
      switch (this.color) {
        case 'brightBlue':
          return 'rgba(80, 225, 216, .7)';
        case 'green':
          return 'rgba(171, 224, 94, .7)';
        default:
          return 'rgba(171, 224, 94, .7)'
      }
    }
  },
}
</script>

<style scoped>
.blur {
  backdrop-filter: blur(10px);
}

.logo {
  letter-spacing: 1px;
  font-size: 2em;
  color: #4a5568;
  text-decoration: none;
  font-weight: 600;
}

.navigation li a {
  color: #4a5568;
  margin-right: 40px;
}
</style>