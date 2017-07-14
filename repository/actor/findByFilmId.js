let db = require('../../models');

module.exports = function (id) {
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