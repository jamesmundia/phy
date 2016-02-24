Template.injuryPage.helpers({
	injury: function() {
		var id = FlowRouter.getParam('id')
	  	return Injuries.findOne({_id: id});
	 },
	 log: function(){
	 	console.log(this);
	 }
}); 

/*
Template.injuryPage.onCreated(function() {
  this.getInjuryId = () => FlowRouter.getParam('_id');

  this.autorun(() => {
    this.subscribe('injuries', this.getInjuryId());
  });
}); */