<template>
    <div class="container">
        <div class="queue1">
            {{qList.notstartedQ.name}}<br>
            <hr>
            <OrderItemToPrepare
                v-for="(order, key) in orders"
                v-if="order.type === 'created'"
                v-on:done="markDone(key)"
                :order-id="key"
                :order="order"
                :ui-labels="uiLabels"
                :lang="lang"
                :key="key">
            </OrderItemToPrepare>
            <p class="qNr"># orders not-started</p>
        </div>
        <div class="queue">
            {{qList.startedQ.name}}<br>
            <hr>
            <OrderItemToPrepare
                v-for="(order, key) in orders"
                v-if="order.type === 'premade'"
                v-on:done="markDone(key)"
                :order-id="key"
                :order="order"
                :ui-labels="uiLabels"
                :lang="lang"
                :key="key">
            </OrderItemToPrepare>
            <p class="qNr"># orders started</p>
        </div>
        <div class="queue">
            {{qList.doneQ.name}}<br>
            <hr>
            <OrderItemToPrepare
                v-for="(order, key) in orders"
                v-if="order.status === 'quick'"
                v-on:done="markDone(key)"
                :order-id="key"
                :order="order"
                :ui-labels="uiLabels"
                :lang="lang"
                :key="key">
            </OrderItemToPrepare>
            <p class="qNr"># orders done</p>
        </div>
    </div>  
</template>

<script>
    import OrderItemToPrepare from '@/components/OrderItemToPrepare.vue'

    import sharedVueStuff from '@/components/sharedVueStuff.js'
    export default {
        // add the right name
        name: "Cooking",
        components: {
            OrderItemToPrepare
        },

        //import methods and data that are shared between ordering and kitchen views
        mixins: [sharedVueStuff],

        data: function() {
            return {
                qList: {notstartedQ:    {"name": "created"}, 
                        startedQ:       {"name": "premade"}, 
                        doneQ:          {"name": "quick"}},
                orderList: {},
                itemList: {}
            }
        }
    }
</script>


<style scoped>
 /* scoped in the style tag means that these rules will only apply to elements, classes and ids in this template and no other templates. */
    .container {
        display: grid;
        grid-template-columns: 46.5vw 46.5vw;
        height: 100vh;
        text-align: center;
        overflow-y: scroll;
    }
    
    .queue1 {
        grid-row: 1 / 3;
        padding: 1vw; 
        border-style: groove;
        background-color: goldenrod;
    }

    .queue {
        padding: 1vw; 
        border-style: groove;
        background-color: goldenrod;
    }
</style>