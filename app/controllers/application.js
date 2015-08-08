import Ember from 'ember';

export default Ember.Controller.extend({
  sidebarLeftLocked: true,
  sidebarLeftVisible: true,

  links: [{
    label: 'Welcome',
    route: 'welcome'
  },
  {
    label: 'Loading',
    route: 'stay-loading'
  },
  {
    label: 'Error',
    route: 'show-error'
  }]
});
