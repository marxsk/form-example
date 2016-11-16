import Ember from 'ember';

export default Ember.Controller.extend({
  onSubmit(changeset) {
    console.log(changeset.get('change'));
    // changeset.save();
  },
  onReset(changeset) {
    changeset.rollback();
  },
});
