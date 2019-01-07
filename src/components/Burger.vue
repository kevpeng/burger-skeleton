<template>
  <div class="burger">
      <div class="burgerTitle" >
        {{item["ingredient_"+lang]}}
        <!-- {{["burger_"+lang]}} -->
        <!-- {{["burger_en"]}} -->
      </div>
      <img class="image" :src="require('../assets/' + item.picture)" /> <br>
      <div class="burgerIngredients" >
        {{item["bread_"+lang]}}<br>
        {{item["patty_"+lang]}}<br>
        {{item["toppingOne_"+lang]}},
        {{item["toppingTwo_"+lang]}},
        {{item["toppingThree_"+lang]}}<br>
        {{item["sauce_"+lang]}}
      </div>
        <button class="counter" v-on:click="decrementCounter">-</button>
          {{counter}}
        <button class="counter" v-on:click="incrementCounter">+</button> <br>
        {{uiLabels.price}}{{item.selling_price}} kr <br>
        {{uiLabels.stock}}{{item.stock}}
  </div>
</template>
<script>
export default {
  name: 'Burger',
  props: {
    item: Object,
    lang: String,
    uiLabels: Object,
  },
    data: function () {
    return {
      counter: 0

    };
  },
  methods: {
    incrementCounter: function () {
      this.counter += 1;
      // sending 'increment' message to parent component or view so that it
      // can catch it with v-on:increment in the component declaration
      this.$emit('increment');
    },
    decrementCounter: function () {
      if(this.counter > 0) {
      this.counter -= 1;
      // sending 'increment' message to parent component or view so that it
      // can catch it with v-on:increment in the component declaration
      this.$emit('increment');
      }
    },
    getImage: function(path){
     return "../assets/" + path; //provide "missing picture" as default
   },
    resetCounter: function () {
      this.counter = 0;
    }
  }
}
</script>
<style scoped>
.image{
  width: 100px;
  height: 100px;
}

.burgerTitle{
  font-size: 2.5vw;
  color: #FFE4B5;
}
.burgerIngredients{
  font-size: 1.5vw;
  color: #FFE4B5;
}
.counter{
  font-size: 2vw;
  text-align: center;
  width: 3vw;
  height: 3vw;
  border: none;
  border-radius: 50%;
  background-color: #FFE4B5;
  margin-bottom: 2vh;
}

.burger{
  font-size: 2vw;
  color: #FFE6D2;
}

@media screen and (max-width:380px) {
  .counter{
    width: 15vw;
    height: 15vw;
    font-size: 5vw;
    text-align: center;
    font-weight: bold;
  }

  .burger{
    font-size: 5vw;
  }

  .burgerTitle{
    font-size: 5vw;
  }
}

</style>
