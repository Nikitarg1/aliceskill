<template>
  <div>
    <Header color="brightBlue"/>
    <v-main style="padding: 0">
      <parallaxx/>
      <section class="py-24 ">
        <div class="container">
          <h3 class="text-h4 font-weight-regular text-center mb-4 wow fadeInUp">Кто мы?</h3>
          <p class="text-lg leading-8 wow fadeInUp text-justify" data-wow-offset="100">
            Rubble – это то что необходимо для каждого пользователя, который хочет получать всю актуальную информацию об
            этапе и технологии строительства купленного жилья. Кроме того, Rubble позволит вам просматривать демо этажи
            с помощью виртуальной реальности, благодаря чему вам не придесться тратить много времени на то чтобы
            посещать территорию строительства жилья. Именно с Rubble вы сможете упростить вашу жизнь и сэкономить много
            времени.
          </p>
        </div>
      </section>
      <section class="py-24 text-center">
        <div class="container">
          <h3 class="text-h4 font-weight-regular mb-4 wow fadeInUp">Алиса <span><img
              src="../../../assets/img/glavnaya/YandexLogo.png"
              alt="alica" width="44px" style="display: inline-block"></span></h3>
          <p class="text-lg leading-8 wow fadeInUp" data-wow-offset="100">
            Наша команда позаботилась об удобстве пользования нашим сервисом. Мы добавили новую функцую в Яндекс Алису!
            С помощью нее используя голосовые команды можно всегда узнавать актуальную информацию по постройке жилья. А
            также в будущем даже управлять своим аккаунтом.
          </p>
          <img src="../../../assets/img/glavnaya/colonra.png" alt="Alice mock" class="my-14 wow fadeInUp"
               data-wow-offset="100">
          <v-row>
            <v-col
                v-for="card in cards"
                :key="card.title"
                cols="12"
                sm="4"
            >
              <v-card
                  class="pa-2 transparent text-center wow fadeInUp"
                  data-wow-offset="100"
                  flat
              >
                <v-icon size="56" style="border: 5px solid #8DE0D7; border-radius: 50%; padding: 15px"
                        v-text="card.icon"></v-icon>
                <v-card-title class="font-weight-medium text-4xl justify-center" v-text="card.title"></v-card-title>
                <v-card-subtitle v-text="card.subtitle"></v-card-subtitle>
                <v-divider class="my-4 mx-auto" style="width: 70%"></v-divider>
                <v-card-text class="body-1" style="line-height: 2rem" v-text="card.text"></v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </section>
      <section class="py-24">
        <div class="container">
          <h3 class="text-h4 font-weight-regular text-center mb-24 wow fadeInUp">Новости строительства</h3>
          <!--                      <v-row >-->
          <!--                        <v-col-->
          <!--                            v-for="card in news"-->
          <!--                            :key="card.title"-->
          <!--                            :cols="card.flex"-->
          <!--                        >-->
          <!--                          <v-card>-->
          <!--                            <v-img-->
          <!--                                :src="card.src"-->
          <!--                                class="white&#45;&#45;text align-end"-->
          <!--                                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"-->
          <!--                                height="350px"-->
          <!--                            >-->
          <!--                              <v-card-title v-text="card.title"></v-card-title>-->
          <!--                            </v-img>-->

          <!--                            <v-card-actions>-->
          <!--                              <v-spacer></v-spacer>-->

          <!--                              <v-btn icon>-->
          <!--                                <v-icon>mdi-heart</v-icon>-->
          <!--                              </v-btn>-->

          <!--                              <v-btn icon>-->
          <!--                                <v-icon>mdi-bookmark</v-icon>-->
          <!--                              </v-btn>-->

          <!--                              <v-btn icon>-->
          <!--                                <v-icon>mdi-share-variant</v-icon>-->
          <!--                              </v-btn>-->
          <!--                            </v-card-actions>-->
          <!--                          </v-card>-->
          <!--                        </v-col>-->
          <!--                      </v-row>-->
          <v-row>
            <v-col cols="12">
              <v-card
                  min-width="150"
              >
                <v-img
                    src="https://kuprod.ru/picture/thumb/892834?original=1&crop=1&rev=1&k=Dlz8oxcVNEf4L_ZTN_Hkfg"
                    class="white--text align-end"
                    height="350px"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.4)"
                >
                  <v-card-title>Ремонт</v-card-title>
                </v-img>
                <v-card-subtitle class="pb-0">Недулю назад</v-card-subtitle>
                <v-card-text class="body-1 text--primary">В доме номер 10 на улице Архитектора Берша проводится работы
                  по замене труб
                </v-card-text>

                <v-card-actions>
                  <v-btn
                      color="saturatedBlue"
                      text
                  >
                    Поделиться
                  </v-btn>
                  <v-btn
                      color="saturatedBlue"
                      text
                  >
                    Читать
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
            <v-col
                v-for="card in news"
                :key="card.title"
                cols="12"
                md="6"

            >
              <v-card
                  min-width="150"
              >
                <v-img
                    :src="card.src"
                    class="white--text align-end"
                    height="350px"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.4)"
                >
                  <v-card-title v-text="card.title"></v-card-title>
                </v-img>
                <v-card-subtitle class="pb-0" v-text="card.number"></v-card-subtitle>
                <v-card-text class="body-1 text--primary" v-text="card.text">

                </v-card-text>

                <v-card-actions>
                  <v-btn
                      color="saturatedBlue"
                      text
                  >
                    Поделиться
                  </v-btn>
                  <v-btn
                      color="saturatedBlue"
                      text
                  >
                    Читать
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </section>
    </v-main>
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
  data: () => ({
    cards: [
      {
        icon: 'mdi-microphone',
        title: 'Взаимодействие',
        subtitle: 'Управление голосом',
        text: 'Испытайте новый опыт испоьзования телефоном. Управляйте голосом. Больше не нужно по долгу печатать однообразные сообщения, просто говорите!'
      },
      {
        icon: 'mdi-android',
        title: 'Удобство',
        subtitle: 'Без лишних приложений',
        text: 'Нашему сервису не нужно чтобы вы скачивали наше приложение. Просто откройте браузер на своем устройстве или вежливо попросите у Алисы :)'
      },
      {
        icon: 'mdi-currency-usd',
        title: 'Бесплатно',
        subtitle: 'Никаких наличных',
        text: 'Мы ничего не просим за наш сервис. Все распространяется бесплатно. Единственное за счет чего мы развиваемся - это вы, наши пользователи.'
      },
    ],
    news: [
      {
        title: 'Строительство',
        number: 'Час назад',
        text: 'Буквально только что был достроен 4 этаж дома на улице Майской',
        src: 'https://lifetambov.ru/assets/images/tickets/%D0%9A%D0%BE%D0%BC%D0%BC%D1%83%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F46%D1%84%D0%BE%D1%82%D0%BE/IMG_20190312_181327.jpg'
      },
      {
        title: 'Безопастность',
        number: 'Три дня назад',
        text: 'Закончили выгонять бомжей с технического этажа',
        src: 'https://31tv.ru/wp-content/uploads/2020/01/%D0%BF%D1%80%D0%B8%D1%8E%D1%825.jpg'
      },
    ],
  }),
}
</script>

<style scoped>
@media (min-width: 1904px) {
  .container {
    max-width: 1280px;
  }
}
</style>