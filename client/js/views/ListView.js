ListView = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.collection, 'add', this.render());
    this.render();
  }, 
  render: function () {
    this.$el.empty();
   
    var entries = this.collection.models.map(function(model) {
     return new ArticleEntryView({model:model});
    });
   
    var $els = entries.map(function(entry) {
      return entry.$el;
    });

    this.$el.append($els);
  }
});