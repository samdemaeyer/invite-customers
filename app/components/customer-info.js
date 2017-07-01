import Ember from 'ember';
import CalculateDistance from 'invite-customers/utils/calculate-distance';

const { computed } = Ember;

export default Ember.Component.extend({
  tagName: 'ul',
  classNameBindings: ['isOutOfReach'],

  distanceFromOffice: computed('customer.{latitude,longitude}', function() {
    let officeCoordinates = { lat: '53.3393', lon: '-6.2576841' };
    return CalculateDistance(officeCoordinates.lat, officeCoordinates.lon, this.get('customer.latitude'), this.get('customer.longitude')).toFixed(2);
  }),

  isOutOfReach: computed.gte('distanceFromOffice', 100)
});
