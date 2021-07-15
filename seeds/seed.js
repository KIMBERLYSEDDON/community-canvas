const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

// unsure how the photo data will be saved
// the json files still need to be created
const userData = require('./');
const postData = require('./');
const commentData = require('./');

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

    // Unsure if we want to seed dummy comments

    process.exit(0);
};

seedDatabase();