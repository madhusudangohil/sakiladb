let db = require('../models');

function findByName(name) {
    return db.actor.findAll({
        where: {
            first_name: name,
        }
    });
}

function findActorsByFilmId(id) {
    return db.actor.findAll({
        attributes: ['actor_id', 'first_name', 'last_name'],
        include: [{
            model: db.film,
            as: 'fa',
            through: 'film_actor',
            where: {
                film_id: id
            },
            attributes: ['film_id', 'title']
        }]
    })
}

module.exports = {
    findByName: findByName,
    findActorsByFilmId: findActorsByFilmId,
}