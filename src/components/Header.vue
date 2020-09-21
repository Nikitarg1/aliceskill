<template>
  <div>
    <v-navigation-drawer
        right
        fixed
        style="z-index: 7"
        v-model="drawer"
        disable-resize-watcher
        width="225"
        :color="this.$vuetify.theme.dark ? backgroundDark : background"
    >
      <template v-slot:prepend>
        <v-list-item class="py-4">
          <img src="../assets/img/glavnaya/logo.png" alt="Rubble logo">
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


    <v-navigation-drawer
        right
        fixed
        style="z-index: 6; background-color: transparent"
        class="navBlur"
        v-model="drawer"
        disable-resize-watcher
        width="225"
    >
      <!--    <div v-if="drawer" class="navBlur v-navigation-drawer"></div>-->
    </v-navigation-drawer>

    <v-app-bar
        fixed
        elevate-on-scroll
        :color="this.$vuetify.theme.dark ? backgroundDark : background">

      <v-toolbar-title class="logo md:pl-40 logoBlack--text">Rubble</v-toolbar-title>

      <v-spacer></v-spacer>

      <ul class="navigation d-none d-sm-flex md:pr-18">
        <li><a href="#" class="logoBlack--text">Главная</a></li>
        <li><a href="#" class="logoBlack--text">Этапы</a></li>
        <li><a href="#" class="logoBlack--text">Технологии</a></li>
        <li><a href="#" class="logoBlack--text" style="margin-right: 16px;">Покупатели</a></li>
      </ul>

      <v-btn icon @click="setTheme">
        <v-icon>{{ this.$vuetify.theme.dark ? 'mdi-brightness-5' : 'mdi-brightness-4' }}</v-icon>
      </v-btn>

      <v-app-bar-nav-icon class="d-block d-sm-none" @click="drawer = true"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-app-bar fixed style="backdrop-filter: blur(10px); background-color: transparent; z-index: 4" flat>

    </v-app-bar>
  </div>
</template>

<script>
export default {
  props: ['color'],
  name: "testHeader",
  data: () => ({
    togglerMenu: false,
    drawer: false,
  }),
  computed: {
    background: function () {
      switch (this.color) {
        case 'brightBlue':
          return 'rgba(80, 225, 216, .7)';
        case 'brightGreen':
          return 'rgba(171, 224, 94, .7)';
        default:
          return 'rgba(171, 224, 94, .7)'
      }
    },
    backgroundDark: function () {
      switch (this.color) {
        case 'brightBlue':
          return 'rgba(64,180,173,.7)';
        case 'brightGreen':
          return 'rgba(171, 224, 94, .7)';
        default:
          return 'rgba(171, 224, 94, .7)'
      }
    },
  },
  mounted() {
    const theme = localStorage.getItem("isDark");
    if (theme) {
      this.$vuetify.theme.dark = theme === "true";
    }
  },
  methods: {
    setTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("isDark", this.$vuetify.theme.dark.toString());
    }
  }
}
</script>

<style scoped>

.navBlur {
  backdrop-filter: blur(3px);
  z-index: 6;
}

.logo {
  letter-spacing: 1px;
  font-size: 2em;
  text-decoration: none;
  font-weight: 600;
}

.navigation li a {
  margin-right: 40px;
}
</style>