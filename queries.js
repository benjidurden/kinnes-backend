var promise = require('bluebird');
var options = {promiseLib: promise};

var pgp = require('pg-promise')(options)
pgp.pg.defaults.ssl = true;
var connectionString = process.env.DATABASE_URL
// var connectionString = 'postgres://localhost:5432/carts';
var db = pgp(connectionString);

function addUser(req, res, next){
db.none('insert into userInfo(userName)' + 'values($1)', [req.body])
.then (function(data){
    res.json(data)
    return next()
})
.catch (function (err) {
    console.log(err)
    return next(err);
})
}

function storeItem (req, res, next){
db.none('insert into userCart(cartOwnerName, userItems, amountofPrints, amountofShirts, shirtSize)' + 'values(${cartOwnerName}, ${userItems}, ${amountofPrints}, ${amountofShirts}, ${shirtSize})', req.body)
.then(function (){
    res.status(200)
    .json({
        status: 'success',
        message: 'this worked!'
    })
})
.catch(function (err){
    console.log(err)
    return next(err)
})
}


module.exports = {
    storeItem: storeItem,
    addUser: addUser
}