import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    body: DS.attr('string'),
    user_id: DS.attr('number'),
    comments: DS.hasMany('comment')
});
