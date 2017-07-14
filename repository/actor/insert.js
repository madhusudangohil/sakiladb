let db = require('../../models');

module.exports = function insert(firstName, lastName){
    return db.actor.create({
        first_name: firstName,
        last_name: lastName
    })
}