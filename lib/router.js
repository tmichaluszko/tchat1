Router.configure({
    layoutTemplate: 'main'
});
//route de base
Router.route("/", function () {

    if (Meteor.user()) {
        if (Meteor.user().profile.pseudo) {
            this.render("accueil")
        } else {
            this.render("setPseudo")
        }
    } else {
        this.render("atForm")
    }
});
//route qui affiche toutes les conversation avec les users
Router.route("/messages", function () {
    this.render("messages")
});
// route qui affiche une seule conversation
Router.route("/message/:userId", function () {
    this.render("message")
});