var AppView = Backbone.View.extend ({
  el: '#app',
  initialize: function () {
    this.input = new InputView();
    this.render();
  },
  render: function () {
    this.$el.append(this.input.$el);
    return this;
  }
});