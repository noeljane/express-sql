const db = require('.././db/config'),
  Dog = {};

//Find all the dogs

Dog.find = () => {
  return db.query(`SELECT * FROM dogs`)
};

//Find a dog by id
Dog.findById = (dogId) => {
  let { id } = dogId
  return db.one(`SELECT *
    FROM dogs
    WHERE doggie_id =  $1`, id)
};

//
Dog.save = (dogData) => {
  const { doggie_username, owner_name, age, weight } = dogData;

  return db.one(`
    INSERT INTO dogs
    (doggie_username, owner_name, age, weight)
    VALUES ($1, $2, $3, $4)
    RETURNING *`, [doggie_username, owner_name, age, weight])
}

Dog.findByIdAndUpdate = (dogId, dogData) => {
  const { doggie_username, owner_name, age, weight } = dogData,
    { id } = dogId;
  return db.one(`
    UPDATE dogs
    SET doggie_username = $1, owner_name = $2, age = $3, weight = $4
    WHERE doggie_id = $5
    RETURNING *`, [doggie_username, owner_name, age, weight, id])

}

Dog.findByIdAndRemove = (dogId) => {
  let { id } = dogId;
  return db.one(`
    DELETE FROM dogs
    WHERE doggie_id = ${id}
    RETURNING *
  `)

}





module.exports = Dog
