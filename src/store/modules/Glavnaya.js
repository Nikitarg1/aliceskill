export default {
    state: {
        cardsInAlice: [
            {
                icon: 'mdi-microphone',
                title: 'Взаимодействие',
                subtitle: 'Управление голосом',
                text: 'Испытайте новый опыт использования телефоном. Управляйте голосом. Больше не нужно подолгу печатать однообразные сообщения, просто говорите!'
            },
            {
                icon: 'mdi-android',
                title: 'Удобство',
                subtitle: 'Без лишних приложений',
                text: 'Нашему сервису не нужно, чтобы вы скачивали наше приложение. Просто откройте браузер на своем устройстве или вежливо попросите у Алисы :)'
            },
            {
                icon: 'mdi-currency-usd',
                title: 'Бесплатно',
                subtitle: 'Никаких наличных',
                text: 'Мы ничего не просим за наш сервис. Все распространяется бесплатно. Единственное, за счет чего мы развиваемся — это вы, наши пользователи.'
            },
        ],
        newsInGlavnaya: [
            {
                title: 'Строительство',
                number: 'Час назад',
                text: 'Буквально только что был достроен 4 этаж дома на улице Майской',
                src: 'https://lifetambov.ru/assets/images/tickets/%D0%9A%D0%BE%D0%BC%D0%BC%D1%83%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F46%D1%84%D0%BE%D1%82%D0%BE/IMG_20190312_181327.jpg'
            },
            {
                title: 'Безопасность',
                number: 'Три дня назад',
                text: 'Закончили выгонять бомжей с технического этажа',
                src: 'https://31tv.ru/wp-content/uploads/2020/01/%D0%BF%D1%80%D0%B8%D1%8E%D1%825.jpg'
            },
        ],
    },
    getters: {
        cardsInAlice(state) {
            return state.cardsInAlice
        },
        newsInGlavnaya(state) {
            return state.newsInGlavnaya
        }
    },
    mutations: {},
    actions: {},
}