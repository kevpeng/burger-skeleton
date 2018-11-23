<template>
<!-- HTML code -->
<head>
  <title>Selection Overview</title>
  <meta charset="utf-8"/>
</head>
<body>
  <div class="theWholeBody">
    <div id="title">
      <h1>{{headLine}}</h1>
    </div>
    <div class="buttons">
      <div class="button" v-for="b in buttonList">
        <button v-on:click="b.method"> {{b.title}} </button>
      </div>
    </div>
  </div>
</body>
</template>

<script>
// Javascript

'use strict';
var socket = io();
var vm = new Vue({
  el: '#theWholeBody',
  data: {
    headLine: 'Selection Overview',
    buttonList: buttons
  },
  methods: {
    create: function(event){

    }
  }
}
var buttons = [
  {
    "title": "Create your own burger",
    "methods": "create"
  },
  {
    "title": "Menus",
    "methods": "menus"
  },
  {
    "title": "Burgers",
    "methods": "burgers"
  },
  {
    "title": "Fries",
    "methods": "fries"
  },
  {
    "title": "Ice Cream",
    "methods": "icecream"
  },
  {
    "title": "Salad",
    "methods": "sald"
  },
  {
    "title": "Drinks",
    "methods": "Drinks"
  }
]
    export default {
        // add the right name
        name: "selectionOverview.vue"
    }
</script>

<style scoped>
/* CCS */
</style>
