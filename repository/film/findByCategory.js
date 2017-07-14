let db = require('../../models');

module.exports = function findByCategory(id) {
    return db.film.findAll({
        include: [{
            model: db.category,
            as: 'fcat',
            through: 'film_category',
            where: {
                category_id: id
            }
        }]
    });
}
