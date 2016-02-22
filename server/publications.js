Meteor.publish('injuries', function() { 
	return Injuries.find();
});