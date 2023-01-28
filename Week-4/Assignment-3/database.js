const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

//console.log(process.env.MYSQL_HOST);
//console.log(process.env);
const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();
async function getUsers() {
  const result = await pool.query("SELECT * FROM user");
  const rows = result[0];
  return rows;
}

async function getUser(id) {
  const result = await pool.query(
    `
    SELECT *
    FROM user
    WHERE id = ?
    `,
    [id]
  );
  const rows = result[0];
  return rows;
}

async function createUser(title, contents) {
  const [result] = await pool.query(
    `
    INSERT INTO user (email, password)
    VALUES (?, ?)
    `,
    [title, contents]
  );
  const id = result.insertId;
  return getUser(id);
}

module.exports = {
  getUsers,
  getUser,
  createUser,
};

// getUsers().then((result) => {
//   console.log(result);
// });

// getUser(1).then((result) => {
//   console.log(result);
// });

// createUser("test@test.tw", "test").then((result) => {
//   console.log(result);
// });
