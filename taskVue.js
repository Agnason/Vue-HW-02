new Vue({
    el: '#app',
    data: {
        products: [
            { id: 1, name: 'Утюг', price: 1000 },
            { id: 2, name: 'Стиральная машина', price: 5000 },
            { id: 3, name: 'Пылесос', price: 1000 },
            { id: 4, name: 'Чайник', price: 500 },
            { id: 5, name: 'Посудомойка', price: 3000 },
            { id: 6, name: 'Телевизор', price: 6000 },
            { id: 7, name: 'Компьютер', price: 10000 },
            { id: 8, name: 'Кофемашина', price: 20000 }
        ]
    },
    methods: {
        sortForPriceDecreasing() {
            this.products.sort(function (a, b) {
                if (a.price > b.price) return -1
            })
        },
        sortForPriceIncreasing() {
            this.products.sort(function (a, b) {
                if (a.price < b.price) return -1
            })
        },
        sortForName() {
            this.products.sort(function (a, b) {
                if (a.name < b.name) return -1
            })
        }

    },


})