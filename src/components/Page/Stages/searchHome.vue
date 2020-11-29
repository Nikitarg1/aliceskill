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

              <v-skeleton-loader
                  max-width="400"
                  max-height="350"
                  type="image, article"
                  :loading="loader">

                <v-img
                    class="white--text align-end"
                    height="200"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.4)"
                    :src="item.img">
                  <v-card-title class="subheading montserrat-weight-bold pb-0">
                    {{ 'ЖК ' + item.name }}
                  </v-card-title>
                </v-img>


                <v-card-subtitle class="pt-2 pb-0">
                  {{ item.address }}
                </v-card-subtitle>

                <v-card-text class="text--primary montserrat-weight-light">
                  <div v-for="(key, index) in filteredKeys"
                       :key="index">

                    <div :class="{ 'textBrightBlue--text': sortBy === key }">
                      {{ item[key.toLowerCase()] }}
                    </div>

                  </div>
                </v-card-text>
              </v-skeleton-loader>

            </v-card>
          </router-link>
        </v-col>
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
    itemsPerPage: 150,
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
    ]
  }),
  computed: {
    loader() {
      return this.$store.state.loader
    },
    searchItem() {
      return this.$store.getters.searchItem
    },
    numberOfPages() {
      return Math.ceil(this.searchItem.length / this.itemsPerPage)
    },
    filteredKeys() {
      return this.keys.filter(keyss => keyss !== 'name')
    }
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
  }
}
</script>

<style scoped>
.v-btn-toggle {
  width: 50%;
}
</style>