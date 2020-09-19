<template>
  <div class="container--fluid jarallax pa-md-16" style="height: 80vh">
    <img class="jarallax-img" src="../../../assets/img/glavnaya/bg-header11.png" alt="">
    <div class="container" style="padding-top: 64px">
      <div class="col-lg-6 col-md-8 col-sm-8 pl-md-16 pl-sm-5 pt-16 text-gray-700">
        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 font-medium leading-tight">Мы стираем границы!</h1>
        <p class="text-lg" style="font-size: 1.125rem">
          Узнавайте всю актуальную информацию о стройке вашей квартире самым удобным способом с помощью Rubble и
          Яндекс Алисы.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Parallaxx',
  data: () => ({}),
}
</script>

<style>

.jarallax {
  position: relative;
  z-index: 0;
}

.jarallax > .jarallax-img {
  position: absolute;
  object-fit: cover;
  font-family: 'object-fit: cover;';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>