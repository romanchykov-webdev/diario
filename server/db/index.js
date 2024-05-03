// Server: 127.0.0.1
// :3306
// Database: diario
// Table: users
// user:'root'
// password:''
//npm i sequelize
//npm i mysql2
// npm i express
// npm install cors

// const Sequelize = require('sequelize');
//
// const sequelize = new Sequelize('diario','root','',{
//     dialect: 'mysql',
//     host: '127.0.0.1',
//     logging: false,
// })
//
// const User=require('./User')(sequelize);
//
// module.exports={
//     sequelize:sequelize,
//     user:User,
// }

const Sequelize = require('sequelize');
const sequelize = new Sequelize('diario', 'root', '', {
    host: 'localhost',
    dialect: 'mysql' // или другая база данных, которую вы используете
});

// Определение модели User
const User = require('./User')(sequelize);

// Создание таблицы в базе данных
sequelize.sync()
    .then(() => {
        console.log('Таблица пользователей создана успешно');
    })
    .catch(err => {
        console.error('Ошибка при создании таблицы:', err);
    });
