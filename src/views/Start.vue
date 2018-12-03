<template>
    <div>
        <head>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link href='https://fonts.googleapis.com/css?family=Amaranth' rel='stylesheet'>
            <link href="./components/sharedCSSStuff.css" rel="stylesheet">
        </head>
        <body>
        <header class="header">
            <button :class="['button', 'language', lang]" v-on:click="switchLang()"></button>
            <span class="title"> {{ uiLabels.welcome }} </span>

            <!-- added this button as a way to pad the left/right -->
            <button class="button language clear"  style="float: right;" v-on:click="switchLang()"></button>
        </header>

        <div class="middle">
            <main>
                <h2> {{ uiLabels.whereToEat }}</h2>
                <br>
                <div class="grid-container">
                    <button class="button eatin" v-on:click="switchLang()">{{ uiLabels.eatIn }}</button>
                    <button class="button takeaway" v-on:click="switchLang()">{{ uiLabels.takeaway }}</button>
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

    /* button characteristics */
    .button {
        /*position: absolute;*/
        background-color: #8B4513;
        font-family: 'Amaranth';
        border-radius: 10px;
        color: #FFE4B5;
        border: black solid 3px;
        font-size: calc(2.5vw + 2.5vh);
    }
    button:hover {
        background-color: #501811;
        cursor: pointer;
    }
    button:active {
        box-shadow: 0 1px #666;
        transform: translateY(2px);
    }
    /* eat in */
    .eatin {
        width: 30vw;
        height: 20vh;
        /*margin-right: 0vh;*/

    }
    /* takeaway */
    .takeaway {
        width: 30vw;
        height: 20vh;
        /*margin-left: 10vh;*/
    }

    /* language button */
    .language {
        /*position: fixed;*/
        justify-content: left;
        width: 10%;
        height: 85%;
        /*position: absolute;*/
        margin: 0.55%;
        /*border: none;*/
        border-radius: 10px;
        float: left;
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

    .clear {
        /*position: absolute;*/
        background-color: #DEB887;
        border: none;
    }

    /* grid container for the buttons on page */
    .grid-container {
        justify-items: center;
        display: grid;
        /*grid-row-gap: 10px;*/
        grid-template-columns: auto auto;
        /*grid-gap: 10px;*/

    }

    /* the text font should be same :-) */
    body {
        font-family: 'Amaranth';
    }


    h2 {
        text-align: center;
        font-family: 'Amaranth';
        color: #8B4513;
        font-size: calc(1.25vw + 1.25vh);
    }



    /* Shared with other pages... linking to a CSS page is not working. */
    .title {
        vertical-align: top;
        line-height: 15vh;
    }

    /* Formatting for headers */
    .header{
        /* Font properties */
        text-align: center;
        font-size: calc(2.0vw + 2.0vh);
        color:black;

        /* Positioning and color properties */

        display: inline-block;
        position:fixed;
        background-color: #DEB887;
        width: 100vw;
        height: 15vh;
        top: 0px;
        left:0px;

    }

    /* Middle part of the page, includes background color and size... "Main" */
    .middle {
        margin-top: 15vh;
        position: fixed;
        width: 100vw;
        height: 70vh;
        left: 0;
    }

    /* Formatting for footers */
    footer {
        position:fixed;
        background-color: #DEB887;
        color:black;

        width: 100vw;
        height:15vh;
        left:0px;
        bottom: 0;
    }

    /* end of shared */


    /*Cart button to be used in other things*/




</style>
