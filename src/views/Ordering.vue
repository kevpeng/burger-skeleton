<template>
  <div id="ordering" class="container">
    <head>
      <link href='https://fonts.googleapis.com/css?family=Amaranth' rel='stylesheet'>
    </head>
    <div class="header">
      <div class="btn_cancel">
        <button :class="['btn_header']" v-on:click="switchLang()">
          <img src="https://img.icons8.com/material/52/FFE4B5/delete-sign.png" height="50vh">
          </button>
      </div>
      <div class="btn_lang">
        <button :class="['btn_header', lang]" v-on:click="switchLang()"></button>
      </div>
      <div class="title">
        {{ uiLabels.welcome }}
      </div>
      <div class="btn_cart">
        <button :class="['btn_header']" v-on:click="switchLang()">
          <img src="https://img.icons8.com/material/52/FFE4B5/shopping-cart.png" height="50vh">
          </button>
      </div>
    </div>


    <div class="page">
      <button
        v-for="tab in tabs"
        v-bind:key="tab"
        v-bind:class="['tab-button', { active: currentTab === tab }]"
        v-on:click="currentTab = tab">
        {{ tab }}
      </button>


      <component
        v-bind:is="currentTabComponent"
        class="tab"
        type="inline-template">
      </component>
    </div>


    <!-- <div class="footer">
      <div class="btn_back">
        <button :class="['btn_footer']" v-on:click="switchLang()">&lt;&lt; {{ uiLabels.back}} &lt;&lt;</button>
      </div>
      <div class="nothing">
      </div>
      <div class="btn_next">
        <button :class="['btn_footer']" v-on:click="switchLang()">&gt;&gt; {{ uiLabels.next}} &gt;&gt;</button>
      </div>
    </div> -->



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
</template>
<script>

//import the components that are used in the template, the name that you
//use for importing will be used in the template above and also below in
//components
import Ingredient from '@/components/Ingredient.vue'
import OrderItem from '@/components/OrderItem.vue'
import Start from '@/views/Start.vue'
import SelectionOverview from '@/views/selectionOverview.vue'
import BurgerCreation from '@/views/burgerCreation.vue'
import IngredientsSelection from '@/components/IngredientsSelection.vue'

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
    BurgerCreation,
    IngredientsSelection
  },
  mixins: [sharedVueStuff], // include stuff that is used in both
                            // the ordering system and the kitchen
  data: function() { //Not that data is a function!
    return {
      currentTab: '',
      tabs: ['Start', 'SelectionOverview', 'BurgerCreation', 'IngredientsSelection'],
      chosenIngredients: [],
      price: 0,
      orderNumber: "",
    }
  },
  computed: {
    currentTabComponent: function () {
      return this.currentTab;
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
}
</script>
<style scoped>
/* scoped in the style tag means that these rules will only apply to elements, classes and ids in this template and no other templates. */
#ordering {
}

.container {
  display: grid;
  /* grid-template-columns: 100vw; */
  grid-template-rows: 13vh 74vh 13vh;
  text-align: center;
}

.header, .footer {
  display: grid;
  /* background: url('~@/assets/exampleImage.jpg'); */
}

.header {
  grid-template-columns: 13vh 13vh auto 13vh;


  /* top:0px; */
  color:black;
  /* position:fixed; */
  background-color: #DEB887;
  /*height:15vh;
  left:0px;*/
  font-size: calc(2.5vw + 1.5vh);
  /* padding-left: 1vw;
  padding-right: 1vw; */
  font-family: 'Amaranth';
  width: 100vw;
}

@media screen and (max-width:380px) {
  .header{
    font-size: 4.85vw;

  }

  .btn_header{
    width: 1vh;
    height: 1vh;
    margin: 1.5vh 1.5vh;
    border-radius: 10px;
    background-color: #8B4513;
    border: none;
  }
}
.footer {
  grid-template-columns: 20vw auto 20vw;
}

.page {
  width: 100vw;
}



/** PAGE START **/
/*
.ingredient {
  border: 1px solid #ccd;
  padding: 1em;
  background-image: url('~@/assets/exampleImage.jpg');
  color: white;
}*/

.tab-button {
  /* padding: 6px 10px; */
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  width: 25vw;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}

/** PAGE END **/

/** HEADER&FOOTER START **/
.title {
  /* font-size: 4vmax;
  font-family: 'Amaranth';*/
  margin-top: 2vh;
  margin-bottom: 2vh;
  margin-right: 10vw;
}

button:hover {
  background-color: #501811;
  cursor: pointer;
}

button:active {
  box-shadow: 0 1px #666;
  transform: translateY(2px);
}
.btn_header {
  width: 10vh;
  height: 10vh;
  margin: 1.5vh 1.5vh;
  border-radius: 10px;
  background-color: #8B4513;
  border: none;
}

.btn_footer {
  min-width: 18vh;
  width: 90%;
  height: 6vh;
  margin: 3vh 5%;
  border-radius: 10px;
  background-color: #8B4513;
  font-size: 2vmax;
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

/** HEADER END **/
</style>
