//importing the sequelize constructor
const Sequelize = require('sequelize');
require('dotenv').config();

//creating connection to the database
let sequelize;

if(process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
}
//using local machine, use the local database as well
else{
    sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASSWORD,{
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });
};

module.exports = sequelize;