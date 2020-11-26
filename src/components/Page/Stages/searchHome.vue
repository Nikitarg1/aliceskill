<template>
  <v-data-iterator
      :items="searchItem"
      :items-per-page.sync="itemsPerPage"
      :page="page"
      :search="search"
      :sort-by="sortBy.toLowerCase()"
      :sort-desc="sortDesc"
      hide-default-footer
  >
    <template v-slot:header>

      <v-row
          justify="center"
          align="center"
      >
        <v-col
            cols="12"
            md="4"
        >
          <v-text-field
              v-model="search"
              clearable
              outlined
              hide-details
              label="Поиск"
              color="textBrightBlue"
          ></v-text-field>
        </v-col>
        <v-col
            cols="12"
            md="4"
        >
          <v-select
              v-model="sortBy"
              outlined
              hide-details
              :items="keysRus"
              label="Фильтр"
              color="textBrightBlue"
          ></v-select>
        </v-col>
        <v-col
            cols="12"
            md="4"
        >
          <v-btn-toggle
              v-model="sortDesc"
              borderless
          >
            <v-btn
                large
                depressed
                block
                :value="false"
                color="textBrightBlue"
            >
              <v-icon>mdi-arrow-up</v-icon>
            </v-btn>
            <v-btn
                large
                block
                depressed
                :value="true"
                color="textBrightBlue"
            >
              <v-icon>mdi-arrow-down</v-icon>
            </v-btn>
          </v-btn-toggle>
        </v-col>
      </v-row>
    </template>

    <template v-slot:default="props">
      <v-row>
        <v-col
            v-for="item in props.items"
            :key="item.name"
            cols="12"
            sm="6"
            md="4"
            lg="4"
        >
          <router-link :to="'/houses/' + item.name">
            <v-card hover>
              <v-img
                  class="white--text align-end"
                  height="200"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.4)"
                  :src="item.img">
                <v-card-title class="subheading font-weight-bold">
                  {{ 'ЖК ' + item.name }}
                </v-card-title>
              </v-img>

              <v-card-subtitle class="pb-0">
                {{ item.address }}
              </v-card-subtitle>

              <v-card-text class="text--primary">
                <div v-for="(key, index) in filteredKeys"
                     :key="index">
                  <div :class="{ 'textBrightBlue--text': sortBy === key }">
                    {{ item[key.toLowerCase()] }}
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </router-link>
        </v-col>
      </v-row>
    </template>

    <template v-slot:footer>
      <v-row
          class="mt-2"
          align="center"
          justify="center"
      >
        <!--        <span class="grey&#45;&#45;text"></span>-->

        <!--        <v-menu offset-y>-->
        <!--          <template v-slot:activator="{ on, attrs }">-->
        <!--            <v-btn-->
        <!--                dark-->
        <!--                text-->
        <!--                color="brightBlue"-->
        <!--                class="ml-2"-->
        <!--                v-bind="attrs"-->
        <!--                v-on="on"-->
        <!--            >-->
        <!--              {{ itemsPerPage }}-->
        <!--              <v-icon>mdi-chevron-down</v-icon>-->
        <!--            </v-btn>-->
        <!--          </template>-->
        <!--          <v-list>-->
        <!--            <v-list-item-->
        <!--                v-for="(number, index) in itemsPerPageArray"-->
        <!--                :key="index"-->
        <!--                @click="updateItemsPerPage(number)"-->
        <!--            >-->
        <!--              <v-list-item-title>{{ number }}</v-list-item-title>-->
        <!--            </v-list-item>-->
        <!--          </v-list>-->
        <!--        </v-menu>-->

        <v-btn
            fab
            small
            color="textBrightBlue"
            class="mr-1"
            @click="formerPage"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <span
            class="mx-4
            grey--text"
        >
          {{ page }} из {{ numberOfPages }}
          </span>

        <v-btn
            fab
            small
            color="textBrightBlue"
            class="ml-1"
            @click="nextPage"
        >
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-row>
    </template>
  </v-data-iterator>
</template>

<script>
export default {
  name: "searchHome",
  data: () => ({
    itemsPerPageArray: [6, 9, 12],
    search: '',
    filter: {},
    sortDesc: false,
    page: 1,
    itemsPerPage: 6,
    sortBy: 'name',
    keysRus: [
      {text: 'Название', value: 'name'},
      {text: 'Застройщик', value: 'developer'},
      {text: 'Цена', value: 'price'},
    ],
    keys: [
      'name',
      'developer',
      'price',
    ],
    items: [
      {
        name: 'Лимонад',
        img: 'https://st.novostroy.su/regions/u/news/880x/5efb5a7997f76.jpg',
        address: 'ул. 9 января дом 23',
        developer: '1000 Этажей',
        price: 'от 1 750 000'
      },
      {
        name: 'Огни Ижевска',
        img: 'https://st.novostroy.su/regions/u/news/880x/5efb5a7997f76.jpg',
        address: 'ул. Ракетная дом 34',
        developer: 'Парус',
        price: 'от 2 000 000'
      },
      {
        name: 'Нью-Йорк',
        img: 'https://cdn.bfm.ru/news/maindocumentphoto/2020/02/24/zk.jpg',
        address: 'ул. Карала Маркса дом 23',
        developer: 'Калинка',
        price: 'от 2 500 000'
      },
      {
        name: 'Смуглянка из Ворошилова',
        img: 'https://novostroyka35.ru/assets/cache_image/assets/cities/vologda/doma/gorstrojzakazchik/zhk-lyubimyij-dom/1-14_825x510_ece.png',
        address: 'ул. Ворошилова дом 29',
        developer: 'КОМОССТРОЙ',
        price: 'от 3 000 000'
      },
      {
        name: 'Авангард Тауэр',
        img: 'https://news.novostroyki-ykt.ru/uploads/posts/2015-12/1449191884_1-1.jpg',
        address: 'ул. Труда дом 76',
        developer: 'КОМОССТРОЙ',
        price: 'от 3 500 000'
      },
    ],
  }),
  computed: {
    searchItem() {
      return this.$store.getters.searchItem
    },
    numberOfPages() {
      return Math.ceil(this.searchItem.length / this.itemsPerPage)
    },
    filteredKeys() {
      return this.keys.filter(keyss => keyss !== 'name')
    },
  },
  methods: {
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number
    },
  },
}
</script>

<style scoped>
.v-btn-toggle {
  width: 50%;
}
</style>