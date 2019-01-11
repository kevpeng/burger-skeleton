'use strict';

// Stuff that is used both in the ordering system and in the kitchen
var sharedVueStuff = {
  data: function () {
    return {
      orders: {},
      ingredients: {},
      premades: {},
      paymentState: ''
    }
  },
  computed: {
    uiLabels: function () {
      return this.$store.state.uiLabels;
    },
    lang: {
      get: function (){
        return this.$store.state.lang;
      },
      set: function (lang){
        this.$store.commit('switchLang', lang);
      }
    },
    itemlist: {
      get: function (){
        return this.$store.state.itemlist;
      },
      set: function (itemlist){
        this.$store.commit('switchList', itemlist);
      }
    },
    category: {
      get: function (){
        return this.$store.state.category;
      },
      set: function (category){
        this.$store.commit('switchCategory', category);
      }
    }
  },
  created: function () {
    this.$store.state.socket.emit('pageLoaded');
    this.$store.state.socket.on('initialize', function (data) {
      this.orders = data.orders;
      this.$store.commit('setUiLabels', data.uiLabels);
      this.ingredients = data.ingredients;
      this.premades = data.premades;
      this.paymentState = 'waiting';
    }.bind(this));

    this.$store.state.socket.on('switchLang', function (data) {
      this.$store.commit('setUiLabels', data);
    }.bind(this));

    this.$store.state.socket.on('currentQueue', function (data) {
      this.orders = data.orders;
      if (typeof data.ingredients !== 'undefined') {
        this.ingredients = data.ingredients;
      }
      if (typeof data.premades !== 'undefined') {
        this.premades = data.premades;
      }
    }.bind(this));
  },
  methods: {
    switchLang: function () {
      if (this.lang === "en") {
        this.lang = "sv";
      } else {
        this.lang = "en";
      }
      this.$store.state.socket.emit('switchLang', this.lang);
      // this.$store.commit('changeHello', "Hi there again!");
    },
    cancel: function(){
      this.$emit('cancel');
    },
    switchTo: function(newTab) {      
      this.$emit('switchTo', newTab);
    },
    switchToItems: function(newTab){
      this.$emit('switchTo', 'Items');
      var x = 0;
      var listname = '';
      switch (newTab) {
        //ingredients
        case 'Bread': 
              x = 4;
              listname = 'ingredients';
              break;
        case 'Patty': 
              x = 1;
              listname = 'ingredients';
              break;
        case 'Toppings': 
              x = 2;
              listname = 'ingredients';
              break;
        case 'Sauce': 
              x = 3;
              listname = 'ingredients';
              break;

        //premade items
        case 'Menus': 
              x = 3;
              listname = 'premades';
              break;
        case 'Burgers': 
              x = 2;
              listname = 'premades';
              break;
        case 'Fries': 
              x = 5;
              listname = 'ingredients';
              break;
        case 'Icecreams': 
              x = 7;
              listname = 'ingredients';
              break;
        case 'Salads': 
              x = 1;
              listname = 'premades';
              break;
        case 'Drinks': 
              x = 6;
              listname = 'ingredients';
              break;
      }
      console.log("x " + x + " # listname " + listname);
      this.category = x;
      if(listname == 'premades'){
        this.itemlist = this.premades;
      }
      else if(listname == 'ingredients'){
        this.itemlist = this.ingredients;
      }
      else {
        alert("List not available. Wrong listname!");
      }
      //console.log(this.category);
      //console.log(this.itemlist);
    },
    switchCategory: function (number) {
      //console.log("switch category number");
      //this.category = number;
      //this.$store.state.socket.emit('switchCategory', number);
    },
    switchList: function (listname) {
      //console.log("switch list");
      if(listname === 'premades'){
        //this.itemlist = this.premades;
        //this.$store.state.socket.emit('switchList', this.itemlist);
      }
      else if(listname === 'ingredients'){
        //this.itemlist = this.ingredients;
        //this.$store.state.socket.emit('switchList', this.itemlist);
      }
      else {
        alert("List not available. Wrong listname!");
      }
    }
  }
};

export default sharedVueStuff;
