<template>
  <v-app>
    <Header :isLoading="isLoading" :valueProgress="valueProgress"
            :color="this.$route.path==='/' ? 'brightBlue' : 'brightGreen'"></Header>
    <router-view v-if="!isLoading"></router-view>
  </v-app>
</template>

<script>
import Header from "@/components/Header";


export default {
  name: 'App',
  components: {
    Header
  },
  data: () => ({
    isLoading: false,
    valueProgress: 0,
    interval: 0
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
        this.valueProgress += 25
      }, 300)

      setTimeout(() => {
        this.isLoading = false
      }, 1500);
    }
  }
}
</script>

<style>
.v-application {
  color: #4a5568;
}
</style>