<template>
  <div class="">
    <!--    <Header color="brightBlue"/>-->

    <!--    <v-navigation-drawer app>-->
    <!--      <navigationDrawer/>-->
    <!--    </v-navigation-drawer>-->


    <Header color="brightBlue"/>
    <parallaxx/>
    <section class="py-24 ">
      <div class="container">
        <h3 class="text-h4 font-weight-regular text-center mb-4 wow fadeInUp">Кто мы?</h3>
        <p class="text-lg leading-8 wow fadeInUp" data-wow-offset="100">
          Rubble – это то что необходимо для каждого пользователя, который хочет получать всю актуальную информацию об
          этапе и технологии строительства купленного жилья. Кроме того, Rubble позволит вам просматривать демо этажи
          с помощью виртуальной реальности, благодаря чему вам не придесться тратить много времени на то чтобы
          посещать территорию строительства жилья. Именно с Rubble вы сможете упростить вашу жизнь и сэкономить много
          времени.
        </p>
      </div>
    </section>
    <section class="py-24 bg-gray-200 text-center">
      <div class="container">
        <h3 class="text-h4 font-weight-regular mb-4 wow fadeInUp">Алиса <span><img
            src="https://yastatic.net/s3/lpc/157a5f71-5875-4904-966e-9e5dcc929971.png"
            alt="alica" width="44px" style="display: inline-block"></span></h3>
        <p class="text-lg leading-8 wow fadeInUp" data-wow-offset="100">
          Наша команда позаботилась об удобстве пользования нашим сервисом. Мы добавили новую функцую в Яндекс Алису!
          С помощью нее используя голосовые команды можно всегда узнавать актуальную информацию по постройке жилья. А
          также в будущем даже управлять своим аккаунтом.
        </p>
        <img src="../../../assets/img/glavnaya/colonra.png" alt="Alice mock" class="mt-14 wow fadeInUp"
             data-wow-offset="100">
      </div>
    </section>
  </div>
</template>

<script>
import Parallaxx from "@/components/Page/Glavnaya/Parallaxx";
import Header from '@/components/Header'

export default {
  name: "Glavnaya",
  components: {
    Parallaxx,
    Header,
  },
}
</script>

<style scoped>

</style>