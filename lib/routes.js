FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("layout", {content: "injuryList"});
  }
});

FlowRouter.route('/:postId', {
  action: function() {
    BlazeLayout.render("layout", {content: "singleInjury"});
  }
});