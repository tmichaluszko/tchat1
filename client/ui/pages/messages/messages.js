Template.message.onCreated(function() {});

Template.messages.helpers({
  messagePrive() {
    let routerUser = Router.current().params.userId;
    let userId = Meteor.userId();
    let sender = Newmsg.find({
      sender: userId
    }).fetch();
    let reciever = Newmsg.find({
      sender: routerUser,
      reciever: userId
    }).fetch();

    let allMessage = sender.concat(reciever);
    return allMessage.sort((a, b) => {
      return a.date - b.date;
    });
  },
  userId() {
    return Router.current().params.userId;
  }
});
