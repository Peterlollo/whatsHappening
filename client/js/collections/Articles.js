var Articles = Backbone.Collection.extend ({
  model: ArticleEntry,
  formatUserInput: function(userInput) {
    var formattedInput = userInput.split(' ');
    formattedInput.splice(0, 0, 'q=');
    return formattedInput.join('');
  },
  addArticleEntry: function(userInput) {
    console.log('userInput', userInput);
    var baseUrl = 'http://api.nytimes.com/svc/search/v2/articlesearch';
    var format = '.json?';
    var formattedInput = this.formatUserInput(userInput);
    var API = '&api-key=3a710c44284258f77f21b22e98bc54a0:1:74319815';
    var queryStr = baseUrl + format + '[' + formattedInput  +']' + API;
    $.get(queryStr, function(data) {
      var res = JSON.parse(data);
      console.log(res);
      var topArticle = res.docs[0];
      console.log(data);
      this.add(
        {
          "web_url": topArticle.web_url,
          "snippet": topArticle.snippet,
          "source": topArticle.source,
          "pub_date": topArticle.pub_date
          }
      );
    }.bind(this)
    );
  }
});