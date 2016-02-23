FlowRouter.route('/', {
	name: 'injurylist',
  action: function() {
    BlazeLayout.render("layout", {content: "injuryList"});
  }
});

FlowRouter.route('/:postId', {
  name: 'singleInjury',
  action: function() {
    BlazeLayout.render("layout", {content: "injuryPage"});
  }
});