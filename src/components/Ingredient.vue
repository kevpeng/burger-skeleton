<template>
  <div class="ingredient">
    {{lang}}
    <label>
      <div class="ingredientTitle" >
        <!--We are unable to get the name to change with the language button. -->
        <!--We think it has to do with the dependency of this file to the IngSelection.vue file-->
        <!--and that it is only getting passed the default value and pressing the-->
        <!--switchLang button is not updating the variable.-->
        {{ getTitle(item) }}<br>
      </div>
      <img class="image" :src="require('../assets/' + item.picture)" /> <br>
        <button class="counter" v-on:click="decrementCounter">-</button>
        <!-- <button v-on:click="incrementCounter">{{ counter }}</button> <br> -->
          {{counter}}
        <button class="counter" v-on:click="incrementCounter">+</button> <br>
        {{uiLabels.price}}{{item.selling_price}} kr <br>
        {{uiLabels.stock}}{{item.stock}}
    </label>
  </div>
</template>
<script>
import sharedVueStuff from '@/components/sharedVueStuff.js'
export default {
  name: 'Ingredient',
  mixins: [sharedVueStuff],
  props: {
    item: Object,
    lang: String
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
    //  Just trying to get the thing to work... doesn't work
    //  The "this.lang" is NOT updating after clicking the button.
    getTitle: function(item) {
        var x = "ingredient_" + this.lang;
        return item[x];
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

.ingredientTitle{
  font-size: 2.5vw;
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

.ingredient{
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

  .ingredient{
    font-size: 5vw;
  }

  .ingredientTitle{
    font-size: 5vw;
  }
}

</style>
