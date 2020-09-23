<template>
  <v-app>
    <LoadingScreen :isLoading="isLoading"/>
    <router-view v-show="!isLoading"></router-view>
  </v-app>
</template>

<script>
import LoadingScreen from '@/components/helpers/LoadingScreen'

export default {
  name: 'App',
  components: {
    LoadingScreen,
  },
  data: () => ({
    isLoading: false
  }),
  watch: {
    $route: 'fetchData'
  },
  methods: {
    fetchData() {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
      }, 500);
    }
  }
}
</script>

<style>
.v-application {
  color: #4a5568;
}
</style>