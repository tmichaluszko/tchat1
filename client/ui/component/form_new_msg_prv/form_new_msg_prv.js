Template.form_new_msg_prv.events({
    "submit .new_msg_prv"(event, instance) {
        event.preventDefault();
        const msgVal = event.target.msg.value;
        let reciever = event.currentTarget.buttonSubmit.attributes["data-userId"].value
        Newmsg.insert({
            msg: msgVal,
            createdAt: new Date(),
            sender: Meteor.userId(),
            reciever: reciever
        })
        event.target.msg.value = '';
    }
})