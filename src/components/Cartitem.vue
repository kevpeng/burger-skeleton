<template>
	<div>
		<div v-if="item.name == 'Created Burger'">
			{{1}} x {{item.name}}:
			<!-- {{item.ingredients}} -->
			<div v-for="all in item.ingredients">
				<div v-for="i in all">
					{{i["ingredient_"+lang]}}
				</div>
			</div>
			{{item.price}} SEK   <button type="button" class="b" v-on:click="select()">X</button>
		</div>
		<div v-if="item.name != 'Created Burger'">
			{{item.amount}} x {{item.unit["ingredient_"+lang]}}
			<div v-if="item.category != -1">({{item.unit["category"]}})</div>
			<div v-if="item.category == -1">({{item.category}})</div>:
			{{item.price}} SEK   <button type="button" class="b" v-on:click="select()">X</button>
		</div>
	</div>
</template>
<script>
export default {
  name: 'Cartitem',
  props: {
    uiLabels: Object,
    item: Object,
    lang: String
  },

  methods: {
		select: function () {
      // sending 'increment' message to parent component or view so that it
      // can catch it with v-on:increment in the component declaration
      this.$emit('click', this);
    }
    // removeFromOrder: function(item) {
    //   this.$emit('removeFromOrder', item);
    //   //set all counters to 0. Notice the use of $refs
    //   // for (i = 0; i < this.$refs.Icecream.length; i += 1) {
    //   //   this.$refs.Icecream[i].resetCounter();
    //   // }
    //   //this.price = 0;
    //   //this.chosenIngredients = [];
    // }
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
