<template>
    <div>
        <head>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link href='https://fonts.googleapis.com/css?family=Amaranth' rel='stylesheet'>
        </head>
        <body>
        <div id="background">
            <header class="header">
                        <button :class="['button', 'language', lang]" v-on:click="switchLang()"></button>
                        <h1 style="margin-top: -50px">Welcome to myCreation</h1>
                {{lang}}
            </header>
            <main style="margin-left: 20px">
                <br><br><br>
                <h2>Where do you want to enjoy your meal?</h2>
                <div class="grid-container">
                    <button class="button takeaway" v-on:click="switchLang()">Take away</button>
                    <button class="button eatin" v-on:click="switchLang()">Eat in</button>
                </div>
            </main>
        </div>
        <footer>
            hello
        </footer>
        </body>
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
    footer {
        bottom: 0px;
        /*position: fixed;*/
        background-color: #DEB887;
        width: 100%;
        height: 4em;
        left: 0px;
        color: black;
        font-size: 0.9em;
        padding-left: 20px;
        padding-right: 20px;
    }

    button:hover {
        background-color: #501811;
        cursor: pointer;
    }

    .button {
        width: 7em;
        height: 2em;
        background-color: #8B4513;
        font-family: 'Amaranth';
        border-radius: 10px;
        color: #FFE4B5;
        border: none;
        font-size: 3em;
    }

    .header{
        /*display: inline;*/
        /*top:0px;*/
        /*position:fixed;*/
        background-color: #DEB887;
        width:100%;
        height:5em;
        left:0px;
        color:black;
        font-size: 1em;
        padding-left:20px;
        padding-right:20px;
    }

    .language {
        width: 4em;
        height: 4em;
        /*position: absolute;*/
        top: 0px;
        margin-top: 0.75em;
        border: none;
        font-weight: bold;
        font-size: 15px;
        margin-right: 40px;
        font-family: 'Amaranth';
        color: #FFE4B5;
        border-radius: 10px;
    }

    /* these 2 classes are used to select language flag. */
    .sv {
        background: #8b4513 url('~@/assets/SV-select.png') no-repeat right 5px top 5px;
        background-size: 50px;
    }

    .en {
        background: #8b4513 url('~@/assets/ENG-select.png') no-repeat right 5px top 5px;
        background-size: 50px;
    }

    h1 {
        text-align: center;
        font-family: 'Amaranth';
        color: #8B4513;
        /*margin-top: ;*/
    }

    body {
        background-color: #FFFFF0;
        font-family: 'Amaranth';
    }

    .grid-container {
        display: grid;
    }

    .background {
        background-color: #FFFFF0;
        font-family: 'Amaranth';
        width: 110%;
        height: 100%;
        margin-left: -3%;

    }

</style>
