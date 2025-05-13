// project/backend/db/connection.js
const mysql = require('mysql2/promise');
require('dotenv').config();

const db = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || 'MySQL@123',
  database: process.env.DB_NAME || 'myapp',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

db.getConnection()
  .then(conn => {
    console.log('MySQL connected.');
    conn.release();
  })
  .catch(err => {
    console.error('MySQL connection failed:', err);
  });


module.exports = db;

