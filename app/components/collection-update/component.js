import Ember from 'ember';

export default Ember.Component.extend({
  backgroundImage: Ember.computed('collection.cover', function(){
    var style = `background-image: url(${this.get('collection.cover')});`;

    return Ember.String.htmlSafe(style);
  }),

  buttonLabel: 'Save Changes',

  actions: {
    buttonClicked(param) {
      // console.log(param);
      this.sendAction('action', param);
      // Ember.Logger.error(param);
    },
    reset(record) {
      record.rollbackAttributes();
      this.sendAction('reset', record);
    }

  }
});
