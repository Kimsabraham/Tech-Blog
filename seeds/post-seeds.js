const { Post } = require("../models");

const postData = [
  {
    title: "Tech stuff!",
    content:
      "Yea, thats a phone.",
    user_id: 1,
  },
  {
    title: "EVEN MORE TECHNOLOGY!",
    content: "Much wow",
    user_id: 2,
  },
  {
    title: "Not as much technology",
    content: "Some wow",
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
