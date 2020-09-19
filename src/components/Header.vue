<template>
  <v-app-bar
      fixed
      elevate-on-scroll
      class="splashNav"
      color="rgba(80, 225, 216, .7)"
      :class="{ 'isScroll' : letsScroll }"
  >

    <v-toolbar-title class="logo pl-16">Rubble</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-app-bar-nav-icon
        x-large
        @click="togglerMenu = !togglerMenu"
        class="hidden-md-and-up z-10"
        :class="{ 'activeMenu' : togglerMenu }"
    >
      <v-icon>{{ togglerMenu ? 'mdi-close' : 'mdi-menu' }}</v-icon>
    </v-app-bar-nav-icon>

    <ul class="navigation pl-0"
        :class="[togglerMenu ? 'activeMenu' : '', togglerMenu ? background : '']"
    >
      <li><a href="#">Главная</a></li>
      <li><a href="#">Этапы</a></li>
      <li><a href="#">Технологии</a></li>
      <li><a href="#">Покупатели</a></li>
    </ul>


    <!--<v-btn @click="togglerMenu = !togglerMenu" class=" hidden-md-and-up"-->
    <!--       :class="{ 'activeMenu' : togglerMenu }"-->
    <!--       icon-->
    <!--       x-large>-->

    <!--</v-btn>-->


    <!--    <div class="" >-->
    <!--      &lt;!&ndash;    <div class="headerSize"&ndash;&gt;-->
    <!--      &lt;!&ndash;         &ndash;&gt;-->
    <!--      &lt;!&ndash;    ></div>&ndash;&gt;-->
    <!--      <header class="container">-->
    <!--        -->
    <!--      </header>-->
    <!--    </div>-->
  </v-app-bar>
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
      this.letsScroll = number1 >= 1
    }
  }
}
</script>

<style>

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

.isScroll {
  backdrop-filter: blur(10px);
}

.splashNav {
  transition: backdrop-filter .20s cubic-bezier(.4, 0, .2, 1);
  /*position: relative;*/
  /*width: 100%;*/
  /*display: flex;*/
  /*justify-content: flex-start;*/
  /*align-items: center;*/
}

/*header {*/
/*  display: flex;*/
/*  align-items: center;*/
/*}*/

.logo {
  letter-spacing: 1px;
  font-size: 2em;
  color: #4a5568;
  text-decoration: none;
  font-weight: 700;
}

.navigation {
  position: relative;
  display: flex;

}


.navigation ul {
  position: absolute;
  top: 50%;
  right: 20px;
  margin: 0;
  padding: 0;
  transform: translateY(-50%);
}

.navigation ul li {
  display: inline-block;
  vertical-align: middle;
  list-style: none;
}

.navigation li a {
  color: #4a5568;
  margin-right: 40px;
  text-decoration: none;
}

/*.navigation li a:hover {*/
/*  color: #816b14;*/
/*}*/

@media (max-width: 959px) {
  .navigation ul {
    display: none;
    position: relative;
    top: 0;
    right: 0;
    transform: none;
  }

  .navigation {
    position: relative;
    top: 0;
    left: 0;
    /*backdrop-filter: blur(10px);*/
    /*z-index: 100;*/
    justify-content: end;
    align-items: center;
    flex-direction: column;
    display: none;
  }

  .navigation.activeMenu {
    display: block;
  }

  /*.navigation li a {*/
  /*  font-size: 24px;*/
  /*  font-weight: 700;*/
  /*  margin: 10px 0;*/
  /*}*/
  .navigation ul li {
    display: block;
    text-align: center;
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