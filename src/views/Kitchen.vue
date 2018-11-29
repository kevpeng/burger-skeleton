<template>
<div id="orders">
  <div class="kitchen_container">
    <div class="navigation">
        <button class="btn" v-on:click="switchKitchenTab(kitchenStateOpposite)">TAB</button>      
        <button :class="[lang]" v-on:click="switchLang()"></button>
        <hr>
        <h3 v-if="kitchenState === 'serving'"> {{ uiLabels.serving }}</h3>
        <h3 v-if="kitchenState === 'cooking'"> {{ uiLabels.cooking }}</h3>
    </div>  
    <div class="tab">
      <div>
        <Serving v-if="kitchenState === 'serving'"></Serving>
      </div>
      <div>
        <Cooking v-if="kitchenState === 'cooking'"></Cooking>    
      </div> 
    </div>
  </div>
  <!--hr>
  <h1>{{ uiLabels.orders }}</h1>
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
  </div-->
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
  name: 'Kitchen', //was 'Ordering' before
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
    background-color: beige;    
  }

  .kitchen_container {
    display: inline-grid;
    grid-template-columns: 5vmax 95vmax;
    grid-template-rows: 100vh;
    }

  .navigation { 
    border-style: groove;
    background-color: #666;
  }

  .tab {
  }

  .btn {    
    background: #8b4513;
    background-size: 80%;
    color: white;
    border-color: white;
  }

  h3 {
    color: white;
    text-transform: uppercase;
    writing-mode: vertical-rl;
    text-orientation: sideways;
  }

  /*---------START BUTTON---------*/
  button:hover {
      background-color: #501811;
      cursor: pointer;
  }

  button:active {
      box-shadow: 0 1px #666;
      transform: translateY(2px);
  }

  button {
      width: 100%;
      height: 5vmax;
      border-radius: 10px;
  }

  /* these 2 classes are used to select language flag. */
  .sv {
      background: #8b4513 url('~@/assets/SV-select.png') no-repeat right 50% top 50%;
      background-size: 80%;
  }

  /* swapped the images.. gonna have to take a look at it tomorrow */
  .en {
      background: #8b4513 url('~@/assets/ENG-select.png') no-repeat right 50% top 50%;
      background-size: 80%;
  }
  /*---------END BUTTON---------*/
</style>