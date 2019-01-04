<template>
  <div id="ordering">
    <head>
      <link href='https://fonts.googleapis.com/css?family=Amaranth' rel='stylesheet'>
    </head>
    <div class="container">
      <div class="header">
        <div class="cancel">
          <button :class="['btn_header', 'btn_cancel']" v-on:click="cancel()"></button>
        </div>

        <div class="language">
          <button :class="['btn_header', lang]" v-on:click="switchLang()"></button>
        </div>

        <div class="title">
          {{ currentTabName }}
        </div>
        
        <div class="cart">
          <button :class="['btn_header', 'btn_cart']" v-on:click="toggleCart()" ></button>
          <div id="myCart" class="cart_content">
            selection: {{selection}}
            <br>
            chosenIngredients: {{chosenIngredients}}
            <br>
            - Cart is empty
            <br>
            TO DO:
            <br>
            - purchase button needs to be added
            <br>
            - blur background, gray buttons out
            <!-- add code to print the items with a delete/add (-/+) button -->

            <!-- <button class="purchase"></button-->
          </div>
        </div>
      </div>

      <div class="navigation">
        <button
          v-for="tab in tabs"
          v-bind:key="tab"
          v-bind:class="['tab-button', { active: currentTab === tab }]"
          v-on:click="currentTab = tab">
          {{ tab }}
        </button>
      </div>
      <div class="page">
        <component
          v-bind:is="currentTabComponent"
          v-on:switchTo="switchTab"
          v-on:addToIngredients="addToIngredients"
          v-on:addToOrder="addToOrder"
          v-on:cancel="cancel"
          v-on:placeOrder="placeOrder"
          v-on:cancelTo="cancelTo"
          v-on:addCreatedBurgerToOrder="addCreatedBurgerToOrder"
          :ingredients="ingredients"
          :lang="lang"
          :ui-labels="uiLabels"
          class="tab"
          type="inline-template">
        </component>
      </div>

      <!--div>
        <img class="example-panel" src="@/assets/exampleImage.jpg">
        <button v-on:click="switchLang()">{{ uiLabels.language }}</button>

        <h1>{{ uiLabels.ingredients }}</h1>

        <Ingredient
          ref="ingredient"
          v-for="item in ingredients"
          v-on:increment="addToOrder(item)"
          :item="item"
          :lang="lang"
          :key="item.ingredient_id">
        </Ingredient>

        <h1>{{ uiLabels.order }}</h1>
        {{ chosenIngredients.map(item => item["ingredient_"+lang]).join(', ') }}, {{ price }} kr
        <button v-on:click="placeOrder()">{{ uiLabels.placeOrder }}</button>

        <h1>{{ uiLabels.ordersInQueue }}</h1>
        <div>
          <OrderItem
            v-for="(order, key) in orders"
            v-if="order.status !== 'done'"
            :order-id="key"
            :order="order"
            :ui-labels="uiLabels"
            :lang="lang"
            :key="key">
          </OrderItem>
        </div>
      </div-->
    </div>
  </div>
</template>
<script>

//import the components that are used in the template, the name that you
//use for importing will be used in the template above and also below in
//components
import Ingredient from '@/components/Ingredient.vue'
import OrderItem from '@/components/OrderItem.vue'
import Start from '@/views/Start.vue'
import SelectionOverview from '@/views/selectionOverview.vue'
import Payment from '@/views/paymentScreen.vue'
import BurgerCreation from '@/views/burgerCreation.vue'
import IngredientsSelection from '@/components/IngredientsSelection.vue'
import Bread from '@/components/Bread.vue'
import Patty from '@/components/Patty.vue'
import Toppings from '@/components/Toppings.vue'
import Sauce from '@/components/Sauce.vue'
import Menus from '@/components/Drinks.vue'
import Burgers from '@/views/burgers.vue'
import Fries from '@/components/Fries.vue'
import Drinks from '@/components/Drinks.vue'
import Salad from '@/components/Drinks.vue'
import Icecream from '@/components/Drinks.vue'

//import methods and data that are shared between ordering and kitchen views
import sharedVueStuff from '@/components/sharedVueStuff.js'

