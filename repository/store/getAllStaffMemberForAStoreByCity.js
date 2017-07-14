let db = require('../../models');

module.export = function getAllStaffMemberForAStoreByCity(city){
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
    }).then(function(s){
        return db.staff.findAll({
            where:{
                store_id: s.store_id
            }
        })
    });
}