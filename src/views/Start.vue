<template>
    <div>
        <head>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link href='https://fonts.googleapis.com/css?family=Amaranth' rel='stylesheet'>
        </head>
        <body>
        <header class="header">
            <button :class="['button', 'language', lang]" v-on:click="switchLang()"></button>
            <button :class="['button', 'language', lang]" v-on:click="switchLang()"></button>
            <span class="title"> {{ uiLabels.welcome }} </span>
            <!--<button :class="['button', 'language', lang]" v-on:click="switchLang()"></button>-->
            <!--<h1 style="float: right; text-align: center;"> {{ uiLabels.welcome }}</h1>-->
            </header>

        <div class="background">
            <main>
                <br>
                <h2> {{ uiLabels.whereToEat }}</h2>
                <br>
                <div class="grid-container">
                    <button class="button takeaway" v-on:click="switchLang()">{{ uiLabels.eatIn }}</button>
                    <button class="button eatin" v-on:click="switchLang()">{{ uiLabels.takeaway }}</button>
                </div>

            </main>
        </div>
        <footer>

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
        state: 'start'

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

    button:hover {
        background-color: #501811;
        cursor: pointer;
    }

    button:active {
        box-shadow: 0 1px #666;
        transform: translateY(2px);
    }


    .button {
        /*position: absolute;*/
        width: 7em;
        height: 2em;
        background-color: #8B4513;
        font-family: 'Amaranth';
        border-radius: 10px;
        color: #FFE4B5;
        border: none;
        font-size: 3em;

    }


    .language {
        justify-content: left;
        width: 10%;
        height: 85%;
        /*position: absolute;*/
        margin: 0.5%;
        /*border: none;*/
        border-radius: 10px;
    }

    /* these 2 classes are used to select language flag. */
    .en {
        background: #8b4513 url('~@/assets/SV-select.png') no-repeat right 50% top 50%;
        background-size: 60%;
    }

    /* swapped the images.. gonna have to take a look at it tomorrow */
    .sv {
        background: #8b4513 url('~@/assets/ENG-select.png') no-repeat right 50% top 50%;
        background-size: 60%;
    }

    .eatin {

    }

    .takeaway {

    }


    h1 {
        text-align: center;
        font-family: 'Amaranth';
        color: #8B4513;
        /*margin-top: ;*/
    }

    h2 {
        text-align: center;
        font-family: 'Amaranth';
        color: #8B4513;
        font-size: 30px;
    }

    body {
        background-color: #FFFFF0;
        font-family: 'Amaranth';
    }

    .grid-container {
        justify-items: center;
        display: grid;
        /*grid-row-gap: 10px;*/
        grid-template-columns: auto auto;
        /*grid-gap: 10px;*/

    }

    .header{
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin: auto;
        /*display: inline;*/
        /*top:0px;*/
        /*position:fixed;*/
        background-color: #DEB887;
        width: 94.5vw;
        /*height:5em;*/
        height: 12vh;
        left:0px;
        color:black;
        font-size: 1em;
        padding-left:20px;
        padding-right:20px;
    }

    .background {
        background-color: white;
        font-family: 'Amaranth';

        width: 94.5vw;
        height: 76vh;
        padding-left:20px;
        padding-right:20px;
    }

    footer {
        bottom: 0px;
        /*position: fixed;*/
        background-color: #DEB887;
        width: 94.5vw;
        height: 10vh;
        left: 0px;
        color: black;
        font-size: 0.9em;
        padding-left: 20px;
        padding-right: 20px;
    }

    .divider {
        width: 5px;
        height: auto;
        display: inline-block;
    }

    .title {
        vertical-align: ;
        /*text-align: center;*/
        /*width: 100%;*/
        /*font-size: 50px;*/
    }

</style>
