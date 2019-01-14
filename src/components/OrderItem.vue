<template>
	<div>
		<h3>#{{orderId}} {{order.type}} - {{uiLabels.ingredients}}:</h3>
    <div v-for="ingredient in order.ingredients" 
      :key="ingredient.id">
      <a v-if="(ingredient.name === 'Created Burger')" class="itemtitle">
            {{ingredient["amount"]}}x {{ingredient.unit["ingredient_"+lang]}} 
            ({{ingredient.ingredients[0].category}})
      </a>
      <a v-else class="itemtitle">
            {{ingredient["amount"]}}x {{ingredient.unit["ingredient_"+lang]}} 
            ({{ingredient.unit["category"]}})
      </a>
      <br>
      <div v-for="item in ingredient.ingredients" 
         v-if="(ingredient.name === 'Created Burger') || (ingredient.unit['ingredient_'+lang]).contains('Menu')" 
         :key="item['ingredient_id']">
        - {{item.amount}}x {{item.unit["ingredient_"+lang]}}
      </div>
      <div v-if="(ingredient.name !== 'Created Burger') && containsBurgerMenuSalad(ingredient.unit['ingredient_'+lang])" 
         :key="ingredient.unit['ingredient_id']">
         - 
        {{ingredient.unit["burgerName_"+lang]}} 
        {{ingredient.unit["bread_"+lang]}}  
        {{ingredient.unit["patty_"+lang]}}  
        {{ingredient.unit["toppingOne_"+lang]}} 
        {{ingredient.unit["toppingTwo_"+lang]}} 
        {{ingredient.unit["toppingThree_"+lang]}} 
        {{ingredient.unit["sauce_"+lang]}} 
        {{ingredient.unit["fries_"+lang]}}
        {{ingredient.unit["drink_"+lang]}}
      </div>
      <br>
    </div>
  </div>
</template>
<script>
export default {
  name: 'OrderItem',

  props: {
    uiLabels: Object,
    order: Object,
    orderId: String,
    lang: String
  },

  methods: {
    containsBurgerMenuSalad: function(str){
      if(str.includes("Menu") 
          || str.includes("Meny")
          || str.includes("Meny")
          || str.includes("Burger")
          || str.includes("Burgare")
          || str.includes("Salad")
          || str.includes("Sallad")){
        return true;
      }
      return false;
    }
  }
}
</script>

<style scoped>
.itemtitle{
  font-weight: bold;
}
</style>
