Template.message.onCreated(function () {


});

Template.message.helpers({
    userId() {
        return Router.current().params.userId;
    }
});