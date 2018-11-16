Meteor.publish("listMsg", function() {
  return Messages.find({});
});

Meteor.publish("listUser", function() {
  return Meteor.users.find({});
});

Meteor.publish("getSenderMsg", function(userId) {
  return Newmsg.find({
    sender: Meteor.userId(),
    reciever: userId
  });
});

Meteor.publish("getRecieverMsg", function(userId) {
  return Newmsg.find({
    sender: userId,
    reciever: Meteor.userId()
  });
});

Meteor.publish("getContact", function(userId) {
  return Meteor.users.find({
    _id: userId
  });
});
