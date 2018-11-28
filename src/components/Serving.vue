<template>
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <title>Kitchen Serving</title>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="stylesheet" type="text/css" href="css/style.css">  
        </head>
        <body>        
            
            <div class="container">
                <div class="navi">
                    <br>
                    serving
                    <button v-on:click="switchKitchenTab(kitchenStateOpposite)">SWTCH</button>
                    <button>La</button>
                </div>    
                <div class="queue">
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
        name: "Serving",
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
    .container {
        display: grid;
        grid-template-columns: 40px auto auto auto;
        border-style: groove;
        margin: 0 auto;
    }
    
    .queue {
        border-style: groove;
        padding: 0.5em 0.5em; 
    }

    .navi {
        margin: 0 auto;
    }

    .qNr {
        text-align: center;
    }

    button {
        margin: 0 auto;
    }
</style>