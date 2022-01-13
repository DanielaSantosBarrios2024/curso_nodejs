const mariadb = require("maradb");

const config ={

    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    connectionLimit: process.env.CONN_LIMIT,
};

const pool = mariadb.createPool(configu);

module.exports = pool;