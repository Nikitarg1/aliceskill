<template>
  <div>
    <v-navigation-drawer
        app
        right
        fixed
        style="z-index: 7;left: auto;"
        v-model="drawer"
        disable-resize-watcher
        width="225"
        :color="this.$vuetify.theme.dark ? backgroundDark : background"
    >
      <template v-slot:prepend>
        <v-list-item></v-list-item>
        <transition name="slideLeftItem" enter-active-class="animated slideInRight navItemOne"
                    leave-active-class="animated slideOutLeft">
          <v-list-item class="mb-2" v-show="drawer">
            <h1 class="text-3xl font-weight-bold logoBlack--text">Меню</h1>
          </v-list-item>
        </transition>
      </template>
      <v-list
          nav
          dense>
        <v-list-item-group>
          <router-link :to="'/' + item.link" v-for="item in liItems" :key="item.name" style="color: inherit;">
            <transition name="slideLeftItem" :enter-active-class="item.class"
                        leave-active-class="animated slideOutLeft">
              <v-list-item v-show="drawer">
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-title>{{ item.name }}</v-list-item-title>
              </v-list-item>
            </transition>
          </router-link>
        </v-list-item-group>
      </v-list>

      <template v-slot:append>
        <transition name="slideLeftItem" enter-active-class="animated slideInRight navItemSix"
                    leave-active-class="animated slideOutLeft">
          <div class="pb-4 text-center" v-show="drawer">
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
        </transition>
      </template>
    </v-navigation-drawer>

    <transition name="slideLeft">
      <div v-if="drawer" class="navBlur"></div>
    </transition>

    <v-app-bar
        app
        fixed
        elevate-on-scroll
        :color="this.$vuetify.theme.dark ? backgroundDark : background">

      <v-toolbar-title class="logo md:pl-40 logoBlack--text">Rubble</v-toolbar-title>

      <v-spacer></v-spacer>

      <ul class="navigation d-none d-sm-flex md:pr-18">
        <li v-for="item in liItems"
            :key="item.name">
          <a :href="'/' + item.link" class="logoBlack--text" :style="item.style">{{ item.name }}</a>
        </li>
      </ul>

      <v-btn icon @click="setTheme">
        <v-icon>{{ this.$vuetify.theme.dark ? 'mdi-brightness-5' : 'mdi-brightness-4' }}</v-icon>
      </v-btn>

      <v-app-bar-nav-icon class="d-block d-sm-none" @click.stop="drawer = true"></v-app-bar-nav-icon>

      <v-progress-linear
          :active="isLoading"
          buffer-value="100"
          v-model="valueProgress"
          style="position: absolute"
          absolute
          bottom
          rounded
          color="blue"
      ></v-progress-linear>

    </v-app-bar>

    <v-app-bar fixed style="backdrop-filter: blur(10px); background-color: transparent; z-index: 4" flat></v-app-bar>

    <div style="width: 150px; height: 100%; position: fixed; z-index: 3; right: 0;"
         v-touch="{left: () => drawer = true}"
    ></div>
    <!--    Свайп для бокового меню-->

  </div>
</template>

<script>
export default {
  props: ['color', 'isLoading', 'valueProgress'],
  name: "testHeader",
  data: () => ({
    drawer: false,
    liItems: [
      {link: '', name: 'Главная', icon: 'mdi-home', class: 'navItemTwo animated slideInRight'},
      {link: 'stages', name: 'Этапы', icon: 'mdi-book-multiple', class: 'navItemTree animated slideInRight'},
      {link: 'technology', name: 'Технологии', icon: 'mdi-cog', class: 'navItemFour animated slideInRight'},
      {
        link: 'buyers',
        name: 'Покупатели',
        icon: 'mdi-account-multiple',
        class: 'navItemFive animated slideInRight',
        style: 'margin-right: 16px;'
      }
    ]
  }),
  computed: {
    background: function () {
      switch (this.color) {
        case 'brightBlue':
          return 'rgba(80, 225, 216, .7)'
        case 'brightGreen':
          return 'rgba(171, 224, 94, .7)'
        default:
          return 'rgba(171, 224, 94, .7)'
      }
    },
    backgroundDark: function () {
      switch (this.color) {
        case 'brightBlue':
          return 'rgba(64,180,173,.7)'
        case 'brightGreen':
          return 'rgba(171, 224, 94, .7)'
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
  position: fixed;
  top: 0;
  right: 0;
  width: 225px;
  height: 100%;
  backdrop-filter: blur(10px);
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

.navItemOne {
  --animate-duration: 300ms;
}

.navItemTwo {
  --animate-duration: 350ms;
}

.navItemTree {
  --animate-duration: 400ms;
}

.navItemFour {
  --animate-duration: 450ms;
}

.navItemFive {
  --animate-duration: 500ms;
}

.navItemSix {
  --animate-duration: 550ms;
}

.slideLeft-enter-active, .slideLeft-leave-active {
  transition: transform cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.2s;
}

.slideLeft-enter, .slideLeft-leave-to {
  transform: translateX(100%);
}
</style>