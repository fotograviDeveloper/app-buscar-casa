var mysql = require("mysql");

const { database } = require("./keys");
const { promisify } = require("util");
const pool = mysql.createPool(database);


pool.getConnection((err, conection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONECTION_LOST') {
            console.log("DATA BASE CONECTION WAS CLOSET");
        }
        if (err.code === "ER_CON_COUNT_ERROR") {
            console.log('DATABASE HAS TO MANY CONNECTION');
        }
        if (err.code === 'ECONNREFUSED') {
            console.log("DATABASE CONNECTION WAS REFUSED");
        }

    }

    if (conection) conection.release();
    console.log("DB is connected")
});
//promisify pool querys
pool.query = promisify(pool.query);
module.exports = pool;