let db = require('../../models');

module.exports = function findStaffByStoreId(id) {
    return db.store.findOne({
        where:{store_id: id},
        include: [{
            model: db.staff,
            required: true           
        }]
    });
}
