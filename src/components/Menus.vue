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
          <!-- Category 3 for Menus in the ingredients.csv file -->
            <Menu class="gridElement"
                ref="Menus"
                v-for="item in premades"
                v-if="item.category == 3 &
                (gluten != 1 || gluten == item.gluten_free) &
                (vegan != 1 || vegan == item.vegan) &
                (lactose != 1 || lactose == item.milk_free)"
                v-on:increment="updateSelectedMenus()"
                :lang="lang"
                :ui-labels="uiLabels"
                :item="item"
                :key="item.ingredient_id">
            </Menu>
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
import Menu from '@/components/Menu.vue'
import OrderItem from '@/components/OrderItem.vue'

export default {
  name: "Menus",
  components: {
    Menu,
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
      chosenMenus: [],
      price: 0,
      gluten: 0,
      vegan: 0,
      lactose: 0
    }
  },

  methods: {
    updateSelectedMenus: function() {
      this.chosenMenus = [];
      for (var i = 0; i < this.$refs.Menus.length; i += 1) {
        if(this.$refs.Menus[i].counter > 0){
          var obj = {
            nameEN: this.$refs.Menus[i].item["ingredient_en"],
            nameSV: this.$refs.Menus[i].item["ingredient_sv"],
            amount: this.$refs.Menus[i].counter,
            price: (this.$refs.Menus[i].item.selling_price * this.$refs.Menus[i].counter),
            category: this.$refs.Menus[i].item.category,
            id: Math.floor(Math.random() * Math.floor(9999999999))
          };
          this.chosenMenus.push(obj);
        }
      }
    },
    switchTo: function(newTab) {
      this.$emit('switchTo', newTab);
    },
    addToOrder: function() {
      this.$emit('addToOrder', this.chosenMenus);
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
