<template>
  <div>
  <head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href='https://fonts.googleapis.com/css?family=Amaranth' rel='stylesheet'>
  </head>

  <body>
    <div class="background">
    <main>
      <!-- <div class="header">
        <button  class="language" id="language"> {{ uiLabels.language }} </button>
        <button  class="cancel" id="cancel"><img src="https://img.icons8.com/material/52/FFE4B5/delete-sign.png">  </button>
        <button  class="cart" id="language"><img src="https://img.icons8.com/material/52/FFE4B5/shopping-cart.png">  </button>
        <h1> {{ uiLabels.burgerCreation }}  </h1>
      </div> -->
    </main>

    <div class="gridContainer">
      <div class="column1">
        <button class="burgerButtons" id="bread"> {{ uiLabels.bread }} </button>
        <br>
        <button class="burgerButtons" id="patty"> {{ uiLabels.patty }} </button>
      </div>
      <div class="column2">
        <img class="burgerImage" src="../assets/burger.png">
      </div>
      <div class="column3" >
        <button class="burgerButtons" id="toppings"> {{ uiLabels.toppings }} </button>
        <br>
        <button class="burgerButtons" id="sauce"> {{ uiLabels.sauce }} </button>
      </div>
    </div>


    <footer>
      <button  class="back" id="back"> {{ uiLabels.back }} </button>
      <button  class="add" id="add"> {{ uiLabels.add }} </button>
    </footer>
  </div>
  </body>
</div>
</template>

<script>
import sharedVueStuff from '@/components/sharedVueStuff.js'
    export default {
        name: "burgerCreation.vue",
        mixins: [sharedVueStuff]
    }
</script>

<style scoped>
footer{
	bottom:0px;
	position:fixed;
	background-color: #DEB887;
	width:100vw;
	height:9.5vh;
	left:0px;
	color:black;
  display: flex;
  align-items: center;

}

.gridContainer{
  display: inline-grid;
  grid-template-columns: repeat(auto-fit, 400px);
  width: 98vw;
  align-items: center;
  text-align: center;
  justify-items: center;
  margin-bottom: 10vh;
  margin-top: 10vh;
}


.back{
  /* position: absolute;
  left: 0;
  margin-left: 5%;
  width: 10%;
  height: 5vh;
  margin-top: 0.75em; */
  background-color: #8B4513;
  border: none;
  font-weight: bold;
  font-size: calc(1vw + 1vh);
  font-family: 'Amaranth';
  color: #FFE4B5;
  border-radius: 10px;
  text-align: center;
  width: 10%;
  height: 5vh;
  font-size: calc(1vw + 1vh);
  margin-left: 1.5%;
  position: absolute;
  left: 0;
}

button:hover{
  background-color: #501811;
  cursor: pointer;
}

.add{
  background-color: #8B4513;
  border: none;
  font-weight: bold;
  font-size: calc(1vw + 1vh);
  font-family: 'Amaranth';
  color: #FFE4B5;
  border-radius: 10px;
  width: 10%;
  height: 5vh;
  margin-left: 1.5%;
  position: absolute;
  right: 0;
  margin-right: 1.5%;

}

.burgerImage{
  text-align: center;
  margin-top: 5vh;
  max-width: 350px;
  min-width: 300px;
  height: 300px;
  margin: 10%;
}

button:active {
    box-shadow: 0 1px #666;
    transform: translateY(2px);
}

.burgerButtons{
  margin-top: 10%;
  margin-bottom: 10%;
  margin-left: 10%;
  width: 300px;
  height: 75px;
  background-color: #8B4513;
  font-family: 'Amaranth';
  border-radius: 10px;
  color: #FFE4B5;
  border: none;
  font-size: 3em;
  text-align: center;
  align-items: center;
  justify-items: center;


}

h1{
  text-align: center;
  font-family: 'Amaranth';
  color: #8B4513;
  margin-top: -50px;
}

@media screen and (max-width:380px){
  .gridContainer{
    grid-template-columns: repeat(auto-fit, 300px);
  }

  .burgerImage{
    width: 300px;
    height: 250px;
    margin-top: 5%;
    margin-bottom: 5%;
  }

  .back{
    width: 25%;
    height: 6vh;
    font-size: calc(1.7vw + 1.7vh);
    margin-left: 3%;
    text-align: center;
  }

  .add{
    width: 25%;
    height: 6vh;
    font-size: calc(1.7vw + 1.7vh);
    margin-right: 3%;
  }

  .burgerButtons{
    margin-top: 2%;
    margin-bottom: 2%;
  }
}

/* .header{
  top:0px;
  position:fixed;
  background-color: #DEB887;
  width:100%;
  height:5em;
  left:0px;
  color:black;
  font-size: 1em;
  padding-left:20px;
}

.language{
  width: 4em;
  height: 4em;
  position: absolute;
  top: 0;
  margin-top: 0.75em;
  background-color: #8B4513;
  border: none;
  font-weight: bold;
  font-size: 15px;
  margin-right: 40px;
  font-family: 'Amaranth';
  color: #FFE4B5;
  border-radius: 10px;
}

.cancel{
  width: 4em;
  height: 4em;
  margin-top: 0.75em;
  margin-left: 80px;
  background-color: #8B4513;
  border: none;
  font-weight: bold;
  font-size: 15px;
  margin-right: 40px;
  font-family: 'Amaranth';
  color: #FFE4B5;
  border-radius: 10px;
}

.cart{
  width: 4em;
  height: 4em;
  margin-top: 0.75em;
  background-color: #8B4513;
  border: none;
  font-weight: bold;
  font-size: 15px;
  margin-right: 40px;
  font-family: 'Amaranth';
  color: #FFE4B5;
  position: absolute;
  right: 0;
  margin-right: 40px;
  border-radius: 10px;

} */


/* .burgerButtons{
  width: 20vw;
  height: 15vh;
  font-size: calc(1.5vw + 1.5vh);
  background-color: #8B4513;
  font-family: 'Amaranth';
  border-radius: 10px;
  color: #FFE4B5;
  border: none;
  font-size: 3em;
} */

/* #bread{
  position: absolute;
  margin-top: 10vh;
  margin-left: -25vw;
  font-size: calc(2.5vw + 2.5vh);
}

#toppings{
  position: absolute;
  margin-top: 10vh;
  margin-left: 5vw;
  font-size: calc(2.5vw + 2.5vh);
}

#patty{
  position: absolute;
  margin-top: 40vh;
  margin-left: -25vw;
  font-size: calc(2.5vw + 2.5vh);
}

#sauce{
  position: absolute;
  margin-top: 40vh;
  margin-left: 5vw;
  font-size: calc(2.5vw + 2.5vh);
} */

/* .background {
  background-color: #FFFFF0;
  font-family: 'Amaranth';
  width: 110%;
  height: 100%;
  margin-left: -3%;

} */

</style>
