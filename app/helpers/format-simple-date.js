export default Ember.Handlebars.makeBoundHelper(function(date){
  return date.toDateString();
});
