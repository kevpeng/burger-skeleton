<template>
  <div>
    <div class="pageGrid">
      <div class="gridContainer">
        <button class="gridElement line" v-on:click="switchTo('BurgerCreation')">{{uiLabels.createOwnBurger}}</button>
        <div class="line"></div>
        <button class="gridElement" v-on:click="switchToItems('Menus')"> {{uiLabels.menus}} </button>
        <button class="gridElement" v-on:click="switchToItems('Burgers')"> {{uiLabels.burgers}} </button>
        <button class="gridElement" v-on:click="switchToItems('Fries')"> {{uiLabels.fries}} </button>
        <button class="gridElement" v-on:click="switchToItems('Icecreams')" id="iceCream"> {{uiLabels.iceCream}} </button>
        <button class="gridElement" v-on:click="switchToItems('Salads')"> {{uiLabels.salad}} </button>
        <button class="gridElement" v-on:click="switchToItems('Drinks')"> {{uiLabels.drinks}} </button>
      </div>
      <footer>
        <button v-on:click="cancelTo('Start')" class="back" id="back"> {{uiLabels.back}}  </button>
        <button v-on:click="submit()" class="add" id="forward"> {{uiLabels.continue}}  </button>
      </footer>
    </div>
  </div>
</template>

<script>
import sharedVueStuff from '@/components/sharedVueStuff.js'

export default {
  name: 'SelectionOverview',

  mixins: [sharedVueStuff],

  methods: {
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

.add {
  font-size: calc(2vw + 1vh);
}

@media screen and (max-width:818px){
  #forward{
    font-size: calc(0.5vw + 2vh);
    padding-left: 2.5vw;
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
</style>