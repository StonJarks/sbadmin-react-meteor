FlowRouter.notFound = {
  action() {
    ReactLayout.render( PublicDefault, { yield: <NotFound /> } );
  }
};

Accounts.onLogin( () => {
  let currentRoute = FlowRouter.current();
  if ( currentRoute && currentRoute.route.group.name === 'public' ) {
    FlowRouter.go( 'dashboard' );
  }
});

if ( Meteor.isClient ) {
  Tracker.autorun( () => {
    if ( !Meteor.userId() && FlowRouter.current().route ) {
      FlowRouter.go( '/' );
    }
  });
}