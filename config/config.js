require('dotenv').config(); // this is important!
module.exports = {
"development": {
    "username": process.env.bd_username,
    "password": process.env.bd_password,
    "database": process.env.bd_database,
    "host": process.env.bd_host,
    "dialect": process.env.bd_dialect
},
"test": {
  "username": process.env.bd_username,
  "password": process.env.bd_password,
  "database": process.env.bd_database,
  "host": process.env.bd_host,
  "dialect": process.env.bd_dialect
},
"production": {
  "username": process.env.bd_username,
  "password": process.env.bd_password,
  "database": process.env.bd_database,
  "host": process.env.bd_host,
  "dialect": process.env.bd_dialect
}
};
