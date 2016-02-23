Template.injuryList.helpers({
  injuries: function () {
  	return Injuries.find();
  },
  //injury post URL generation
  pathForPost: function () {
  	var post = this;
  	var params = {
  		postId: post._id
  	};
  	var routeName = "singleInjury";
  	var path = FlowRouter.path(routeName, params);
  		return path;
  	}
});

