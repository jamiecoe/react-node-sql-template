const db = require('./database/db_connections');

const checkUser = username =>
  db.query(`
           SELECT
             CASE WHEN EXISTS(SELECT username FROM users WHERE username = $1)
             THEN CAST (true AS BOOLEAN) ELSE CAST (false AS BOOLEAN)
           END
           `, [username]);

const addNewUser = (name, username, password) =>
  db.query(`
    INSERT INTO users(name, username, password)
    VALUES ($1, $2, $3)
    RETURNING id, name, username
  `, [name, username, password]);

module.exports = {
  checkUser,
  addNewUser
}
