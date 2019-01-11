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
            <Item class="gridElement"
                ref="Drinks"
                v-for="item in ingredients"
                v-if="item.category == 6 &
                (gluten != 1 || gluten == item.gluten_free) &
                (vegan != 1 || vegan == item.vegan) &
                (lactose != 1 || lactose == item.milk_free)"
                v-on:increment="updateSelectedDrinks()"
                :lang="lang"
                :ui-labels="uiLabels"
                :item="item"
                :key="item.ingredient_id">
            </Item>
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
import Item from '@/components/Item.vue'
import OrderItem from '@/components/OrderItem.vue'

export default {
  name: "Drinks",
  components: {
    Item,
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
      gluten: 0,
      vegan: 0,
      lactose: 0
    }
  },
  methods: {
    updateSelectedDrinks: function() {
      this.chosenDrinks = [];
      for (var i = 0; i < this.$refs.Drinks.length; i += 1) {
        if(this.$refs.Drinks[i].counter > 0){
          var obj = {
            unit: this.$refs.Drinks[i].item,
            amount: this.$refs.Drinks[i].counter,
            price: (this.$refs.Drinks[i].item.selling_price * this.$refs.Drinks[i].counter),
            id: Math.floor(Math.random() * Math.floor(9999999999))
          };

          this.chosenDrinks.push(obj);
        }
      }
    },
    switchTo: function(newTab) {
      this.$emit('switchTo', newTab);
    },
    addToOrder: function() {
      this.$emit('addToOrder', this.chosenDrinks);
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
