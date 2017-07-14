let db = require('../../models');

module.exports = function findStoreByCity(city) {
    return db.store.findOne({
        include: [{
            model: db.address,
            required: true,
            include: [{
                model: db.city,
                where: {
                    city: city
                }
            }]
        }]
    });
}
