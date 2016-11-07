import Ember from 'ember';

export default Ember.Controller.extend({
  filterString: '',
  showAdvanced: true,
  concon: Ember.computed('filterString', function() {
    return this.filterString + this.filterString;
  }),
  onSubmit(changeset) {
//    x.save();
  console.log(changeset.change);
    changeset.rollback();
  },
  actions: {
    toggleAdvanced() {
      this.toggleProperty('showAdvanced');
    },
  }
});
