InputView = Backbone.View.extend ({
  tagName: 'input',
  events: {
    'click:input': 'handleClick',
    'keydown': 'keyAction'
  },
  initialize: function () {
    this.render();
    this.clearInput();
  },
  handleClick: function(event) {
    console.log('event?', event);
  },
  keyAction: function(e) {
    if(e.which === 13) {
      console.log('this$elval', this.$el.val());
      this.collection.addArticleEntry(this.$el.val());
      this.clearInput();
    }
  },  
  render: function() {
    return this;
  },
  clearInput: function() {
    this.$el.val('');
    this.$el.attr({'placeholder': 'What do you want to read about?'});

  }
});