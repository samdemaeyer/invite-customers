import Ember from 'ember';

const { computed } = Ember;

export default Ember.Controller.extend({
  queryParams: ['withinRange'],
  withinRange: true,

  sortedInfos: computed('model', function() {
    return this.get('model').sortBy('userId');
  }),

  actions:{
    toggleParams(param) {
      this.toggleProperty(param);
    }
  }
});
