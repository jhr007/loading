import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {

    return new Ember.RSVP.Promise(function(resolve, reject){
      //setTimeout(function () {
      //  alert('wowt');
      //  //resolve('WINNING')
      //
      //},5000)
    });
  }
});
