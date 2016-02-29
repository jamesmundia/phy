// prevents subsription to previous items, performative change here - LUT

Template.injuryPage.onCreated(function(){
	var self = this;
	self.autorun(function(){
	var id = FlowRouter.getParam('id');
		self.subscribe('injuryPage', id);
	}); 
});

Template.injuryPage.helpers({
	injury: ()=> {
		var id = FlowRouter.getParam('id')
	  	return Injuries.findOne({_id: id});
	 }
});