Template.rehabList.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('injuries');
	}); // prevents unnecssary subscriptions - LevelUpTuts
});

Template.injuryList.helpers({
  injuries: function () {
  	return Injuries.find();
  }
});