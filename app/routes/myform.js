import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      name: '123',
      city: 'Brno',
      author: null,
      enabled: 'true',
    };
  }
});
