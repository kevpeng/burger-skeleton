<template>
    <div class="container">
        <div class="queue">
            <h1>{{ uiLabels.ordersInQueue }}</h1>
            <OrderItemToPrepare
                v-for="(order, key) in orders"
                v-if="order.status === 'not-started'"
                v-on:start="orderStart(key)"
                :order-id="key"
                :order="order"
                :ui-labels="uiLabels"
                :lang="lang"
                :key="key">
            </OrderItemToPrepare>
            <hr>
            <p class="qNr">#{{getLength(orders, "not-started")}}<!--getLength(orders, "not-started")}}--></p>
        </div>
        <div class="queue">
            <h1>{{ uiLabels.ordersTrending }}</h1>
            <OrderItemToPrepare
                v-for="(order, key) in orders"
                v-if="order.status === 'started'"
                v-on:done="orderDone(key)"
                :order-id="key"
                :order="order"
                :ui-labels="uiLabels"
                :lang="lang"
                :key="key">
            </OrderItemToPrepare>
            <hr>
            <p class="qNr">#{{getLength(orders, "started")}}</p>
        </div>
        <div class="queue">
             <h1>{{ uiLabels.ordersFinished }}</h1>
            <OrderItemToPrepare
                v-for="(order, key) in orders"
                v-if="order.status === 'done'"
                v-on:remove="orderRemove(key)"
                :order-id="key"
                :order="order"
                :lang="lang"
                :ui-labels="uiLabels"
                :key="key">
            </OrderItemToPrepare>
            <hr>
            <p class="qNr">#{{getLength(orders, "done")}}</p>
        </div>
    </div>
</template>

<script>
    import OrderItem from '@/components/OrderItem.vue'
    import OrderItemToPrepare from '@/components/OrderItemToPrepare.vue'

    import sharedVueStuff from '@/components/sharedVueStuff.js'

    export default {
        name: "Serving",
        components: {
            OrderItem,
            OrderItemToPrepare
        },

        //import methods and data that are shared between ordering and kitchen views
        mixins: [sharedVueStuff],

        data: function() {
            return {
                qList: {customQ:  {"name": "custom"}, 
                        premadeQ: {"name": "premade"}, 
                        quickQ:   {"name": "quick"}},
                orderList: {},
                itemList: {}
            }
        },

        methods: {     
            getLength: function(orders){ //, s){
                var length = 0;
                for(var order in orders){
                    /*TODO trying to count the orders in each of the categories...
                    console.log(order.status);
                    if(order.status === "not-started"){
                        
                    }*/
                    length++;
                }
                return length;
            },       
            orderStart: function (orderId) {
                // sending 'start' message to parent component or view so that it
                // can catch it with v-on:start in the component declaration
                this.$emit('start', orderId);
            },
            orderDone: function (orderId) {
                // sending 'done' message to parent component or view so that it
                // can catch it with v-on:done in the component declaration
                this.$emit('done', orderId);
            },
            orderRemove: function (orderId) {
                // sending 'remove' message to parent component or view so that it
                // can catch it with v-on:remove in the component declaration
                this.$emit('remove', orderId);
            }
        }
    }
</script>


<style scoped>
    .container {
        display: grid;
        grid-template-columns: 31.666vmax 31.666vmax 31.666vmax;
        height: 100vh;
    }
    
    .queue {
        padding: 1.5vh; 
        border-style: groove;
        background-color: goldenrod;
        overflow-y: scroll;
    }
</style>