<template>
    <div class="container">
        <div class="queue">
            {{qList.customQ.name}}<br>
            <hr>
            <p class="qNr">#{{qList.size-3}}</p>
        </div>
        <div class="queue">
            {{qList.premadeQ.name}}<br>
            <hr>
            <p class="qNr">#{{qList.size-3}}</p>
        </div>
        <div class="queue">
            {{qList.quickQ.name}}<br>
            <hr>
            <p class="qNr">#{{qList.size-3}}</p>
        </div>
    </div>
</template>

<script>
    import sharedVueStuff from '@/components/sharedVueStuff.js'
    export default {
        // add the right name
        name: "Serving",
        data: function() {
            return {
                qList: {customQ: {"name": "custom"}, 
                        premadeQ: {"name": "premade"}, 
                        quickQ: {"name": "quick"}},
                orderList: {},
                itemList: {}
            }
        },
        //import methods and data that are shared between ordering and kitchen views
        mixins: [sharedVueStuff]
    }
</script>


<style scoped>
    .container {
        display: grid;
        grid-template-columns: 31.666vmax 31.666vmax 31.666vmax;
        max-width: 100%;
        height: 100vh;
        text-align: center;
    }
    
    .queue {
        padding: 0.5em 0.5em; 
        border-style: groove;
        background-color: goldenrod;
    }
</style>