export default {
    state: {
        searchItem: [
            {
                name: 'Лимонад',
                img: 'https://st.novostroy.su/regions/u/news/880x/5efb5a7997f76.jpg',
                address: 'ул. 9 января дом 23',
                developer: '1000 Этажей',
                price: 'от 1 750 000',
            },
            {
                name: 'Огни Ижевска',
                img: 'https://st.novostroy.su/regions/u/news/880x/5efb5a7997f76.jpg',
                address: 'ул. Ракетная дом 34',
                developer: 'Парус',
                price: 'от 2 000 000',
            },
            {
                name: 'Нью-Йорк',
                img: 'https://cdn.bfm.ru/news/maindocumentphoto/2020/02/24/zk.jpg',
                address: 'ул. Карала Маркса дом 23',
                developer: 'Калинка',
                price: 'от 2 500 000',
            },
            {
                name: 'Смуглянка из Ворошилова',
                img: 'https://novostroyka35.ru/assets/cache_image/assets/cities/vologda/doma/gorstrojzakazchik/zhk-lyubimyij-dom/1-14_825x510_ece.png',
                address: 'ул. Ворошилова дом 29',
                developer: 'КОМОССТРОЙ',
                price: 'от 3 000 000',
            },
            {
                name: 'Авангард Тауэр',
                img: 'https://news.novostroyki-ykt.ru/uploads/posts/2015-12/1449191884_1-1.jpg',
                address: 'ул. Труда дом 76',
                developer: 'КОМОССТРОЙ',
                price: 'от 3 500 000',
            },
        ],
    },
    getters: {
        searchItem: s => s.searchItem,
        taskByName: s => name => s.searchItem.find(t => t.name === name)
    },
    mutations: {},
    actions: {},
}