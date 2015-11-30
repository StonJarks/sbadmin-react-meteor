const authenticatedRedirect = () => {
  if ( !Meteor.loggingIn() && !Meteor.userId() ) {
    FlowRouter.go( '/' );
  }
};

const authenticatedRoutes = FlowRouter.group({
  name: 'authenticated',
  triggersEnter: [ authenticatedRedirect ]
});



authenticatedRoutes.route( '/dashboard', {
  name: 'dashboard',
  action() {
    ReactLayout.render( AuthenticatedDefault, { yield: <Testboard /> } );
  }
});