<template>
  <!-- Note in this component that it is using another component -->
  <div>
    <OrderItem
      :ui-labels="uiLabels"
      :lang="lang"
      :order-id="orderId"
      :order="order">
    </OrderItem>
    <p v-if="order.status ==='not-started'">
      {{uiLabels.status_notstarted}}
    </p>
    <p v-if="order.status === 'started'">
      {{uiLabels.status_started}}
    </p>
    <p v-if="order.status === 'done'">
      {{uiLabels.status_done}}
    </p>
    <p v-if="order.status === 'removed'">
      {{uiLabels.status_removed}}
    </p>

    <button v-if="order.status ==='not-started'" v-on:click="orderStart">
      {{uiLabels.start}}
    </button>
    <button v-if="order.status === 'started'" v-on:click="orderDone">
      {{uiLabels.ready}}
    </button>
    <button v-if="order.status === 'done'" v-on:click="orderRemove">
      {{uiLabels.cancelOrder}}
    </button>
    <button v-if="order.status === 'removed'" v-on:click="orderStart">
      {{uiLabels.start}}
    </button>
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
	
</style>