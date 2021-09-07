const { Sequelize } = require("sequelize");
const config = require("config");

const intancia = new Sequelize(
    config.get("mysql.db"),
    config.get("mysql.user"),
    config.get("mysql.pwd"), 
    {
        host:  config.get("mysql.host"),
        dialect: 'mysql'
    }
);

module.exports = intancia;