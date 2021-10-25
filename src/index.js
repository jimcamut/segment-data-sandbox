// Initiate environment variables
require('./lib/environment');
// Our tracking library
const { identifyAndGroup, track, page } = require('./lib/tracking');
// User data for testing
const userdata = require('./lib/userdata1');

// Data to help trigger test events
const eventData = require('./lib/testEvents');

// Fake User Data
const { person, company } = userdata;

const getEventByName = (name, type = 'list') =>
  eventData[type].find((it) => it.name === name);

const runTestEvents = (names) => {
  const eventList = names.map((name) => getEventByName(name));
  eventList.forEach((data) =>
    track(data.name, { ...data.properties, email: person.email })
  );
};

const runTestPages = (names) => {
  const pageList = names.map((name) => getEventByName(name, 'pages'));
  pageList.forEach((data) => page(data.category, data.name, data.properties));
};

const testAnalytics = () => {
  try {
    identifyAndGroup(
      { personId: person.id, person, companyId: company.id, company },
      () => {
        // runTestEvents(['Data Imported']);
        runTestEvents(eventData.list.map((it) => it.name));
        // runTestPages(['Login', 'Databases', 'Settings']);
      }
    );
  } catch (e) {
    console.log(e);
  }
};

testAnalytics();

/**
 * Learnings:
 *
 * 1) We can use custom connector to Hubspot and let events sync
 * 2) We can trigger email campaigns based on legacy events
 * 3) Pages are difficult to test with this libray, so let's not rely on it
 * 4) Hubspot has event logic to send our campaigns
 * 5) Account Tracking Dynamics:
 *      a) Company/account data needs to be tracked in our app database
 *      b) Trial and paid plan status (trial) needs to be tracked on Company/account
 *      c) Ideally on the backend we need to trigger Segment Company/account updates for
 *
 */
