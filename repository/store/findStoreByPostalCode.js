let db = require('../../models');

module.exports = function findStoreByPostalCode(code) {
    return db.store.findOne({
        include: [{
            model: db.address,
            where: {
                postal_code: code
            }
        }]
    });
}
