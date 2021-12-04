db = db.getSiblingDB('justtasks');

db.createCollection('users');

db.users.insertMany([
  {
    name: "Premium User",
    email: "premium@justtasks.app",
    password: "$2a$10$ahR0QErnID4rpFbIYTS3T.ZuusgmeneEtdcfUdMt0TL1XW2nlMae2",
    premium: true,
    premiumSince: "2021-01-01T01:01:01.000+00:00"
  },
  {
    name: "Basic User",
    email: "basic@justtasks.app",
    password: "$2a$10$ahR0QErnID4rpFbIYTS3T.ZuusgmeneEtdcfUdMt0TL1XW2nlMae2",
    premium: false
  }
]);