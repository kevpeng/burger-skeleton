<template>
  <div>
    <head>
      <meta charset="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link href='https://fonts.googleapis.com/css?family=Amaranth' rel='stylesheet'>
    </head>

    <body>
      <div class="filter">
        <div>
          {{uiLabels.Filter}}:
        </div>
        <div>
          <input type="checkbox"
              v-model="gluten" value="1">{{uiLabels.glutenfree}}
        </div>
        <div>
          <input type="checkbox"
              v-model="vegan" value="1">{{uiLabels.vegan}}
        </div>
        <div>
          <input type="checkbox"
              v-model="lactose" value="1">{{uiLabels.lactosefree}}
        </div>
      </div>
      <div class="line"></div>
      <div class="wrapper">
        <Ingredient class="ingredient"
          ref="Ingredient"
          v-for="item in ingredients"
          v-if="(gluten != 1 || gluten == item.gluten_free) &
          (vegan != 1 || vegan == item.vegan) &
          (lactose != 1 || lactose == item.milk_free)"
          v-on:increment="updateSelectedIngredients()"
          :lang="lang"
          :ui-labels="uiLabels"
          :item="item"
          :key="item.ingredient_id">
        </Ingredient>
      </div>
    </body>

  <footer>
    <button v-on:click="switchTo('BurgerCreation')" class="back"> {{ uiLabels.back }} </button>
    <button v-on:click="addToIngredients()" class="add"> {{ uiLabels.add }} </button>
  </footer>

</div>
</template>

<script>
//import methods and data that are shared between ordering and kitchen views
import Ingredient from '@/components/Ingredient.vue'
import OrderItem from '@/components/OrderItem.vue'

export default {
  name: "IngredientSelection",
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
      chosenIngredients: [],
      price: 0,
      gluten: 0,
      vegan: 0,
      lactose: 0
    }
  },

  methods: {
    updateSelectedIngredients: function() {
      this.chosenIngredients = [];
      for (var i = 0; i < this.$refs.Ingredient.length; i += 1) {
        if(this.$refs.Ingredient[i].counter > 0){
          var obj = {
            unit: this.$refs.Ingredient[i].item,
            amount: this.$refs.Ingredient[i].counter,
            price: (this.$refs.Ingredient[i].item.selling_price * this.$refs.Ingredient[i].counter),
            id: Math.floor(Math.random() * Math.floor(9999999999))
          };
          this.chosenIngredients.push(obj);
        }
      }
      /* Check if everything is in the array
      for(var i in this.chosenIngredients){
      console.log(this.chosenIngredients[i].name);
      console.log(this.chosenIngredients[i].amount);
      console.log(this.chosenIngredients[i].price);
      }*/
    },
    addToIngredients: function() {
      this.$emit('addToIngredients', this.chosenIngredients);
      //set all counters to 0. Notice the use of $refs
      // for (i = 0; i < this.$refs.Ingredient.length; i += 1) {
      //   this.$refs.Ingredient[i].resetCounter();
      // }
      //this.price = 0;
      //this.chosenIngredients = [];
    },
    TODO_remove_or_addToIngredients: function() {
    }
  }
}
</script>

<style scoped>
.wrapper {
  left: 0;
  width: 97%;
  display: grid;
  grid-gap: 20px;
  color: black;
  font-family: 'Amaranth';
  font-weight: lighter;
  grid-template-columns: repeat(auto-fit, 23.8%);
  padding-bottom: 15vh;
}

footer{
	bottom:0px;
	width:100vw;
	height:9.5vh;
	position:fixed;
  display: flex;
	background-color: #DEB887;
  align-items: center;
}

.back, .add{
  background-color: #8B4513;
  border: none;
  color: #FFE4B5;
  border-radius: 10px;
  font-family: 'Amaranth';
  font-weight: bold;
  font-size: calc(1vw + 1vh);
  position: absolute;
  width: 10%;
  height: 5vh;
}

.back{
  left: 0;
  margin-left: 1.5%;
}

.add{
  right: 0;
  margin-right: 1.5%;
}

button:hover{
  background-color: #501811;
  cursor: pointer;
}

.ingredient{
  margin-top: 5em;
  margin: 0 auto;
  margin-left: 5%;
  padding-left: 2%;
  background-color: #8B4513;
  border-radius: 10px;
  width: 100%;
  min-width: 100px;
}

@media screen and (max-width:380px) {
  .wrapper{
    grid-template-columns: repeat(auto-fit, 45vw);
    grid-gap: 3vw;
    /* margin-bottom: 100vh; */
  }

  .back, .add{
    width: 25%;
    height: 6vh;
    font-size: calc(1.7vw + 1.7vh);
  }

  .back{
    margin-left: 3%;
  }

  .add{
    margin-right: 3%;
  }
}
</style>
