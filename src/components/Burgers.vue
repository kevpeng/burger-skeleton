<template>
  <div>
    <body>
      <div class="pageGrid">
        <div class="filterContainer">
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
        </div>
        <div class="gridContainer">
          <!-- Category 2 for Burgers in the premades.csv file -->
            <Ingredient class="gridElement"
                ref="Burgers"
                v-for="item in premades"
                v-if="item.category == 2 &
                (gluten != 1 || gluten == item.gluten_free) &
                (vegan != 1 || vegan == item.vegan) &
                (lactose != 1 || lactose == item.milk_free)"
                v-on:increment="updateSelectedBurgers()"
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
  name: "Burgers",
  components: {
    Ingredient,
    OrderItem
  },

  props: {
   ingredients: Array,
   lang: String,
   uiLabels: Object,
   premades: Array
  },

  data: function() {
    return {
      chosenBurgers: [],
      price: 0,
      gluten: 0,
      vegan: 0,
      lactose: 0
    }
  },

  methods: {
    updateSelectedBurgers: function() {
      this.chosenBurgers = [];
      for (var i = 0; i < this.$refs.Burgers.length; i += 1) {
        if(this.$refs.Burgers[i].counter > 0){
          var obj = {
            name: this.$refs.Burgers[i].item["ingredient_"+ this.lang],
            amount: this.$refs.Burgers[i].counter,
            price: (this.$refs.Burgers[i].item.selling_price * this.$refs.Burgers[i].counter),
            category: this.$refs.Burgers[i].item.category
          };
          this.chosenBurgers.push(obj);
        }
      }
    },
    switchTo: function(newTab) {
      this.$emit('switchTo', newTab);
    },
    addToOrder: function() {
      this.$emit('addToOrder', this.chosenBurgers);
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
