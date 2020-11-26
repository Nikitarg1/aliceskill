<template>
  <v-app>
    <Header :isLoading="isLoading" :valueProgress="valueProgress"></Header>
    <v-main app v-if="!isLoading">
      <router-view></router-view>
    </v-main>
    <Footer v-if="!isLoading"/>
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
      this.valueProgress = 0
      clearInterval(this.interval)

      this.interval = setInterval(() => {
        this.valueProgress += 33
      }, 200)

      setTimeout(() => {
        this.isLoading = false
      }, 600);
    }
  }
}
</script>

<style>
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