Template.single_msg.onCreated(function() {
  this.subscribe("getSenderMsg", Router.current().params.userId);
  this.subscribe("getRecieverMsg", Router.current().params.userId);
});

Template.single_msg.events({
  "click .js-edit-msg"(event, instance) {
    Modal.show("modal_edit_msg", instance.data);
  }
});
