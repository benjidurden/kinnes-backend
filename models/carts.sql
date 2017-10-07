DROP DATABASE IF EXISTS kinnes_carts;
CREATE DATABASE kinnes_carts;

\c kinnes_carts;

CREATE TABLE userInfo (
    userName TEXT PRIMARY KEY
);

CREATE TABLE userCart (
    ID SERIAL PRIMARY KEY,
    -- The cartOwnerName has a foreign key linked to the userInfo table's userName column - I just forgot to put it in the schema! My fault.
    cartOwnerName TEXT, 
    userItems TEXT,
    amountOfPrints INTEGER,
    amountOfShirts INTEGER,
    shirtSize TEXT
);

ALTER TABLE userCart ADD FOREIGN KEY (cartOwnerName) REFERENCES userInfo (userName);

INSERT INTO userCart (cartOwnerName, userItems, amountofPrints, amountofShirts, shirtSize)
VALUES('Francis', 'Bat', 2, 2, 'Small');


