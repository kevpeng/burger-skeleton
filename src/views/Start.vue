<template>
    <div>
        <head>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link href='https://fonts.googleapis.com/css?family=Amaranth' rel='stylesheet'>
            <!--<link href="./components/sharedCSSStuff.css" rel="stylesheet">-->
        </head>
        <body>
            <div class="pageGrid">
                <div class="middle">
                    <h2> {{ uiLabels.whereToEat }}</h2>
                    <br>
                    <div class="grid-container">
                        <button class="button eatin" v-on:click="chooseEatIn()">{{ uiLabels.eatIn }}</button>
                        <button class="button takeaway" v-on:click="chooseTakeAway()">{{ uiLabels.takeaway }}</button>
                    </div>
                    {{ this.orderPreference }}
                </div>
                <footer>
                </footer>
            </div>
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
        state: 'start',

        data: function() {
            return {
                orderPreference: ""
            }
        },
        created: function() {
            var timer = null;
            function refresh() {
                clearTimeout(timer);
                timer = setTimeout(function() { window.location = 'http://localhost:8080/#/';}, 5000);

            }
            //
            // window.setTimeout(function () {
            //     window.location.reload();
            // }.bind(this),30000);

            window.addEventListener('mousemove', refresh, true);
            refresh();

            // playing around with storing data..
            // this.$store.state.socket.on('orderPreference', function(data) {
            //     this.orderPreference = data;
            // }.bind(this));

        },
        methods: {
            chooseTakeAway: function() {
                this.orderPreference = 'takeAway';
                this.$emit('switchTo', 'SelectionOverview');
            },
            chooseEatIn: function() {
                this.orderPreference = 'eatIn';
                this.$emit('switchTo', 'SelectionOverview');
            }
        }
    }
       /* instead of defining a Vue instance, export default allows the only
       necessary Vue instance (found in main.js) to import your data and methods 
       export default {
           name: 'Ordering',
           components: {
               Ingredient,
               OrderItem
           },
           mixins: [sharedVueStuff], // include stuff that is used in both
                                     // the ordering system and the kitchen
           data: function() { //Not that data is a function!
               return {
                   chosenIngredients: [],
                   price: 0,
                   orderNumber: "",
               }
           },
           created: function () {
               this.$store.state.socket.on('orderNumber', function (data) {
                   this.orderNumber = data;
               }.bind(this));
           },
           methods: {
               addToOrder: function (item) {
                   this.chosenIngredients.push(item);
                   this.price += +item.selling_price;
               },
               placeOrder: function () {
                   var i,
                       //Wrap the order in an object
                       order = {
                           ingredients: this.chosenIngredients,
                           price: this.price
                       };
                   // make use of socket.io's magic to send the stuff to the kitchen via the server (app.js)
                   this.$store.state.socket.emit('order', {order: order});
                   //set all counters to 0. Notice the use of $refs
                   for (i = 0; i < this.$refs.ingredient.length; i += 1) {
                       this.$refs.ingredient[i].resetCounter();
                   }
                   this.price = 0;
                   this.chosenIngredients = [];
               }
           }
       }*/
</script>

<style scoped>
    .pageGrid{
        --footer-scale: 70px;
        grid-template-rows: auto var(--footer-scale);
    }

    /* Middle part of the page, includes background color and size... "Main" */
    .middle {
        border: none;
    }
    h2 {
        text-align: center;
        font-family: 'Amaranth';
        color: #8B4513;
        font-size: calc(1.5vw + 1.5vh);
    }

    /* grid container for the buttons on page */
    .grid-container {
        justify-items: center;
        display: grid;
        grid-template-columns: auto auto;
    }

    /* button characteristics */
    .button {
        background-color: #8B4513;
        font-family: 'Amaranth';
        border-radius: 10px;
        color: #FFE4B5;
        border: none;
        font-size: calc(2vw + 2vh);
    }
    button:hover {
        background-color: #501811;
        cursor: pointer;
    }
    button:active {
        box-shadow: 0 1px #666;
        transform: translateY(2px);
    }

    .eatin, .takeaway {
        width: 35vw;
        height: 20vh;
    }

    /* Formatting for footers */
    footer {
        bottom: 0;
        left: 0;
        height: var(--footer-scale);
        position:fixed;
        background-color: #DEB887;
        width: 100vw;
    }

    /*ToDo What is this for?*/
    .clear {
        /*position: absolute;*/
        background-color: #DEB887;
        border: none;
    }    
</style>
