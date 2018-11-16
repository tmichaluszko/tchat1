import {
    ReactiveVar
} from "meteor/reactive-var";

//import {Newmsg} from message.js

Template.list_msg_prv.onCreated(function () {
    this.allMessage = new ReactiveVar(null)

    let handler = []

    handler.push(this.subscribe("getSenderMsg", Router.current().params.userId))
    handler.push(this.subscribe("getRecieverMsg", Router.current().params.userId))

    this.autorun(() => {
        //const isReady = handler.ready();

        let areReady = handler.every((handle) =>
            handle.ready()
        );
        if (areReady) {

            let allMessage = Newmsg.find({}).fetch();

            let allMessageSorted = allMessage.sort((a, b) => {
                return a.createdAt - b.createdAt
            })
            console.log(allMessageSorted)
            this.allMessage.set(allMessageSorted)
        }
    })
});




Template.list_msg_prv.helpers({
    messages() {
        return Template.instance().allMessage.get()
    },

});