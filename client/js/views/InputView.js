InputView = Backbone.View.extend ({
  tagName: 'input',
  // attr: {
  //   placeholder: 'What do you want to read about?'
  // },
  events: {
    'click input': function(){this.handleClick(this);}
  },
  initialize: function () {
    this.render();
    // this.on('keypress', function(which) {
    //   if(which ==== '13') {
    //     var query = $input.val();
    //     this.handleClick(query);
      // }
    // })
  },
  handleClick: function(event) {
    console.log(event);
  },
  render: function() {
    return this;
  }
});