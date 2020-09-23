<template>
  <v-app>
    <LoadingScreen :isLoading="isLoading"/>
    <div v-if="!isLoading">
      <router-view></router-view>
      <Footer/>
    </div>
  </v-app>
</template>

<script>
import Footer from "@/components/Footer"
import LoadingScreen from '@/components/helpers/LoadingScreen'

export default {
  name: 'App',
  components: {
    Footer,
    LoadingScreen
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
        this.isLoading = false;
      }, 500);
    }
  }
}
</script>

<style>
.v-application {
  color: #4a5568;
}

.v-navigation-drawer {
  left: auto;
}
</style>