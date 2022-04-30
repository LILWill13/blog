// imports the connection to the database
const sequelize = require('../config/connection');
// imports the tables for the database
const { User, Post } = require('../models');

// imports the mock user data
const userData = require('./userData.json');
// imports the mock post data
const postData = require('./postData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const post of postData) {
    await Post.create({
      ...post,
      // gives the post random user id because these post have no actual user creating them
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  process.exit(0);
};

seedDatabase();
