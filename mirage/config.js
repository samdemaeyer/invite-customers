import CalculateDistance from 'invite-customers/utils/calculate-distance';

export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
  Config (with defaults).

  Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
  Shorthand cheatsheet:

  this.get('/posts');
  this.post('/posts');
  this.get('/posts/:id');
  this.put('/posts/:id'); // or this.patch
  this.del('/posts/:id');

  http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
  this.get('/customer-infos', (db, req) => {
    let officeCoordinates = { lat: '53.3393', lon: '-6.2576841' };
    let filteredInfos = db.customerInfos.all().models;
    if (req.queryParams.withinRange === 'true') { // This is not a boolean, mirage converts it to a string
      filteredInfos = filteredInfos.filter(info => {
        return CalculateDistance(officeCoordinates.lat, officeCoordinates.lon, info.latitude, info.longitude) <= 100;
      });
    }
    return {
      data: filteredInfos.map(attrs => ({
        type: 'customer-info',
        id: attrs.id,
        attributes: attrs
      }))
    };
  });
}
