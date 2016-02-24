FlowRouter.route('/', {
	name: 'injurylist',
  action: function() {
    BlazeLayout.render("layout", {content: "injuryList"});
  }
});

var injuries = FlowRouter.group({
  prefix: '/injuries'
});

injuries.route('/:postId', {
  name: 'singleInjury',
  action: 
  	function() {
    BlazeLayout.render("layout", {content: "injuryPage"});  
	}
});