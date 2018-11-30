<template>
    <div class="container">
        <div class="queue1">
            {{qList.burgerQ.name}}<br>
            <hr>
            <p class="qNr">#{{qList.size-3}}</p>
        </div>
        <div class="queue">
            {{qList.saladQ.name}}<br>
            <hr>
            <p class="qNr">#{{qList.size-3}}</p>
        </div>
        <div class="queue">
            {{qList.reserveQ.name}}<br>
            <hr>
            <p class="qNr">#{{qList.size-3}}</p>
        </div>
    </div>  
</template>

<script>
    import sharedVueStuff from '@/components/sharedVueStuff.js'
    export default {
        // add the right name
        name: "Cooking",
        data: function() {
            return {
                qList: {burgerQ: {"name": "burger"}, 
                        saladQ: {"name": "salad"}, 
                        reserveQ: {"name": "reserve"}},
                orderList: {},
                itemList: {}
            }
        },
        //import methods and data that are shared between ordering and kitchen views
        mixins: [sharedVueStuff]
    }
</script>


<style scoped>
 /* scoped in the style tag means that these rules will only apply to elements, classes and ids in this template and no other templates. */
    .container {
        display: grid;
        grid-template-columns: 47.5vmax 47.5vmax;
        max-width: 100%;
        height: 100vh;
        text-align: center;
    }
    
    .queue1 {
        grid-row: 1 / 3;
        padding: 0.5em 0.5em; 
        border-style: groove;
        background-color: goldenrod;
    }

    .queue {
        padding: 0.5em 0.5em; 
        border-style: groove;
        background-color: goldenrod;
    }
</style>