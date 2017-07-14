let db = require('../../models');

function findByFirstName (name) {
    return db.actor.findAll({
        where: {
            first_name: name,
        }
    });
}

function findByFullName (firstName, lastName) {
    return db.actor.findOne({
        where: {
            first_name: firstName,
            last_name: lastName
        }
    });
}


module.exports = {
    findByFirstName: findByFirstName,
    findByFullName: findByFullName,
}