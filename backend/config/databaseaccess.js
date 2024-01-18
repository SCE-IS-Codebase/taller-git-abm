import mysql from 'mysql2';

// crate the connection to the database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'taller_sce_sis',
    port: 3309
});

export default db;