import mysql from 'mysql2';

// crate the connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'taller-sce-sis',
    port: 3308
});

export default db;