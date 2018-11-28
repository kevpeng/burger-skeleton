<template>
    <!DOCTYPE html>
<html lang="en">
    <head>
        <title>Kitchen Cooking</title>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" type="text/css" href="../css/kitchen.css">  
    </head>
    <body>
        <div class="container">
            <div class="navi">
                <br>
                cooking     
                <button v-on:click="switchKitchenTab(kitchenStateOpposite)">SWTCH</button>           
                <button>La</button>
            </div>    
            <div class="queue">
                {{qList.burgerQ.name}}<br>
                <hr>
                <p class="qNr">#{{qList.size-3}}</p>
            </div>
            <div class="queue2a">
                {{qList.saladQ.name}}<br>
                <hr>
                <p class="qNr">#{{qList.size-3}}</p>
            </div>
            <div class="queue2b">
                {{qList.saladQ.name}}<br>
                <hr>
                <p class="qNr">#{{qList.size-3}}</p>
            </div>
        </div>       
    </body>
</html>
</template>

<script>
    import sharedVueStuff from '@/components/sharedVueStuff.js'
    export default {
        // add the right name
        name: "Cooking",
        data: function() {
            return {
                qList: {burgerQ: {"name": "burger"}, saladQ: {"name": "salad"}},
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
        grid-template-columns: 45px auto auto;
        grid-template-rows: auto auto;
        border-style: groove;
        margin: 0 auto;
    }
    
    .queue {
        grid-row: 1 / 3;
        border-style: groove;
        padding: 0.5em 0.5em; 
    }

    .queue2a {
        border-style: dotted;
        padding: 0.5em 0.5em; 
    }

    .queue2b {
        border-style: groove;
        padding: 0.5em 0.5em; 
    }

    .navi {
        grid-row: 1 / 3;
        border-style: dashed;
        margin: 0 auto;
    }

    .qNr {
        text-align: center;
    }

    button {
        margin: 0 auto;
    }
</style>