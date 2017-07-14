let db = require('../../models');

module.exports = function findByActor(firstName, lastName) {
    return db.actor.findOne({
        where: {
            first_name: firstName,
            last_name: lastName
        },
        include: [{
            model: db.film,
            as: 'fa',
            through: 'film_actor'
        }]
    });
}