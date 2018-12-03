<template>
  <!-- HTML code -->
  <div>
    <head>
      <!-- <title>Selection Overview</title> -->
      <meta charset="utf-8"/>
      <link href='https://fonts.googleapis.com/css?family=Amaranth' rel='stylesheet'>
      <!-- <link rel="stylesheet" href="css/sharedCSSStuff.css"> -->
    </head>
    <body>
      <div class="theWholeBody">
        <!--<div class="header">
          <button :class="['languageButton', 'language', lang]" v-on:click="switchLang()"></button>
          <span> {{uiLabels.selectionOverviewTitle}} </span>
           <h2>{{$store.state.hello}}</h2>
        </div>-->
        <div class="middle">
          <div class="buttons">
            <button class="button create" v-on:click="switchLang()"> {{uiLabels.createOwnBurger}} </button>
            <div class="line">  </div>
            <button class="button menusTop" v-on:click="switchLang()"> {{uiLabels.menus}} </button>
            <button class="button menusTop" v-on:click="switchLang()"> {{uiLabels.burgers}} </button>
            <button class="button menusTop" v-on:click="switchLang()"> {{uiLabels.fries}} </button>
            <button class="button menusDown" v-on:click="switchLang()"> {{uiLabels.iceCream}} </button>
            <button class="button menusDown" v-on:click="switchLang()"> {{uiLabels.salad}} </button>
            <button class="button menusDown" v-on:click="switchLang()"> {{uiLabels.drinks}} </button>
            <!-- <div class="button" v-for="b in buttonList">
            <button class="button" v-on:click="b.methods"> {{b.title}} </button>
          </div> -->
        </div>
      </div>
      <div class="footer">
        <button  class="button back" id="back"> {{uiLabels.back}}  </button>
      </div>
    </div>
  </body>
</div>
</template>

<script>
// Javascript


// var buttons = [
//   {
//     "title": {{uiLabels.createOwnBurger}},
//     "methods": "create"
//   },
//   {
//     "title": {{uiLabels.menus}},
//     "methods": "menus"
//   },
//   {
//     "title": {{uiLabels.burgers}},
//     "methods": "burgers"
//   },
//   {
//     "title": {{uiLabels.fries}},
//     "methods": "fries"
//   },
//   {
//     "title": {{uiLabels.iceCream}},
//     "methods": "icecream"
//   },
//   {
//     "title": {{uiLabels.salad}},
//     "methods": "salad"
//   },
//   {
//     "title": {{uiLabels.drinks}},
//     "methods": "Drinks"
//   }
// ]
import sharedVueStuff from '@/components/sharedVueStuff.js'
export default {
  // add the right name
  name: 'selectionOverview.vue',
  mixins: [sharedVueStuff]
  // data: function() {
  //   return {
  //     headLine: 'Selection Overview',
  //     buttonList: buttons,
  //   }
  // },
  // methods: {
  //   create: function(){
  //
  //   }
  // }
}
</script>

<style scoped>
/* CSS */
.theWholeBody{
  /* background-color: #FFFFF0; */
}
.buttons {
  /* width: 100%; */
  justify-items: center;
  display: grid;
  grid-template-columns: 32vw 32vw 32vw;
  grid-template-rows: auto 10px auto auto;
  grid-gap: 2%;
  /* grid-row-gap: 100%; */
  /* grid-column-gap: 5%; */
  color: #FFE4B5;
  /* margin : 0 auto; */
  /* border: 5px solid black; */
}
.button{
  width: 90%;
  height: 15vh;
  font-family: 'Amaranth';
  font-size: calc(2.5vw + 2.5vh);
  background-color: #8B4513;
  color: #FFE4B5;
  border-radius: 10px;
  border: 3px solid black;
  vertical-align: bottom;
}
.create{
  grid-column: 1 / 4;
  width: 97%;
  margin-bottom: 2%;
  /* grid-row: 1; */
  /* width: 187%; */
}
.line{
  grid-column: 1 / 4;
  width: 97%;
  background-color: #8B4513;
  border-radius: 10px;
}

.menusTop {
  margin-top: 5vh;
  margin-bottom: 5vh;
}
.menusDown{
  margin-bottom: 8vh;
}
.back{
  width: 10%;
  height: 5vh;
  font-size: calc(1vw + 1vh);

  margin-left: 1.5%;
}
button:hover{
  background-color: #501811;
  cursor: pointer;
}
button:active{
  box-shadow: 0 1px #666;
  transform: translateY(2px);
}
/* Formatting for headers */
.header{
  top:0px;
  color:black;
  /* positioning of buttons and title? */
  /* -------------------------------- */
  position:fixed;
  background-color: #DEB887;
  width: 100vw;
  height:15vh;
  left:0px;
  font-size: calc(2.5vw + 2.5vh);
  padding-left: 1vw;
  padding-right: 1vw;
  font-family: 'Amaranth';
}
/* Middle part of the page, includes background color and size... "Main" */
.middle{
  /* background-color: #FFF8DC; */
  font-family: 'Amaranth';
  margin-top: 3vh;
  /* position: fixed; */
  width: 100vw;
  height: 70vh;
  left: 0;
}

/* Formatting for footers */
.footer{
  /* position:fixed; */
  background-color: #DEB887;
  color:black;

  width: 100vw;
  height:9.5vh;
  left:0px;
  bottom: 0;

	/* padding-left: 1vw;
  padding-right: 1vw; */
  /* justify-content: center; */
  display: flex;
  align-items: center;
  /* font-size: 0.9em; */
}
.languageButton {
    /*position: absolute;*/
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
    /*position: absolute;*/
    margin: 0.5%;
    /*border: none;*/
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

</style>
