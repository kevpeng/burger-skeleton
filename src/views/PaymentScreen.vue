<template>
  <div>
    <body>
      <div class="pageGrid">
        <div id="message">
          <h3 v-if="paymentState === 'waiting'"> {{ uiLabels.paymentWaiting }}</h3>
          <h3 v-if="paymentState === 'paid'"> {{ uiLabels.paymentSuccesful }}</h3>
          <button v-on:click="switchTo('Start')" class="gridElement button new" id="new" v-if="paymentState === 'paid'"> {{uiLabels.paymentNewOrder}}  </button>
          <h6> {{this.$store.state.paymentState}} </h6>
        </div>
        <footer>
        </footer>
      </div>
    </body>
  </div>
</template>

<script>
import sharedVueStuff from '@/components/sharedVueStuff.js'
export default {
  name: 'PaymentScreen',
  mixins: [sharedVueStuff],
  data: function(){
    return {
      paymentState: 'waiting',
      paymentOppositeState: 'paid',
    }
  },
  methods: {
    switchpaymentStatus: function () {
      var tempState = this.paymentState;
      this.paymentState = this.paymentOppositeState;
      this.paymentOppositeState = tempState;
    },
    switchTo: function(newTab) {
      this.$emit('switchTo', newTab);
    }
  },
  /*ToDo Add description of what this is doing! o.O*/
  created: function() {
    var timer = null;
    var self = this;
    function update() {
      // var elem = document.getElementById("message");
      clearTimeout(timer);
      timer = setTimeout(function() { self.switchpaymentStatus()}, 3000);
    }
    update();
  }
}
</script>

<style scoped>
  @import '~@/css/sharedCSSStuff.css';

body {
  font-family: 'Amaranth';
}
.button{
  width: 90%;
  height: 15vh;
  font-size: calc(2.5vw + 2.5vh);
}
#message{
  font-size: calc(5vw + 2.5vh);
}
.new{
  margin-top: 10vh;
  padding: auto auto;
  width: 50%;
  height: 10vh;
  font-size: calc(3vw + 3vh);
}

@media screen and (max-width:380px){
  #message{
    font-size: calc(2vw + 2vh);
    text-align: center;
    vertical-align: middle;
  }
  .new{
    margin-top: 10vh;
    width: 50%;
    height: 10vh;
    font-size: calc(2vw + 2vh);
  }
}
</style>
