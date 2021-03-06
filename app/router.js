var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  //this.route('component-test');
  //this.route('helper-test');
  this.resource( 'accounts', function(){
    this.resource( 'account', {path: ':account_id'}, function(){
      this.resource( 'accounts.transactions', {path: 'transactions'} );
    } );
  } );
});

export default Router;
