import Ember from 'ember';

export default Ember.Controller.extend({
  filterString: '',
  showAdvanced: true,
  concon: Ember.computed('filterString', function() {
    return this.filterString + this.filterString;
  }),
  onSubmit(changeset) {
    console.log(changeset.get('change'));
    // changeset.save();
  },
  onReset(changeset) {
    changeset.rollback();
  }
  actions: {
    toggleAdvanced() {
      this.toggleProperty('showAdvanced');
    },
  }
});
