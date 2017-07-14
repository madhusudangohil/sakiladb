let db = require('../../models');

module.exports = function (id) {
    return db.customer.findOne({
        where: {
            customer_id: id
        },
        include: [{
            model: db.rental
        }]
    });
}