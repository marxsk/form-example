import Ember from 'ember';

export default Ember.Route.extend({
  properties: null,

  init() {
    this.properties = Ember.A();
    this.properties.pushObject({name: 'name', level: 'advanced', type: 'text', title: 'My Name', value: '123'});
    this.properties.pushObject({name: 'city', type: 'select', title: 'Ciiity', value: 'Brno', options: ['Brno', 'Praha', 'New York']});
    this.properties.pushObject({name: 'author', level: 'advanced', type: 'text', title: 'Author', value: null, defaultValue: 'Hugo Hugo'});
  },

  model() {
    // create a hash with key/value
    let data = {};

    this.properties.forEach((x) => {
      data[x.name] = x.value;
    })

    console.log(data);

    return {
      data,
      properties: this.properties,
    };
  }
});
