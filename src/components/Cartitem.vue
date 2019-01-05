<template>
	<div>
		{{item.amount}}x {{item.name}} ({{item.category}}): {{item.price}}SEK
	</div>
</template>
<script>
export default {
  name: 'Cartitem',
  props: {
    uiLabels: Object,
    item: Object,
    lang: String
  }
}
</script>
<style scoped>

</style>