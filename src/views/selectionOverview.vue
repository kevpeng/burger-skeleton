<template>
  <div>
    <head>
      <!-- <title>Selection Overview</title> -->
      <meta charset="utf-8"/>
      <link href='https://fonts.googleapis.com/css?family=Amaranth' rel='stylesheet'>
      <!-- <link rel="stylesheet" href="css/sharedCSSStuff.css"> -->
    </head>
    <body>
      <div class="pageGrid">
        <div class="gridContainer">
          <button class="gridElement create" v-on:click="switchTo('BurgerCreation')"> {{uiLabels.createOwnBurger}} </button>
          <div class="line"></div>
          <button class="gridElement premade" v-on:click="switchTo('Menus')"> {{uiLabels.menus}} </button>
          <button class="gridElement premade" v-on:click="switchTo('Burgers')"> {{uiLabels.burgers}} </button>
          <button class="gridElement premade" v-on:click="switchTo('Fries')"> {{uiLabels.fries}} </button>
          <!--button class="gridElement menusTop" onclick="location.href='http://localhost:8080/#/start'"> {{uiLabels.fries}} </button-->
          <button class="gridElement premade" id="iceCream" v-on:click="switchTo('Icecream')"> {{uiLabels.iceCream}} </button>
          <button class="gridElement premade" v-on:click="switchTo('Salad')"> {{uiLabels.salad}} </button>
          <button class="gridElement premade" v-on:click="switchTo('Drinks')"> {{uiLabels.drinks}} </button>
          <!-- <div class="gridElement" v-for="b in buttonList">
          <button class="gridElement" v-on:click="b.methods"> {{b.title}} </button>
        </div> -->
        </div>
        <footer>
          <button v-on:click="cancelTo('Start')" class="back" id="back"> {{uiLabels.back}}  </button>
          <button v-on:click="placeOrder()" class="forward" id="forward"> {{uiLabels.selectionOverviewNext}}  </button>
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
  name: 'selectionOverview',
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
     placeOrder: function(){
       this.$emit('placeOrder');
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

.gridContainer {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto 1vh auto auto;
  color: #FFE4B5;
  width: 100%;
  justify-items: center;
}
.gridElement{
  margin: 2vw;
  height: calc(10vh + 2vw);
  font-family: 'Amaranth';
  font-size: calc(2.5vw + 2.5vh);
  background-color: #8B4513;
  color: #FFE4B5;
  border: none;
  text-align: center;
  border-radius: 10px;
}
.premade {
  width: 29.3vw;
}
.create{
  grid-column: 1 / 4;
  width: 96vw;
}
.line{
  grid-column: 1 / 4;
  border-radius: 10px;
  width: 96vw;
  height: 1vh;
  background-color: #8B4513;
}

button:hover{
  background-color: #501811;
  cursor: pointer;
}
button:active{
  box-shadow: 0 1px #666;
  transform: translateY(2px);
}

footer {
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

.back, .forward{
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

.forward{
  right: 0;
  margin-right: 3%;
}

@media screen and (max-width:300px){
  .gridButton{
  font-size: calc(7vw);
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
