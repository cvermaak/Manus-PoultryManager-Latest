import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  console.error('DATABASE_URL not found');
  process.exit(1);
}

const connection = await mysql.createConnection(DATABASE_URL);

// Hash the password
const password = 'Admin123!';
const passwordHash = await bcrypt.hash(password, 10);

console.log('Updating passwords for all email/password users...');
console.log('New password: Admin123!');
console.log('');

// Update all users with passwordHash
const [result] = await connection.execute(
  'UPDATE users SET passwordHash = ?, mustChangePassword = ? WHERE passwordHash IS NOT NULL',
  [passwordHash, false]
);

console.log(`Updated ${result.affectedRows} user(s)`);
console.log('');

// Get updated users
const [users] = await connection.execute(
  'SELECT id, username, email, name, role FROM users WHERE passwordHash IS NOT NULL ORDER BY id'
);

console.log('=== UPDATED USER CREDENTIALS ===');
console.log('');
users.forEach(user => {
  console.log(`User ID: ${user.id}`);
  console.log(`Name: ${user.name}`);
  console.log(`Username: ${user.username}`);
  console.log(`Email: ${user.email}`);
  console.log(`Role: ${user.role}`);
  console.log(`Login with: ${user.username} OR ${user.email}`);
  console.log(`Password: Admin123!`);
  console.log('-----------------------------------');
});

await connection.end();
console.log('');
console.log('✓ Password update complete!');
