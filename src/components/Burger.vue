<template>
  <div class="burger">
    <label>
      <div class="burgerTitle" >
        {{b["burger_"+lang]}}
      </div>
      <!-- <img class="image" :src="require('../assets/' + item.picture)" /> <br> -->
        <button class="counter" v-on:click="decrementCounter">-</button>
          {{counter}}
        <button class="counter" v-on:click="incrementCounter">+</button> <br>
        {{uiLabels.price}}{{item.selling_price}} kr <br>
        {{uiLabels.stock}}{{item.stock}}
    </label>
  </div>
</template>
<script>
export default {
  name: 'Burger',
  props: {
    b: Object,
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
