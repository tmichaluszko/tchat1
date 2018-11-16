Template.form_new_msg.events({
  "submit .js-new-msg"(event, instance) {
    event.preventDefault();

    const msgVal = event.target.msg.value;

    Messages.insert({
        msg: msgVal,
        createdAt: Date.now(),
        ownerId: Meteor.userId()

      }),

      event.target.msg.value = '';
  }
})