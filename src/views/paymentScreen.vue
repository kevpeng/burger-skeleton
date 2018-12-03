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
        <div class="header">
          <button :class="['languageButton', 'language', lang]" v-on:click="switchLang()"></button>
          <span> Payment </span>
        </div>
        <div class="middle">
          <div class="message">
            Waiting for payment...
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
import sharedVueStuff from '@/components/sharedVueStuff.js'
export default {
  // add the right name
  name: 'paymentScreen.vue',
  mixins: [sharedVueStuff]
}
</script>

<style scoped>
/* CSS */
.theWholeBody{

}
.button{
  width: 90%;
  height: 17vh;
  font-family: 'Amaranth';
  font-size: calc(2.5vw + 2.5vh);
  background-color: #8B4513;
  color: #FFE4B5;
  border-radius: 10px;
  border: 3px solid black;
  vertical-align: bottom;
}
.message{
  /* width: 100vw;
  height: 70vh;
  top: 15vh; */
  font-size: calc(5vw + 2.5vh);

  text-align: center;
  vertical-align: middle;
  line-height: 70vh;
}
.back{
  width: 10%;
  height: 5vh;
  font-size: calc(1vw + 1vh);
  margin-top: 2.5%;
  margin-left: 0.5%;
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
  top:0px;
  left:0px;
  font-size: calc(2.5vw + 2.5vh);
  /* padding-left: 1vw;
  padding-right: 1vw;
  font-family: 'Amaranth'; */
}
/* Middle part of the page, includes background color and size... "Main" */
.middle{
  /* background-color: #FFF8DC; */
  margin-top: 15vh;
  position:fixed;
  font-family: 'Amaranth';
  width: 100vw;
  height: 70vh;
  left: 0;

  border: 3px solid black;


}

/* Formatting for footers */
.footer{
  position:fixed;
  background-color: #DEB887;
  color:black;

  width: 100vw;
  height:15vh;
  left:0px;
  bottom: 0;

	padding-left: 1vw;
  padding-right: 1vw;
  justify-content: center
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

body {
  font-family: 'Amaranth';
}
</style>
