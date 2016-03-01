// prevents subsription to previous items, performative change here - LUT

Template.injuryPage.onCreated(function(){
	var self = this;
	self.autorun(function(){
	var id = FlowRouter.getParam('id');
		self.subscribe('injuryPage', id);
	}); 
});

Template.injuryPage.helpers({
  getInjury: function () {
    var injuryId = FlowRouter.getParam('id');
    var inj = Injuries.findOne(injuryId) || {};
    return inj;
  },
	injury: ()=> {
		var id = FlowRouter.getParam('id')
	  	return Injuries.findOne({_id: id});
	 },
	options: function () {
    return [
      {
        optgroup: "Big Intervals",
        options: [
          {label: "Interval Run 1A", value: 'Interval Run 1A'},
          {label: "Interval Run 1B", value: 'Interval Run 1B'},
          {label: "Interval Run 1C", value: 'Interval Run 1C'}
        ]
      },
      {
        optgroup: "Medium Intervals",
        options: [
          {label: "Interval Run 2A", value: 'Interval Run 2A'},
          {label: "Interval Run 2B", value: 'Interval Run 2B'},
          {label: "Interval Run 2C", value: 'Interval Run 1C'}
        ]
      }
    ];
  }
}); // end of HELPER