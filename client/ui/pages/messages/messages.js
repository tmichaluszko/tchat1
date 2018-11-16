Template.message.onCreated(function () {});
this.subscribe("getSenderMsg")
this.subscribe("getRecieverMsg")
this.subscribe('getContact')

Template.messages.helpers({
  conversations() {
    Conversation.insert({

    })

    let allMessage = sender.concat(reciever);
    return allMessage.sort((a, b) => {
      return a.date - b.date;
    });
  },
  userId() {
    return Router.current().params.userId;
  }
});