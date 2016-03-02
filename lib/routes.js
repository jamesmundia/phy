FlowRouter.route('/', {
	name: 'home',
  action: function() {
    BlazeLayout.render('layout', {top: "injuryList"});
    BlazeLayout.render('layout', {middle: "injuryList"});
    BlazeLayout.render('layout', {bottom: "injuryList"});
    BlazeLayout.render('layout', {footer: "injuryList"});
  }
});

FlowRouter.route('/injury/:id', {
    name: "injurydetail",
    action : function() {
	BlazeLayout.render('layout', {content: "injuryPage"});
    }
});

FlowRouter.route('/addinjury', {
    name: "addinjury",
    action : function() {
	BlazeLayout.render('layout', {content: "addinjury"});
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
