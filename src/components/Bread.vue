<template>
  <div>
    <head>
      <meta charset="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link href='https://fonts.googleapis.com/css?family=Amaranth' rel='stylesheet'>
    </head>

    <body>
      <div class="pageGrid">
        <div class="filterContainer">
          <div class="filter">TODO FILTER</div>
          <div class="line"></div>
        </div>
        <div class="gridContainer">          
          <Ingredient class="gridElement"
            ref="Patty"
            v-for="item in ingredients"
            v-if="item.category == 4"
            v-on:increment="updateSelectedPatty()"
            :lang="lang"
            :ui-labels="uiLabels"
            :item="item"
            :key="item.ingredient_id">
          </Ingredient>
        </div>
        <footer>
          <button v-on:click="switchTo('BurgerCreation')" class="back"> {{ uiLabels.back }} </button>
          <button v-on:click="addToIngredients()" class="add"> {{ uiLabels.add }} </button>
        </footer>
      </div>
    </body>
</div>
</template>

<script>
//import methods and data that are shared between ordering and kitchen views
import Ingredient from '@/components/Ingredient.vue'
import OrderItem from '@/components/OrderItem.vue'

export default {
  name: "Patty",
  components: {
    Ingredient,
    OrderItem
  },

  props: {
   ingredients: Array,
   lang: String,
   uiLabels: Object,
  },

  data: function() {
    return {
      chosenPatty: [],
      price: 0,
    }
  },

  methods: {
    updateSelectedPatty: function() {
      this.chosenPatty = [];
      for (var i = 0; i < this.$refs.Patty.length; i += 1) {
        if(this.$refs.Patty[i].counter > 0){
          var obj = {
            name: this.$refs.Patty[i].item["ingredient_"+ this.lang],
            amount: this.$refs.Patty[i].counter,
            price: (this.$refs.Patty[i].item.selling_price * this.$refs.Patty[i].counter)
          };
          this.chosenPatty.push(obj);
        }
      }
      /* Check if everything is in the array
      for(var i in this.chosenPatty){
      console.log(this.chosenPatty[i].name);
      console.log(this.chosenPatty[i].amount);
      console.log(this.chosenPatty[i].price);
      }*/
    },
    addToIngredients: function() {
      this.$emit('addToIngredients', this.chosenPatty);
      //set all counters to 0. Notice the use of $refs
      // for (i = 0; i < this.$refs.Patty.length; i += 1) {
      //   this.$refs.Patty[i].resetCounter();
      // }
      //this.price = 0;
      //this.chosenIngredients = [];
    },
    TODO_remove_or_addToIngredients: function() {
    },
    switchTo: function(newTab) {
      this.$emit('switchTo', newTab);
    }
  }
}
</script>

<style scoped>
.pageGrid{
  --footer-scale: 70px;
  display: grid;
  grid-gap: 3vh;
}
.gridContainer {
  display: grid;
  color: black;
  font-family: 'Amaranth';
  font-weight: lighter;
  grid-template-columns: repeat(auto-fit, 33vw);
  padding-bottom: var(--footer-scale);
}
.gridElement{
  margin: 1vw;
  background-color: #8B4513;
  border-radius: 10px;
}

.filterContainer {
  display: grid;
  grid-template-rows: 8vh 1vh;
  width: 100%;
  grid-gap: 2vh;
}
.line, .filter{
  margin: 1vw;
  grid-column: 1 / 4;
  border-radius: 10px;
  height: 1vh;
  background-color: #8B4513;
}
.filter {
  height: 8vh;
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

button:hover{
  background-color: #501811;
  cursor: pointer;
}


@media screen and (max-width:380px) {
  .gridContainer{
    grid-template-columns: repeat(auto-fit, 49vw);
    grid-gap: 2vw;
  }
}
</style>