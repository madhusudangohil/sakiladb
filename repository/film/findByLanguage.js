let db = require('../../models');

module.exports = function findByLanguage(id) {
    return db.film.findAll({
        include: [{
            model: db.language,
            where: {
                language_id: id
            }
        }]
    });
}
