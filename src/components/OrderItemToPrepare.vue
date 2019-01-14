<template>
  <!-- Note in this component that it is using another component -->
  <div>
    <div class="itemgrid">
      <div class="item">
        <OrderItem
          :ui-labels="uiLabels"
          :lang="lang"
          :order-id="orderId"
          :order="order">
        </OrderItem>
        <p v-if="order.status ==='not-started'">
          Status: {{uiLabels.status_notstarted}}
        </p>
        <p v-if="order.status === 'started'">
          Status: {{uiLabels.status_started}}
        </p>
        <p v-if="order.status === 'done'">
          Status: {{uiLabels.status_done}}
        </p>
        <p v-if="order.status === 'removed'">
          Status: {{uiLabels.status_removed}}
        </p>
      </div>

      <div class="button">
        <button v-if="order.status ==='not-started'" v-on:click="orderStart" class="notstarted">
          {{uiLabels.start}}
        </button>
        <button v-if="order.status === 'started'" v-on:click="orderDone" class="started">
          {{uiLabels.ready}}
        </button>
        <button v-if="order.status === 'done'" v-on:click="orderRemove" class="done">
          {{uiLabels.cancelOrder}}
        </button>
        <button v-if="order.status === 'removed'" v-on:click="orderStart" class="removed">
          {{uiLabels.start}}
        </button>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>
import OrderItem from '@/components/OrderItem.vue'

export default {
  name: 'OrderItemToPrepare',

  components: { 
    OrderItem 
  },

  props: {
    uiLabels: Object,
    order: Object,
    orderId: String,
    lang: String
  },

  methods: {
    orderStart: function () {
      // sending 'start' message to parent component or view so that it
      // can catch it with v-on:start in the component declaration
      this.$emit('start', this.orderId);
    },
    orderDone: function () {
      // sending 'done' message to parent component or view so that it
      // can catch it with v-on:done in the component declaration
      this.$emit('done', this.orderId);
    },
    orderRemove: function () {
      // sending 'remove' message to parent component or view so that it
      // can catch it with v-on:remove in the component declaration
      this.$emit('remove', this.orderId);
    }
  }
}
</script>
<style scoped>
.itemgrid {
  display: grid;
  grid-template-columns: auto 8vw;
  color: black;
  font-weight: lighter;
  grid-gap: 0.5vw;
  font-family: 'Amaranth';
  text-align: left;
}

.item, .button {
  padding: 1vw;
}
.item {
  background-color: #8B4513;
  color: #FFE4B5;
  border-radius: 10px;
  border: solid;
  border-color: black;
}
button {
  height: 100%;
  width: 100%;
  background-color: darkolivegreen;
  border-radius: 10px;
  font-family: 'Amaranth';
  font-size: 1em;
}
button:hover {
  background-color: #501811;
  cursor: pointer;
}

.notstarted {
  background-color: darkolivegreen;
}
.started {
  background-color: darkcyan;
}
.done {
  background-color: palevioletred;
}
.removed {
}
</style>