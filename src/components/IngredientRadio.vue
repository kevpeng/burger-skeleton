<template>
  <div class="ingredient">
    <div class="ingredientTitle" >
        <input type="radio" name="radioButton" class="counter" v-on:click="select()">{{item["ingredient_"+lang]}}
    </div>
    <!-- <img class="image" :src="require('../assets/' + item.picture)" /> <br> -->
    
    {{uiLabels.price}}{{item.selling_price}} kr <br>
    {{uiLabels.stock}}{{item.stock}}
  </div>
</template>
<script>
export default {
  name: 'IngredientRadio',
  props: {
    item: Object,
    lang: String,
    uiLabels: Object
  },
  data: function () {
      return {};
  },
  methods: {
    select: function () {
      // sending 'increment' message to parent component or view so that it
      // can catch it with v-on:increment in the component declaration
      this.$emit('increment', this);
    },
    getImage: function(path){
     return "../assets/" + path; //ToDo provide "missing picture" as default
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
