let db = require('../models');

function findRentalHistoryByCustomerId(id) {
    return db.customer.findOne({
        where: {
            customer_id: id
        },
        include: [{
            model: db.rental
        }]
    });
}

module.exports = {
    findRentalHistoryByCustomerId: findRentalHistoryByCustomerId,
}