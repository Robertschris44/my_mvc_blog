const {User} = require('../models');

const usersData = [{
    username: 'Yususke_Urameshi',
    password: 'yuyu',
    email: 'test@gmail.com'
},
{
    username: 'kakashi_hatake',
    password: 'lightningblade',
    email: 'chris@gmail.com'
},];

const seedsUser = () => User.bulkCreate(usersData);


module.exports = seedsUser;