const person = {
  id: '67d316e7-0fd4-48d1-8b82-8b053dba9dd0',
  firstName: 'John',
  lastName: 'Smith',
  email: 'john.smith@exasol.com',
  createdAt: '2021-10-07T13:15:30Z',
  phone: '555-555-5555',
  title: 'BI Analyst',
};

const company = {
  id: 'f11808a1-128b-4968-8a42-4aabbf36927b',
  name: 'Exasol',
  industry: 'Technology',
  employees: 329,
  website: 'https://www.exasol.com',
  phone: '555-555-5555',
  createdAt: '2021-10-07T13:15:30Z',
  plan: 'trial_in_progress', // enum: "trial_in_progress", "trial_out_of_credits",  "trial_expired", "trial_extended", "payg", "custom", "<plan name>",
  'total billed': 100,
};

module.exports = { person, company };
