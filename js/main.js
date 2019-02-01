Vue.component('ship', {
    template: `
         <div class="flex-container-column">
            <div class="image-panel flex-container-row">
                <img :src="image">
                <div v-if="isModules" class="modules-panel blue-color-scheme fat">
                    <ul>
                        <li v-for="element in shipFit">{{element}}</li>
                    </ul>
                </div>
            </div>

            <div class="choose-panel">
                <div class="flex-container-row center">
                    <button v-for="(ship, index) in ships"
                         :key="ship.shipID"
                         class="ship-button blue-color-scheme fat"
                         @mouseover="updateImage(index)"
                    >
                        {{ship.shipName}}
                    </button>
                </div>
                <div class="flex-container-row center fat">
                    <div class="checkbox checkbox-primary">
                        <input id="checkbox" type="checkbox" @click="showParameters">
                        <label for="checkbox">
                            Show Parameters
                        </label>
                    </div>
                </div>
            </div>
        </div>
    `,
    data: function () {
        return {
            description: 'I can say more',
            selectedShip: 0,
            isModules: false,
            ships: [
                {
                    shipID: 0,
                    shipName: 'Hyperion',
                    shipImage: "./src/images/ship2.png",
                    shipFittings: [
                        'shipPowergrid: 16000',
                        'shipCPU: 600',
                        'shipCapacitor: 7200',
                        'shipHigh: 7',
                        'shipLaunchers: 1',
                        'shipTurrets: 6',
                        'shipRigs: 3',
                        'shipCalibration: 400'
                    ]
                },
                {
                    shipID: 1,
                    shipName: 'Megathron',
                    shipImage: "./src/images/ship3.png",
                    shipFittings: [
                        'shipPowergrid: 15500',
                        'shipCPU: 600',
                        'shipCapacitor: 6000',
                        'shipHigh: 7',
                        'shipLaunchers: 0',
                        'shipTurrets: 7',
                        'shipRigs: 3',
                        'shipCalibration: 400'
                    ]
                },
                {
                    shipID: 2,
                    shipName: 'Abaddon',
                    shipImage: "./src/images/ship4.png",
                    shipFittings: [
                        'shipPowergrid: 21000',
                        'shipCPU: 560',
                        'shipCapacitor: 6375',
                        'shipHigh: 8',
                        'shipLaunchers: 1',
                        'shipTurrets: 8',
                        'shipRigs: 3',
                        'shipCalibration: 400'
                    ]
                },
                {
                    shipID: 3,
                    shipName: 'Coercer',
                    shipImage: "./src/images/ship5.png",
                    shipFittings: [
                        'shipPowergrid: 85',
                        'shipCPU: 168',
                        'shipCapacitor: 700',
                        'shipHigh: 8',
                        'shipLaunchers: 0',
                        'shipTurrets: 8',
                        'shipRigs: 3',
                        'shipCalibration: 400'
                    ]
                },
                {
                    shipID: 4,
                    shipName: 'Apocalypse',
                    shipImage: "./src/images/ship6.png",
                    shipFittings: [
                        'shipPowergrid: 21000',
                        'shipCPU: 540',
                        'shipCapacitor: 7000',
                        'shipHigh: 7',
                        'shipLaunchers: 1',
                        'shipTurrets: 8',
                        'shipRigs: 3',
                        'shipCalibration: 400'
                    ]
                }
            ],
        }
    },
    methods: {
        addToCart() {
            this.amount ++;
        },

        updateImage(index) {
            this.selectedShip = index;
        },

        showParameters() {
            !this.isModules ? this.isModules = true : this.isModules = false;
        }
    },
    computed: {
        image() {
            return this.ships[this.selectedShip].shipImage;
        },

        shipFit() {
            return this.ships[this.selectedShip].shipFittings;
        }
    }
});

const app = new Vue({
    el: '#app',
});