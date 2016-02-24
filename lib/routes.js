FlowRouter.route('/', {
	name: 'injurylist',
  action: function() {
    BlazeLayout.render('layout', {content: "injuryList"});
  }
});

FlowRouter.route('/injury/:id', {
    name: "injurydetail",
    action : function() {
	BlazeLayout.render('layout', {content: "injuryPage"});
    }
});

// from other prototype

//if(Meteor.isClient) {

//Accounts.onLogin(function(){
 //   FlowRouter.go('injuries');
// });

//Accounts.onLogout(function(){
//    FlowRouter.go('home');
// });
//}

//FlowRouter.triggers.enter([function(context, redirect){
//    if(!Meteor.userId()){
        //FlowRouter.go('home');
//    }
//}]);
