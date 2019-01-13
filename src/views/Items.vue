<template>
  <div>
    <div class="pageGrid">
      <div class="filterContainer">
          <div class="filter">
            <div>{{uiLabels.Filter}}:</div>
            <div><input type="checkbox" v-model="gluten" value="1" scale="1">{{uiLabels.glutenfree}}</div>
            <div><input type="checkbox" v-model="vegan" value="1" scale="2">{{uiLabels.vegan}}</div>
            <div><input type="checkbox" v-model="lactose" value="1" scale="3">{{uiLabels.lactosefree}}</div>
          </div>
          <div class="line"></div>
      </div>

      <div class="gridContainer">
          <Item class="gridElement"
              ref="Items"
              v-for="item in filteredArray"
              v-on:increment="updateSelectedItems()"
              v-on:pick="updateRadioItems(item)"
              :lang="lang"
              :ui-labels="uiLabels"
              :item="item"
              :itemlist="itemlist"
              :key="item.ingredient_id">
          </Item>
      </div>

      <footer>
          <button v-on:click="switchTo('SelectionOverview')" class="back"> {{ uiLabels.back }}</button>
          <button v-on:click="addToOrder()" class="add"> {{ uiLabels.add }}</button>
      </footer>
    </div>
  </div>
</template>

<script>
//import methods and data that are shared between ordering and kitchen views
import sharedVueStuff from '@/components/sharedVueStuff.js'
import Item from '@/components/Item.vue'

export default {
  name: "Items",

  // include stuff that is used on multiple pages
  mixins: [sharedVueStuff],

  components: {
    Item
  },

  data: function() {
    return {
      chosenItems: [],
      price: 0,
      gluten: 0,
      vegan: 0,
      lactose: 0
    }
  },

  computed: {
    filteredArray: function() {
      var filtered = [];
      for(var i=0; i < this.itemlist.length; i++){
        var element = this.itemlist[i];        
        if((this.category == element.category) 
          && (this.gluten != 1 || this.gluten == element.gluten_free)
          && (this.vegan != 1 || this.vegan == element.vegan) 
          && (this.lactose != 1 || this.lactose == element.milk_free)){
            filtered.push(element);
        }
      }
      return filtered;
    }
  },

  methods: {
    updateRadioItems: function(item) {
      this.chosenItems = [];
      var obj = {
          unit: item,
          amount: 1,
          price: item.selling_price,
          id: Math.floor(Math.random() * Math.floor(9999999999))
      };
      this.chosenItems.push(obj);
    },
    updateSelectedItems: function() {
      this.chosenItems = [];
      for (var i = 0; i < this.$refs.Items.length; i += 1) {
        if(this.$refs.Items[i].counter > 0){
          var obj = {
            unit: this.$refs.Items[i].item,
            amount: this.$refs.Items[i].counter,
            price: (this.$refs.Items[i].item.selling_price * this.$refs.Items[i].counter),
            id: Math.floor(Math.random() * Math.floor(9999999999))
          };
          this.chosenItems.push(obj);
        }
      }
    },
    switchTo: function(newTab) {
        //if burger creation, return to burgerCreation
        //categories in ingredients: 1Patty, 2Toppings, 3Sauce, 4Bread
        if((this.itemlist.length > 30) && (this.category <= 4)){
            this.$emit('switchTo', 'BurgerCreation');
        }

        //else return to selectionOverview
        else {
            this.$emit('switchTo', newTab);
        }
    },
    addToOrder: function() {
        //if burger creation, add to chosenIngredients
        //categories in ingredients: 1Patty, 2Toppings, 3Sauce, 4Bread
        if((this.itemlist.length > 30) && (this.category <= 4)){
            this.$emit('addToIngredients', this.chosenItems);            
        }

        //else add to selection
        else {
            this.$emit('addToOrder', this.chosenItems);
        }
    }
  }
}
</script>

<style scoped>
  @import '~@/css/sharedCSSStuff.css';
</style>
