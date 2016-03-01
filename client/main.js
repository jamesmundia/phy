Meteor.subscribe('injuries');

var rehabHooks = {
  before: {
    insert: function(doc){
      var injuryid = FlowRouter.getParam('id');
      doc.injuryid = injuryid;
      return doc;
    }
  }
};

AutoForm.addHooks(['insertRehabForm'],rehabHooks);