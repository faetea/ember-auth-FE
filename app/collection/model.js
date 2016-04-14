import DS from 'ember-data';

const {
  Model,
  attr,
  hasMany,
  belongsTo
} = DS;

export default DS.Model.extend({
  name: attr('string'),
  desc: attr('string'),
  cover: attr('string'),

  user: belongsTo('user', {async: true, autoSave: true }),
  arts: hasMany('art', { async: true, dependent: 'destroy' })
});
