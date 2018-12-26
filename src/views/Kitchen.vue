<template>
<div id="orders">
  <div class="kitchen_container">
    <div class="navigation">
        <button v-on:click="switchKitchenTab()"><p class="t">TAB</p></button>
        <button :class="[lang]" v-on:click="switchLang()"></button>
        <hr>
        <h3 v-if="kitchenState === 'serving'"> {{ uiLabels.serving }}</h3>
        <h3 v-if="kitchenState === 'cooking'"> {{ uiLabels.cooking }}</h3>
        <br>
        <h3> {{ this.$store.state.kitchenTabOpposite }}</h3>
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
      kitchenState: 'serving',
      kitchenStateOpposite: 'cooking',
    }
  },
  computed: {
    //load stuff from $store.state.xyz

  //   countBeef100: funtion(){
  //     return countNumberOfIngredients(2);
  //   },
  //   countBeen: funtion(){
  //     return countNumberOfIngredients(1);
  //   }
  },
  methods: {
    switchKitchenTab: function () {
      var tmp = this.kitchenState ;
      this.kitchenState = this.kitchenStateOpposite;
      this.kitchenStateOpposite = tmp;
    },
    markDone: function (orderid) {
      this.$store.state.socket.emit("orderDone", orderid);
    },
    /*countNumberOfIngredients: function(id){
      let counter = 0;
      for(let order in this.orders){
        for(let i = 0; i < this.orders[order].ingredients.length; i += 1){
          if(this.orders[order].ingredients[i].ingredient_id === id){
            counter += 1;
          }
        }
      }
      return counter;
    }*/
  }
}
</script>
<style scoped>
	#orders {
    background-color: beige;
  }

  .kitchen_container {
    display: grid;
    grid-template-columns: 5vmax 95vmax;
    grid-template-rows: 100vh;
    }

  .navigation {
    border-style: groove;
    background-color: #666;
  }

  .tab {
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
      color: white;
      background: #8b4513;
  }

  /* these 2 classes are used to select language flag. */
  .sv {
      background: #8b4513 url('~@/assets/SV-select.png') no-repeat right 50% top 50%;
      background-size: 80%;
  }
  .en {
      background: #8b4513 url('~@/assets/ENG-select.png') no-repeat right 50% top 50%;
      background-size: 80%;
  }
  /*---------END BUTTON---------*/
  /*

    <img :src="getImage(item.imagepath)">
    in methods-vue:
    getImage: function(path){
      return required("../assets/" + path); //provide "missing picture" as default
    }

  v-show="state === "start" "
    v-if: item.category==1

  v-show="state === "veggies" "
    v-if: item.category==2
    button v-if="state == "start" " v-onclick: "toveggies"

    toveggies function(){
        this.state = "veggies";
    }
  */
</style>
