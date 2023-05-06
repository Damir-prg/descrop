const {Sequelize}       = require('sequelize');


// Создание подключение к Базе данных
module.exports = new Sequelize(
    process.env.DB_NAME, // Наименование БД
    process.env.DB_USER, // Имя пользователя БД
    process.env.DB_PASSWORD, // Пароль
    {
        dialect: "postgres",
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
);