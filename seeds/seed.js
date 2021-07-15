const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

// unsure how the photo data will be saved
// the json files still need to be created
const userData = require('./');
const postData = require('./');

// Unsure if we want to seed dummy comments
// const commentData = require('./');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for (const post of postData) {
        await Post.create({
            ...post,
            user_id: users[Math.floor(Math.random() * users.length)].id,
        });
    }

    // seeded comment code will go here.

    process.exit(0);
};

seedDatabase();