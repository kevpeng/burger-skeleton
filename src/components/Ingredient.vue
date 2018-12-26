<template>
  <div class="ingredient">
    <label>
      <div class="ingredienTitle">
        {{item["ingredient_"+lang]}} <br>
      </div>
      <img class="image" :src="require('../assets/' + item.picture)" /> <br>
        <button class="counter" v-on:click="decrementCounter">-</button>
        <!-- <button v-on:click="incrementCounter">{{ counter }}</button> <br> -->
          {{counter}}
        <button class="counter" v-on:click="incrementCounter">+</button> <br>
        {{uiLabels.price}}{{item.selling_price}}
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

.ingredienTitle{
  font-size: calc(1.5vw + 1.5vh);
  color: #FFE4B5;
}

.counter{
  font-size: calc(1vw + 1vh);
  text-align: center;
  width: 2vw;
  height: 2vw;
  border: none;
  border-radius: 50%;
  background-color: #FFE4B5;
  margin-bottom: 2vh;
}

.ingredient{
  font-size: calc(1vw + 1vh);
}

@media screen and (max-width:380px) {
  .counter{
    width: 15vw;
    height: 15vw;
    font-size: 1em;
    text-align: center;
  }

  .ingredient{
    font-size: calc(3vw + 3vh);
  }
}

</style>
