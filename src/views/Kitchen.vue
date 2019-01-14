<template>
  <div id="orders">
    <head>
      <meta charset="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link href='https://fonts.googleapis.com/css?family=Amaranth' rel='stylesheet'>
    </head>

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
          <Serving 
            v-if="kitchenState === 'serving'"
            v-on:start="markStart"
            v-on:done="markDone"
            v-on:remove="markRemoved">
          </Serving>
        </div>
        <div>
          <Cooking 
            v-if="kitchenState === 'cooking'"
            v-on:start="markStart"
            v-on:done="markDone"
            v-on:remove="markRemoved">
          </Cooking>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Serving from '@/components/Serving.vue'
import Cooking from '@/components/Cooking.vue'

//import methods and data that are shared between ordering and kitchen views
import sharedVueStuff from '@/components/sharedVueStuff.js'

export default {
  name: 'Kitchen',
  components: {
    Serving,
    Cooking
  },

  mixins: [sharedVueStuff], //include the orders that are used in both
                            //the ordering system and the kitchen
  
  data: function(){
    return {
      kitchenState: 'serving',
      kitchenStateOpposite: 'cooking',
    }
  },

  methods: {
    switchKitchenTab: function () {
      var tmp = this.kitchenState ;
      this.kitchenState = this.kitchenStateOpposite;
      this.kitchenStateOpposite = tmp;
    },
    markStart: function (orderid) {
      this.$store.state.socket.emit("orderStarted", orderid);
    },
    markDone: function (orderid) {
      this.$store.state.socket.emit("orderDone", orderid);
    },
    markRemoved: function (orderid) {
      this.$store.state.socket.emit("orderRemoved", orderid);
    }
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
    }

  .navigation {
    border-style: groove;
    background-color: #666;
  }

  .tab {
    height: 100vh;
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
      background: #8b4513 url('~@/assets/ENG-select.png') no-repeat right 50% top 50%;
      background-size: 80%;
  }
  .en {
      background: #8b4513 url('~@/assets/SV-select.png') no-repeat right 50% top 50%;
      background-size: 80%;
  }  
  /*---------END BUTTON---------*/
</style>
