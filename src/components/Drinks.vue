<template>
  <div>
    <head>
      <meta charset="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link href='https://fonts.googleapis.com/css?family=Amaranth' rel='stylesheet'>
    </head>

    <body>
      <div class="background">
        <div class="wrapper">
          <Ingredient class="ingredient"
           ref="Drinks"
           v-for="item in ingredients"
           v-if="item.category == 6"
           v-on:increment="updateSelectedDrinks()"
           :lang="lang"
           :ui-labels="uiLabels"
           :item="item"
           :key="item.ingredient_id">
         </Ingredient>
        </div>
      </div>
    </body>

  <footer>
    <button v-on:click="switchTo('SelectionOverview')" class="back" id="back"> {{ uiLabels.back }} </button>
    <button v-on:click="addToOrder()" class="add" id="add"> {{ uiLabels.add }} </button>
  </footer>


</div>
</template>

<script>
//import methods and data that are shared between ordering and kitchen views
import Ingredient from '@/components/Ingredient.vue'
import OrderItem from '@/components/OrderItem.vue'

export default {
  name: "Drinks",
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
      chosenDrinks: [],
      price: 0,
    }
  },
  methods: {
    updateSelectedDrinks: function() {
      this.chosenDrinks = [];
      for (var i = 0; i < this.$refs.Drinks.length; i += 1) {
        if(this.$refs.Drinks[i].counter > 0){
          var obj = {
            name: this.$refs.Drinks[i].item["ingredient_"+ this.lang],
            amount: this.$refs.Drinks[i].counter,
            price: (this.$refs.Drinks[i].item.selling_price * this.$refs.Drinks[i].counter)
          };
          
          this.chosenDrinks.push(obj);
        }
      }
      /* Check if everything is in the array
      for(var i in this.chosenDrinks){
      console.log(this.chosenDrinks[i].name);
      console.log(this.chosenDrinks[i].amount);
      console.log(this.chosenDrinks[i].price);
      }*/
    },
    switchTo: function(newTab) {
      this.$emit('switchTo', newTab);
    },
    addToOrder: function() {
      this.$emit('addToOrder', this.chosenDrinks);
    }
  }
}
</script>


<style scoped>
footer{
  bottom:0px;
  position:fixed;
  background-color: #DEB887;
  width:100vw;
  height:9.5vh;
  color:black;
  display: flex;
  align-items: center;
}

.back{
  background-color: #8B4513;
  border: none;
  font-weight: bold;
  font-size: calc(1vw + 1vh);
  font-family: 'Amaranth';
  color: #FFE4B5;
  border-radius: 10px;
  text-align: center;
  width: 10%;
  height: 5vh;
  font-size: calc(1vw + 1vh);
  margin-left: 1.5%;
  position: absolute;
  left: 0;
}

button:hover{
  background-color: #501811;
  cursor: pointer;
}

.add{
  background-color: #8B4513;
  border: none;
  font-weight: bold;
  font-size: calc(1vw + 1vh);
  font-family: 'Amaranth';
  color: #FFE4B5;
  border-radius: 10px;
  width: 10%;
  height: 5vh;
  margin-left: 1.5%;
  position: absolute;
  right: 0;
  margin-right: 1.5%;

}

.burgerButtons{
  width: 7em;
  height: 2em;
  background-color: #8B4513;
  font-family: 'Amaranth';
  border-radius: 10px;
  color: #FFE4B5;
  border: none;
  font-size: 3em;
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

.wrapper {
  /*position: absolute;*/
  left: 0;
  /* max-width: 900px; */
  width: 97%;
  display: grid;
  grid-gap: 20px;
  color: black;
  font-family: 'Amaranth';
  font-weight: lighter;
  /*margin-top: 7em;*/
  grid-template-columns: repeat(auto-fit, 23.8%);
  padding-bottom: 15vh;
}

@media screen and (max-width:380px) {
  .wrapper{
    grid-template-columns: repeat(auto-fit, 45vw);
    grid-gap: 3vw;
    /* margin-bottom: 100vh; */
  }

  .back{
    width: 25%;
    height: 6vh;
    font-size: calc(1.7vw + 1.7vh);
    margin-left: 3%;
    text-align: center;
  }

  .add{
    width: 25%;
    height: 6vh;
    font-size: calc(1.7vw + 1.7vh);
    margin-right: 3%;
  }
}
</style>