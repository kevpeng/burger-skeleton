<template>
<div id="orders">
  <h1>{{ kitchenState }}</h1>
  <h1>1</h1>
  <button v-on:click="switchKitchenTab(kitchenStateOpposite)">SWITCH</button>
  <div>
    <Serving v-if="kitchenState === 'serving'"></Serving>
  </div>
  <h1>2</h1>
  <div>
    <Cooking v-if="kitchenState === 'cooking'"></Cooking>    
  </div> 
  <div>
    <OrderItemToPrepare
      v-for="(order, key) in orders"
      v-if="order.status !== 'done'"
      v-on:done="markDone(key)"
      :order-id="key"
      :order="order" 
      :ui-labels="uiLabels"
      :lang="lang"
      :key="key">
    </OrderItemToPrepare>
  </div>
  <h1>{{ uiLabels.ordersFinished }}</h1>
  <div>
    <OrderItem
      v-for="(order, key) in orders"
      v-if="order.status === 'done'"
      :order-id="key"
      :order="order"
      :lang="lang"
      :ui-labels="uiLabels"
      :key="key">
    </OrderItem>
  </div>
</div>	
</template>
<script>
import OrderItem from '@/components/OrderItem.vue'
import Serving from '@/components/Serving.vue'
import Cooking from '@/components/Cooking.vue'
import OrderItemToPrepare from '@/components/OrderItemToPrepare.vue'

//import methods and data that are shared between ordering and kitchen views
import sharedVueStuff from '@/components/sharedVueStuff.js'

export default {
  name: 'Ordering',
  components: {
    Serving,
    Cooking,
    OrderItem,
    OrderItemToPrepare
  },
  mixins: [sharedVueStuff], // include stuff that is used in both 
                            //the ordering system and the kitchen
  data: function(){
    return {
      chosenIngredients: [],
      price: 0,
      state: "serving",
    }
  },
  methods: {
    switchTab: function (newState) {
      this.state = newState;
    },

    markDone: function (orderid) {
      this.$store.state.socket.emit("orderDone", orderid);
    }
  }
}
</script>
<style scoped>
	#orders {
    font-size:24pt;
  }

  h1 {
    text-transform: uppercase;
    font-size: 1.4em;
  }

  button {
        margin: 0 auto;
  }
</style>