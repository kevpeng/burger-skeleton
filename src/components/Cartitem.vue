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
			{{item.price}} SEK   <button type="button" class="b" v-on:click="remove()">X</button>
		</div>

		<!-- not createdBurger -->
		<div v-if="(!compareItemNameWithCreatedBurger)">
			{{item.amount}} x {{item.unit['ingredient_'+lang]}}
			<!--a v-if="item.category != -1">({{item.unit['category']}})</a>
			<a v-if="item.category == -1">({{item.category}})</a-->
      :<br>
			{{item.price}} SEK   <button type="button" class="b" v-on:click="remove()">X</button>
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
      if(x == y){
        return true;
      }
      else {
        return false;
      }
    }
  },

  methods: {
		remove: function () {
      // sending 'remove' message to parent component or view so that it
      // can catch it with v-on:remove in the component declaration
      this.$emit('remove', this);
    }
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