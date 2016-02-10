ArticleEntryView = Backbone.View.extend({
  className: 'entry',
  model: ArticleEntry,
  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    this.render();
  },
  template: _.template('<p><%= url %><%= snippet %> <%= source %> <%= pub_date %></p>'),
  render: function() {
    var entry = this.template({
        url: this.model.get("web_url"),
        unit: this.model.get("snippet"),
        source: this.model.get("source"),
        pub_date: this.model.get("pub_date")

      });

      this.$el.html(entry);
  }
});