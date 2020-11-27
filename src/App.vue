<template>
  <v-app>
    <Header :isLoading="isLoading" :valueProgress="valueProgress"></Header>
    <v-main app>
      <router-view></router-view>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data: () => ({
    isLoading: false,
    letsScroll: false,
    valueProgress: 0,
    interval: 0,
  }),
  watch: {
    $route: 'fetchData',
  },
  methods: {
    fetchData() {
      this.isLoading = true
      this.$store.state.loader = true
      this.valueProgress = 0
      clearInterval(this.interval)

      this.interval = setInterval(() => {
        this.valueProgress += 10
      }, 200)

      setTimeout(() => {
        this.isLoading = false
        this.$store.state.loader = false
      }, 2000);
    }
  }
}
</script>

<style>
.montserrat-weight-thin {
  font-weight: 100 !important;
}

.montserrat-weight-extra-light {
  font-weight: 200 !important;
}

.montserrat-weight-light {
  font-weight: 300 !important;
}

.montserrat-weight-regular {
  font-weight: 400 !important;
}

.montserrat-weight-medium {
  font-weight: 500 !important;
}

.montserrat-weight-semi-bold {
  font-weight: 600 !important;
}

.montserrat-weight-bold {
  font-weight: 700 !important;
}

.montserrat-weight-extra-bold {
  font-weight: 800 !important;
}

.montserrat-weight-black {
  font-weight: 900 !important;
}

.v-application {
  color: #4a5568;
}

.v-application a {
  text-decoration: none;
}

@media (min-width: 1904px) {
  .container {
    max-width: 1280px;
  }
}
</style>