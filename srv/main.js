var app = new Vue({
  el: '#app',
  data: {
    quote: null,
    loaded: false
  },
  methods: {
      getAQuote: function() {
          fetch("/api/quotes/random").then((res) => {
              return res.json();
          }).then((json) => {
              console.log('parsed json', json);
              this.quote = json;
              this.loaded = true;
          })
      }
  },
  created() {
      this.getAQuote();
  }
})
