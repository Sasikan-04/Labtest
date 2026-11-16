
require('dotenv').config();

const mysql = require('mysql2/promise');

const pool = mysql.createPool({   // สร้างตัวจัดการกลุ่มการเชื่อมต่อ //เว็บไซต์จริงมีหลาย Request เช่น มีคนสมัครสมาชิกพร้อมกัน 5 คน เราจึงใช้ Connection Pool เพื่อจัดการและนำการเชื่อมต่อมาใช้ซ้ำอย่างมีประสิทธิภาพ
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || 3306),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,

    waitForConnections: true,   //รอคิวเมื่อการเชื่อมต่อเต็ม
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;
