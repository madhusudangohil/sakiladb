let db = require('../../models');

module.exports = function findByTitle(title) {
    return db.film.findAll({
        where: {
            title: {
                $like: '%' + title
            },
        }
    });
}