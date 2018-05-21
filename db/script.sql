CREATE DATABASE doggo;

\c doggo

CREATE TABLE dogs(
  doggie_id serial PRIMARY KEY,
  doggie_username varchar(255) unique NOT NULL,
  owner_name varchar(255) NOT NULL,
  age integer NOT NULL,
  weight integer NOT NULL
);

INSERT INTO dogs(doggie_username, owner_name, age, weight)
VALUES('Beethoven', 'Bonnie', 3, 100),
('Snoopy', 'Charlie', 5, 23);

SELECT * FROM dogs;
