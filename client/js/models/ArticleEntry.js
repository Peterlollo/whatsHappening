var ArticleEntry = Backbone.Model.extend ( {
  defaults: {
    "web_url": '',
    "snippet": '',
    "source": '',
    "pub_date": ''
  },
  initialize: function() {
    this.render();
  },
});