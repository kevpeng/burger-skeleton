'use strict';

// Stuff that is used both in the ordering system and in the kitchen
var sharedVueStuff = {
  data: function () {
    return {
      orders: {},
      uiLabels: {},
      ingredients: {},
      lang: "en",
      lang_link: "@/assets/ENG-select.png"

    }
  },
  created: function () {
    this.$store.state.socket.on('initialize', function (data) {
      this.orders = data.orders;
      this.uiLabels = data.uiLabels;
      this.ingredients = data.ingredients;
    }.bind(this));

    this.$store.state.socket.on('switchLang', function (data) {
      this.uiLabels = data;
    }.bind(this));

    this.$store.state.socket.on('currentQueue', function (data) {
      this.orders = data.orders;
      if (typeof data.ingredients !== 'undefined') {
        this.ingredients = data.ingredients;
      }
    }.bind(this));
  },
  methods: {
    switchLang: function () {
      if (this.lang === "en") {
        this.lang = "sv";
        this.lang_link = "@/assets/SV-select.png";
      } else {
        this.lang = "en";
        this.lang_link = "@/assets/ENG-select.png";
      }
      this.$store.state.socket.emit('switchLang', this.lang, this.lang_link);
    },
    getImage: function() {
      return this.lang_link;
    }
  }
};

export default sharedVueStuff;