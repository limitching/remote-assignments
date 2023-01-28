import mysql from "mysql2";
import dotenv from "dotenv";
// var mysql = require("mysql2");
// var dotenv = require("dotenv");
dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: "root", //process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: "assignment", //process.env.MYSQL_DATABASE,
  })
  .promise();

export async function getUsers() {
  const result = await pool.query("SELECT * FROM user");
  const rows = result[0];
  return rows;
}

console.log(getUsers());
