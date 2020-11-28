export default {
    state: {
        searchItem: [
            {
                name: 'Лимонад',
                img: 'https://st.novostroy.su/regions/u/news/880x/5efb5a7997f76.jpg',
                miniInfo: 'Уникальный проект бизнес-класса',
                class: 'Бизнес',
                footage: '51.2 — 72.6',
                deadlines: 'Сдан',
                info: 'ЖК «ЗИЛАРТ» – уникальный проект бизнес-класса, строящийся в Даниловском районе Москвы. Это первый жилой комплекс, предлагающий жителям широчайший набор нестандартных опций, от просторного парка до собственного музея.',
                address: 'ул. 9 января дом 23',
                developer: '1000 Этажей',
                price: 'от 1 750 000',
                slider: [
                    {
                        img: 'https://idealist-clubhouse.ru/wp-content/uploads/2020/03/%D0%9B%D0%BE%D0%B1%D0%B1%D0%B8-1-1301x859.jpg',
                        name: 'Лобби',
                        info: 'Отделка мест общего пользования выполнена по индивидуальным проектам с использованием материалов улучшенного качества.\n'
                    },
                    {
                        img: 'https://images.ru.prom.st/542744937_w640_h640_542744937.jpg',
                        name: 'Благоустройство',
                        info: 'Отделка мест общего пользования выполнена по индивидуальным проектам с использованием материалов улучшенного качества.\n'
                    },
                    {
                        img: 'https://lh3.googleusercontent.com/proxy/m5N1RDClgdak8lENyrh2bxVyospf4WUZVldOIiR-IV7NeIGqJW8_OCePv8573aIPGbfgk9ZePW_sN_5PCMHeGxHxGiFqoGDlCzNNuGIFk7l2kxlL-v5r2GeGHVcODRnW2Pa2Zdo',
                        name: 'Отделка',
                        info: 'Отделка мест общего пользования выполнена по индивидуальным проектам с использованием материалов улучшенного качества.\n'
                    },
                ],
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