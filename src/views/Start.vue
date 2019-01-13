<template>
    <div>
        <div class="pageGrid">
            <h2> {{ uiLabels.whereToEat }}</h2>
            <br>
            <div class="grid-container gridContainer">
                <button class="gridElement button eatin" v-on:click="chooseEatIn()">{{ uiLabels.eatIn }}</button>
                <button class="gridElement button takeaway" v-on:click="chooseTakeAway()">{{ uiLabels.takeaway }}</button>
            </div>
            <!--{{this.orderPreference}}-->
            <footer>
            </footer>
        </div>
    </div>
</template>

<script>
//import methods and data that are shared between ordering and kitchen views
import sharedVueStuff from '@/components/sharedVueStuff.js'

export default {
    name: 'Start',

    mixins: [sharedVueStuff],

    data: function() {
        return {
            orderPreference: ""
        }
    },

    created: function() {
        var timer = null;
        function refresh() {
            clearTimeout(timer);
            timer = setTimeout(function () {
                window.location.reload();
            }.bind(this), 60000);            
        }

        //TODO show alert and clearTimeout if confirm==true -- also in Ordering.vue!
        /*console.log(timer);
        if(timer < 50000){                
            if (window.confirm("Your order will be reset in " + timer/10000 + "seconds.")) {
                refresh();
            }
        }*/

        window.addEventListener('mousemove', refresh, true);
        refresh();
    },

    methods: {
        chooseTakeAway: function() {
            this.orderPreference = 'takeAway';
            this.$emit('switchTo', 'SelectionOverview');
        },
        chooseEatIn: function() {
            this.orderPreference = 'eatIn';
            this.$emit('switchTo', 'SelectionOverview');
        }
    }
}
</script>

<style scoped>
  @import '~@/css/sharedCSSStuff.css';

h2 {
    text-align: center;
    font-family: 'Amaranth';
    color: #8B4513;
    font-size: calc(1.5vw + 1.5vh);
}

/* grid container for the buttons on page */
.grid-container {
    justify-items: center;
    grid-template-columns: auto auto;
}

/* button characteristics */
.button {
    font-size: calc(2vw + 2vh);
}
.eatin, .takeaway {
    width: 35vw;
    height: 20vh;
}
</style>
