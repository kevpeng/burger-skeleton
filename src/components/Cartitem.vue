<template>
	<div>
		<!-- createdBurger -->
		<div v-if="(compareItemNameWithCreatedBurger)">
			{{item.amount}} x {{item.unit['ingredient_'+lang]}}:
			<!-- {{item.ingredients}} -->
			<div v-for="ingredient in item.ingredients" 
        :key="ingredient['ingredient_'+lang]">
					{{ingredient.unit["ingredient_"+lang]}}
			</div>
			{{item.price}} SEK   <button type="button" class="b" v-on:click="select()">X</button>
		</div>

		<!-- not createdBurger -->
		<div v-if="(!compareItemNameWithCreatedBurger)">
			{{item.amount}} x {{item.unit['ingredient_'+lang]}}
			<div v-if="item.category != -1">({{item.unit['category']}})</div>
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

  computed: {
    getCreatedBurgerTitle: function() {
      return this.uiLabels['createdBurger'];
    },
    compareItemNameWithCreatedBurger: function() {
      var x = this.item.unit["ingredient_"+this.lang];
      var y = this.uiLabels.createdBurger;
      console.log("x" + x + " ### y: " + y);
      if(x == y){
        console.log("true");
        return true;
      }
      else {
        console.log("false");
        return false;
      }
    }
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
	min-width: 3vh;
  min-height: 3vh;
  border-radius: 10px;
  background-color: #8B4513;
  border: none;
	color: #FFE4B5;
	padding: 1px 1px;
	vertical-align: middle;
}
button:hover {
  background-color: #501811;
  cursor: pointer;
}
</style>
