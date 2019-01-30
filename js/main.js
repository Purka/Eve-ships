const app = new Vue({
    el: '#app',
    data: {
        description: 'I can say more',
        image: "./src/images/ship3.png",
        details: ['80% of water', '12% of air', '8% of happiness'],
        variants: [
            {
                variantID: 0,
                variantType: 'Hyperion',
                variantImage: "./src/images/ship2.png"
            },
            {
                variantID: 1,
                variantType: 'Megathron',
                variantImage: "./src/images/ship3.png"
            },
            {
                variantID: 2,
                variantType: 'Abaddon',
                variantImage: "./src/images/ship4.png"
            },
            {
                variantID: 3,
                variantType: 'Coercer',
                variantImage: "./src/images/ship5.png"
            },
            {
                variantID: 4,
                variantType: 'Apocalypse',
                variantImage: "./src/images/ship6.png"
            }
        ],
        amount: 0
    },
    methods: {
        addToCart() {
            this.amount ++;
        },

        updateImage(variantImage) {
            this.image = variantImage;
        }
    }
});