<template>
  <div>
    <div class="pageGrid">
      <div class="gridContainer">
        <!-- TODO If something is already chosen, view the name of it below the corresponding button -->
        <div class="column1">
          <button v-on:click="switchToItems('Bread')" class="gridElement burgerButtons" id="bread"> {{ uiLabels.bread }} </button>
          <br>
          <button v-on:click="switchToItems('Patty')" class="gridElement burgerButtons" id="patty"> {{ uiLabels.patty }} </button>
        </div>
        <div class="column2">
          <img class="burgerImage" src="../assets/burger.png">
        </div>
        <div class="column3" >
          <button v-on:click="switchToItems('Toppings')" class="gridElement burgerButtons" id="toppings"> {{ uiLabels.toppings }} </button>
          <br>
          <button v-on:click="switchToItems('Sauce')" class="gridElement burgerButtons" id="sauce"> {{ uiLabels.sauce }} </button>
        </div>
      </div>
      <footer>
        <button v-on:click="cancelTo('SelectionOverview')" class="back" id="back"> {{ uiLabels.back }} </button>
        <button v-on:click="addCreatedBurgerToOrder()" class="add" id="add"> {{ uiLabels.add }} </button>
      </footer>
    </div>
  </div>
</template>

<script>
import sharedVueStuff from '@/components/sharedVueStuff.js'

export default {
  name: "BurgerCreation",

  mixins: [sharedVueStuff],

  methods: {
    cancelTo: function(newTab) {
      this.$emit('cancelTo', newTab, "Do you really want to cancel the Creation of your Burger?  All your selections will be lost.");
    },
    addCreatedBurgerToOrder: function() {
      this.$emit('addCreatedBurgerToOrder');
    }
  }
}
</script>

<style scoped>
  @import '~@/css/sharedCSSStuff.css';

/* Attention: Overriding things from sharedCSSStuff below here! */
.gridContainer{
  align-items: center;
}

.burgerImage{
  width: 35vw;
  height: 30vw;
}
.burgerButtons{
  margin: 5vh 3vw;
  width: 20vw;
  height: 10vw;
  max-height: 150px;
  font-size: calc(5px + 2.5vw);
}

@media screen and (max-width:380px){
  .gridContainer{
    grid-template-columns: auto;
  }

  .burgerButtons{
    height: 10vh;
    min-width: 180px;
    min-height: 70px;
    margin: 1.5vw;
    font-size: 2em;
  }
}
</style>
