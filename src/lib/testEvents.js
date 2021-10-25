const { person } = require('./userdata1');

const demoDataTypes = [
  'Retail (57GB)',
  'Chicago Taxi (14GB)',
  'Flights (66GB)',
  'Prescription UK (66GB)',
  'TPC-H (1TB)',
];

const eventGlobals = {
  userId: person.id,
  databaseId: '5a34dcd5-730f-43d3-a60c-e805631e9b0d',
  clusterId: 'a02e2a2d-dec7-4334-94d0-7aa9467291ff',
  signupUrl: 'https://exasol.com/test-it-now/saas',
  signupReferrer: 'https://www.google.com',
  importId: '64dd68ff-c00e-4cbc-8f80-6acdb48509d3',
  executionTime: 22000, // in milliseconds
  executionSize: 66, // in GB
  executionStatus: 'ok', // enum: ok, failed
  fileType: '.csv',
  demoData: demoDataTypes[2],
  connectorName: 'Keboola',
  connectorId: '69baace4-9976-4479-b4a8-5dbffa20c23f',
  automationExecutionTime: 14528000, // in milliseconds
  automationExecutionSize: 132, // in GB
  apiPath: '/api/update-network',
  apiMethod: 'PUT',
};

const list = [
  {
    name: 'Signup Submitted',
    properties: {
      referrer: eventGlobals.signupReferrer,
      url: eventGlobals.signupUrl,
    },
  },
  {
    name: 'Signup Completed',
    properties: {
      referrer: eventGlobals.signupReferrer,
      url: eventGlobals.signupUrl,
    },
  },
  {
    name: 'Email Confirmed',
    properties: {},
  },
  {
    name: 'Database Created',
    properties: {
      databaseId: eventGlobals.databaseId,
    },
  },
  {
    name: 'Database Stopped',
    properties: {
      clusterId: eventGlobals.clusterId,
    },
  },
  {
    name: 'Database Deleted',
    properties: {
      clusterId: eventGlobals.clusterId,
    },
  },
  {
    name: 'Cluster Created',
    properties: {
      clusterId: eventGlobals.clusterId,
    },
  },
  {
    name: 'Cluster Stopped',
    properties: {
      clusterId: eventGlobals.clusterId,
    },
  },
  {
    name: 'Cluster Deleted',
    properties: {
      clusterId: eventGlobals.clusterId,
    },
  },
  {
    name: 'Invite Sent',
    properties: {},
  },
  {
    name: 'Invite Accepted',
    properties: {},
  },
  {
    name: 'Tool Connected',
    properties: {},
  },
  {
    name: 'Data Imported',
    properties: {
      databaseId: eventGlobals.databaseId,
      clusterId: eventGlobals.clusterId,
      executionTime: eventGlobals.executionTime,
      executionSize: eventGlobals.executionSize,
      executionStatus: eventGlobals.executionStatus,
      fileType: eventGlobals.fileType,
      demoData: eventGlobals.demoData,
    },
  },
  {
    name: 'Import Automation Created',
    properties: {
      automationId: eventGlobals.automationId,
      databaseId: eventGlobals.databaseId,
      clusterId: eventGlobals.clusterId,
      connectorName: eventGlobals.connectorName,
      connectorId: eventGlobals.connectorid,
    },
  },
  {
    name: 'Import Automation Deleted',
    properties: {
      automationId: eventGlobals.automationId,
      databaseId: eventGlobals.databaseId,
      clusterId: eventGlobals.clusterId,
      connectorName: eventGlobals.connectorName,
      connectorId: eventGlobals.connectorid,
    },
  },
  {
    name: 'Import Automation Executed',
    properties: {
      automationId: eventGlobals.automationId,
      databaseId: eventGlobals.databaseId,
      clusterId: eventGlobals.clusterId,
      connectorName: eventGlobals.connectorName,
      connectorId: eventGlobals.connectorid,
      executionTime: eventGlobals.automationExecutionTime,
      executionSize: eventGlobals.automationExecutionSize,
      executionStatus: eventGlobals.executionStatus,
    },
  },
  {
    name: 'IP Address Added',
    properties: {},
  },
  {
    name: 'IP Address Deleted',
    properties: {},
  },
  {
    name: 'Personal Access Token Created',
    properties: {},
  },
  {
    name: 'Personal Access Token Revoked',
    properties: {},
  },
  {
    name: 'Query Executed',
    properties: {
      databaseId: eventGlobals.databaseId,
      clusterId: eventGlobals.clusterId,
      executionTime: eventGlobals.executionTime,
      executionSize: eventGlobals.executionSize,
      executionStatus: eventGlobals.executionStatus,
    },
  },
  {
    name: 'Worksheet Created',
    properties: {},
  },
  {
    name: 'Worksheet Updates',
    properties: {},
  },
  {
    name: 'Worksheet Deleted',
    properties: {},
  },
  {
    name: 'Log In',
    properties: {},
  },
  {
    name: 'Log Out',
    properties: {},
  },
  {
    name: 'Network Added',
    properties: {},
  },
  {
    name: 'Network Updated',
    properties: {},
  },
  {
    name: 'Network Deleted',
    properties: {},
  },
  {
    name: 'API Called',
    properties: {
      path: eventGlobals.apiPath,
      method: eventGlobals.apiMethod,
    },
  },
];

const pages = [
  {
    category: undefined,
    name: 'Login',
    properties: {
      title: 'Exasol SaaS | Login',
      url: 'https://cloud.exasol.com/login',
    },
  },
  {
    category: undefined,
    name: 'Databases',
    properties: {
      title: 'Exasol SaaS | Databases',
      url: 'https://cloud.exasol.com/databases',
    },
  },
  {
    category: undefined,
    name: 'Settings',
    properties: {
      title: 'Exasol SaaS | Settings',
      url: 'https://cloud.exasol.com/settings',
    },
  },
];

module.exports = {
  list,
  pages,
};
