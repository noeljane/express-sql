const options = {
  query:(e) => {
    console.log(e.query);
  }
}

const pgp = require('pg-promise')(options);
const db = pgp('postgress://localhost:5432/doggo')

module.exports = db
