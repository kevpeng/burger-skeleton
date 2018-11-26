<template>
    <div id="start">
        <div class="button">
            <button v-on:click="switchLang()">hello</button>

            <!-- To do: decide between function/object -->
            {{lang_link}}
            <img v-bind:src="lang_link" alt="lang_selected">
        </div>
        Hello
    </div>
</template>
<script>

//    //import the components that are used in the template, the name that you
//    //use for importing will be used in the template above and also below in
//    //components
//    import Ingredient from '@/components/Ingredient.vue'
//    import OrderItem from '@/components/OrderItem.vue'
//
//    //import methods and data that are shared between ordering and kitchen views
    import sharedVueStuff from '@/components/sharedVueStuff.js'
    export default {
        name: 'Start',
        components: {},
        mixins: [sharedVueStuff], // include stuff that is used in both

    }
//    /* instead of defining a Vue instance, export default allows the only
//    necessary Vue instance (found in main.js) to import your data and methods */
//    export default {
//        name: 'Ordering',
//        components: {
//            Ingredient,
//            OrderItem
//        },
//        mixins: [sharedVueStuff], // include stuff that is used in both
//                                  // the ordering system and the kitchen
//        data: function() { //Not that data is a function!
//            return {
//                chosenIngredients: [],
//                price: 0,
//                orderNumber: "",
//            }
//        },
//        created: function () {
//            this.$store.state.socket.on('orderNumber', function (data) {
//                this.orderNumber = data;
//            }.bind(this));
//        },
//        methods: {
//            addToOrder: function (item) {
//                this.chosenIngredients.push(item);
//                this.price += +item.selling_price;
//            },
//            placeOrder: function () {
//                var i,
//                    //Wrap the order in an object
//                    order = {
//                        ingredients: this.chosenIngredients,
//                        price: this.price
//                    };
//                // make use of socket.io's magic to send the stuff to the kitchen via the server (app.js)
//                this.$store.state.socket.emit('order', {order: order});
//                //set all counters to 0. Notice the use of $refs
//                for (i = 0; i < this.$refs.ingredient.length; i += 1) {
//                    this.$refs.ingredient[i].resetCounter();
//                }
//                this.price = 0;
//                this.chosenIngredients = [];
//            }
//        }
//    }
</script>
<style scoped>
    /* scoped in the style tag means that these rules will only apply to elements, classes and ids in this template and no other templates. */
    #ordering {
        margin:auto;
        width: 40em;
    }

    .example-panel {
        position: fixed;
        left:0;
        top:0;
        z-index: -2;
    }
    .ingredient {
        border: 1px solid #ccd;
        padding: 1em;
        background-image: url('~@/assets/exampleImage.jpg');
        color: white;
    }
</style>