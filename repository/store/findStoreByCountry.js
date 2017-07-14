let db = require('../../models');

module.exports = function findStoreByCountry(country) {
    return db.store.findOne({
        include: [{
            model: db.address,
            required: true,
            include: [{
                model: db.city,
                required: true,
                include: [{
                    model: db.country,                    
                    where: {
                        country: country
                    }
                }]
            }]
        }]
    });
}