/* instead of defining a Vue instance, export default allows the only
necessary Vue instance (found in main.js) to import your data and methods */
export default {
  name: 'Ordering',

  components: {
    Ingredient,
    OrderItem,
    Start,
    SelectionOverview,
    Payment,
    BurgerCreation,
    IngredientsSelection,
    Bread,
    Patty,
    Toppings,
    Sauce,
    Menus,
    Burgers,
    Fries,
    Drinks,
    Salad,
    Icecream
  },

  // include stuff that is used in both the ordering system and the kitchen
  mixins: [sharedVueStuff], 
  
  data: function() { //Not that data is a function!
    return {
      //tab/component navigation elements
      currentTab: 'Start',
      tabs: ['Start', 'SelectionOverview', 'Payment',
             'BurgerCreation', 'IngredientsSelection', 
             'Bread', 'Patty', 'Toppings', 'Sauce',
             'Menus', 'Burgers', 'Fries', 'Drinks', 'Salad', 'Icecream'],
      
      //for the self created burger
      chosenIngredients: [],
      chosenIngredientsPrice: 0,
      
      //for all selected items (before they get ordered)
      selection: [],
      price: 0,
      orderNumber: "",
    }
  },

  computed: {
    //allows to have the components dynamically on the screen
    currentTabComponent: function () {
      return this.currentTab;
    },
    currentTabName: function () {
      return this.uiLabels[(this.currentTab)];
    }
  },

  created: function () {
    //Todo explain what this function is doing
    this.$store.state.socket.on('orderNumber', function (data) {
      this.orderNumber = data;
    }.bind(this));
  },

  methods: {
    //to switch the tab to another component
    //can be called from the components itself with "this.$emit('switchTo', newTab);"
    switchTab: function (newTab) {
      this.currentTab = newTab;
    },

    //to cancel from any tab/component and return to the Start
    //can be called from the components itself with "this.$emit('cancel');"
    cancel: function () {
      var message = 'Do you really want to leave the ordering process? All your selections will be lost.';
      if (window.confirm(message)) {
        this.chosenIngredients = [];
        this.chosenIngredientsPrice = 0;
        this.selection = [];
        this.price = 0;

        this.currentTab = 'Start';
      }
    },    

    //show a pop up alert before continue cancelling because then the
    //choosen ingredients will be reset
    cancelTo: function(newTab, msg) {
      if (window.confirm(msg)) {
        this.chosenIngredients = [];
        this.chosenIngredientsPrice = 0;

        if(newTab == 'Start'){
          this.selection = [];
          this.price = 0;
        }

        this.currentTab = newTab;
      }
    },

    //to add ingredients to the self created burger
    //should only be used in the Patty/Toppings/Sauce/Bread selection !
    //can be called from the components itself with "this.$emit('addToIngredients', ingredients);"
    addToIngredients: function (items) {
      for (var i=0; i<items.length; i++) {
        this.chosenIngredients.push(items[i]);
        this.chosenIngredientsPrice += +items[i].price;
      }
      this.currentTab = 'BurgerCreation';
    },

    //to add the chosenIngredients of the created burger to the overall selection
    //should only be used in the BurgerCreation tab
    addCreatedBurgerToOrder: function() {
      var createdBurger = {
        name: "Created Burger",
        price: this.chosenIngredientsPrice,
        ingredients: this.chosenIngredients
      };
      this.selection.push(createdBurger);

      this.chosenIngredients = [];
      this.chosenIngredientsPrice = 0;
      this.currentTab = 'SelectionOverview';
    },

    //to add selected items directly to the order
    //should only be used for all NOT self-created-burger items !
    //can be called from the components itself with "this.$emit('addToOrder', items);"
    addToOrder: function (items) {
      for (var i=0; i<items.length; i++) {
        this.selection.push(items[i]);
        this.price += +items[i].price;
      }
      this.currentTab = 'SelectionOverview';
    },

    //to submit the order
    //should only be used in SelectionOverview and the Cart!
    placeOrder: function () {

      //ToDo view selection before final payment
      //maybe simply open the cart and continue there?

      //Wrap the order in an object
      var order = {
        //Todo just testiong values !
          ingredients: this.chosenIngredients, //should be this.selection
          price: this.chosenIngredientsPrice //should be this.price
      };
      // make use of socket.io's magic to send the stuff to the kitchen via the server (app.js)
      this.$store.state.socket.emit('order', {order: order});
      console.log("order placed!");

      //not needed in the Ordering.vue, but I would leave it to have a reference when needed
      //set all counters to 0. Notice the use of $refs
      /*for (i = 0; i < this.$refs.ingredient.length; i += 1) {
        this.$refs.ingredient[i].resetCounter();
      }*/

      this.price = 0;
      this.selection = [];

      //continue with payment screen
      this.currentTab = 'Payment';
    },

    //Todo write a short description of what the function does
    //
    toggleCart: function () {
        // 1. adding an overlay on the box
        // 2. blur the background
        // 3. include the cart items << need to determine proper data structure first. >>
        // 4. if cart is empty, say "cart is empty"
        // 5. purchase button
        // 6. gray out the buttons on footer
        // 7. (optional) add a red 'X' at top left to show you can exit
        document.getElementById("myCart").classList.toggle("show");
    }
  }
}
</script>

