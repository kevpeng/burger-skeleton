<template>
  <div>
    <head>
      <meta charset="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link href='https://fonts.googleapis.com/css?family=Amaranth' rel='stylesheet'>
    </head>
    <body>
      <div class="theWholeBody">
        <div class="middle">
          <div class="burgers">

<!-- This is where all the burgers should be generated -->
            <div class="wrapper">
              <Burger class="burger"
              ref="Burger"
              v-for="b in burgers"
              v-on:increment="addToOrder(b)"
              :lang="lang"
              :ui-labels="uiLabels"
              :item="b"
              :key="b.burger_id">
            </Burger>
          </div>

        </div>
      </div>
      <!-- The footer with a back and forward button -->
      <div class="footer">
        <button  class="button back" id="back"> {{uiLabels.back}}  </button>
        <button  class="button forward" id="forward"> {{uiLabels.selectionOverviewNext}}  </button>
      </div>
    </div>
  </body>
</div>
</template>

<script>
// import sharedVueStuff from '@/components/sharedVueStuff.js'
// The Burger below this line is a file containing the properties for each burger
import Burger from '@/components/Burger.vue'
// I haven't yet understood the use of this OrderItem, but I think it must be useful
import OrderItem from '@/components/OrderItem.vue'
export default {
  name: 'burgers',
  // mixins: [sharedVueStuff],
  components: {
    Burger,
    OrderItem
  },
  props: {
   burgers: Array,
   lang: String,
   uiLabels: Object,
 },
  data: function() {
    return {
      chosenBurgers:[],
      price: 0,
    }
  },
  methods: {
    addToOrder: function (item) {
      this.chosenBurgers.push(item);
      this.price += +item.selling_price;
    }
  }
}
</script>

<style scoped>
.burger{
  margin-top: 5em;
  margin: 0 auto;
  margin-left: 5%;
  padding-left: 2%;
  background-color: #8B4513;
  border-radius: 10px;
  width: 100%;
  min-width: 100px;
}

.wrapper {
  left: 0;
  width: 97%;
  display: grid;
  grid-gap: 20px;
  color: black;
  font-family: 'Amaranth';
  font-weight: lighter;
  grid-template-columns: repeat(auto-fit, 23.8%);
  padding-bottom: 15vh;
}
.button{
  width: 90%;
  height: 15vh;
  font-family: 'Amaranth';
  font-size: calc(2.5vw + 2.5vh);
  background-color: #8B4513;
  color: #FFE4B5;
  border-radius: 10px;
  border: none;
  padding: 0;
  text-align: center;
  /* vertical-align: bottom; */
  /* border: 3px solid black; */
}
.back{
  width: 10%;
  height: 5vh;
  font-size: calc(1vw + 1vh);
  margin-left: 3%;
}
.forward{
  width: 10%;
  height: 5vh;
  font-size: calc(1vw + 1vh);
  margin-left: 3%;
  position: absolute;
  right: 0;
  margin-right: 3%;
}
button:hover{
  background-color: #501811;
  cursor: pointer;
}
button:active{
  box-shadow: 0 1px #666;
  transform: translateY(2px);
}
.middle{
  /* background-color: #FFF8DC; */
  font-family: 'Amaranth';
  /* margin-top: 3vh; */
  /* position: fixed; */
  /* width: 100%; */
  height: 73vh;
  /* left: 0; */
  /* border: 2px solid black; */
  justify-items: center;
}

/* Formatting for footers */
.footer{
  position:fixed;
  background-color: #DEB887;
  color:black;
  width: 100%;
  height:9.5vh;
  /* border: 3px solid black; */
  display: flex;
  align-items: center;
  bottom: 0;
}
.languageButton {
  width: 7em;
  height: 2em;
  background-color: #8B4513;
  border-radius: 10px;
  color: #FFE4B5;
  border: none;
  font-size: 3em;
}
.language {
  justify-content: left;
  width: 10%;
  height: 85%;
  margin: 0.5%;
  border-radius: 10px;
}

/* these 2 classes are used to select language flag. */
.en {
  background: #8b4513 url('~@/assets/SV-select.png') no-repeat right 50% top 50%;
  background-size: 60%;
}

/* swapped the images.. gonna have to take a look at it tomorrow */
.sv {
  background: #8b4513 url('~@/assets/ENG-select.png') no-repeat right 50% top 50%;
  background-size: 60%;
}
@media screen and (max-width:380px){
  .back{
    width: 20%;
    height: 6vh;
    font-size: calc(1.7vw + 1.7vh);
    margin-left: 3%;
  }
  .forward{
    width: 20%;
    height: 6vh;
    font-size: calc(1.7vw + 1.7vh);
    margin-left: 3%;
    position: absolute;
    margin-right: 3%;
  }
}
</style>
