<template>
  <!-- HTML code -->
  <div>
    <head>
      <title>Selection Overview</title>
      <meta charset="utf-8"/>
      <link href='https://fonts.googleapis.com/css?family=Amaranth' rel='stylesheet'>
    </head>
    <body>
      <div class="theWholeBody">
        <div id="title">
          <h1>Selection Overview</h1>
        </div>
        <div class="buttons">
          <button class="button create" v-on:click="switchLang()"> Create own Burger </button>
          <button class="button menus" v-on:click="switchLang()"> Menus </button>
          <button class="button burgers" v-on:click="switchLang()"> Burgers </button>
          <button class="button fries" v-on:click="switchLang()"> Fries </button>
          <button class="button icecream" v-on:click="switchLang()"> Ice Cream </button>
          <button class="button salad" v-on:click="switchLang()"> Salad </button>
          <button class="button drinks" v-on:click="switchLang()"> Drinks </button>
          <!-- <div class="button" v-for="b in buttonList">

        </div> -->
      </div>
    </div>
  </body>
  <footer>
    <button  class="back" id="back"> {{uiLabels.back}}  </button>
  </footer>
</div>
</template>

<script>
// Javascript
//
// 'use strict';
// var socket = io();
// var vm = new Vue({
//   el: '#theWholeBody',
//   data: {
//     headLine: 'Selection Overview',
//     buttonList: buttons
//   },
//   methods: {
//     create: function(event){
//
//     }
//   }
// })
import sharedVueStuff from '@/components/sharedVueStuff.js'
// var buttons = [
//   {
//     "title": "Create your own burger",
//     "methods": "create"
//   },
//   {
//     "title": "Menus",
//     "methods": "menus"
//   },
//   {
//     "title": "Burgers",
//     "methods": "burgers"
//   },
//   {
//     "title": "Fries",
//     "methods": "fries"
//   },
//   {
//     "title": "Ice Cream",
//     "methods": "icecream"
//   },
//   {
//     "title": "Salad",
//     "methods": "sald"
//   },
//   {
//     "title": "Drinks",
//     "methods": "Drinks"
//   }
// ]
export default {
  // add the right name
  name: 'selectionOverview.vue',
  mixins: [sharedVueStuff],
}
</script>

<style scoped>
/* CCS */
.theWholeBody{
  background-color: #FFFFF0;
}
#title{
  background-color: #FFE4B5;
  text-align: center;
  color: #8B4513;
}
.buttons {
  width: 55%;
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  grid-row-gap: 100px;
  grid-column-gap: 150px;
  color: #FFE4B5;
  margin : 0 auto;
  /* border: 5px solid black; */
}
.button{
  width: 180%;
  height: 100;
  font-family: 'Amaranth';
  font-size: 3em;
  background-color: #8B4513;
  /* border: 5px solid black; */
  color: #FFE4B5;
  border: none;
  border-radius: 10px;
}
.create{
  grid-column: 1 / 3;
  grid-row: 1;
  width: 197%;
}
.menus {
  grid-column: 1 ;
  grid-row: 2;
}
.burgers {
  grid-column: 2 ;
  grid-row: 2 ;
}
.fries {
  grid-column: 3;
  grid-row: 2;
}
.icecream {
  grid-column: 1;
  grid-row: 3;
  font-size: 2.3em;
}
.salad {
  grid-column: 2;
  grid-row: 3;
}
.drinks {
  grid-column: 3;
  grid-row: 3;
}
footer{
	bottom:0px;
	position:fixed;
	background-color: #DEB887;
	width:100%;
	height:4em;
	left:0px;
	color:black;
	font-size: 0.9em;
	padding-left:20px;
}
.back{
  width: 10%;
  height: 2.5em;
  margin-top: 0.75em;
  background-color: #8B4513;
  border: none;
  font-weight: bold;
  font-size: 15px;
  font-family: 'Amaranth';
  color: #FFE4B5;
  border-radius: 10px;
}
button:hover{
  background-color: #501811;
  cursor: pointer;
}

  </style>
