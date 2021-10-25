const { Analytics } = require('analytics');
const segmentPlugin = require('@analytics/segment');

// Docs: https://www.npmjs.com/package/@analytics/segment
const analytics = Analytics({
  app: process.env.SEGMENT_WORKSPACE_NAME,
  plugins: [
    segmentPlugin({
      writeKey: process.env.SEGMENT_WRITE_KEY,
    }),
  ],
});

// Library specific methods the group call
// Add a reference to the "group" method to keep things cleaner
analytics.group = analytics.plugins.segment.group;

const identify = (id, properties, callback) => {
  analytics.identify(id, properties, () => {
    if (process.env.LOG_TRACKING === 'true') {
      console.log('##TRACK [ IDENTIFY ]:', id, properties);
    }
    if (typeof callback === 'function') {
      callback();
    }
  });
};

const group = (id, properties, options, callback) => {
  analytics.group(id, properties, options, () => {
    if (process.env.LOG_TRACKING === 'true') {
      console.log('##TRACK [ GROUP ]:', id, properties);
    }
    if (typeof callback === 'function') {
      callback();
    }
  });
};

const identifyAndGroup = (
  { personId, person, companyId, company },
  callback
) => {
  identify(personId, person, () => {
    group(companyId, company, { userId: personId }, callback);
  });
};

const track = (name, properties, callback) => {
  if (process.env.LOG_TRACKING === 'true') {
    console.log('##TRACK [ EVENT ]:', name, properties);
  }
  analytics.track(name, properties, callback);
};

// Page is not meant for node/server side, so it works
// slightly different
const page = (category, name, properties, callback) => {
  if (process.env.LOG_TRACKING === 'true') {
    console.log('##TRACK [ PAGE ]:', category, name, properties);
  }
  analytics.page(properties);
};

const screen = (name, properties, callback) => {
  if (process.env.LOG_TRACKING === 'true') {
    console.log('##TRACK [ SCREEN ]:', category, name, properties);
  }
  analytics.page(category, name, properties, callback);
};

module.exports = {
  identify,
  group,
  identifyAndGroup,
  track,
  page,
  screen,
};
