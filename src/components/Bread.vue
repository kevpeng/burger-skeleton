<template>
    <div>
        <head>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link href='https://fonts.googleapis.com/css?family=Amaranth' rel='stylesheet'>
        </head>

        <body>
            <div class="pageGrid">
                <div class="filterContainer">
                    <div class="filter">
                        <input type="checkbox"
                            v-model="gluten" value="1">Gluten-Free
                        <input type="checkbox"
                            v-model="vegan" value="1">Vegan
                        <input type="checkbox"
                            v-model="lactose" value="1">Lactose-Free
                    </div>
                    <div class="line"></div>
                </div>
                <div class="gridContainer">
                    <Ingredient class="gridElement"
                        ref="Bread"
                        v-for="item in ingredients"
                        v-if="item.category == 4 &
                        (gluten != 1 || gluten == item.gluten_free) &
                        (vegan != 1 || vegan == item.vegan) &
                        (lactose != 1 || lactose == item.milk_free)"
                        v-on:increment="updateSelectedBread()"
                        :lang="lang"
                        :ui-labels="uiLabels"
                        :item="item"
                        :key="item.ingredient_id">
                    </Ingredient>
                </div>
                <footer>
                    <button v-on:click="switchTo('BurgerCreation')" class="back"> {{ uiLabels.back }}</button>
                    <button v-on:click="addToIngredients()" class="add"> {{ uiLabels.add }}</button>
                </footer>
            </div>
        </body>
    </div>
</template>

<script>
    //import methods and data that are shared between ordering and kitchen views
    import Ingredient from '@/components/Ingredient.vue'
    import OrderItem from '@/components/OrderItem.vue'

    export default {
        name: "Bread",
        components: {
            Ingredient,
            OrderItem
        },

        props: {
            ingredients: Array,
            lang: String,
            uiLabels: Object,
        },

        data: function() {
            return { 
                chosenBread: [],
                price: 0,
                gluten: 0,
                vegan: 0,
                lactose: 0
            }
        },

        methods: {
            updateSelectedBread: function () {
                this.chosenBread = [];
                for (var i = 0; i < this.$refs.Bread.length; i += 1) {
                    if (this.$refs.Bread[i].counter > 0) {
                        var obj = {
                            name: this.$refs.Bread[i].item["ingredient_" + this.lang],
                            amount: this.$refs.Bread[i].counter,
                            price: (this.$refs.Bread[i].item.selling_price * this.$refs.Bread[i].counter)
                        };
                        this.chosenBread.push(obj);
                    }
                }
                /* Check if everything is in the array
                for(var i in this.chosenBread){
                console.log(this.chosenBread[i].name);
                console.log(this.chosenBread[i].amount);
                console.log(this.chosenBread[i].price);
                }*/
            },
            switchTo: function (newTab) {
                this.$emit('switchTo', newTab);
            },
            addToIngredients: function () {
                this.$emit('addToIngredients', this.chosenBread);
                //set all counters to 0. Notice the use of $refs
                // for (i = 0; i < this.$refs.Bread.length; i += 1) {
                //   this.$refs.Bread[i].resetCounter();
                // }
                //this.price = 0;
                //this.chosenIngredients = [];
            }
        }
    }
</script>

<style scoped>
    @import '~@/css/sharedCSSStuff.css';
</style>