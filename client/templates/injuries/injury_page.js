/*Template.injuryPage.onCreated(function(){
	var self = this;
	self.autorun(function(){
	var id = FlowRouter.getParam('id');
		self.subscribe('injuryPage', id);
	}); // prevents subsription to previous items, performative change here - LUT
});
*/

Template.injuryPage.helpers({
	/*injury: ()=> {
		var id = FlowRouter.getParam('id')
	  	return Injuries.findOne({_id: id});
	 },*/
	  player: function (){
	  	var id = FlowRouter.getParam('id')
	  	return Injuries.findOne(id);
	  }
});