<style scoped>
/* scoped in the style tag means that these rules will only apply to elements, 
   classes and ids in this template and no other templates. */
#ordering {
  --header-scale: 70px;
}

.container {
  display: grid;
  grid-template-rows: var(--header-scale) var(--header-scale) auto;
  text-align: center;
}

/** HEADER START **/
.header {
  display: grid;
  grid-template-columns: var(--header-scale) var(--header-scale) auto var(--header-scale);
  position: fixed;
  background-color: #DEB887;
  font-family: 'Amaranth';
  width: 100%;
  max-width: 100vw;
}

.title {
  font-size: 40px;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: var(--header-scale);
}

button:hover {
  background-color: #501811;
  cursor: pointer;
}

.btn_header {
  width: calc(0.8 * var(--header-scale));
  height: calc(0.8 * var(--header-scale));
  margin: calc(0.1 * var(--header-scale));
  border-radius: 10px;
  background-color: #8B4513;
  border: none;
}

.btn_cancel {
  background: #8b4513 url('https://img.icons8.com/material/52/FFE4B5/delete-sign.png') no-repeat right 50% top 50%;
  background-size: 80%;
}

.btn_cart {
  background: #8b4513 url('https://img.icons8.com/material/52/FFE4B5/shopping-cart.png') no-repeat right 50% top 50%;
  background-size: 80%;
}

/* these 2 classes are used to select language flag. */
.en {
  background: #8b4513 url('~@/assets/ENG-select.png') no-repeat right 50% top 50%;
  background-size: 80%;
}

/* swapped the images.. gonna have to take a look at it tomorrow */
.sv {
  background: #8b4513 url('~@/assets/SV-select.png') no-repeat right 50% top 50%;
  background-size: 80%;
}

/*.cart {
  position: absolute;
  display: inline-block;
}*/

.cart_content {
  display: none;
  position: absolute;
  background: #f1f1f1;
  font-size: 1.5vw;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);

  z-index: 10;
  right: 0;
  width: 30vw;
  height: 80vh;
  border: 3px black solid;
}
/** HEADER END **/

/*ToDo What is this for?!?*/
.show {
  display: block;
}

/** PAGE START **/
.navigation {
  margin-top: var(--header-scale);
  max-width: 100vw;
  background-color: aqua;
}

.page {
  margin-top: var(--header-scale);
  height: calc(94vh - 2*var(--header-scale)); 
  /*do not really know why 3x, would have expected only 2x ...hmm...*/
}

/*.ingredient {
  border: 1px solid #ccd;
  padding: 1em;
  background-image: url('~@/assets/exampleImage.jpg');
  color: white;
}*/
.tab-button {
  cursor: pointer;
  width: 10vw;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
/** PAGE END **/

/** MEDIA SCALING END **/
@media screen and (max-width:818px){
  .title {
    margin-right: 0px;
  }    
}
@media screen and (max-width:612px){
  .title {
    font-size: 28px;
  }    
}
@media screen and (max-width:380px){
  #ordering {
    --header-scale: 50px;
  }  
  .title {
    font-size: calc(100vw/22);
  }    
} 
/** MEDIA SCALING END **/
</style>