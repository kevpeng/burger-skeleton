<template>
  <div>
    <head>
      <meta charset="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link href='https://fonts.googleapis.com/css?family=Amaranth' rel='stylesheet'>
    </head>

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
            <PremadeItem class="gridElement"
                ref="Toppings"
                v-for="item in ingredients"
                v-if="item.category == 2 &
                (gluten != 1 || gluten == item.gluten_free) &
                (vegan != 1 || vegan == item.vegan) &
                (lactose != 1 || lactose == item.milk_free)"
                v-on:increment="updateSelectedToppings()"
                :lang="lang"
                :ui-labels="uiLabels"
                :item="item"
                :key="item.ingredient_id">
            </PremadeItem>
        </div>
        <footer>
            <button v-on:click="switchTo('BurgerCreation')" class="back"> {{ uiLabels.back }}</button>
            <button v-on:click="addToIngredients()" class="add"> {{ uiLabels.add }}</button>
        </footer>
      </div>
    </body>
</div>
</template>

<script>
//import methods and data that are shared between ordering and kitchen views
import PremadeItem from '@/components/PremadeItem.vue'
import OrderItem from '@/components/OrderItem.vue'

export default {
  name: "Toppings",
  components: {
    PremadeItem,
    OrderItem
  },

  props: {
   ingredients: Array,
   lang: String,
   uiLabels: Object,
  },

  data: function() {
    return {
      chosenToppings: [],
      price: 0,
      gluten: 0,
      vegan: 0,
      lactose: 0
    }
  },

  methods: {
    updateSelectedToppings: function() {
      this.chosenToppings = [];
      for (var i = 0; i < this.$refs.Toppings.length; i += 1) {
        if(this.$refs.Toppings[i].counter > 0){
          var obj = {
            unit: this.$refs.Toppings[i].item,
            amount: this.$refs.Toppings[i].counter,
            price: (this.$refs.Toppings[i].item.selling_price * this.$refs.Toppings[i].counter),
            category: -1,
            id: Math.floor(Math.random() * Math.floor(9999999999))
          };
          this.chosenToppings.push(obj);
        }
      }
      /* Check if everything is in the array
      for(var i in this.chosenToppings){
      console.log(this.chosenToppings[i].name);
      console.log(this.chosenToppings[i].amount);
      console.log(this.chosenToppings[i].price);
      }*/
    },
    switchTo: function (newTab) {
        this.$emit('switchTo', newTab);
    },
    addToIngredients: function() {
      this.$emit('addToIngredients', this.chosenToppings);
      //set all counters to 0. Notice the use of $refs
      // for (i = 0; i < this.$refs.Toppings.length; i += 1) {
      //   this.$refs.Toppings[i].resetCounter();
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
