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
        :color="this.$vuetify.theme.dark ? darkBackgroundColor : lightBackgroundColor"
    >
      <template v-slot:prepend>
        <v-list-item></v-list-item>
        <transition name="slideLeftItem" enter-active-class="animated slideInRight navItemOne"
                    leave-active-class="animated slideOutLeft">
          <v-list-item class="mb-2" v-show="drawer">
            <h1 class="text-3xl montserrat-weight-bold logoBlack--text">Меню</h1>
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
        :color="this.$vuetify.theme.dark ? darkBackgroundColor : lightBackgroundColor"
    >
      <v-container>
        <v-row>
          <v-col cols="5" class="pa-sm-3 pa-0 animated navItemTwo"
                 :class="[animatedLogo ? 'slideInLeft' : 'slideOutLeft']">
            <router-link to="/">
              <v-toolbar-title class="logo logoBlack--text montserrat-weight-bold" v-show="updateLogo" v-cloak>Rubble
              </v-toolbar-title>
            </router-link>
          </v-col>
          <v-col cols="7" class="d-flex align-center justify-end pa-0">
            <ul class="navigation d-none d-sm-flex pl-0 listStyleType">
              <li v-for="item in liItems"
                  :key="item.name">
                <a :href="'/' + item.link" class="logoBlack--text text--primary" :style="item.style">{{ item.name }}</a>
              </li>
            </ul>

            <v-btn icon @click="setTheme">
              <v-icon>{{ this.$vuetify.theme.dark ? 'mdi-brightness-5' : 'mdi-brightness-4' }}</v-icon>
            </v-btn>

            <v-app-bar-nav-icon class="d-block d-sm-none" @click.stop="drawer = true"></v-app-bar-nav-icon>
          </v-col>
        </v-row>
      </v-container>


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

    <v-app-bar fixed style="backdrop-filter: blur(10px); background-color: transparent; z-index: 4" flat
               app></v-app-bar>

    <div class="d-block d-sm-none" style="width: 25px; height: 100%; position: fixed; z-index: 3; right: 0;"
         v-touch="{left: () => this.drawer = true}"
    ></div>
    <!--    Свайп для бокового меню-->

  </div>
</template>

<script>

export default {
  props: ['isLoading', 'valueProgress'],
  name: "testHeader",
  data: () => ({
    drawer: false,
    animatedLogo: false,
    updateLogo: false,
    darkBackgroundColor: 'rgba(64,180,173, 1)',
    lightBackgroundColor: 'rgba(80, 225, 216, 1)',
    liItems: [
      {link: '', name: 'Главная', icon: 'mdi-home', class: 'navItemTwo animated slideInRight'},
      {link: 'houses', name: 'Мой дом', icon: 'mdi-book-multiple', class: 'navItemTree animated slideInRight'},
      {
        link: 'buyers',
        name: 'Покупателю',
        icon: 'mdi-account-multiple',
        class: 'navItemFive animated slideInRight',
        disabled: 'true',
        style: 'margin-right: 16px;'
      }
    ]
  }),
  mounted() {
    const theme = localStorage.getItem("isDark");
    if (theme) {
      this.$vuetify.theme.dark = theme === "true";
    }
    window.addEventListener("scroll", this.onScroll);
  },
  methods: {
    setTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("isDark", this.$vuetify.theme.dark.toString());
    },
    onScroll(e) {
      this.number = e.target.documentElement.scrollTop;
      this.handleScroll(this.number);
    },
    handleScroll(number1) {
      if (number1 >= 64)
        if (this.$vuetify.theme.dark) {
          this.darkBackgroundColor = 'rgba(64,180,173, .7)'
          this.animatedLogo = this.updateLogo = true
        } else {
          this.lightBackgroundColor = 'rgba(80, 225, 216, .7)'
          this.animatedLogo = this.updateLogo = true
        }

      else if (this.$vuetify.theme.dark) {
        this.darkBackgroundColor = 'rgba(64,180,173, 1)'
        this.animatedLogo = false
      } else {
        this.lightBackgroundColor = 'rgba(80, 225, 216, 1)'
        this.animatedLogo = false
      }
    },
  },
  destroyed() {
    this.updateLogo = false
  }
}
</script>

<style scoped>
[v-cloak] {
  display: none;
}

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
  font-size: 2.1em;
}

.disabledItem {
  pointer-events: none;
  cursor: default;
}

.navigation li a {
  margin-right: 40px;
}

.listStyleType {
  list-style: none;
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