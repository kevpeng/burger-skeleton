<template>
  <div>
    <head>
      <meta charset="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link href='https://fonts.googleapis.com/css?family=Amaranth' rel='stylesheet'>
    </head>

    <body>
      <div class="background">
        <main>
          <div class="header">
            <button  class="language" id="language" v-on:click="switchLang()"> {{ uiLabels.language }} </button> <!--use image-->
            <button  class="cancel" id="cancel"><img src="https://img.icons8.com/material/52/FFE4B5/delete-sign.png">  </button>
            <button  class="cart" id="language"><img src="https://img.icons8.com/material/52/FFE4B5/shopping-cart.png">  </button>
            <h1> {{ uiLabels.ingredientSelection }} </h1>
          </div>
        </main>

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
    <button  class="back" id="back"> {{ uiLabels.back }} </button>
    <button  class="add" id="add"> {{ uiLabels.addToBurger }} </button>
  </footer>


</div>
</template>

<script>
//import methods and data that are shared between ordering and kitchen views
import sharedVueStuff from '@/components/sharedVueStuff.js'
import Ingredient from '@/components/Ingredient.vue'
import OrderItem from '@/components/OrderItem.vue'

export default {
  name: "ingredientsSelection.vue",
  components: {
    Ingredient,
    OrderItem
  },
  mixins: [sharedVueStuff]


}
</script>


<style scoped>
footer{
  bottom:0px;
  position:fixed;
  background-color: #DEB887;
  width:100%;
  height:4em;
  left:0px;
  color:black;
  font-size: 0.9em;
  padding-left:20px;
}

.back{
  width: 10%;
  height: 2.5em;
  margin-top: 0.75em;
  background-color: #8B4513;
  border: none;
  font-weight: bold;
  font-size: 15px;
  font-family: 'Amaranth';
  color: #FFE4B5;
  border-radius: 10px;

}

button:hover{
  background-color: #501811;
  cursor: pointer;
}

.add{
  width: 10%;
  height: 2.5em;
  margin-top: 0.75em;
  background-color: #8B4513;
  border: none;
  font-weight: bold;
  font-size: 15px;
  position: absolute;
  right: 0;
  margin-right: 40px;
  font-family: 'Amaranth';
  color: #FFE4B5;
  border-radius: 10px;

}

.header{
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


h1{
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

}

.ingredient{
  margin-top: 5em;
  margin: 0 auto;
  margin-left: 5%;
  padding-left: 2%;
  background-color: #8B4513;
  border-radius: 10px;
}

.wrapper {
  position: absolute;
  left: 0;
  width: 100%;
  display: grid;
  grid-gap: 5px;
  color: black;
  font-family: 'Amaranth';
  font-weight: lighter;
  margin-top: 7em;
  grid-template-columns: repeat(4,1fr);
}
</style>
