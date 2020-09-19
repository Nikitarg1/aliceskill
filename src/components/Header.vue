<template>
  <div class="splashNav fixed">
    <div class="headerSize"
         :class="[letsScroll ? 'isScroll' : '', background]"
    ></div>
    <header class="container">
      <a href="" class="logo" style="color: #4a5568">Rubble</a>
      <v-btn @click="togglerMenu = !togglerMenu" class="togglerMenu hidden-md-and-up"
             :class="{ 'activeMenu' : togglerMenu }"
             icon
             x-large>
        <v-icon>{{ togglerMenu ? 'mdi-close' : 'mdi-menu' }}</v-icon>
      </v-btn>
      <ul class="navigation pl-0"
          :class="[togglerMenu ? 'activeMenu' : '', togglerMenu ? background : '']"
      >
        <li><a href="#">Главная</a></li>
        <li><a href="#">Этапы</a></li>
        <li><a href="#">Технологии</a></li>
        <li><a href="#">Покупатели</a></li>
      </ul>
    </header>
  </div>
</template>

<script>
export default {
  props: ['color'],
  name: "Header",
  data: () => ({
    letsScroll: false,
    togglerMenu: false,
    number: 0,

  }),
  computed: {
    background: function () {
      switch (this.color) {
        case 'brightBlue':
          return 'header__color__blue';
        case 'green':
          return 'header__color__green';
        default:
          return 'header__color__green'
      }
    }
  },
  mounted() {

    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll(e) {
      this.number = e.target.documentElement.scrollTop;
      this.handleScroll(this.number);
    },
    handleScroll(number1) {
      if (number1 >= 1) {
        this.letsScroll = true
      } else if (number1 <= 100) {
        this.letsScroll = false
      }
    }
  }
}
</script>

<style scoped>

.header__color__blue {
  background-color: rgba(80, 225, 216, .7);
}

.header__color__green {
  background-color: rgba(171, 224, 94, .7);
}

.headerSize {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: calc(100vh - 68px);
  transition: backdrop-filter .20s cubic-bezier(.4, 0, .2, 1), box-shadow .20s cubic-bezier(.4, 0, .2, 1), max-width .25s cubic-bezier(.4, 0, .2, 1), width .25s cubic-bezier(.4, 0, .2, 1);
}

.fixed {
  z-index: 100;
}

.isScroll {
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12);
  backdrop-filter: blur(10px);
}

.splashNav {
  /*position: relative;*/
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header .logo {
  position: relative;
  letter-spacing: 1px;
  font-size: 2em;
  color: #4a5568;
  text-decoration: none;
  font-weight: 700;
}

header .navigation {
  position: relative;
  display: flex;
}

header .navigation li {
  list-style: none;
}

header .navigation li a {
  display: inline-block;
  color: #4a5568;
  margin-right: 40px;
  text-decoration: none;
}

header .navigation li a:hover {
  color: #816b14;
}

@media (max-width: 959px) {
  header {
    padding: 10px 3vw;
  }

  header .navigation {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    backdrop-filter: blur(10px);
    z-index: 100;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: none;
  }

  header .navigation.activeMenu {
    display: flex;
  }

  header .navigation li a {
    font-size: 24px;
    font-weight: 700;
    margin: 10px 0;
  }

  .togglerMenu {
    position: relative;
    width: 30px;
    height: 30px;
    cursor: pointer;
    z-index: 101;
  }
}
</style>