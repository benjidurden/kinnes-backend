DROP DATABASE IF EXISTS kinnes_carts;
CREATE DATABASE kinnes_carts;

\c kinnes_carts;

CREATE TABLE userCart (
    ID SERIAL PRIMARY KEY,
    cartOwnerName TEXT,
    userItems TEXT,
    amountOfPrints INTEGER,
    amountOfShirts INTEGER,
    shirtSize TEXT
);

INSERT INTO userCart (cartOwnerName, userItems, amountofPrints, amountofShirts, shirtSize)
VALUES('Francis', 'Bat', 2, 2, 'Small');