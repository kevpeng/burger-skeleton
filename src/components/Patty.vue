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
            <IngredientRadio class="gridElement"
                ref="Patty"
                v-for="item in ingredients"
                v-if="item.category == 1 &
                (gluten != 1 || gluten == item.gluten_free) &
                (vegan != 1 || vegan == item.vegan) &
                (lactose != 1 || lactose == item.milk_free)"
                v-on:increment="updateSelectedPatty(item)"
                :lang="lang"
                :ui-labels="uiLabels"
                :item="item"
                :key="item.ingredient_id">
            </IngredientRadio>
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
import IngredientRadio from '@/components/IngredientRadio.vue'
import OrderItem from '@/components/OrderItem.vue'

export default {
  name: "Patty",
  components: {
    IngredientRadio,
    OrderItem
  },

  props: {
   ingredients: Array,
   lang: String,
   uiLabels: Object,
  },

  data: function() {
    return {
      chosenPatty: [],
      price: 0,
      gluten: 0,
      vegan: 0,
      lactose: 0
    }
  },

  methods: {
    updateSelectedPatty: function(item) {
      this.chosenPatty = [];
      var obj = {
          name: item["ingredient_"+ this.lang],
          amount: 1,
          price: item.selling_price,
          category: item.category
      };
      this.chosenPatty.push(obj);
    },
    switchTo: function (newTab) {
        this.$emit('switchTo', newTab);
    },
    addToIngredients: function() {
      this.$emit('addToIngredients', this.chosenPatty);
    }
  }
}
</script>

<style scoped>
  @import '~@/css/sharedCSSStuff.css';
</style>