if (Meteor.isClient) {
  Template.signup.events({
    "submit form": function(event, template){
      var email = template.find('#signup-email').value;
      var password = template.find('#signup-password').value;

      Accounts.createUser({
        username: email,
        email: email,
        password: password
      });

      return false;
    }
  });

  Template.login.events({
    "submit form": function(event, template){
      var email = template.find('#login-email').value;
      var password = template.find('#login-password').value;

      Meteor.loginWithPassword(email, password);

      return false;
    }
  });

  Template.dashboard.events({
    "click .logout": function(event){
      Meteor.logout();

      return false;
    }
  });
}

if (Meteor.isServer) {

}
