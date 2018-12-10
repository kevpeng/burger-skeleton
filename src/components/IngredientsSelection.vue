<template>
  <div>
    <head>
      <meta charset="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link href='https://fonts.googleapis.com/css?family=Amaranth' rel='stylesheet'>
    </head>

    <body>
      <div class="background">
        <!-- <main>
          <div class="header">
            <button  class="language" id="language" v-on:click="switchLang()"> {{ uiLabels.language }} </button>
            <button  class="cancel" id="cancel"><img src="https://img.icons8.com/material/52/FFE4B5/delete-sign.png">  </button>
            <button  class="cart" id="language"><img src="https://img.icons8.com/material/52/FFE4B5/shopping-cart.png">  </button>
            <h1> {{ uiLabels.ingredientSelection }} </h1>
          </div>
        </main> -->

        <div class="wrapper">
          <Ingredient class="ingredient"
          ref="ingredient"
          v-for="item in ingredients"
          v-if="item.category == 1"
          v-on:increment="addToOrder(item)"
          :item="item"
          :lang="lang"
          :key="item.ingredient_id">
        </Ingredient>
      </div>

    </div>
  </body>

  <footer>
    <button v-on:click="addToOrder()"  class="back" id="back"> {{ uiLabels.back }} </button>
    <button  class="add" id="add"> {{ uiLabels.add }} </button>
  </footer>


</div>
</template>

<script>
//import methods and data that are shared between ordering and kitchen views
import sharedVueStuff from '@/components/sharedVueStuff.js'
import Ingredient from '@/components/Ingredient.vue'
import OrderItem from '@/components/OrderItem.vue'

export default {
  name: "IngredientsSelection",
  components: {
    Ingredient,
    OrderItem
  },
  mixins: [sharedVueStuff],
  data: function() {
    return {
      chosenIngredients:[],
      price: 0
    }
  },
  methods: {
    addToOrder: function (item) {
      this.chosenIngredients.push(item);
      this.price += +item.selling_price;
    },
/**    placeOrder: function () {
      var i;
      //Wrap the order in an object
        var patty = {
          ingredients: this.chosenIngredients,
          price: this.price
        };
      //  order.selection.push(patty);
      // make use of socket.io's magic to send the stuff to the kitchen via the server (app.js)
      // this.$store.state.socket.emit('order', {order: order});
      //set all counters to 0. Notice the use of $refs
      // for (i = 0; i < this.$refs.ingredient.length; i += 1) {
      //   this.$refs.ingredient[i].resetCounter();
      // }
      this.price = 0;
      this.chosenIngredients = [];
    }**/
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
	left:0px;
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
  position: absolute;
  left: 0;
  /* max-width: 900px; */
  width: 97%;
  min-width: 5px;
  display: grid;
  grid-gap: 20px;
  color: black;
  font-family: 'Amaranth';
  font-weight: lighter;
  margin-top: 7em;
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

/* .header{
  top:0px;
  position:fixed;
  background-color: #DEB887;
  width:100%;
  height:5em;
  left:0px;
  color:black;
  font-size: 1em;
  padding-left:20px;
}

.language{
  width: 4em;
  height: 4em;
  position: absolute;
  top: 0;
  margin-top: 0.75em;
  background-color: #8B4513;
  border: none;
  font-weight: bold;
  font-size: 15px;
  margin-right: 40px;
  font-family: 'Amaranth';
  color: #FFE4B5;
  border-radius: 10px;
}

.cancel{
  width: 4em;
  height: 4em;
  margin-top: 0.75em;
  margin-left: 80px;
  background-color: #8B4513;
  border: none;
  font-weight: bold;
  font-size: 15px;
  margin-right: 40px;
  font-family: 'Amaranth';
  color: #FFE4B5;
  border-radius: 10px;
}

.cart{
  width: 4em;
  height: 4em;
  margin-top: 0.75em;
  background-color: #8B4513;
  border: none;
  font-weight: bold;
  font-size: 15px;
  margin-right: 40px;
  font-family: 'Amaranth';
  color: #FFE4B5;
  position: absolute;
  right: 0;
  margin-right: 40px;
  border-radius: 10px;

} */


/* h1{
  text-align: center;
  font-family: 'Amaranth';
  color: #8B4513;
  margin-top: -50px;
}

.background {
  background-color: #FFFFF0;
  font-family: 'Amaranth';
  width: 110%;
  height: 100%;
  margin-left: -3%;

} */

}
</style>
