<template>
  <div>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Footer from "@/components/Footer"

export default {
  name: "MainWrapper",
  components: {
    Footer
  }
}
</script>

<style scoped>

</style>