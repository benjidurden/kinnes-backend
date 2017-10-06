var promise = require('bluebird');
var options = {promiseLib: promise};

var pgp = require('pg-promise')(options)

var connectionString = 'postgres://localhost:5432/carts';
var db = pgp(connectionString);


function storeItem (req, res, next){
db.none('insert into userCart(cartOwnerName, userItems, amountofPrints, amountofShirts, shirtSize)' + 'values(${cartOwnerName}, ${userItems}, ${amountofPrints}, ${amountofShirts}, ${shirtSize}')
   .catch( function (err) {
    return next (err);
   });
}


module.exports = {
    storeItem: storeItem,
}