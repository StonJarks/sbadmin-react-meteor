const publicRedirect = () => {
  if ( Meteor.userId() ) {
    FlowRouter.go( 'index' );
  }
};

const publicRoutes = FlowRouter.group({
  name: 'public',
  triggersEnter: [ publicRedirect ]
});

publicRoutes.route( '/', {
  name: 'index',
  action() {
    ReactLayout.render( PublicDefault, { yield: <PublicBody />  } );
  }
});

publicRoutes.route( '/signup', {
  name: 'signup',
  action() {
    ReactLayout.render( PublicDefault, { yield: <Signup /> } );
  }
});

publicRoutes.route( '/login', {
  name: 'login',
  action() {
    ReactLayout.render( PublicDefault, { yield: <Login /> } );
  }
});

publicRoutes.route( '/recover-password', {
  name: 'recover-password',
  action() {
    ReactLayout.render( PublicDefault, { yield: <RecoverPassword /> } );
  }
});

publicRoutes.route( '/reset-password/:token', {
  name: 'reset-password',
  action() {
    ReactLayout.render( PublicDefault, { yield: <ResetPassword /> } );
  }
});
