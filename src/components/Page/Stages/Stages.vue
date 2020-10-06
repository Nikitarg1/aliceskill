<template>
  <div>
    <div class="container" style="margin-top: 64px;">
      <searchHome/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from "@/components/Footer"
import searchHome from "@/components/Page/Stages/searchHome";

export default {
  name: "Stages",
  components: {
    Footer,
    searchHome
  },
  data: () => ({}),
}
</script>

<style scoped>
@media (min-width: 1904px) {
  .container {
    max-width: 1280px;
  }
}
</style>