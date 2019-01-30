const app = new Vue({
    el: '#app',
    data: {
        description: 'I can say more',
        selectedShip: 0,
        details: ['80% of water', '12% of air', '8% of happiness'],
        ships: [
            {
                shipID: 0,
                shipName: 'Hyperion',
                shipImage: "./src/images/ship2.png"
            },
            {
                shipID: 1,
                shipName: 'Megathron',
                shipImage: "./src/images/ship3.png"
            },
            {
                shipID: 2,
                shipName: 'Abaddon',
                shipImage: "./src/images/ship4.png"
            },
            {
                shipID: 3,
                shipName: 'Coercer',
                shipImage: "./src/images/ship5.png"
            },
            {
                shipID: 4,
                shipName: 'Apocalypse',
                shipImage: "./src/images/ship6.png"
            }
        ],
        amount: 0
    },
    methods: {
        addToCart() {
            this.amount ++;
        },

        updateImage(index) {
            this.selectedShip = index;
        }
    },
    computed: {
        image() {
            return this.ships[this.selectedShip].shipImage;
        }
    }
});