var AppView = Backbone.View.extend ({
  el: '#app',
  initialize: function () {
    
    this.input = new InputView({
      collection: this.collection
    });

    this.list = new ListView({
      collection: this.collection
    });
    
    this.render();
  },
  render: function () {
    this.$el.append(this.input.$el);
    return this;
  }
});