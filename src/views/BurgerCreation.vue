<template>
    <div>
        <body>
        <div class="pageGrid">
            <div class="gridContainer">
                <div class="column1">
                    <!--<span id="breadcheck">&#10003;</span>-->
                    <button v-on:click="switchToItems('Bread')"
                            class="gridElement burgerButtons" id="bread"> {{ uiLabels.bread }}
                    </button>
                    <br>
                    <!--<span class="pattycheck">&#10003;</span>-->
                    <button v-on:click="switchToItems('Patty')"
                            class="gridElement burgerButtons" id="patty"> {{ uiLabels.patty }}
                    </button>
                </div>
                <div class="column2">
                    <img class="burgerImage" src="../assets/burger.png">
                </div>
                <div class="column3">
                    <!--<span class="toppingcheck">&#10003;</span>-->
                    <button v-on:click="switchToItems('Toppings')"
                            class="gridElement burgerButtons" id="toppings"> {{ uiLabels.toppings }}
                    </button>
                    <br>
                    <!--<span class="saucecheck">&#10003;</span>-->
                    <button v-on:click="switchToItems('Sauce')"
                            class="gridElement burgerButtons" id="sauce"> {{ uiLabels.sauce }}
                    </button>
                </div>
            </div>
            <footer>
                <button v-on:click="cancelTo('SelectionOverview')" class="back" id="back"> {{ uiLabels.back }}</button>
                <button v-on:click="addCreatedBurgerToOrder()" class="add" id="add"> {{ uiLabels.add }}</button>
            </footer>
        </div>
        </body>
    </div>
</template>

<script>
    import sharedVueStuff from '@/components/sharedVueStuff.js'

    export default {
        name: "BurgerCreation",
        mixins: [sharedVueStuff],
        methods: {
            cancelTo: function (newTab) {
                this.$emit('cancelTo', newTab, "Do you really want to cancel the Creation of your Burger?  All your selections will be lost.");
            },
            addCreatedBurgerToOrder: function () {
                this.$emit('addCreatedBurgerToOrder');
            },
            // addCheck: function (x) {
            //     // alert(x);
            //     document.getElementById("breadcheck").classList.toggle("show");
            // }
        }
    }
</script>

<style scoped>


.burgerImage{
  width: 35vw;
  height: 30vw;
}
.burgerButtons{
  margin: 5vh 3vw;
  width: 20vw;
  height: 10vw;
  max-height: 150px;
  font-size: calc(5px + 2.5vw);
}


    /*#breadcheck {*/
        /*display: none;*/
        /*!*position: absolute;*!*/
    /*}*/

    /*.pattycheck {*/
        /*display: none;*/
    /*}*/

    /*.toppingcheck {*/
        /*display: none;*/
    /*}*/

    /*.saucecheck {*/
        /*display: none;*/
    /*}*/

    @media screen and (max-width: 380px) {
        .gridContainer {
            grid-template-columns: auto;
        }

        .burgerButtons {
            height: 10vh;
            min-width: 180px;
            min-height: 70px;
            margin: 1.5vw;
            font-size: 2em;
        }
    }
</style>
