<template>
  <div>
    <body>
      <div class="pageGrid">
        <div class="gridContainer">
          <button class="gridElement line" v-on:click="switchTo('BurgerCreation')"> {{uiLabels.createOwnBurger}} </button>
          <div class="line"></div>
          <button class="gridElement" v-on:click="switchTo('Menus')"> {{uiLabels.menus}} </button>
          <button class="gridElement" v-on:click="switchTo('Burgers')"> {{uiLabels.burgers}} </button>
          <button class="gridElement" v-on:click="switchTo('Fries')"> {{uiLabels.fries}} </button>
          <!--button class="gridElement" onclick="location.href='http://localhost:8080/#/start'"> {{uiLabels.fries}} </button-->
          <button class="gridElement" id="iceCream" v-on:click="switchTo('Icecream')"> {{uiLabels.iceCream}} </button>
          <button class="gridElement" v-on:click="switchTo('Salad')"> {{uiLabels.salad}} </button>
          <button class="gridElement" v-on:click="switchTo('Drinks')"> {{uiLabels.drinks}} </button>
          <!-- <div class="gridElement" v-for="b in buttonList">
          <button class="gridElement" v-on:click="b.methods"> {{b.title}} </button>
          </div> -->
        </div>
        <footer>
          <button v-on:click="cancelTo('Start')" class="back" id="back"> {{uiLabels.back}}  </button>
          <button v-on:click="submit()" class="add" id="forward"> {{uiLabels.continue}}  </button>
        </footer>
      </div>
    </body>
  </div>
</template>

<script>
// Javascript
/*var buttons = [
  {
    "title": {{uiLabels.createOwnBurger}},
    "methods": "create"
  },
  {
    "title": {{uiLabels.menus}},
    "methods": "menus"
  },
  {
    "title": {{uiLabels.burgers}},
    "methods": "burgers"
  },
  {
    "title": {{uiLabels.fries}},
    "methods": "fries"
  },
  {
    "title": {{uiLabels.iceCream}},
    "methods": "icecream"
  },
  {
    "title": {{uiLabels.salad}},
    "methods": "salad"
  },
  {
    "title": {{uiLabels.drinks}},
    "methods": "Drinks"
  }
]*/

import sharedVueStuff from '@/components/sharedVueStuff.js'
export default {
  name: 'SelectionOverview',
  mixins: [sharedVueStuff],
  /*data: function() {
    return {
      headLine: 'Selection Overview',
      buttonList: buttons,
    }
  },*/
  methods: {
     switchTo: function(newTab){
       this.$emit('switchTo', newTab);
     },
     cancel: function(){
       this.$emit('cancel');
     },
     cancelTo: function(newTab){
       this.$emit('cancelTo', newTab, "Do you really want to cancel your Order?");
     },
     submit: function(){
       this.$emit('toggleCart');
     }
  }
}
</script>

<style scoped>
  @import '~@/css/sharedCSSStuff.css';

/* Attention: Overriding things from sharedCSSStuff below here! */
.gridElement{
  height: calc(10vh + 2vw);
  font-size: calc(2.5vw + 2.5vh);
}
@media screen and (max-width:818px){
  #forward{
    font-size: calc(0.3vw + 2vh);
  }
}
@media screen and (max-width:380px){
  .gridContainer {
      grid-template-columns: repeat(auto-fit, 32.7vw);
      grid-gap: 1vw;
  }
}
@media screen and (max-width:300px){
  .gridElement {
      font-size: 7vw;
  }
}
/*
Big screen:
grid-template-columns: repeat(auto-fit, calc(7em + 12px));

Smaller screen:
grid-template-columns: 1fr;

Ingreditent:
width: calc(100%-2em);

computed:{
  seats: function(){
    return this.$store.state.seats;
  }
} */
</style>
