FlowRouter.route('/', {
	name: 'injurylist',
  action: function() {
    BlazeLayout.render("layout", {content: "injuryList"});
  }
});

var injuries = FlowRouter.group({
	prefix: '/injuries'
});

injuries.route('/', {
	action: function(){
		console.log("All da Knocks");
	}
});

injuries.route('/:id', {
	action: function (params){
		console.log(params._id);
	    BlazeLayout.render("layout", {content: "injuryPage"});
	}
});