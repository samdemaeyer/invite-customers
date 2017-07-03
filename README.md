# invite-customers

## Task
We have some customer records in a text file (customers.json) -- one customer per line, JSON-encoded. We want to invite any customer within 100km of our Dublin office for some food and drinks on us. Write a program that will read the full list of customers and output the names and user ids of matching customers (within 100km), sorted by User ID (ascending).
- You can use the first formula from [this Wikipedia](https://en.wikipedia.org/wiki/Great-circle_distance) article to calculate distance. Don't forget, you'll need to convert degrees to radians.
- The GPS coordinates for our Dublin office are `53.3393,-6.2576841`.
- You can find the Customer list [here](https://gist.github.com/brianw/19896c50afa89ad4dec3).

When you run the app, you will see by default the list of customers within the range of 100km, sorted by user-id. You will be able to sort it by distance and change the scope to display all of them.

The ones out of range are marked in red and have a clear message that they are not to be invited. If the customer is in range, there is an invite button that will save the `invited` flag to `true`. The BE should now do the invite.

Please see below the steps to install and run the application.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone git@github.com:samdemaeyer/invite-customers.git`
* `cd invite-customers`
* `yarn install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
