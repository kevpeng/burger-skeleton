<template>
  <div>
    <head>
      <meta charset="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link href='https://fonts.googleapis.com/css?family=Amaranth' rel='stylesheet'>
    </head>

    <body>
      <div class="pageGrid">
        <div class="gridContainer">
          <div class="column1">
            <button v-on:click="switchTo('Bread')" class="burgerButtons" id="bread"> {{ uiLabels.bread }} </button>
            <br>
            <button v-on:click="switchTo('Patty')" class="burgerButtons" id="patty"> {{ uiLabels.patty }} </button>
          </div>
          <div class="column2">
            <img class="burgerImage" src="../assets/burger.png">
          </div>
          <div class="column3" >
            <button v-on:click="switchTo('Toppings')" class="burgerButtons" id="toppings"> {{ uiLabels.toppings }} </button>
            <br>
            <button v-on:click="switchTo('Sauce')" class="burgerButtons" id="sauce"> {{ uiLabels.sauce }} </button>
          </div>
        </div>
        <footer>
          <button v-on:click="cancelTo('SelectionOverview')" class="back" id="back"> {{ uiLabels.back }} </button>
          <button v-on:click="addToOrder()" class="add" id="add"> {{ uiLabels.add }} </button>
        </footer>
      </div>
    </body>
  </div>
</template>

<script>
import sharedVueStuff from '@/components/sharedVueStuff.js'
export default {
  name: "burgerCreation.vue",
  mixins: [sharedVueStuff],
  methods: {
    switchTo: function(newTab) {
      this.$emit('switchTo', newTab);
    },
    cancelTo: function(newTab) {
      this.$emit('cancelTo', newTab, "Do you really want to cancel the Creation of your Burger?  All your selections will be lost.");
    },
    addToOrder: function() {
      this.$emit('addCreatedBurgerToOrder');
    }
  }
}
</script>

<style scoped>
.pageGrid{
  --footer-scale: 70px;
  display: grid;
  grid-template-rows: auto var(--footer-scale);
}

.gridContainer{
  display: grid;
  grid-template-columns: auto 35vw auto;
  width: 100%;
  /*grid-template-columns: repeat(auto-fit, 400px);
  justify-items: center;*/
  align-items: center;
}

.burgerImage{
  width: 35vw;
  height: 30vw;
}
button:active {
  box-shadow: 0 1px #666;
  transform: translateY(2px);
}
button:hover{
  background-color: #501811;
  cursor: pointer;
}
.burgerButtons{
  margin: 5vh 3vw;
  width: 20vw;
  height: 10vw;
  max-height: 150px;
  background-color: #8B4513;
  font-family: 'Amaranth';
  border-radius: 10px;
  color: #FFE4B5;
  border: none;
  font-size: calc(5px + 2.5vw);
  text-align: center;
  /*align-items: center;
  justify-items: center;*/
}

footer{
	bottom: 0;
	height: var(--footer-scale);  
  display: grid;
  grid-template-columns: 100px auto 100px;
	position: fixed;
	background-color: #DEB887;
  width: 100%;
  max-width: 100vw;
  align-items: center;
}

.back, .add{
  background-color: #8B4513;
  border: none;
  color: #FFE4B5;
  border-radius: 10px;
  font-family: 'Amaranth';
  font-weight: bold;
  font-size: calc(1vw + 2vh);
  position: absolute;
  width: 20%;
  height: 6vh;
}

.back{
  left: 0;
  margin-left: 3%;
}

.add{
  right: 0;
  margin-right: 3%;
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
