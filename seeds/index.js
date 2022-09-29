const seedsUser = require('./user-seeds');
const seedsPost = require('./post-seeds');
const seedsComment = require('./comments-seeds');


const sequelize = require('../config/connection');





const seedAll = async() => {
    //
    await sequelize.sync({force: true});
    await seedsUser();
    await seedsPost();
    await seedsComment();
    process.exit(0);
};

seedAll();