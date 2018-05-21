const options = {
  query:(e) => {
    console.log(e.query);
  }
}

const pgp = require('pg-promise')(options);
const db = pgp(process.env.DATABASE_URL ||'postgress://localhost:5432/doggo');

module.exports = db;
