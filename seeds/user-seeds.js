const { User } = require("../models");

const userData = [
  {
    username: "jojo",
    password: "dioo",
  },
  {
    username: "Jonathan Joester",
    password: "nani",
  },
  {
    username: "jojojo",
    password: "joe",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
