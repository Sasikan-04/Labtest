
const pool = require('./db');

async function testDatabase() {
    try {
        const [rows] = await pool.query(
            'SELECT COUNT(*) AS total FROM accounts'
        );

        console.log('✅ Connected to MySQL!');
        console.log('✅ Accounts table found!');
        console.log('Total accounts:', rows[0].total);

    } catch (error) {
        console.error('❌ Database error:', error.message);
        process.exitCode = 1;

    } finally {
        await pool.end();
    }
}

testDatabase();
