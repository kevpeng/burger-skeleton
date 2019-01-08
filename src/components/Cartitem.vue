<template>
	<div>
		{{item.amount}} x {{item.name}} ({{item.category}}): {{item.price}}SEK   <button type="button" class="b">X</button>
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
.b {
	width: 2vw;
  height: 4vh;
  border-radius: 10px;
  background-color: #8B4513;
  border: none;
	color: #FFE4B5;
	vertical-align: middle;
}
button:hover {
  background-color: #501811;
  cursor: pointer;
}
</style>
