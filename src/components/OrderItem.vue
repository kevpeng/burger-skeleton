<template>
	<div>
    <br>
		#{{orderId}} {{order.type}} 
    <br>
    {{uiLabels.ingredients}}: 
    <div v-for="ingredient in order.ingredients" 
      :key="ingredient.id">
      {{ingredient["amount"]}}x {{ingredient.unit["ingredient_"+lang]}}<br>
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
  }
}
</script>
<style scoped>

</style>
