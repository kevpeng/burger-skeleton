<template>
  <div>    
    <body>
      <div class="pageGrid">
        <div class="filterContainer">
            <div class="filter">
                <input type="checkbox"
                    v-model="gluten" value="1">Gluten-Free
                <input type="checkbox"
                    v-model="vegan" value="1">Vegan
                <input type="checkbox"
                    v-model="lactose" value="1">Lactose-Free
            </div>
            <div class="line"></div>
        </div>
        <div class="gridContainer">
            <!-- Category 7 for Ice Creams in the ingredients.csv file -->
            <Ingredient class="gridElement"
                ref="Icecreams"
                v-for="item in ingredients"
                v-if="item.category == 7 &
                (gluten != 1 || gluten == item.gluten_free) &
                (vegan != 1 || vegan == item.vegan) &
                (lactose != 1 || lactose == item.milk_free)"
                v-on:increment="updateSelectedIcecreams()"
                :lang="lang"
                :ui-labels="uiLabels"
                :item="item"
                :key="item.ingredient_id">
            </Ingredient>
        </div>
        <footer>
            <button v-on:click="switchTo('SelectionOverview')" class="back"> {{ uiLabels.back }}</button>
            <button v-on:click="addToOrder()" class="add"> {{ uiLabels.add }}</button>
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
  name: "Icecreams",
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
      chosenIcecreams: [],
      price: 0,
      gluten: 0,
      vegan: 0,
      lactose: 0
    }
  },

  methods: {
    updateSelectedIceCreams: function() {
      this.chosenIceCreams = [];
      for (var i = 0; i < this.$refs.Icecreams.length; i += 1) {
        if(this.$refs.Icecreams[i].counter > 0){
          var obj = {
            name: this.$refs.Icecreams[i].item["ingredient_"+ this.lang],
            amount: this.$refs.Icecreams[i].counter,
            price: (this.$refs.Icecreams[i].item.selling_price * this.$refs.Icecream[i].counter)
          };
          this.chosenIcecreams.push(obj);
        }
      }
    },
    switchTo: function(newTab) {
      this.$emit('switchTo', newTab);
    },
    addToOrder: function() {
      this.$emit('addToOrder', this.chosenIcecreams);
      //set all counters to 0. Notice the use of $refs
      // for (i = 0; i < this.$refs.Icecream.length; i += 1) {
      //   this.$refs.Icecream[i].resetCounter();
      // }
      //this.price = 0;
      //this.chosenIngredients = [];
    }
  }
}
</script>

<style scoped>
  @import '~@/css/sharedCSSStuff.css';
</style>
